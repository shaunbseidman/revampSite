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
        <input type='hidden' name='redirect_to' value='http://shut-effect.surge.sh/#/contact' />
        <button v-on:click="formSubmitted" type='submit' name="button">Send an email to shaunseidman@gmail.com</button>
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
