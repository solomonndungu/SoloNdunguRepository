import Vue from 'vue';
import Router from 'vue-router';

// Login & Registeration
import Login from '@/pages/auth/Login';
import Signup from '@/pages/auth/Signup';
import ForgotPassword from '@/pages/auth/ForgotPassword';

// Error Routes
import PageNotFoundError from '@/pages/errors/404';
import InternalServerError from '@/pages/errors/500';

// Home Routes
import RegisterRoutes from './register';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/404',
    }, {
      path: '/',
      redirect: '/login',
    }, {
      path: '/login',
      name: 'Login',
      component: Login,
    }, {
      path: '/signup',
      name: 'signup',
      component: Signup,
    }, {
      path: '/forgot',
      name: 'ForgotPassword',
      component: ForgotPassword,
    }, {
      path: '/404',
      name: 'PageNotFoundError',
      component: PageNotFoundError,
    }, {
      path: '/500',
      name: 'InternalServerError',
      component: InternalServerError,
    },
    RegisterRoutes,
  ],
});
