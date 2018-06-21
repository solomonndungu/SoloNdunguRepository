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
  </div>
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
};
</script>

<style>
</style>
