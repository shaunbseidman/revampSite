<template>
  <div id="about">
    <div class="pimg1">
      <div class="ptext">
        <span class="border">
          About
        </span>
      </div>
    </div>
    <section class="section section-light">
      <h2>Section One</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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

.pimg1{
  background-image: url('../assets/shaun.jpeg');
  min-height: 400px;
}
.section{
  text-align: center;
  padding: 50px 80px;
}
.section-light{
  background-color: #f4f4f4;
  color: #666;
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
</style>
