<template>
    <div class="posts" v-if="$store.state.postsList.length > 0">
        <div class="post" v-for="(item, index) in $store.state.postsList" :key="index">
            <h2>
                <router-link class="menu-item" :to="'/post/' + item.id">
                    {{ item.title }}
                </router-link>
            </h2>
            <p>{{ item.body }}</p>
            <p>
                Автор:
                <router-link :to="'/user/' + item.userId">
                    {{ getAuthor(item.userId) }}
                </router-link>
            </p>
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
        methods: {
            getAuthor(id){
                if (typeof this.$store.state.usersList == "object"){
                    const users = this.$store.state.usersList;
                    const result = users.filter(user => user.id == id);
                    return result[0].username;
                }
            }
        },
        mounted: function () {
            this.$store.dispatch('getAllData');
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .post{
        border-bottom: 1px solid #41b883;
        h2 a{
            text-transform: uppercase;
            text-decoration: none;
        }
        a{
            color: #42b983;
        }
        p{
            color: gray;
        }
    }
</style>
