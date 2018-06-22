<template>
  <div class="">
    <div class="step4">
      <h5>
        <b>Profession Details</b>
      </h5>
      <hr>
          <div class="row mar_ned">
       <div class="col-md-4 col-xs-3">
           <p align="right">
             <b>Occupation Status</b>
           </p>
         <div class="col-md-8 col-xs-9">
          <div class="row">
         <div class="col-md-4 col-xs-4 wdth">
            <label for="employed">Employed</label>
            <input type="radio" id="yes" value="yes" v-model="profession.status">
            <label for="selfEmployed">Self Employed</label>
           <input type="radio" id="no" value="no" v-model="profession.status">
           <label for="unEmployed">UnEmployed</label>
           <input type="radio" id="no" value="no" v-model="profession.status">
           </div>
         </div>
       </div>
      <div class="row mar_ned">
        <div class="col-md-4 col-xs-3">
          <p align="right">
            <b>Area of Expertise</b>
          </p>
        </div>
        <div class="col-md-8 col-xs-9">
          <input type="text" name="email" id="email"
          placeholder="expertise"
          class="dropselectsec" autocomplete="off" v-model="profession.expertise">
        </div>
      </div>
      <div>
        <button>Add</button>
      </div>
      <h5>
        <b>Work/Employemnt History </b>
      </h5>
      <div class="col-md-8 col-xs-9">
          <input type="text" name="email" id="email"
          placeholder="Institution"
          class="dropselectsec" autocomplete="off" v-model="profession.institution">
        </div>
        <div class="col-md-8 col-xs-9">
          <input type="text" name="email" id="email"
          placeholder="fromDate"
          class="dropselectsec" autocomplete="off" v-model="profession.from_date">
        </div>
        <div class="col-md-8 col-xs-9">
          <input type="text" name="email" id="email"
          placeholder="To Date"
          class="dropselectsec" autocomplete="off" v-model="profession.to_date">
        </div>
        <div class="col-md-8 col-xs-9">
          <input type="text" name="email" id="email"
          placeholder="your Roles"
          class="dropselectsec" autocomplete="off" v-model="profession.roles">
        </div>
        <button>Add</button>
       </div>
    </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'ProfessionForm',
  props: {
    profession: {},
  }
};
</script>

<style>
</style>
