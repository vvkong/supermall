import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Category from '@/views/Category.vue'
import Cart from '@/views/Cart.vue'
import Profile from '@/views/Profile.vue'
import Detail from '@/views/detail/Detail.vue'

Vue.use(Router);

const routes = [
  {
    path: '',
    redirect: '/home',
  },

  {
    path: '/home',
    component: Home,
  },
  {
    path: '/category',
    component: Category,
  },
  {
    path: '/cart',
    component: Cart,
  },
  {
    path: '/profile',
    component: Profile,
  },
  {
    path: '/detail/:id',
    component: Detail,
  }
];
const router = new Router({
  routes
});

export default router;
