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
import VueUsers from './components/VueUsers.vue'
import VueComments from './components/VueComments.vue'

const routes = [
    {path: '/', component: VueBlog},
    {path: '/users', component: VueUsers},
    {path: '/posts', component: VuePosts},
    {path: '/comments', component: VueComments}
];
const router = new VueRouter({
    routes
});

new Vue({
    render: h => h(App),
    router
}).$mount('#app');
