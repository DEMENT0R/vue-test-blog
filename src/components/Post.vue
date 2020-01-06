<template>
    <div class="posts">
        <router-link class="menu-item" to="/posts">Назад</router-link>
        <div class="post" v-for="(item, index) in $store.state.postsList" :key="index">
            <div v-if="item.id == $route.params.id">
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
                <h2>Комментарии:</h2>
                <ul>
                    <li v-for="(item, index) in getComments(item.id)" :key="index">
                        <h3>{{ item.email }}</h3>
                        <h4>{{ item.name }}</h4>
                        <p>{{ item.body }}</p>
                    </li>
                </ul>
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
        name: 'Post',
        props: {
            msg: String
        },
        methods: {
            getAuthor(id){
                const users = this.$store.state.usersList;
                const result = users.filter(user => user.id == id);
                return result[0].username;
            },
            getComments(id){
                const comments = this.$store.state.commentsList;
                const result = comments.filter(comment => comment.id == id);
                return result;
            }
        },
        mounted: function () {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .post{
        h2, h3, h4{
            color: #42b983;
        }
        a{
            color: #42b983;
            text-transform: uppercase;
            text-decoration: none;
        }
        p{
            color: gray;
        }
    }
</style>
