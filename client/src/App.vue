<template>
  <div id="app">
    <!-- <d3></d3> -->
    <router-view/>
    <about id="about"></about>
    <resume id="resume"></resume>
    <project id="project"></project>
    <art id="art"></art>
    <my-footer></my-footer>
  </div>
</template>

<script>
import Vue from 'vue'
import VueCarousel from 'vue-carousel'
import c1 from './components/Resume.vue'
import c2 from './components/Footer.vue'
import c3 from './components/About.vue'
import c4 from './components/Project.vue'
import c5 from './components/Art.vue'
Vue.use(VueCarousel)
Vue.component('resume', c1)
Vue.component('my-footer', c2)
Vue.component('about', c3)
Vue.component('project', c4)
Vue.component('art', c5)

export default {
  name: 'App'
}
</script>

<style>
</style>
