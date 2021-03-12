/*=========================================================================================
  File Name: store.js
  Description: Vuex store
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import Vuex from 'vuex'

import state from "./state"
import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"
import user from "./module/user"
import category from "./module/category"
import role from "./module/role"
import admin from "./module/admin"
import customer from "./module/customer"
import product from "./module/product"
import order from "./module/order"

Vue.use(Vuex)


export default new Vuex.Store({
    getters,
    mutations,
    state,
    actions,
    modules: {
      user: user,
      category: category,
      role: role,
      admin: admin,
      customer: customer,
      product: product,
      order: order
    },
    strict: process.env.NODE_ENV !== 'production'
})
