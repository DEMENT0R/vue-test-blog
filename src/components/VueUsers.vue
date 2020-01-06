<template>
    <div>
        <ul>
            <li v-for="(item, index) in usersList" :key="index">
                {{index}} {{ item.username }} <a :href="`mailto:${item.email}`">{{ item.email }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
    const axios = require('axios');
    export default {
        data() {
            return {
                usersList: null
            };
        },
        name: 'VueUsers',
        props: {
            msg: String
        },
        methods: {},
        mounted: function () {
            axios
                .get('https://jsonplaceholder.typicode.com/users')
                .then(response => (this.usersList = response.data));
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
