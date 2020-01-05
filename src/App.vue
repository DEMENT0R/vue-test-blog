<template>
  <div id="app">
    <nav>
      <router-link to="/">Главная</router-link>
       |
      <router-link to="/posts">Посты</router-link>
       |
      <router-link to="/users">Юзеры</router-link>
       |
      <router-link to="/comments">Комменты</router-link>
    </nav>
    <Loader v-if="isLoading"></Loader>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Loader from './components/Loader.vue'
  export default {
      data() {
        return {
          isLoading: false
        };
      },
    name: 'app',
    components: {
        Loader
    },
    computed: {
    },
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
