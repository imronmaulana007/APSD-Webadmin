import { Get, Post, GetParam, Update, Hapus } from "./utils";

export default {
  actions: {
    CATEGORY: () => {
      return new Promise((resolve, reject) => {
        function callback(res) {
			    if (res.status === 200) {
				    resolve(res.data);
			    }
		    }
		    Get("category", reject, callback);
      });
    },

    EDIT_CATEGORY: (_, payload) => {
      return new Promise((resolve, reject) => {
        function callback(res) {
        if (res.status === 200) {
          resolve(res.data);
        }
      }
		  GetParam("category", payload, reject, callback);
      });
    },

    INSERT_CATEGORY: (_, payload) => {
      return new Promise((resolve, reject) => {
        function callback(res) {
          if (res.status === 200) {
            resolve(res.data.Data);
          }
        }
        Post("category", payload, reject, callback);
      });
    },

    UPDATE_CATEGORY: (_, payload) => {
      return new Promise((resolve, reject) => {
        function callback(res) {
          if (res.status === 200) {
            resolve(res.data.Data);
          }
        }
        Update("category", payload.id, payload, reject, callback);
      });
    },

    DELETE_CATEGORY: (_, payload) => {
      return new Promise((resolve, reject) => {
        function callback(res) {
            if (res.status === 200) {
                resolve(res.data.Data);
            }
        }
        Hapus("category", payload, reject, callback);
      });
    },
  }
};
