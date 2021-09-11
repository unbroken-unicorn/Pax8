import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import VueSimpleAlert from "vue-simple-alert";

Vue.use(Router);
Vue.use(VueSimpleAlert);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/companylist',
      name: 'CompanyList',
      component: () => import('./views/Company/CompanyList.vue')
    },
    // {
    //   path: '/companyedit',
    //   name: 'CompanyEdit',
    //   component: () => import('./views/Company/CompanyEdit.vue')
    // },
    {
      path: '/companyview',
      name: 'CompanyView',
      component: () => import('./views/Company/CompanyView.vue')
    },
  ],
});
