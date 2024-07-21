<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const dataref = ref(null)
const route = useRoute()
const id = route.params.id

function DeletePost() {
  const urlPost = 'http://62.72.5.95:1999/notes/' + id
  console.log(urlPost)
  fetch(urlPost, { method: 'DELETE' }).thepn(() => (this.status = 'Delete successful'))
  confirm('delete succejuykjqkeldk')
  window.location.href = '/'
}

fetch(`http://62.72.5.95:1999/notes/${route.params.id}`)
  .then((response) => response.json())
  .then((data) => {
    dataref.value = data
  })
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
      <div class="col-md-4 col-sm-6 content-card">
        <div>
          <div class="card-big-shadow">
            <div
              class="card card-just-text"
              data-background="color"
              data-color="purple"
              data-radius="none"
            >
              <div class="content">
                <!-- 
                <small>{{ dataref.createdAt }}</small> -->
                <h6 class="category">{{ dataref.title }}</h6>
                <h4 class="title"></h4>
                <p class="description text-left">
                  {{ dataref.content[0] }}
                </p>
                <button v-on:click="DeletePost()">delete</button>
                <div v-for="post in dataref" :key="post._id">
                  <router-link :to="{ name: 'updateposts', params: { id: post._id } }">
                    <button>Update</button></router-link
                  >
                </div>

                <RouterLink to="/"><button>Back</button></RouterLink>
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
</template>
