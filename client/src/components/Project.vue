<template>
  <div class="container-fluid" style="padding:0px;">
    <div class="project_banner">
      <div class="row">
        <div class="col-md-12 text-center">
          <font-awesome-icon class='icon' icon="desktop" />
          <h1 class="text-center pt-5">Projects</h1>
        </div>
      </div>
    </div>
    <div style="padding:20px">
      <div class="row pt-5">
        <div class="col-12">
          <p>Here is a slideshow to show off some of the projects that I've done and been involved in.</p>
        </div>
      </div>
      <!-- <div class="row">
        <div class="col-md-6">
          <note-taker></note-taker>
        </div>
      </div> -->
      <div class="row">
        <div class="col-md-12">
          <carousel :perPage="1" class="cdiv3" :centerMode="true">
            <slide>
              <div class="row">
                <div class="col-md-12">
                  <img src="../img/echo_index.png" style="width:100%" alt="">
                </div>
                <div class="col-md-4 pt-5">
                  <p>This is my echo project</p>
                </div>
              </div>
            </slide>
            <slide>
              <div class="row">
                <div class="col-md-12">
                  <img src="../img/echo_hud.png" style="width:100%" alt="">
                </div>
                <div class="col-md-4 pt-5">
                  <p>This is my echo project</p>
                </div>
              </div>
            </slide>
            <slide>
              <div class="row">
                <div class="col-md-12">
                  <img src="../img/echo_log.png" style="width:100%" alt="">
                </div>
                <div class="col-md-4 pt-5">
                  <p>This is my echo project</p>
                </div>
              </div>
            </slide>
            <slide>
              <div class="row">
                <div class="col-md-12">
                  <img src="../img/echo_task.png" style="width:100%" alt="">
                </div>
                <div class="col-md-4 pt-5">
                  <p>This is my echo project</p>
                </div>
              </div>
            </slide>
            <slide>
              <div class="row">
                <div class="col-md-12">
                  <img src="../img/txdot.png" style="width:100%" alt="">
                </div>
                <div class="col-md-4 pt-5">
                  <p>This is my txdot project</p>
                </div>
              </div>
            </slide>
            <slide>
              <div class="row">
                <div class="col-md-12">
                  <img src="../img/mockup.png" style="width:100%" alt="">
                </div>
                <div class="col-md-4 pt-5">
                  <p>This is my txdot project wireframe</p>
                </div>
              </div>
            </slide>
            <slide>
              <div class="row">
                <div class="col-md-12">
                  <img src="../img/todo.png" style="width:100%" alt="">
                </div>
                <div class="col-md-4 pt-5">
                  <p>This is my todo project</p>
                </div>
              </div>
            </slide>
          </carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import c1 from './NoteTaker.vue'
Vue.component('note-taker', c1)

export default {
  name: 'Footer',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
