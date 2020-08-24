import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import Categories from '../views/Categories'
import Catalog from '../views/Catalog'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/catalogo/:id',
    name: 'VerCatalogo',
    component: Catalog,
    meta: {
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(route => route.meta.requiresAuth)) {
    if (localStorage.getItem('user') !== null) {
      next();
    } else {
      next({ path: '/' });
    }
  }
  next();

});

export default router
