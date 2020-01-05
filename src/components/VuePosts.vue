<template>
    <div>
      <ul>
          <li v-for="(item, index) in postsList" :key="index">
              {{index}} {{ item.title }}
              <p>{{ item.body }}</p>
          </li>
      </ul>
    </div>
</template>

<script>
    const axios = require('axios');
    export default {
      data() {
        return {
          postsList: null
        };
      },
      name: 'VuePosts',
      props: {
        msg: String
      },
      methods: {
      },
      mounted: function() {
        axios
          .get('https://jsonplaceholder.typicode.com/posts')
          .then(response => (this.postsList = response.data));
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
a {
  color: #42b983;
}
</style>
