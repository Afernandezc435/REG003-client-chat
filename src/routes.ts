import Home from './views/Home.vue'
import SignUp from './views/SignUp.vue'
import Dashboard from './views/Dashboard.vue'
import NotFound from './views/NotFound.vue'

export const routes = [
  { path: '/', component: Home, meta: { title: 'Home' }},
  { path: '/signup', component: SignUp, meta: { title: 'SingUp' }},
  { path: '/dashboard', component: Dashboard, meta: { title: 'Dashboard' }},
  { path: '/:pathMatch(.*)*', component: NotFound, meta: { title: 'Page not found' }},
]
