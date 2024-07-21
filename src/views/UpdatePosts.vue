<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const dataref = ref('')
const id = route.params.id

const urlPost = 'https://post-it.epi-bluelock.bj/notes/' + id

fetch(urlPost, { method: 'GET' })
  .then((response) => response.json())
  .then((data) => {
    dataref.value = data
  })

function UpdatePost() {
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: dataref.value.title,
      content: [dataref.value.content[0]]
    })
  }
  fetch(urlPost, requestOptions)
    .then((response) => response.json())
    .then((result) => result)
  alert('Post update succesfful')
  window.location.href = '/note/' + id
}
</script>

<template>
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Post-it</title>
  </head>

  <body>
    <div class="container">
      <h3>Update post-it</h3>
      <form @submit.prevent="UpdatePost" autocomplete="off">
        <div class="mb-3">
          <label for="tile" class="form-label">Title</label>
          <input v-model="dataref.title" type="text" class="form-control" id="title" />
          <!-- 
          <p v-if="!titleIsValid" class="error-message">The Title field is required</p> -->
        </div>

        <div class="mb-3">
          <label for="description" class="form-label">Description</label>
          <input
            v-model="dataref.content"
            type="textarea"
            class="form-control"
            id="description"
          /><!-- 
          <p v-if="!descriptionIsValid" class="error-message">The description field is required</p> -->
        </div>

        <button v-on:click="UpdatePost()" type="submit" class="btn btn-primary">Submit</button>
        <router-view />
      </form>
    </div>
  </body>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}
p {
  color: red;
}
nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
