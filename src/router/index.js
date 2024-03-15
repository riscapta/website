import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Contact from '../components/Contact.vue'

const router = createRouter({
  history: createWebHashHistory(),
  mode: 'hash',
  routes: [
    { path: '/', component: Home, hash: '' },
    { path: '/contact', component: Contact, hash: 'contact' },
    // { path: '/:pathMatch(.*)*', component: PageNotFound },
  ],
})

export default router
