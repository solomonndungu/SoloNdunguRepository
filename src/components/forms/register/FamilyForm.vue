<template>
  <div class="">
    <div class="step7">
      <h5>
        <b>Family Details</b>
      </h5>
      <hr>
      <div class="row mar_ned">
        <div class="col-md-4 col-xs-3">
          <p align="right">
            <b>Enter name of spouse</b>
          </p>
        </div>
        <div class="col-md-8 col-xs-9">
          <input type="text" name="email" id="email"
          placeholder="name of spouse"
          class="dropselectsec" autocomplete="off" v-model="spouse">
        </div>
      </div>
          <div class="row mar_ned">
       <div class="col-md-4 col-xs-3">
           <p align="right">
             <b>Are they a member of LRC?</b>
           </p>
         <div class="col-md-8 col-xs-9">
          <div class="row">
         <div class="col-md-4 col-xs-4 wdth">
            <label for="yes">Yes</label>
            <input type="radio" id="yes" value="yes" v-model="picked">
            <label for="no">No</label>
           <input type="radio" id="no" value="no" v-model="picked">
           </div>
         </div>
       </div>
       </div>
    </div>

        <div class="row mar_ned">
       <div class="col-md-4 col-xs-3">
           <p align="right">
             <b>Do you have any children?</b>
           </p>
         <div class="col-md-8 col-xs-9">
          <div class="row">
         <div class="col-md-4 col-xs-4 wdth">
            <label for="yes">Yes</label>
            <input type="radio" id="yes" value="yes" v-model="childpicked">
            <label for="no">No</label>
           <input type="radio" id="no" value="no" v-model="childpicked">
           </div>
         </div>
       </div>

       </div>

      <h5>
        <b>Children Details </b>
      </h5>
      <div class="col-md-8 col-xs-9">
          <input type="text" name="email" id="email"
          placeholder="childName"
          class="dropselectsec" autocomplete="off" v-model="childName">
        </div>
        <div class="col-md-8 col-xs-9">
          <input type="text" name="email" id="email"
          placeholder="dateOfBirth"
          class="dropselectsec" autocomplete="off" v-model="birthDate">
        </div>
        <div class="col-md-8 col-xs-9">
          <input type="text" name="email" id="email"
          placeholder="Year Of Dedication"
          class="dropselectsec" autocomplete="off" v-model="dedication">
        </div>
        <div class="col-md-8 col-xs-9">
          <input type="text" name="email" id="email"
          placeholder="church Name"
          class="dropselectsec" autocomplete="off" v-model="churchName">
        </div>
        <button>Add</button>
    </div>

    <h5>
        <b>Next of Kin</b>
      </h5>
      <div class="col-md-8 col-xs-9">
          <input type="text" name="email" id="email"
          placeholder="Next of kin Name"
          class="dropselectsec" autocomplete="off" v-model="kinName">
        </div>
        <div class="col-md-8 col-xs-9">
          <input type="text" name="email" id="email"
          placeholder="contact"
          class="dropselectsec" autocomplete="off" v-model="contact">
        </div>
        <div class="col-md-8 col-xs-9">
          <input type="text" name="email" id="email"
          placeholder="Relationship Type"
          class="dropselectsec" autocomplete="off" v-model="type">
        </div>
        <button>Add</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Family',
  data() {
    return {
      spouse: '',
      picked: '',
      childpicked: '',
      childName: '',
      churchName: '',
      dedication: '',
      birthDate: '',
      kinName: '',
      type: '',
      contact: '',
    };
  },
};
</script>

<style>
</style>
