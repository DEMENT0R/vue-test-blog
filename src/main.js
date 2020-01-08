import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Vuex from 'vuex'

Vue.use(Vuex);

const axios = require('axios');

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
    state: {
        postsList: {},
        usersList: {},
        commentsList: {}
    },
    mutations: {
        getAllData(state) {
            axios
                .get('https://jsonplaceholder.typicode.com/posts')
                .then(response => (
                    state.postsList = response.data
                ));
            axios
                .get('https://jsonplaceholder.typicode.com/users')
                .then(response => (
                    state.usersList = response.data
                ));
            axios
                .get('https://jsonplaceholder.typicode.com/comments')
                .then(response => (
                    state.commentsList = response.data
                ));
        }
    },
    actions: {
        getAllData(context) {
            context.commit('getAllData');
        }
    }
});

// start app
new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app');
