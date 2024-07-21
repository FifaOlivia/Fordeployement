import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShowPosts from '../views/ShowPosts.vue'
import UpdatePosts from '../views/UpdatePosts.vue'
/* import app from '../views/App.vue' */
/* import App from '@/App.vue' */
import AddPosts from '../views/AddPosts.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/note/:id',
      name: 'showmore',
      component: ShowPosts
    },
    {
      path: '/PUT/notes/:id',
      name: 'updateposts',
      component: UpdatePosts
    },
    {
      path: '/POST/notes',
      name: 'addposts',
      component: AddPosts
    }
    /* {
      path: '/',
      name: 'app',
      component: AppView
    } */
    /*   {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    } */
  ]
})

export default router
