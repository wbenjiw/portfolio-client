<!-- <template lang="html">
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <label>First Name</label>
        <input class="form-control" type="text" id="fname">
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <label>Last Name</label>
        <input class="form-control" type="text" id="lname">
      </div>
    </div>
    <div class="row" style="padding-top:20px">
      <div class="col-md-12">
        <button class="btn btn-block btn-primary" @click="openDirectory()" id="revealDirectory">Submit</button>
      </div>
    </div>

    <div id="directory" style="display:none">
      <div class="row">
        <div class="col-md-12">
          <p>test</p>
          <p id="nameDirect"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default{
}

new Vue({
  data () {
    return {
    }
  },
  methods: {
    openDirectory: function () {
      var directoryArea = document.getElementById('directory')
      if (document.getElementById('revealDirectory')) {
        if (directoryArea.style.display === 'none') {
          directoryArea.style.display = 'block'
        } else {
          directoryArea.style.display = 'none'
        }
      }
      var nameDirect = document.getElementById('nameDirect')
      var fname = document.getElementById('fname').value
      if (fname === '') {
        fname = ''
      } else {
        fname = fname + ' '
      }
      var lname = document.getElementById('lname').value
      console.log(lname)
      if (lname === '') {
        lname = ''
      } else {
        lname = lname + ' is cool'
      }
      nameDirect.innerHTML += fname + lname
    }
  }
})
</script>

<style lang="css">
</style> -->
