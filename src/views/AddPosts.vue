<script setup>
import { watch } from 'vue'
import { ref } from 'vue'

/*
import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getAllPosts'])
  },
  methods: {
    ...mapActions(['addPosts', 'showPosts', 'updatePosts']),
    addNewPost() {}
  }
}
*/
const title = ref('')
const content = ref('')

function data() {
  if (
    (title.value.length <= 2 && title.value.trim() === '') ||
    (content.value.length <= 2 && content.value.trim() === '')
  ) {
    alert('Title or content is invalid')
  } else {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: title.value,
        content: [content.value]
      })
    }

    fetch('https://post-it.epi-bluelock.bj/notes', requestOptions)
      .then((response) => response.json())
      .then((data) => data)
  }
}

const errorClass = ref('text-danger')

const validTitle = ref('')
const BoleenTitle = ref(false)
watch(title, function () {
  if (title.value.trim() === '' && title.value.length <= 2) {
    validTitle.value = 'Title is invalid'
    BoleenTitle.value = true
    errorClass.value = 'text-danger'
  } else {
    validTitle.value = 'Title is valid'
    errorClass.value = 'text-success'
  }
})

const validcontent = ref('')
const Boleencontent = ref(false)
watch(content, function () {
  if (content.value.trim() === '' && content.value.length <= 2) {
    validcontent.value = 'content is invalid'
    Boleencontent.value = true
    errorClass.value = 'text-danger'
  } else {
    validcontent.value = 'content is valid'
    errorClass.value = 'text-success'
  }
})
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
      <div class="forForm">
        <h3><center>Add post-it</center></h3>
        <form>
          <div class="mb-3">
            <label for="tile" class="form-label" required>Title</label>
            <input v-model="title" type="text" class="form-control" id="title" />
            <p v-if(validTitle) :class="[errorClass]">{{ validTitle }}</p>
          </div>

          <div class="mb-3">
            <label for="description" class="form-label" required>Description</label>
            <textarea
              v-model="content"
              class="form-control"
              name="description"
              id="description"
            ></textarea>
            <p v-if(validcontent) :class="[errorClass]">{{ validcontent }}</p>
          </div>

          <router-link to="/"
            ><button @click="data" type="submit" class="btn btn-primary">
              Submit
            </button></router-link
          >
          <router-view />
        </form>
      </div>
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
