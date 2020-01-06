<template>
    <div>
        <ul>
            <li v-for="(item, index) in comentsList" :key="index">
                {{index}} {{ item.name }}
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
                comentsList: null
            };
        },
        name: 'VueComments',
        props: {
            msg: String
        },
        methods: {},
        mounted: function () {
            axios
                .get('https://jsonplaceholder.typicode.com/comments')
                .then(response => (this.comentsList = response.data));
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
