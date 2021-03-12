import decode from "jwt-decode";
import axios from "axios";
// import themeConfig from "@/../themeConfig.js";
import Vue from "vue";
// import Notifications from "vue-notification";
// Vue.use(Notifications);
import Vuesax from "vuesax";
import "vuesax/dist/vuesax.css"; // Vuesax
Vue.use(Vuesax);

const AUTH_TOKEN_KEY = "access_token";
export function logoutUser() {
  clearAuthToken();
}

export function getAuthToken() {
  return localStorage.getItem(AUTH_TOKEN_KEY);
}

export function clearAuthToken() {
  axios.defaults.headers.common["Authorization"] = "";
  localStorage.removeItem(AUTH_TOKEN_KEY);
}

export function isLoggedIn() {
  let authToken = getAuthToken();
  console.log(authToken);
  return !!authToken && !isTokenExpired(authToken);
}

export function getUserInfo() {
  if (isLoggedIn()) {
    return decode(getAuthToken());
  }
}

function getTokenExpirationDate(encodedToken) {
  let token = decode(encodedToken);
  if (!token.exp) {
    return null;
  }

  let date = new Date(0);
  date.setUTCSeconds(token.exp);

  return date;
}

function isTokenExpired(token) {
  let expirationDate = getTokenExpirationDate(token);
  return expirationDate < new Date();
}

export function HeaderAuth() {
  return {
      headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('access_token')
      }
  }
}

function forceLogout() {
localStorage.clear();
window.location.href = "/";
}

function Catch(error, reject) {
if (typeof error.response === "undefined") {
  reject("Network Error, Connection Not Found");
}
else {
  if (error.response.status === 422 || error.response.status === 500) {
    reject(error.response.data.message);
  }
  else if (error.response.status === 401) {
    forceLogout();
  }
}
}

export function Get(url, reject, callback) {
let config = HeaderAuth();
return axios
  .get(url, config)
  .then(res => {
    callback(res);
  })
  .catch(error => {
    Catch(error, reject);
  });
}

export function Post(url, payload, reject, callback) {
return axios
  .post(url, payload, HeaderAuth())
  .then(res => {
    callback(res);
  })
  .catch(error => {
    Catch(error, reject);
  });
}

export function Update(url, id, payload, reject, callback) {
  return axios
    .patch(url + "/" + id, payload, HeaderAuth())
    .then(res => {
      callback(res);
    })
    .catch(error => {
      Catch(error, reject);
    });
  }

export function GetParam(url, reject, callback) {
  return axios
    // .get(url + "/" + payload, HeaderAuth())
    .get(url, HeaderAuth())
    .then(res => {
      callback(res);
    })
    .catch(error => {
      Catch(error, reject);
    });
  }

export function Hapus(url, payload, reject, callback) {
  return axios
    .delete(url + "/" + payload, HeaderAuth())
    .then(res => {
      callback(res);
    })
    .catch(error => {
      Catch(error, reject);
    });
  }

