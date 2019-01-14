<template>
  <div class="container-fluid" style="padding:0px;">
    <div class="row parallax">
      <div class="col-md-12">
        <div class="parallax-content">
          <div class="row pt-5">
            <div class="col-md-6 text-right">
              <h1 class="title-text">Looking For a Front-End Web Developer?</h1>
            </div>
          </div>
          <div class="row pt-5">
            <div class="col-md-6 text-right">
              <h2 class="title-secondary">Hi, Im Benjamin.</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row pt-5 chunk" style="padding:20px;">
      <div class="col-md-3">
        <div class="row">
          <div class="col-md-12 text-center">
            <font-awesome-icon class='icon pt-5' icon="info" />
          </div>
        </div>
        <h5 class="text-light text-center pt-5">About Me</h5>
        <p class="text-light text-center description">Check out my <span class="text-info">story</span>.</p>
        <div class="row">
          <div class="col-md-12">
            <a href="#about" class="btn btn-block primary">View</a>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="row">
          <div class="col-md-12 text-center">
            <font-awesome-icon class='icon pt-5' icon="history" />
          </div>
        </div>
        <h5 class="text-light text-center pt-5">Resume</h5>
        <p class="text-light text-center description">Check out where I've <span class="text-success">been</span>.</p>
        <div class="row">
          <div class="col-md-12">
            <a href="#resume" class="btn btn-block success">View</a>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="row">
          <div class="col-md-12 text-center">
            <font-awesome-icon class='icon pt-5' icon="desktop" />
          </div>
        </div>
        <h5 class="text-light text-center pt-5">Projects</h5>
        <p class="text-light text-center description">Check out what I've <span class="text-warning">created</span>.</p>
        <div class="row">
          <div class="col-md-12">
            <a href="#project" class="btn btn-block warning">View</a>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="row">
          <div class="col-md-12 text-center">
            <font-awesome-icon class='icon pt-5' icon="paint-brush" />
          </div>
        </div>
        <h5 class="text-light text-center pt-5">Graphic Design</h5>
        <p class="text-light text-center description">Check out what I've <span class="text-danger">designed</span>.</p>
        <div class="row">
          <div class="col-md-12">
            <a href="#art" class="btn btn-block info">View</a>
          </div>
        </div>
      </div>
    </div>
    <div class="row pt-5 second-parallax">
      <div class="col-md-12 text-center">
        <h2 style="padding: 60px;">Let's get stuff done together</h2>
      </div>
    </div>
  </div>
</template>

<script>
// import Vue from 'vue'
// import c1 from '.components/Footer.vue'
// Vue.component('footer',c1)

export default {
  name: 'Home',
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
