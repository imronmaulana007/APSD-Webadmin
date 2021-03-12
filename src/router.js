/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
  Object Strucutre:
                    path => router path
                    name => router name
                    component(lazy loading) => component to load
                    meta : {
                      rule => which user can have access (ACL)
                      breadcrumb => Add breadcrumb to specific page
                      pageTitle => Display title besides breadcrumb
                    }
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import Router from 'vue-router'
import axios from "axios";
import {
  isLoggedIn
} from "././store/module/utils";

Vue.use(Router)

axios.defaults.baseURL = "http://127.0.0.1:8000/api/";
axios.defaults.withCredentials = true;

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior () {
        return { x: 0, y: 0 }
    },
    routes: [

        {
    // =============================================================================
    // MAIN LAYOUT ROUTES
    // =============================================================================
            path: '',
            component: () => import('./layouts/main/Main.vue'),
            children: [
        // =============================================================================
        // Theme Routes
        // =============================================================================
              {
                path: '/',
                name: 'home',
                component: () => import('./views/Home.vue')
              },
              {
                path: '/category',
                name: 'category',
                component: () => import('./views/category/Category.vue')
              },
              {
                path: '/admin',
                name: 'admin',
                component: () => import('./views/admin/Admin.vue')
              },
              {
                path: '/customers',
                name: 'customers',
                component: () => import('./views/customer/Customers.vue')
              },
              {
                path: '/products',
                name: 'products',
                component: () => import('./views/product/Products.vue')
              },
              {
                path: '/roles',
                name: 'roles',
                component: () => import('./views/role/Role.vue')
              },
              {
                path: '/transactions',
                name: 'transactions',
                component: () => import('./views/transaction/Transactions.vue')
              },
              {
                path: '/transaction-details',
                name: 'transaction-details',
                component: () => import('./views/transactiondetail/TransactionsDetails.vue')
              },
            ],
        },
    // =============================================================================
    // FULL PAGE LAYOUTS
    // =============================================================================
        {
            path: '',
            component: () => import('@/layouts/full-page/FullPage.vue'),
            children: [
        // =============================================================================
        // PAGES
        // =============================================================================
              {
                path: '/login',
                name: 'page-login',
                component: () => import('@/views/pages/Login.vue')
              },
              {
                path: '/pages/error-404',
                name: 'page-error-404',
                component: () => import('@/views/pages/Error404.vue')
              },
            ]
        },
        // Redirect to 404 page, if no match found
        {
            path: '*',
            redirect: '/pages/error-404'
        }
    ],
})


router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem("role") != null) {
        next();
      } else {
        next({
        path: "/pages/error-404",
        params: {
          nexturl: to.fullpath
        }
      });
    }
  }else {
    next();
  }
    
  // if (to.matched.some(record => record.meta.requiresAuth)) {
  //   //cek role ada ga di meta
  //   if (to.meta.role.includes(localStorage.getItem("role"))) {
  //     next();
  //   } else {
  //     next({
  //       path: "/pages/error-404",
  //       params: {
  //         nexturl: to.fullpath
  //       }
  //     });
  //   }

  //   // console.log(isLoggedIn == true ? true  :false);
    

  //   if (!isLoggedIn()) {
  //     next({
  //       path: "/login",
  //       params: {
  //         nextUrl: to.fullPath
  //       }
  //     });
  //   } 
  // } 
  // else if (to.matched.some(record => record.meta.guest)) {
  //   if (localStorage.getItem("jwt") == null) {
  //     next();
  //   } else {
  //     next({
  //       name: "userboard"
  //     });
  //   }
  // } 
  // else {
  //   next();
  // }
});

router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
    if (appLoading) {
        appLoading.style.display = "none";
    }
})

// router.afterEach(() => {
//   // Remove initial loading
//   const appLoading = document.getElementById('loading-bg')
//     if (appLoading) {
//         appLoading.style.display = "none";
//     }
// })

export default router
