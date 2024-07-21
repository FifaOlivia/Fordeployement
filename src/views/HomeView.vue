<script setup>
import { ref } from 'vue'

const dataref = ref(null)

fetch('https://post-it.epi-bluelock.bj/notes')
  .then((response) => response.json())
  .then((data) => {
    dataref.value = data.notes
  })

function ForDate() {
  let date = new Date()

  let options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }
  var printDAte = date.toLocaleDateString('en-GB', options)

  return printDAte
}
</script>

<template>
  <router-view />
  <head>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
  </head>
  <div class="container bootstrap snippets bootdeys">
    <div class="row">
      <div class="col-md-4 col-sm-6 content-card" v-for="post in dataref" :key="post._id">
        <div>
          <div class="card-big-shadow">
            <div
              class="card card-just-text"
              data-background="color"
              data-color="purple"
              data-radius="none"
            >
              <small style="font-weight: bold"> {{ ForDate(post.createdAt, 'option') }} </small>
              <div class="content">
                <h6 class="category">{{ post.title }}</h6>
                <h4 class="title"></h4>
                <p class="description text-left">
                  {{ post.content[0].slice(0, 90) + '...' }}
                </p>

                <router-link :to="{ name: 'showmore', params: { id: post._id } }"
                  ><button class="butt">→</button></router-link
                >
                <router-view />
                <!-- 
                <a href="#" class="text-danger pull-right"><i class="fa fa-trash-o"></i></a> -->
              </div>
            </div>
          </div>
          <!-- end card -->
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <nav aria-label="...">
      <ul class="pagination justify-content-end">
        <li class="page-item disabled"></li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item active">
          <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
        </li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
          <a class="page-link" href="#">Next</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style>
body {
  margin-top: 20px;
}

.card-big-shadow {
  max-width: 320px;
  position: relative;
}

.coloured-cards .card {
  margin-top: 30px;
}

small {
  position: absolute;
  top: 5px;
  right: 5px;
  font-size: 10px;
}

.card[data-radius='none'] {
  border-radius: 0px;
}
.card {
  border-radius: 8px;
  box-shadow: 0 2px 2px rgba(204, 197, 185, 0.5);
  background-color: #ffffff;
  color: #252422;
  margin-bottom: 20px;
  position: relative;
  z-index: 1;
}

.card[data-background='image'] .title,
.card[data-background='image'] .stats,
.card[data-background='image'] .category,
.card[data-background='image'] .description,
.card[data-background='image'] .content,
.card[data-background='image'] .card-footer,
.card[data-background='image'] small,
.card[data-background='image'] .content a,
.card[data-background='color'] .title,
.card[data-background='color'] .stats,
.card[data-background='color'] .category,
.card[data-background='color'] .description,
.card[data-background='color'] .content,
.card[data-background='color'] .card-footer,
.card[data-background='color'] small,
.card[data-background='color'] .content a {
  color: #ffffff;
}
.card.card-just-text .content {
  padding: 50px 65px;
  text-align: center;
}
.card .content {
  padding: 20px 20px 10px 20px;
}
.card[data-color='blue'] .category {
  color: #7a9e9f;
}

.card .label {
  font-size: 14px;
  margin-bottom: 0px;
}
.card-big-shadow:before {
  background-image: url('http://static.tumblr.com/i21wc39/coTmrkw40/shadow.png');
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  bottom: -12%;
  content: '';
  display: block;
  left: -12%;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 0;
}
h4,
.h4 {
  font-size: 1.5em;
  font-weight: 600;
  line-height: 1.2em;
}
h6,
.h6 {
  font-size: 0.9em;
  font-weight: 600;
  text-transform: uppercase;
}
.card .description {
  font-size: 16px;
  color: #66615b;
}
.content-card {
  margin-top: 30px;
}
a:hover,
a:focus {
  text-decoration: none;
}

/*======== COLORS ===========*/
.card[data-color='blue'] {
  background: #b8d8d8;
}
.card[data-color='blue'] .description {
  color: #506568;
}

.card[data-color='green'] {
  background: #d5e5a3;
}
.card[data-color='green'] .description {
  color: #60773d;
}
.card[data-color='green'] .category {
  color: #92ac56;
}

.card[data-color='yellow'] {
  background: #ffe28c;
}
.card[data-color='yellow'] .description {
  color: #b25825;
}
.card[data-color='yellow'] .category {
  color: #d88715;
}

.card[data-color='brown'] {
  background: #d6c1ab;
}
.card[data-color='brown'] .description {
  color: #75442e;
}
.card[data-color='brown'] .category {
  color: #a47e65;
}

.card[data-color='purple'] {
  background: #baa9ba;
}
.card[data-color='purple'] .description {
  color: #3a283d;
}
.card[data-color='purple'] .category {
  color: #5a283d;
}

.card[data-color='orange'] {
  background: #ff8f5e;
}
.card[data-color='orange'] .description {
  color: #772510;
}
.card[data-color='orange'] .category {
  color: #e95e37;
}
.butt {
  margin-left: 200px;
}
</style>
<!-- <script setup>
import { ref } from 'vue'
/* 
  name: 'app',

  computed: {
    titleIsValid() {
      return !!this.title
    },

    descriptionIsValid() {
      return !!this.content
    },

    formIsValid() {
      return this.titleIsValid && this.descriptionIsValid
    }
  },
 */
/*  methods: {
    submitForm() {
      if (this.formIsValid) {
        console.log('Form submitted', this.form)
      } else {
        console.log('Invalid form')
      }
    },
    components: {},
 */
const title = ref('')
const content = ref('')

function data() {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: title.value,
      content: [content.value]
    })
  }

  fetch('http://62.72.5.95:1999/notes', requestOptions)
    .then((response) => response.json())
    .then((data) => data)
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

          <a class="navbar-brand" href="#">Lo</a>

          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">My post-it</a>
              </li>

              <li class="nav-item">
                <routerlink to="/notes/posts"
                  ><a class="nav-link" href="#">Add post-it</a></routerlink
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

      <h3><center>Form add post-it</center></h3>
      <form @submit.prevent="submitForm" autocomplete="off">
        <div class="mb-3">
          <label for="tile" class="form-label">Title</label>
          <input v-model="title" type="text" class="form-control" id="title" />
          <p v-if="!titleIsValid" class="error-message">The Title field is required</p> 
        </div>

        <div class="mb-3">
          <label for="description" class="form-label">Description</label>
          <input v-model="content" type="textarea" class="form-control" id="description" />
          <p v-if="!descriptionIsValid" class="error-message">The description field is required</p> 
        </div>

        <button @click="data" type="submit" class="btn btn-primary">Submit</button>
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
 -->
