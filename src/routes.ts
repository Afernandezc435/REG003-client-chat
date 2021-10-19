import Home from './views/Home.vue'
import SignUp from './views/SignUp.vue'
import Messages from './views/Messages.vue'
import NotFound from './views/NotFound.vue'

export const routes = [
  { path: '/', component: Home, meta: { title: 'Home' }},
  { path: '/signup', component: SignUp, meta: { title: 'SingUp' }},
  { path: '/messages', component: Messages, meta: { title: 'Messages' }},
  { path: '/:pathMatch(.*)*', component: NotFound, meta: { title: 'Page not found' }},
]
