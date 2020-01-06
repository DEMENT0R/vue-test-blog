<template>
    <div class="posts">
        <Loader v-if="isLoading"></Loader>
        <div class="post" v-for="(item, index) in postsList" :key="index">
            <h3>{{index}} {{ item.title }}</h3>
            <p>{{ item.body }}</p>
        </div>
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
        methods: {},
        mounted: function () {
            axios
                .get('https://jsonplaceholder.typicode.com/posts')
                .then(response => (this.postsList = response.data));
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
