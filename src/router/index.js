import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    components: {
        content: () => import('../components/HomeComponent.vue'),
        header: () => import('../components/HeaderComponent.vue'),
        footer: () => import('../components/FooterComponent.vue')
    },
  },

  {
    path: '/product-detail',
    name: 'product_detail',
    components: {
        content: () => import('../components/ProductDetail.vue'),
        header: () => import('../components/HeaderComponent.vue'),
        footer: () => import('../components/FooterComponent.vue')
    },
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router