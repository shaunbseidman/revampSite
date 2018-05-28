<template>
<div id="splash">
  <div class="ptext">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarColor02">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="text" placeholder="Search">
      <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
    <div id="particleJS-container">
    </div>
    <div class="circleContainer">



    </div>
    <!-- <div class="hero-text">
    <div class="textBox">
    <h1>Shaun Seidman</h1>
    <hr>
    <h4>Full Stack Developer</h4>
  </div>
</div> -->

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
#particleJS-container {
  height: 100vh;
  z-index: 0;
}
/**
 * Demo Styles
 */

html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

html {
  min-height: 100%;
}

body {
  margin: 64px auto;
  max-width: 640px;
  width: 94%;
  text-align: center;
}

/**
 * Circle Styles
 */

.circle {
  position: relative;
  display: block;
  margin: 2em 0;
  background-color: transparent;
  color: #222;
  text-align: center;
}

.circle:after {
  display: block;
  padding-bottom: 100%;
  width: 100%;
  height: 0;
  border-radius: 50%;
  background-color: #ddd;
  content: "";
}

.circle__inner {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.circle__wrapper {
  display: table;
  width: 100%;
  height: 100%;
}

.circle__content {
  display: table-cell;
  padding: 1em;
  vertical-align: middle;
}

@media (min-width: 480px) {
  .circle__content {
    font-size: 2em;
  }
}

@media (min-width: 768px) {
  .circle__content {
    font-size: 4em;
  }
}
.centerCircle{
  position: absolute;
  top: 50%;
  width: 100%;
  text-transform: uppercase;
  margin: 0;
  text-align: center;
}
#badge {
  /* height: 100px;
  width: 100px;
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  border-radius: 50%;
  background: yellow; */
}

</style>
