<template>
  <form @submit.prevent="validateBeforeSubmit">
    <div class="row">
      <div class="col-md-4">
        <div class="form-group">
          <label class="label">First name</label>
          <input name="firstname" v-model="firstname" v-validate="'required|alpha'"
            :class="{'form-control': true }"
            type="text" placeholder="First Name">
          <i v-show="errors.has('firstname')" class="fa fa-warning"></i>
          <span v-show="errors.has('firstname')" class="text-danger">
            {{ errors.first('firstname') }}
          </span>
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <label class="label">Middle name</label>
          <input name="middlename" v-model="middlename" v-validate="'required|alpha'"
            :class="{'form-control': true }"
            type="text" placeholder="Middle Name" required>
          <i v-show="errors.has('middlename')" class="fa fa-warning"></i>
          <span v-show="errors.has('middlename')" class="text-danger">
            {{ errors.first('middlename') }}
          </span>
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <label class="label">Last name</label>
          <input name="lastname" v-model="lastname" v-validate="'required|alpha'"
            :class="{'form-control': true }"
            type="text" placeholder="Last Name" required>
          <i v-show="errors.has('lastname')" class="fa fa-warning"></i>
          <span v-show="errors.has('lastname')" class="text-danger">
            {{ errors.first('lastname') }}
          </span>
        </div>
    </div>
    </div>
      <div class="col-md-12">
      <div class="form-group">
        <label class="label">Select Your Gender</label>
        <label class="radio-inline">
          <input type="radio" name="male" required>Male
        </label>
        <label class="radio-inline">
          <input type="radio" name="female" required>Female
        </label>
      </div>
    </div>
    <div class="col-md-4">
      <div class="form-group">
      <label class="label">ID Number</label>
      <input name="idNumber" v-model="idNumber" v-validate="'required|numeric'"
        :class="{'form-control': true }"
        type="number" placeholder="Enter ID Number" required>
      <i v-show="errors.has('idNumber')" class="fa fa-warning"></i>
      <span v-show="errors.has('idNumber')" class="text-danger">
        {{ errors.first('idNumber') }}
      </span>
      </div>
    </div>
    <div class="col-sm-4 pull-left">
      <div class="form-group">
        <label class="label">Enter Birth Date</label>
        <input name="idNumber" v-model="idNumber" v-validate="'required|numeric'"
          :class="{'form-control': true }"
          type="number" placeholder="Enter ID Number" required>
        <i v-show="errors.has('idNumber')" class="fa fa-warning"></i>
        <span v-show="errors.has('idNumber')" class="text-danger">
          {{ errors.first('idNumber') }}
        </span>
      </div>
    </div>

    <div class="col-md-12">
      <div class="form-group">
        <label class="label">Martial Status</label>
        <label class="radio-inline">
          <input type="radio" name="married" required>married
        </label>
        <label class="radio-inline">
          <input type="radio" name="single" required>Single
        </label>
        <label class="radio-inline">
          <input type="radio" name="separated" required>Separated
        </label>
        <label class="radio-inline">
          <input type="radio" name="widowed" required>Widowed
        </label>
      </div>
    </div>

  </form>
</template>

<script>
export default {
  name: 'BioData',
  data: () => ({

  }),
  methods: {
  },
};
</script>

<style>

</style>
