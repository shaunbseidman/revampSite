<template>
<div id="about">
  <div class="pimg1">
    <div class="ptext">
      <span class="border">
        I'm Shaun, and I like to solve problems
        </span>
    </div>
  </div>
  <section class="section section-light">
    <p>Thanks for taking a look. I am a full stack developer with a passion for creating, problem solving and continuing to learn and grow. My previous experience in managing a small business and team building, coupled with my passion for learning make me
      an asset to any team.
      <br>
      <br>
      <ul class="stuffAboutMe">
        <li><b>My Strengths:</b> I am a developer who can write clean code, handle big data transformations, desigin intuitive user interfaces and have demonstrated success working with a team.</li>
        <li><b>Most Successfull Dev Project:</b> Pay It Forward, a native iOS app that works with local non-profits to help find items needed for donation.</li>
        <li><b>Currently:</b> Seeking a position as a web developer here in Denver, Colorado</li>
      </ul>
      <br> My stack currently includes and is not limited to:
      <div>
        <b-dropdown id="ddown1" text="My Technologies" class="m-md-2">
          <b-dropdown-item>Agile</b-dropdown-item>
          <b-dropdown-item>AWS</b-dropdown-item>
          <b-dropdown-item>CSS</b-dropdown-item>
          <b-dropdown-item>Cypress</b-dropdown-item>
          <b-dropdown-item>Firebase</b-dropdown-item>
          <b-dropdown-item>Git</b-dropdown-item>
          <b-dropdown-item>Heroku</b-dropdown-item>
          <b-dropdown-item>HTML</b-dropdown-item>
          <b-dropdown-item>JavaScript</b-dropdown-item>
          <b-dropdown-item>Knex</b-dropdown-item>
          <b-dropdown-item>Node.JS</b-dropdown-item>
          <b-dropdown-item>PostgreSQL</b-dropdown-item>
          <b-dropdown-item>React</b-dropdown-item>
          <b-dropdown-item>Swift</b-dropdown-item>
          <b-dropdown-item>Vue.Js</b-dropdown-item>
          <b-dropdown-item>XCode</b-dropdown-item>
        </b-dropdown>
      </div>
      Please feel free to take a look at my resume below.
    </p>
    <div>
      <!-- <b-btn v-b-modal.modallg variant="primary">View Resume</b-btn>
    <b-modal id="modallg" size="lg" title="Resume">
      <img class = 'resume' src="../assets/resume.png" alt="">
    </b-modal> -->
      <div>
        <b-btn v-b-modal.modal-center>View Resume</b-btn>
        <b-modal id="modal-center" centered title="Resume">
          <img class='resume' src="../assets/resume.png" alt="">
        </b-modal>
      </div>

    </div>

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
@import url('https://fonts.googleapis.com/css?family=Open+Sans:700');

.pimg1 {
  background-image: url('../assets/shaun.jpeg');
  min-height: 400px;
}

.section {
  text-align: center;
  padding: 50px 80px;
}

.section-light {
  background-color: #426B61;
  /* background-color: rgba(165, 228, 208, 0.5); */
  /* background-color: rgba(126, 228, 208, 0.5); */
  /* background-color: rgba(52, 48, 70, 0.5); */
  /* background-color: #282e34; */
  color: #ffffff;
  font-family: 'Open Sans', sans-serif;

}

.resume {
  height: 100%;
  width: 100%;
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

.stuffAboutMe {
  text-align: left;
  font-size: 14px;
  list-style-type: none;
}


.ptext .border {
  background-color: #111;
  color: white;
  padding: 20px;
  background-color: transparent;
}

.ptext .border.trans {
  background-color: transparent;
}

p {
  font-size: 17px;
}

@media screen and (max-width: 600px) {
  .border.trans {
    display: flex;
  }
  .section-dark {
    display: flex;
    flex-direction: row;

    /* margin: 30px; */
  }
  .border {
    display: flex;
  }
}
</style>
