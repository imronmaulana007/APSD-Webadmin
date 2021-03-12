/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  Strucutre:
          url     => router path
          name    => name to display in sidebar
          slug    => router path name
          icon    => Feather Icon component/icon name
          tag     => text to display on badge
          tagColor  => class to apply on badge element
          i18n    => Internationalization
          submenu   => submenu of current item (current item will become dropdown )
                NOTE: Submenu don't have any icon(you can add icon if u want to display)
          isDisabled  => disable sidebar item/group
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default [
  {
    url: "/",
    name: "Home",
    slug: "home",
    icon: "HomeIcon",
  },
  {
    url: "/products",
    name: "Products",
    slug: "products",
    icon: "FileIcon",
  },
  {
    url: "/category",
    name: "Category",
    slug: "category",
    icon: "FileIcon",
  },
  {
    url: "/transactions",
    name: "Orders",
    slug: "transactions",
    icon: "FileIcon",
  },
  {
    url: "/admin",
    name: "Admin",
    slug: "admin",
    icon: "FileIcon",
  },
  {
    url: "/customers",
    name: "Customers",
    slug: "customers",
    icon: "FileIcon",
  },
  
  {
    url: "/roles",
    name: "Roles",
    slug: "roles",
    icon: "FileIcon",
  },
  
]
