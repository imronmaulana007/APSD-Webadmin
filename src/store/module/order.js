import { Get, Post, GetParam, Update, Hapus } from "./utils";

export default {
  actions: {
    TRANSACTION: () => {
      return new Promise((resolve, reject) => {
        function callback(res) {
			    if (res.status === 200) {
				    resolve(res.data);
			    }
		    }
		    Get("transaction", reject, callback);
      });
    },

    EDIT_TRANSACTION: (_, payload) => {
      return new Promise((resolve, reject) => {
        function callback(res) {
        if (res.status === 200) {
          resolve(res.data);
        }
      }
		  GetParam("transaction", payload, reject, callback);
      });
    },

    INSERT_TRANSACTION: (_, payload) => {
      return new Promise((resolve, reject) => {
        function callback(res) {
          if (res.status === 200) {
            resolve(res.data.Data);
          }
        }
        Post("transaction", payload, reject, callback);
      });
    },

    UPDATE_TRANSACTION: (_, payload) => {
      return new Promise((resolve, reject) => {
        function callback(res) {
          if (res.status === 200) {
            resolve(res.data.Data);
          }
        }
        Update("transaction", payload.id, payload, reject, callback);
      });
    },

    DELETE_TRANSACTION: (_, payload) => {
      return new Promise((resolve, reject) => {
        function callback(res) {
            if (res.status === 200) {
                resolve(res.data.Data);
            }
        }
        Hapus("transaction", payload, reject, callback);
      });
    },
  }
};
