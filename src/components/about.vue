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
      <p>Thanks for taking a look. I am a full stack developer with a passion for creating, problem solving and continuing to learn and grow. My previous experience in managing a small business and team building have helped to solidify my work techniques
        with others and also instill a never-quit attitude. <br><br>I would love to establish myself in the web development world and believe my skills, as well as my willingness to learn, would make me a great candidate for a junior dev position. <br><br>Please
        feel free to take a look at my resume below.<br> I look forward to talking and hopefully working together.
      </p><br>
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
  background-color: transparent;

}
.ptext .border.trans {
  background-color: transparent;
}
</style>
