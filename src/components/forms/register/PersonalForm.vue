<template>
  <div class="">
    <div class="step1">
      <h3>
        <b>Personal Details</b>
      </h3>
      <hr>
      <div class="row mar_ned">
        <div class="col-sm-4">
          <div class="form-group">
            <label for="firstName" class="label label-info">First Name</label>
            <input type="text" name="firstName" id="firstName" placeholder="First Name"
              v-model.trim="personal.firstName" v-validate="'required|alpha'"
              :class="{'form-control':true, 'isDanger':errors.has('firstName')}">
            <p class="help-block">eg. Sammy</p>
            <span v-show="errors.has('firstName')" class="text-danger">
              {{errors.first('firstName')}}
            </span>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="form-group">
            <label for="middleName" class="label label-info">middle Name</label>
            <input type="text" name="middleName" id="middleName"
            placeholder="Middle Name" v-model.trim="personal.middleName"
            v-validate="'required|alpha'"
            :class="{'form-control':true, 'isDanger':errors.has('middleName')}">
            <p class="help-block">eg. Kariuki</p>
            <span v-show="errors.has('middleName')" class="text-danger">
              {{errors.first('middleName')}}
            </span>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="form-group">
            <label for="lastName" class="label label-info">Last Name</label>
            <input type="text" name="lastName" class="form-control" id="lastName"
            placeholder="Last Name" v-model.trim="personal.lastName"
            v-validate="'required|alpha'"
            :class="{'form-control':true, 'isDanger':errors.has('lastName')}">
            <p class="help-block">eg. Ngugi</p>
            <span v-show="errors.has('lastName')" class="text-danger">
              {{errors.first('lastName')}}
            </span>
          </div>
        </div>
      </div>
      <div class="row mar_ned">
        <div class="col-sm-4">
          <div class="form-group">
            <label class="label label-info">Select your gender</label>
            <div class="funkyradio">
                <div class="funkyradio-info radio-inline">
                    <input type="radio" name="gender" id="male" v-model.trim="personal.gender"
                    v-validate="'required'" value="male">
                    <label for="male">Male</label>
                </div>
                <div class="funkyradio-info radio-inline">
                    <input type="radio" name="gender" id="female" v-model.trim="personal.gender"
                    v-validate="'required'" value="female">
                    <label for="female">Female</label>
                </div>
                <span v-show="errors.has('gender')" class="text-danger">
                  {{errors.first('gender')}}
                </span>
            </div>
          </div>
        </div>
      </div>
      <div class="row mar_ned">
        <div class="col-sm-4">
          <div class="form-group">
            <span class="label label-info">National ID</span>
            <input type="number" name="natId" v-model.number="personal.natId" id="natId"
            v-validate="'required|numeric'" placeholder="National ID"
            :class="{'form-control':true, 'isDanger':errors.has('natId')}">
            <p class="help-block">eg. 123456</p>
            <span v-show="errors.has('natId')" class="text-danger">
              {{errors.first('natId')}}
            </span>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="form-group">
            <label class="label label-info">Enter date for birth</label>
            <input type="date" name="dob" v-model="personal.dob"
            v-validate="'date_format:MM-DD-YYYY'"
              :class="{'form-control':true, 'isDanger':errors.has('dob')}">
            <p class="help-block">eg. 08/08/1990</p>
            <span v-show="errors.has('dob')" class="text-danger">
              {{errors.first('dob')}}
            </span>
          </div>
        </div>
      </div>
      <div class="row mar_ned">
        <div class="col-sm-8">
          <div class="form-group">
            <label class="label label-info">Marital Status</label>
            <div class="funkyradio">
                <div class="funkyradio-info radio-inline">
                    <input type="radio" name="martialStatus" id="single"
                    v-model.trim="personal.martialStatus" v-validate="'required'" value="single">
                    <label for="single">Single</label>
                </div>
                <div class="funkyradio-info radio-inline">
                    <input type="radio" name="martialStatus" id="married"
                    v-model.trim="personal.martialStatus" v-validate="'required'" value="married">
                    <label for="married">Married</label>
                </div>
                <div class="funkyradio-info radio-inline">
                    <input type="radio" name="martialStatus" id="widowed"
                    v-model.trim="personal.martialStatus" v-validate="'required'" value="widowed">
                    <label for="widowed">Widowed</label>
                </div>
                <div class="funkyradio-info radio-inline">
                    <input type="radio" name="martialStatus" id="separated"
                    v-model.trim="personal.martialStatus" v-validate="'required'" value="separated">
                    <label for="separated">Separated</label>
                </div>
                <span v-show="errors.has('martialStatus')" class="text-danger">
                  {{errors.first('martialStatus')}}
                </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonalForm',
  props: {
    personal: {},
  },
  data() {
    return {
    };
  },
};
</script>

<style>
</style>
