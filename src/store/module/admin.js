import { Get, Post, GetParam, Update, Hapus } from "./utils";

export default {
  actions: {
    ADMIN: () => {
      return new Promise((resolve, reject) => {
        function callback(res) {
			    if (res.status === 200) {
				    resolve(res.data);
			    }
		    }
		    Get("admin", reject, callback);
      });
    },

    EDIT_ADMIN: (_, payload) => {
      return new Promise((resolve, reject) => {
        function callback(res) {
        if (res.status === 200) {
          resolve(res.data);
        }
      }
		  GetParam("admin", payload, reject, callback);
      });
    },

    INSERT_ADMIN: (_, payload) => {
      return new Promise((resolve, reject) => {
        function callback(res) {
          if (res.status === 200) {
            resolve(res.data.Data);
          }
        }
        Post("admin", payload, reject, callback);
      });
    },

    UPDATE_ADMIN: (_, payload) => {
      return new Promise((resolve, reject) => {
        function callback(res) {
          if (res.status === 200) {
            resolve(res.data.Data);
          }
        }
        Update("admin", payload.id, payload, reject, callback);
      });
    },

    DELETE_ADMIN: (_, payload) => {
      return new Promise((resolve, reject) => {
        function callback(res) {
            if (res.status === 200) {
                resolve(res.data.Data);
            }
        }
        Hapus("admin", payload, reject, callback);
      });
    },
  }
};
