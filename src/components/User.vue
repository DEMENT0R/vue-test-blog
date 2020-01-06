<template>
    <div class="posts">
        <router-link class="menu-item" to="/posts">Назад</router-link>
        <div class="post" v-for="(item, index) in $store.state.usersList" :key="index">
            <div v-if="item.id == $route.params.id">
                <h2>{{ item.username }}</h2>
                <p>Name: {{ item.name }}</p>
                <p>Email: <a :href="`mailto:${item.email}`">{{ item.email }}</a></p>
                <p>City: {{ item.address.city }}</p>
            </div>
        </div>
    </div>
</template>

<script>
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
        mounted: function () {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .post{
        h2{
            color: #42b983;
            text-transform: uppercase;
            text-decoration: none;
        }
        p{
            color: gray;
        }
    }
</style>
