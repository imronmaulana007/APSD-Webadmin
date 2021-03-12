import { Get, Post, GetParam, Update, Hapus } from "./utils";

export default {
  actions: {
    ROLE: () => {
      return new Promise((resolve, reject) => {
        function callback(res) {
			    if (res.status === 200) {
				    resolve(res.data);
			    }
		    }
		    Get("role", reject, callback);
      });
    },

    EDIT_ROLE: (_, payload) => {
      return new Promise((resolve, reject) => {
        function callback(res) {
        if (res.status === 200) {
          resolve(res.data);
        }
      }
		  GetParam("role", payload, reject, callback);
      });
    },

    INSERT_ROLE: (_, payload) => {
      return new Promise((resolve, reject) => {
        function callback(res) {
          if (res.status === 200) {
            resolve(res.data.Data);
          }
        }
        Post("role", payload, reject, callback);
      });
    },

    UPDATE_ROLE: (_, payload) => {
      return new Promise((resolve, reject) => {
        function callback(res) {
          if (res.status === 200) {
            resolve(res.data.Data);
          }
        }
        Update("role", payload.id, payload, reject, callback);
      });
    },

    DELETE_ROLE: (_, payload) => {
      return new Promise((resolve, reject) => {
        function callback(res) {
            if (res.status === 200) {
                resolve(res.data.Data);
            }
        }
        Hapus("role", payload, reject, callback);
      });
    },
  }
};
