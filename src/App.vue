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
  <!-- <div>
    <pagination
      :totalPages="10"
      :perPage="3"
      :currentPage="currentPage"
      @pagechanged="onPageChange"
    />
  </div>
 -->
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <title>Post-it</title>
  </head>
  <div class="container">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>

            <li class="nav-item">
              <routerlink to="/notes/posts"
                ><a class="nav-link" href="/POST/notes">Add post-it</a></routerlink
              >
            </li>
          </ul>

          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  </div>
  <br />
  <br />
  <router-view />
  <footer>
    <div class="container">
      <footer class="bg-light text-center text-white">
        <div class="container p-4 pb-0">
          <section class="mb-4">
            <a class="facebook btn btn-primary btn-floating m-1" href="#" role="button">
              <i class="fa fa-facebook"></i>
            </a>

            <a class="twitter btn btn-primary btn-floating m-1" href="#" role="button">
              <i class="fa fa-twitter"></i>
            </a>

            <a class="google btn btn-primary btn-floating m-1" href="#" role="button">
              <i class="fa fa-google"></i>
            </a>

            <a class="instagram btn btn-primary btn-floating m-1" href="#" role="button">
              <i class="fa fa-instagram"></i>
            </a>

            <a
              class="github btn btn-primary btn-floating m-1"
              href="https://github.com/FifaOlivia"
              role="button"
            >
              <i class="fa fa-github"></i>
            </a>
          </section>
        </div>

        <div class="text-center p-3" style="border: none; background-color: rgba(0, 0, 0, 0.2)">
          © 2024 Copyright:
          <a class="text-reset fw-bold" href="#">My_Post-it.com</a>
        </div>
      </footer>
    </div>
  </footer>
</template>

<style scoped>
label {
  font-weight: bold;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

img {
  width: 100px;
  height: 100px;
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

.facebook {
  border: none;
  background-color: #3b5998;
}

.twitter {
  border: none;
  background-color: #55acee;
}

.google {
  border: none;
  background-color: #dd4b39;
}

.instagram {
  border: none;
  background-color: #ac2bac;
}

.github {
  border: none;
  background-color: #333333;
}
</style>
