<template>
<div id="contact">
  <div class="pimg3">
    <div class="ptext">
      <span class="border trans">
        Contact
        </span>
    </div>
  </div>
  <section class="section section-dark">
    <h2>Section Three</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor </p>
  </section>


</div>
</template>
<script>
export default {
  name: "",
  data: () => ({

  })
}
</script>
<style scoped>
.pimg3{
  background-image: url('../assets/poop.jpg');
  min-height: 400px;
}
.section{
  text-align: center;
  padding: 50px 80px;
}
.section-dark{
  background-color: #282e34;
  color: #ddd;
}
.ptext{
  position: absolute;
  top: 50%;
  width: 100%;
  text-align: center;
  color: #000;
  font-size: 27px;
  letter-spacing: 8px;
  text-transform: uppercase;
}
.ptext .border{
  background-color: #111;
  color: white;
  padding: 20px;
}
.ptext .border.trans{
  background-color: transparent;
}
</style>
