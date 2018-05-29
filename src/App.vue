<template>
<div id="app">
  <!-- <div class="fulfilling-bouncing-circle-spinner">
    <div class="circle"></div>
    <div class="orbit"></div>
  </div> -->
  <b-navbar toggleable="md" type="dark" variant="dark">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <img id='logo' src="./assets/SSLogo 2.png" alt="">
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
      <b-nav-item href="http://www.github.com/shaunbseidman" target="_blank"><img class='linkImages' id='img2' src="./assets/git2.png" alt="git"></b-nav-item>
      <b-nav-item href="https://www.linkedin.com/in/shaun-seidman/" target="_blank"><img class='linkImages' id='img2' src="./assets/linked.png" alt=""></b-nav-item>
      <b-nav-item href="http://www.instagram.com/youth.and.lust"target="_blank" ><img class='linkImages' id='img2' src="./assets/ig.png" alt=""></b-nav-item>
      <b-nav-item href="http://www.twitter.com/wangchung2nite_" target="_blank"><img class='linkImages' id='img2' src="./assets/twitter.png" alt=""></b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

  <splash></splash>
  <about></about>
  <projects></projects>
  <contact></contact>
  <router-view/>
</div>
</template>

<script>
import {AtomSpinner} from 'epic-spinners'
export default {
  name: "App",
  components: {
    AtomSpinner
  }
}
</script>

<style>
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  /* font: inherit; */
  vertical-align: baseline;
}

body,
html {
  height: 100%;
  margin: 0;
  font-size: 13px;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  line-height: 1.8em;
  color: #666;
}
li {
  padding: 3px;
}
.fulfilling-bouncing-circle-spinner, .fulfilling-bouncing-circle-spinner * {
      box-sizing: border-box;
    }

    .fulfilling-bouncing-circle-spinner {
      height: 60px;
      width: 60px;
      position: relative;
      animation: fulfilling-bouncing-circle-spinner-animation infinite 4000ms ease;
    }

    .fulfilling-bouncing-circle-spinner .orbit {
      height: 60px;
      width: 60px;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 50%;
      border: calc(60px * 0.03) solid #ff1d5e;
      animation: fulfilling-bouncing-circle-spinner-orbit-animation infinite 4000ms ease;
    }

    .fulfilling-bouncing-circle-spinner .circle {
      height: 60px;
      width: 60px;
      color: #ff1d5e;
      display: block;
      border-radius: 50%;
      position: relative;
      border: calc(60px * 0.1) solid #ff1d5e;
      animation: fulfilling-bouncing-circle-spinner-circle-animation infinite 4000ms ease;
      transform: rotate(0deg) scale(1);
    }

    @keyframes fulfilling-bouncing-circle-spinner-animation {
      0% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(360deg);
      }
    }

    @keyframes fulfilling-bouncing-circle-spinner-orbit-animation {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1);
      }
      62.5% {
        transform: scale(0.8);
      }
      75% {
        transform: scale(1);
      }
      87.5% {
        transform: scale(0.8);
      }
      100% {
        transform: scale(1);
      }
    }

    @keyframes fulfilling-bouncing-circle-spinner-circle-animation {
      0% {
        transform: scale(1);
        border-color: transparent;
        border-top-color: inherit;
      }
      16.7% {
        border-color: transparent;
        border-top-color: initial;
        border-right-color: initial;
      }
      33.4% {
        border-color: transparent;
        border-top-color: inherit;
        border-right-color: inherit;
        border-bottom-color: inherit;
      }
      50% {
        border-color: inherit;
        transform: scale(1);
      }
      62.5% {
        border-color: inherit;
        transform: scale(1.4);
      }
      75% {
        border-color: inherit;
        transform: scale(1);
        opacity: 1;
      }
      87.5% {
        border-color: inherit;
        transform: scale(1.4);
      }
      100% {
        border-color: transparent;
        border-top-color: inherit;
        transform: scale(1);
      }
    }

.linkImages:hover {
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  opacity: 0.3;
  opacity: 0.6;
  cursor: pointer;
  animation: shake 0.3s;
  animation-iteration-count: 1s;
  cursor: pointer;
}

@keyframes shake {
  0% {
    transform: translate(1px, 1px) rotate(0deg);
  }
  10% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }
  20% {
    transform: translate(-2px, 0px) rotate(1deg);
  }
  30% {
    transform: translate(1px, 2px) rotate(0deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }
}

.pimg1,
.pimg2,
.pimg3 {
  position: relative;
  opacity: 0.70;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
.navbar{
  position: fixed;
  width: 100%;
  z-index: 999;
}
</style>
