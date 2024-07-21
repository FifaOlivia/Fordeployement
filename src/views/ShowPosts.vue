<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const dataref = ref('')
const route = useRoute()
const id = route.params.id

function DeletePost() {
  const urlPost = 'https://post-it.epi-bluelock.bj/notes/' + id
  console.log(urlPost)
  fetch(urlPost, { method: 'DELETE' }).then(() => (this.status = 'Delete successful'))
  confirm('Are you sure you want to delete ?')
  if (confirm) {
    alert('Delete successfully!')
  }
  window.location.href = '/'
}

fetch(`https://post-it.epi-bluelock.bj/notes/${route.params.id}`)
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
  <br />
  <br />

  <div class="container">
    <div class="row">
      <div class="col-md-4 col-sm-6 content-card">
        <RouterLink to="/"><button>← &nbsp;</button></RouterLink> Back to my postits
        <div>
          <div class="card-big-shadow">
            <div
              class="card card-just-text namecard"
              data-background="color"
              data-color="purple"
              data-radius="none"
            >
              <div class="content">
                <div class="category">{{ dataref.title }}</div>
                <br />
                <h4 class="title"></h4>
                <p class="description text-left">
                  {{ dataref.content[0] }}
                </p>

                <!-- 
                <a href="#" class="text-danger pull-right"><i class="fa fa-trash-o"></i></a> -->
              </div>
              <div class="d-flex justify-content-between">
                <button v-on:click="DeletePost()" class="btn btn-danger d-flex">delete</button>

                <router-link :to="{ name: 'updateposts', params: { id: id } }">
                  <div><button class="btn btn-primary">Update</button></div></router-link
                >
              </div>
            </div>
          </div>
          <!-- end card -->
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.namecard {
  width: 800px;
  float: center;
  margin-left: 30px;
}

.allbutton {
  display: justify-ali;
}
.category {
  font-weight: bold;
}
</style>
