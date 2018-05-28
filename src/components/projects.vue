<template>
<div id="projects">
  <div class="pimg2">
    <div class="ptext">
      <span class="border trans">
        Projects
        </span>
    </div>
  </div>
  <section class="section section-dark">
    <div>
      <b-button @click="modalShow = !modalShow">
        Open Modal
      </b-button>
      <b-modal v-model="modalShow">
        Hello From Modal!
      </b-modal>
    </div>
    <div>
      <b-button @click="modal2Show = !modal2Show">
        Open Modal
      </b-button>
      <b-modal v-model="modal2Show">
        fart
      </b-modal>
    </div>

  </section>
</div>
</template>
<script>
import {
  Modal
} from 'bootstrap-vue/es/components';

export default {
  data() {
    return {
      modalShow: false,
      modal2Show: false
    }
  }
}
</script>
<style scoped>
.pimg2 {
  background-image: url('../assets/work.png');
  min-height: 400px;
}

.section {
  text-align: center;
  padding: 50px 80px;
}

.section-dark {
  background-color: #282e34;
  color: #ddd;
}

.ptext {
  position: absolute;
  top: 50%;
  width: 100%;
  text-align: center;
  color: #000;
  font-size: 27px;
  letter-spacing: 8px;
  text-transform: uppercase;
}

.ptext .border {
  background-color: #111;
  color: white;
  padding: 20px;
}

.ptext .border.trans {
  background-color: transparent;
}
</style>
