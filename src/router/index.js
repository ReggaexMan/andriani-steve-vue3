import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MonstersView from '../views/MonstersView.vue'
import Lien1View from '../views/Lien1View.vue'
import Lien2View from '../views/Lien2View.vue'
import Lien3View from '../views/Lien3View.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/monsters',
      name: 'monsters',
      component: MonstersView
    },
    {
      path: '/lien1',
      name: 'lien1',
      component: Lien1View
    },
    {
      path: '/lien2',
      name: 'lien2',
      component: Lien2View
    },
    {
      path: '/lien3',
      name: 'lien3',
      component: Lien3View
    }
  ]
})

export default router
