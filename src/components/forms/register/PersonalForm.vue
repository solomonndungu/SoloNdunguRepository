<template>
<div class="">
  <div class="step1">
    <h5>
      <b>Personal Details</b>
    </h5>
    <hr>
    <div class="row mar_ned">
      <div class="col-sm-4">
        <div class="form-group">
          <label for="firstName" class="label">First Name</label>
          <input type="text" name="firstName" class="form-control" id="firstName"
          placeholder="Firstname" v-model="firstName">
          <p class="help-block">eg. Victor</p>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="form-group">
          <label for="middleName" class="label">middle Name</label>
          <input type="text" name="middleName" class="form-control" id="middleName"
          placeholder="middlename" v-model="middleName">
          <p class="help-block">eg. Kariuki</p>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="form-group">
          <label for="lastName" class="label">Last Name</label>
          <input type="text" name="lastName" class="form-control" id="lastName"
          placeholder="lastname" v-model="lastName">
          <p class="help-block">eg. Maina</p>
        </div>
      </div>
    </div>

    <div class="row mar_ned">
      <div class="form-group">
        <label class="radio-inline">
          <input type="radio" name="optradio">Option 1
        </label>
        <label class="radio-inline">
          <input type="radio" name="optradio">Option 2
        </label>
        <label class="radio-inline">
          <input type="radio" name="optradio">Option 3
        </label>
      </div>
      </div>

    </div>

      <li class="col-sm-3 col-sm-offset-2">
        <router-link to="/home/membership">
        <span class="btn btn-info btn-block">
          Save and continue
        </span>
         </router-link>
      </li>

  </div>
</template>

<script>
export default {
  name: 'PersonalForm',
  data() {
    return {
      firstName: '',
      middleName: '',
      lastName: '',
    };
  },
  beforeCreate: function (){
    console.log('before create pi')
  },
  created: function (){
    console.log('created')
  },
  beforeMount: function (){
    console.log('before mount pi')
  },
  mounted: function (){
    console.log('mounted personal info');
  },
  beforeUpdate: function (){
    console.log('beforeupdate pi')
  },
  updated: function (){
    console.log('updating personal info');
  },
  beforeDestroy: function(){
    console.log('before destroy personal info')
  },
  destroyed: function(){
    console.log('destroyed personal info');
  }
};
</script>

<style>
</style>
