import { Get, Post, GetParam, Update, Hapus } from "./utils";

export default {
  actions: {
    CUSTOMER: () => {
      return new Promise((resolve, reject) => {
        function callback(res) {
			    if (res.status === 200) {
				    resolve(res.data);
			    }
		    }
		    Get("customer", reject, callback);
      });
    },

    EDIT_CUSTOMER: (_, payload) => {
      return new Promise((resolve, reject) => {
        function callback(res) {
        if (res.status === 200) {
          resolve(res.data);
        }
      }
		  GetParam("customer", payload, reject, callback);
      });
    },

    INSERT_CUSTOMER: (_, payload) => {
      return new Promise((resolve, reject) => {
        function callback(res) {
          if (res.status === 200) {
            resolve(res.data.Data);
          }
        }
        Post("customer", payload, reject, callback);
      });
    },

    UPDATE_CUSTOMER: (_, payload) => {
      return new Promise((resolve, reject) => {
        function callback(res) {
          if (res.status === 200) {
            resolve(res.data.Data);
          }
        }
        Update("customer", payload.id, payload, reject, callback);
      });
    },

    DELETE_CUSTOMER: (_, payload) => {
      return new Promise((resolve, reject) => {
        function callback(res) {
            if (res.status === 200) {
                resolve(res.data.Data);
            }
        }
        Hapus("customer", payload, reject, callback);
      });
    },
  }
};
