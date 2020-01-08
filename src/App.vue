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
        },
        methods:{
            getAllData(){
                this.$store.dispatch('getAllData');
            }
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
