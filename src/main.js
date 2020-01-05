import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

Vue.config.productionTip = false

import VueBlog from './components/VueBlog.vue'
import VuePosts from './components/VuePosts.vue'
import VueUsers from './components/VueUsers.vue'
import VueComments from './components/VueComments.vue'

// 1.
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

// 2.
const routes = [
  { path: '/', component: VueBlog },
  { path: '/users', component: VueUsers },
  { path: '/posts', component: VuePosts },
  { path: '/comments', component: VueComments },
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar },
  { path: '/test', component: VueBlog }
]
// 3.
const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
