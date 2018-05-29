<template>
<div id="splash">
  <div class="ptext">
    <div id="particleJS-container">
    </div>
    <div class="circleText">
      <div class="hero-text">
        <div class="textBox">
          <h1>SHAUN SEIDMAN</h1>
          <hr>
          <h4>Full Stack Developer</h4>
        </div>
    </div>
    </div>


  </div>
</div>
</template>
<script>
export default {
  name: "",
  data() {
    return {}
  },
  mounted() {
    this.$nextTick(() => {
      this.initParticleJS()
    })
  },
  methods: {
    initParticleJS() {
      particlesJS('particleJS-container', {
        "particles": {
          "number": {
            "value": 280,
            "density": {
              "enable": true,
              "value_area": 4813.800613956863
            }
          },
          "color": {
            "value": ["#BD10E0", "#B8E986", "#50E3C2", "#4a9fc9", "#FFD300", "#E86363", "#36dd8f"]
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 2,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 6
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.3,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 100.21325380409519,
            "random": true,
            "anim": {
              "enable": true,
              "speed": 46.288401101176675,
              "size_min": 52.785018799587434,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "repulse"
            },
            "onclick": {
              "enable": false,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      });
    }
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300');

#particleJS-container {
  height: 100vh;
  z-index: 0;
}
h1{
  color: black;
}
h4{
  color:black;
}
 .textBox {
   /* margin: 10px; */
   text-align: center;
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
 }
 .hero-text {
   align-items: center;
   font-size: 40px;
   width: 400px;
   height: 400px;
   -moz-border-radius: 200px;
   -webkit-border-radius: 200px;
   border-radius: 200px;
   background-color: #C9D4CB;
   opacity: 0.78;
   filter: alpha(opacity=70);
   font-weight: bold;
   font-family: 'Open Sans', sans-serif;
   text-align: center;
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   color: white;
 }
@media screen and (max-width: 600px) {
  .hero-text{
    width: 300px;
    height: 300px;
    -moz-border-radius: 200px;
    -webkit-border-radius: 200px;
    border-radius: 200px;
  }
  .textBox{
    font-size: 25px;
  }
}


</style>
