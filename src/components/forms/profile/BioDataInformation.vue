<template>
  <form @submit.prevent="validateBeforeSubmit">
    <legend>Bio Data Form</legend>
    <div class="row">
      <fieldset>
        <div class="col-md-4">
          <input type="url" src="" alt=""
          :class="{ 'form-control':true }" name="avatar" placeholder="picture"
          v-model="avatar" v-validate="'required| url'">
          <i v-show="errors.has(avatar)" class="fa fa-warning"></i>
          <span v-show="errors.has('avatar')" class="text-danger">
            {{ errors.first('avatar') }}
          </span>
        </div>
      </fieldset>
      <fieldset>
      <div class="col-md-4">
        <div class="form-group">
          <label class="label">First name</label>
          <input name="firstName" v-model="firstname" v-validate="'required|alpha'"
            :class="{'form-control': true }"
            type="text" placeholder="First Name">
          <i v-show="errors.has('firstName')" class="fa fa-warning"></i>
          <span v-show="errors.has('firstName')" class="text-danger">
            {{ errors.first('firstName') }}
          </span>
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <label class="label">Middle name</label>
          <input name="middleName" v-model="middlename" v-validate="'required|alpha'"
            :class="{'form-control': true }"
            type="text" placeholder="Middle Name" required>
          <i v-show="errors.has('middleName')" class="fa fa-warning"></i>
          <span v-show="errors.has('middleName')" class="text-danger">
            {{ errors.first('middleName') }}
          </span>
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <label class="label">Last name</label>
          <input name="lastName" v-model="lastname" v-validate="'required|alpha'"
            :class="{'form-control': true }"
            type="text" placeholder="Last Name" required>
          <i v-show="errors.has('lastName')" class="fa fa-warning"></i>
          <span v-show="errors.has('lastName')" class="text-danger">
            {{ errors.first('lastName') }}
          </span>
        </div>
    </div>
    </fieldset>
    <fieldset>
    <div class="col-md-12">
      <div class="form-group">
        <label class="label">Select Your Gender</label>
        <label class="radio-inline">
          <input type="radio" name="gender" v-model="genderMale" required>Male
        </label>
        <label class="radio-inline">
          <input type="radio" name="gender" v-model="genderFemale" required>Female
        </label>
      </div>
    </div>
    </fieldset>
    <fieldset>
    <div class="col-md-4">
      <div class="form-group">
      <label class="label">Area of expertise</label>
      <input name="idNumber" v-model="idNumber" v-validate="'required|numeric'"
        :class="{'form-control': true }"
        type="number" placeholder="Enter ID Number" required>
      <i v-show="errors.has('idNumber')" class="fa fa-warning"></i>
      <span v-show="errors.has('idNumber')" class="text-danger">
        {{ errors.first('idNumber') }}
      </span>
      </div>
    </div>
    </fieldset>
    <fieldset>
    <div class="col-sm-4">
      <div class="form-group">
        <label class="label">Enter Birth Date</label>
        <input name="birthDate" v-model="idNumber" v-validate="'required|numeric'"
          :class="{'form-control': true }"
          type="date" placeholder="Enter date of birth" required>
        <i v-show="errors.has('birthDate')" class="fa fa-warning"></i>
        <span v-show="errors.has('birthDate')" class="text-danger">
          {{ errors.first('birthDate') }}
        </span>
      </div>
    </div>
    </fieldset>
    <fieldset>
    <div class="col-md-12">
      <div class="form-group">
        <label class="label">Martial Status</label>
        <label class="radio-inline">
          <input type="radio" name="maritalStatus" v-model="statusMarried" required>married
        </label>
        <label class="radio-inline">
          <input type="radio" name="maritalStatus" v-model="statusSingle" required>Single
        </label>
        <label class="radio-inline">
          <input type="radio" name="maritalStatus" v-model="statusSeparated" required>Separated
        </label>
        <label class="radio-inline">
          <input type="radio" name="maritalStatus" v-model="statusWidowed" required>Widowed
        </label>
      </div>
    </div>
    </fieldset>
    </div>
  </form>
</template>

<script>
export default {
  name: 'BioDataInformation',
  data: () => ({}),
  methods: {},
};
</script>

<style>
</style>
