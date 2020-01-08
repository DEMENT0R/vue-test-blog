<template>
    <div>
        <ul>
            <li v-for="(item, index) in $store.state.usersList" :key="index">
                <h4>{{item.username}}</h4>
                <p>
                    {{ item.name }} <a :href="`mailto:${item.email}`">{{ item.email }}</a>
                </p>
            </li>
        </ul>
    </div>
</template>

<script>
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
            this.$store.dispatch('getAllData');
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
    li{
        padding: 10px;
        border-bottom: 1px solid #42b983;
    }
</style>
