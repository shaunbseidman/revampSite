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
      <form action="https://getsimpleform.com/messages?form_api_token=01178de3065ef85c5dd46493fabaf917" method="post">
          Name:<br>
          <input type="text" name= "Name: "><br>
          E-mail:<br>
          <input type="text" name="fart"><br>
          Message:<br>
          <input type="text" name="comment" height= 100 size="24"><br><br>
          <input type='hidden' name='redirect_to' value='http://shaunseidman.com' />
          <button class="btn btn-secondary" v-on:click="formSubmitted" type='submit' name="button">Let's Get In Touch</button>
        </form>


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
  background-color: rgb(147,209,238);
  color: rgb(46,48,106);
  /* background-color: rgb(42,44,56); */

  /* background-color: rgba(165, 228, 208, 0.5); */

  /* background-color: #282e34; */
  /* background-color: rgba(52, 48, 70, 0.5); */

  /* color: #ddd; */
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
