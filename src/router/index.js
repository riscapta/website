import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Contact from '../components/Contact.vue'
import PrivacyPolicy from '../components/PrivacyPolicy.vue'
import TermsAndConditions from '../components/TermsAndConditions.vue'
const router = createRouter({
  history: createWebHashHistory(),
  mode: 'hash',
  routes: [
    { path: '/', component: Home, hash: '' },
    { path: '/contact', component: Contact, hash: 'contact' },
    { path: '/privacy_policy', component: PrivacyPolicy, hash: 'privacy_policy' },
    { path: '/terms_and_conditions', component: TermsAndConditions, hash: 'terms_and_conditions' },
    // { path: '/:pathMatch(.*)*', component: PageNotFound },
  ],
})

export default router
