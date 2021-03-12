import { Get, Post, GetParam, Update, Hapus } from "./utils";

export default {
  actions: {
    PRODUCT: () => {
      return new Promise((resolve, reject) => {
        function callback(res) {
			    if (res.status === 200) {
				    resolve(res.data);
			    }
		    }
		    Get("product", reject, callback);
      });
    },

    EDIT_PRODUCT: (_, payload) => {
      return new Promise((resolve, reject) => {
        function callback(res) {
        if (res.status === 200) {
          resolve(res.data);
        }
      }
		  GetParam("product", payload, reject, callback);
      });
    },

    INSERT_PRODUCT: (_, payload) => {
      return new Promise((resolve, reject) => {
        function callback(res) {
          if (res.status === 200) {
            resolve(res.data.Data);
          }
        }
        Post("product", payload, reject, callback);
      });
    },

    UPDATE_PRODUCT: (_, payload) => {
      return new Promise((resolve, reject) => {
        function callback(res) {
          if (res.status === 200) {
            resolve(res.data.Data);
          }
        }
        Update("product", payload.id, payload, reject, callback);
      });
    },

    DELETE_PRODUCT: (_, payload) => {
      return new Promise((resolve, reject) => {
        function callback(res) {
            if (res.status === 200) {
                resolve(res.data.Data);
            }
        }
        Hapus("product", payload, reject, callback);
      });
    },
  }
};
