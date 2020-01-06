<template>
    <div class="hello">
        <h1>Тестовый Vue-блог!</h1>
        <img src="https://ru.vuejs.org/images/logo.png" alt="">
        <p>
            Получение данных с <a href="https://jsonplaceholder.typicode.com" target="_blank">jsonplaceholder.typicode.com</a>.
        </p>
        <ul>
            <li>Посты - <a href="https://jsonplaceholder.typicode.com/posts" target="_blank">/posts</a></li>
            <li>Юзеры - <a href="https://jsonplaceholder.typicode.com/users" target="_blank">/users</a></li>
            <li>Комменты - <a href="https://jsonplaceholder.typicode.com/comments" target="_blank">/comments</a></li>
        </ul>
        <p>
            Данные юзера и комментов должны соответствовать посту. <br>
            Аватарки с любого тесто-аватарного api. <br>
            Жмем на карточку поста - переходим на урл страницы поста, жмем назад переходим назад.
        </p>
    </div>
</template>

<script>
    export default {
        name: 'VueBlog',
        props: {
            msg: String
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .hello {
        text-align: center;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    a {
        color: #42b983;
    }

    img {
        max-height: 30vh;
    }
</style>
