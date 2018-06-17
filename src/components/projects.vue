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
    <div class="projectInfo">
      <div class="project0">
        <h2>Pay It Forward</h2>
        <br>
        <img class='fridgePic' src="../assets/pay.gif" alt="fridge">
        <div>
          <br>
          <b-button @click="modal0Show = !modal0Show">
            Learn More
          </b-button>
          <b-modal v-model="modal0Show" title="Pay It Forward">
            <h5><b>Technologies Used</b></h5>
            <img class='techPic' src="../assets/swift.png" alt="">
            <img class='techPic' src="../assets/aws.png" alt="">
            <img class='techPic' src="../assets/realm.png" alt="">
            <img class='techPic' src="../assets/data.png" alt="">
            <img class='techPic' src="../assets/coco.png" alt="">
            <img class='techPic' src="../assets/jest.png" alt="">
            <p>An iOS app that makes donating easier. Local institutions are able to create a profile and upload items needed for donation. The user is then able to view the organizations and then view the posted items. A Realm database holds the data for
              both the organization as well as the items and executes the CRUD functionality to alert when an item has been completed or submitted.</p>
            <br>
            <a class='gitLink' href="https://github.com/shaunbseidman/-" target="_blank"><img class = 'bottomPic' src="../assets/git2.png" alt=""></a>
          </b-modal>
        </div>
      </div>
      <br>
      <div class="project1">
        <h2>Fridge Vision</h2>
        <br>
        <img class='fridgePic' src="../assets/fridge.gif" alt="fridge">
        <div>
          <br>
          <b-button @click="modalShow = !modalShow">
            Learn More
          </b-button>
          <b-modal v-model="modalShow" title="Fridge Vision">
            <div class="tech">
              <h5><b>Technologies Used</b></h5>
              <img class='techPic' src="../assets/react.png" alt="">
              <img class='techPic' src="../assets/swift.png" alt="">
              <img class='techPic' src="../assets/js.png" alt="">
              <img class='techPic' src="../assets/css.png" alt="">
              <img class='techPic' src="../assets/post.png" alt="">
              <img class='techPic' src="../assets/node.png" alt="">
              <img class='techPic' src="../assets/jest.png" alt="">
              <img class='techPic' src="../assets/aws.png" alt="">
              <p>A collaborative group project implementing React Native, Clarafi image recognition and Amazon Web Services S3 image hosting. My role in this project was to create the back-end Express server, create the Knex database as well as help post
                the images taken from the iPhone’s native camera to an S3 bucket. Fridgely was created with the intent to scan an item in your fridge, take a photo and send it off to the image recognition API and then return a list of recipes based on
                the food item that was scanned.</p>
              <br>
              <a class='gitLink' href="https://github.com/DavidNAspesi/fridgely-server" target="_blank"><img class = 'bottomPic' src="../assets/git2.png" alt=""></a>
            </div>
          </b-modal>
        </div>
      </div>
      <br>
      <div class="project2">
        <h2>This</h2>
        <br>
        <img class="personal" src="../assets/ss.png" alt="personal">
        <div>
          <br>
          <b-button @click="modal2Show = !modal2Show">
            Learn More
          </b-button>
          <b-modal v-model="modal2Show" title="shaunseidman.com">
            <div class="tech">
              <h5><b>Technologies Used</b></h5>
              <img class='techPic' src="../assets/logo.png" alt="">
              <img class='techPic' src="../assets/boot.png" alt="">
              <img class='techPic' src="../assets/js.png" alt="">
              <img class='techPic' src="../assets/css.png" alt="">
              <img class='techPic' src="../assets/node.png" alt="">
              <img class='techPic' src="../assets/aws.png" alt="">
              <img class='techPic' src="../assets/cypress.png" alt="">
              <p>Woah....website inception</p><br>
              <p>My personal website, made using Vue.Js, hosted on Amazon S3 with Route 53 and CloudFront</p>
              <br>
              <a class='gitLink' href="https://github.com/shaunbseidman/personal-site" target="_blank"><img class = 'bottomPic' src="../assets/git2.png" alt=""></a>
            </div>
          </b-modal>
        </div>
      </div>
      <br>
      <div class="project3">
        <h2>What's It Worth</h2>
        <br>
        <img class="shoeGif" src="../assets/gif2.gif" alt="shoes">
        <div>
          <br>
          <b-button @click="modal3Show = !modal3Show">
            Learn More
          </b-button>
          <b-modal v-model="modal3Show" title="What's It Worth">
            <div class="tech">
              <h5><b>Technologies Used</b></h5>
              <img class='techPic' src="../assets/logo.png" alt="">
              <img class='techPic' src="../assets/cypress.png" alt="">
              <img class='techPic' src="../assets/js.png" alt="">
              <img class='techPic' src="../assets/css.png" alt="">
              <img class='techPic' src="../assets/post.png" alt="">
              <img class='techPic' src="../assets/node.png" alt="">
              <img class='techPic' src="../assets/boot.png" alt="">
              <p>A fun and simple web app that tracks the retail and resell prices for sneakers. Using the chart.js library, it creates an easy to read comparison chart which shows whether the price has gone up or down from the suggested retail price. </p>
              <br>
              <a class='gitLink' href="http://cute-middle.surge.sh/#/" target="_blank"><img class = 'bottomPic' src="../assets/link.png" alt=""></a>
              <a class='gitLink' href="https://github.com/shaunbseidman/galvanizetower" target="_blank"><img class = 'bottomPic' src="../assets/git2.png" alt=""></a>
            </div>
          </b-modal>
        </div>
      </div>
    </div>
  </section>
</div>
</template>
<script>
import {
  Modal
} from 'bootstrap-vue/es/components';

export default {
  name: "projects",
  data() {
    return {
      modal0Show: false,
      modalShow: false,
      modal2Show: false,
      modal3Show: false
    }
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300');

.pimg2 {
  background-image: url('../assets/work.png');
  min-height: 400px;
}

.section {
  text-align: center;
  padding: 50px 80px;
}

.section-dark {
  background-color: rgb(226, 189,192);
  /* background-color: rgb(42,44,56); */

  /* background-color: rgba(165, 228, 208, 0.5); */

  /* background-color: rgba(126, 228, 208, 0.5); */

  /* background-color: rgba(52, 48, 70, 0.5); */

  /* background-color: #282e34; */
  color: rgb(46,48,106);
}

.projectInfo {
  display: flex;
  justify-content: space-between;
}

.tech {
  margin-top: 30px;
}

.fridgePic {
  height: 269px;
  width: 140px;
  border-radius: 24px;
}

.personal {
  height: 269px;
  width: 450;
}

.shoeGif {
  height: 269px;
  width: 450;
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

.bottomPic:hover {
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  opacity: 0.3;
  opacity: 0.6;
  cursor: pointer;
  animation: shake 0.3s;
  animation-iteration-count: 1s;
  cursor: pointer;
}

h2{
  line-height: 1.8em;
  font-size: 18px;
  font-weight: 400;
  font-family: 'Open Sans', sans-serif;

  /* font-weight: 600; */
}
@media screen and (max-width: 1370px){
  .projectInfo {
    display: block;
    max-height: 100%;
    width: 100%;
    align-items: center;
    overflow-y: auto;
    position: relative;
  }
  .personal {
    height: 100%;
    width: 100%;
  }
  .shoeGif {
    height: 100%;
    width: 100%;
  }
}
@media screen and (max-width: 600px) {
  .projectInfo {
    display: block;
    max-height: 100%;
    width: 100%;
    align-items: center;
    overflow-y: auto;
    position: relative;
  }
  .personal {
    height: 100%;
    width: 100%;
  }
  .shoeGif {
    height: 100%;
    width: 100%;
  }
}
</style>
