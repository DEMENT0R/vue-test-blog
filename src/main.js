import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter);

import Vuex from 'vuex';
Vue.use(Vuex);

Vue.config.productionTip = false;

// Components
import VueBlog from './components/VueBlog.vue'
import VuePosts from './components/VuePosts.vue'
import Post from './components/Post.vue'
import VueUsers from './components/VueUsers.vue'
import User from './components/User.vue'
import VueComments from './components/VueComments.vue'

// routes
const routes = [
    {path: '/', component: VueBlog},
    {path: '/users', component: VueUsers},
    {path: '/user/:id', component: User},
    {path: '/posts', component: VuePosts},
    {path: '/post/:id', component: Post},
    {path: '/comments', component: VueComments}
];
const router = new VueRouter({
    routes
});

// store
const store = new Vuex.Store({
  state: {}
});

// start app
new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app');
