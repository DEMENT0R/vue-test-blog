<template>
    <div id="app">
        <nav>
            <router-link class="menu-item" to="/">Главная</router-link>
            |
            <router-link class="menu-item" to="/posts">Посты</router-link>
            |
            <router-link class="menu-item" to="/users">Юзеры</router-link>
            |
            <router-link class="menu-item" to="/comments">Комменты</router-link>
        </nav>
        <div class="content">
            <Loader v-if="isLoading.posts && isLoading.users && isLoading.comments"></Loader>
            <router-view v-else></router-view>
        </div>
    </div>
</template>

<script>
    import Loader from './components/Loader.vue';
    const axios = require('axios');
    export default {
        data() {
            return {
                isLoading: {
                    posts: false,
                    users: false,
                    comments: false
                }
            };
        },
        name: 'app',
        components: {
            Loader
        },
        computed: {},
        created() {
            this.isLoading.posts = true;
            this.isLoading.users = true;
            this.isLoading.comments = true;

            axios
                .get('https://jsonplaceholder.typicode.com/posts')
                .then(response => (
                    this.$store.state.postsList = response.data,
                    this.isLoading.posts = false
                ));
            axios
                .get('https://jsonplaceholder.typicode.com/users')
                .then(response => (
                    this.$store.state.usersList = response.data,
                        this.isLoading.users = false
                ));
            axios
                .get('https://jsonplaceholder.typicode.com/comments')
                .then(response => (
                    this.$store.state.commentsList = response.data,
                        this.isLoading.comments = false
                ));
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }
    nav {
        text-align: center;
        padding-bottom: 10px;
        border-bottom: 1px solid #41b883;
    }
    .menu-item{
        color: #35495e;
        font-weight: bolder;
    }
    .content {
        text-align: left;
        max-width: 700px;
        margin: 10px auto;
    }
</style>
