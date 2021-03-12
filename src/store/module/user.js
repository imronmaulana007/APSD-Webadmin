import axios from "axios";
import { Update} from "./utils";

export default {
  state: {},
  getters: {},
  mutations: {},
  actions: {
    LOGIN: ({}, payload) => {
      return new Promise((resolve, reject) => {
        axios
          .post("login", payload, { withCredentials: true })
          .then(({ data, status }) => {
            if (status === 200) {
              if (data.Msg == null) {
                const token = data.token;
                // const username = data.Data.UserName;
                // const role = data.Data.UserGroup;
                // const asset = data.Data.Asset;
                // const longname = data.Data.LongName;

                localStorage.setItem("access_token", token);
                // localStorage.setItem("username", username);
                // localStorage.setItem("role", role);
                // localStorage.setItem("asset", asset);
                // localStorage.setItem("longname", longname);
                resolve(true);
              } else {
                reject(data.Msg);
              }
            }

            if (status === 401) {
              localStorage.removeItem("access_token");
              localStorage.removeItem("username");
              localStorage.removeItem("role");
              localStorage.removeItem("asset");
              localStorage.removeItem("longname");
              resolve(true);
            }
          })
          .catch(error => {
            reject(error);
          });
      });
    },

    INFOUSER: ({}, payload) => {
        return new Promise((resolve, reject) => {
          axios
            .get("user", payload, { withCredentials: true })
            .then(({ data, status }) => {
              if (status === 200) {
                if (data.Msg == null) {
                  const id = data.user.id;
                  const name = data.user.name;
                  const role = data.user.role;
                  const email = data.user.email;
                  // const longname = data.Data.LongName;
                  
                  localStorage.setItem("id", id);
                  localStorage.setItem("name", name);
                  localStorage.setItem("role", role);
                  localStorage.setItem("email", email);
                  // localStorage.setItem("longname", longname);
                  resolve(true);
                } else {
                  reject(data.Msg);
                }
              }
  
              if (status === 401) {
                localStorage.removeItem("id");
                localStorage.removeItem("name");
                localStorage.removeItem("role");
                localStorage.removeItem("email");

                resolve(true);
              }
            })
            .catch(error => {
              reject(error);
            });
        });
      },

    LOGOUT: () => {
      return new Promise(resolve => {
        localStorage.removeItem("id");
        localStorage.removeItem("name");
        localStorage.removeItem("role");
        localStorage.removeItem("email");
        localStorage.removeItem("access_token");
        resolve();
      });
    },

    REFRESH_TOKEN: () => {
      return new Promise((resolve, reject) => {
        axios
          .post(`token/refresh`)
          .then(response => {
            resolve(response);
          })
          .catch(error => {
            reject(error);
          });
      });
    },

    UPDATE_USER: (_, payload) => {
      return new Promise((resolve, reject) => {
        function callback(res) {
          if (res.status === 200) {
            resolve(res.data.Data);
          }
        }
        Update("user", payload.id, payload, reject, callback);
      });
    },
  }
};
