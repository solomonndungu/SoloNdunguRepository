import Vue from 'vue';
import Router from 'vue-router';

// Login & Registeration
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import ForgotPassword from '../pages/auth/ForgotPassword';

// Error Routes
import PageNotFoundError from '../pages/errors/404';
import InternalServerError from '../pages/errors/500';

// Home Routes
import Home from '../pages/Home';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
    }, {
      path: '/register',
      name: 'Register',
      component: Register,
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
    }, {
      path: '/home',
      name: 'Home',
      component: Home,
    },
  ],
});
