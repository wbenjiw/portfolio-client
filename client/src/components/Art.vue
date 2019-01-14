<template>
  <div class="container-fluid" style="padding:0px;">
    <div class="art_banner">
      <div class="row">
        <div class="col-md-12 text-center">
          <font-awesome-icon class='icon' icon="paint-brush" />
          <h1 class="text-center pt-5">Art Portfolio</h1>
        </div>
      </div>
    </div>
    <div style="padding:20px">
      <div class="row pt-5">
        <div class="col-md-12">
          <carousel :perPage="1" class="cdiv" :centerMode="true">
            <slide>
              <img src="../img/mountain.jpg" style="height:600px;" alt="">
            </slide>
            <slide>
              <img src="../img/mountain_c.jpg" style="height:600px" alt="">
            </slide>
            <slide>
              <div class="row">
                <div class="col-md-6">
                  <img src="../img/whit.jpg" style="height:600px" alt="">
                </div>
                <div class="col-md-6">
                  <p>this is some art of whitley</p>
                </div>
              </div>
            </slide>
            <slide>
              <div class="row">
                <div class="col-md-6">
                  <img src="../img/dds.jpg" style="height:600px" alt="">
                </div>
                <div class="col-md-6">
                  <p>logo design</p>
                </div>
              </div>
            </slide>
            <slide>
              <div class="row">
                <div class="col-md-6">
                  <img src="../img/doug.jpg" style="height:600px" alt="">
                </div>
                <div class="col-md-6">
                  <p>logo design</p>
                </div>
              </div>
            </slide>
            <slide>
              <div class="row">
                <div class="col-md-6">
                  <img src="../img/bssi.png" style="height:600px" alt="">
                </div>
                <div class="col-md-6">

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
import { Carousel, Slide } from 'vue-carousel'

export default {
  components: {
    Carousel,
    Slide
  },
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
