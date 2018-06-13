<template>

  <form @submit.prevent="validateBeforeSubmit">
    <legend>Spiritual Information</legend>
    <div class="row">
    <fieldset>
    <div class="col-sm-4">
      <div class="form-group">
        <label class="label">Date of Salvation</label>
        <input name="salvationDate" v-model="idNumber" v-validate="'required|numeric'"
          :class="{'form-control': true }"
          type="date" placeholder="Enter date of salvation" required>
        <i v-show="errors.has('salvationDate')" class="fa fa-warning"></i>
        <span v-show="errors.has('salvationDate')" class="text-danger">
          {{ errors.first('salvationDate') }}
        </span>
      </div>
    </div>
    </fieldset>
    <fieldset>
    <div class="col-sm-4">
      <div class="form-group">
        <label class="label">Date of Baptism</label>
        <input name="baptismDate" v-model="idNumber" v-validate="'required|numeric'"
          :class="{'form-control': true }"
          type="date" placeholder="Enter date of baptism" required>
        <i v-show="errors.has('baptismDate')" class="fa fa-warning"></i>
        <span v-show="errors.has('baptismDate')" class="text-danger">
          {{ errors.first('baptismDate') }}
        </span>
      </div>
    </div>
    </fieldset>
        <fieldset>
    <div class="col-sm-4">
      <div class="form-group">
        <label class="label">Date of First Service Attendance</label>
        <input name="firstServiceDate" v-model="idNumber" v-validate="'required|numeric'"
          :class="{'form-control': true }"
          type="date" placeholder="Enter date of first service Attendace" required>
        <i v-show="errors.has('firstServiceDate')" class="fa fa-warning"></i>
        <span v-show="errors.has('firstServiceDate')" class="text-danger">
          {{ errors.first('firstServiceDate') }}
        </span>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="form-group">
        <label class="label">Date of LRC Membership </label>
        <input name="membershipDate" v-model="idNumber" v-validate="'required|numeric'"
          :class="{'form-control': true }"
          type="date" placeholder="Enter date of LRC Membership" required>
        <i v-show="errors.has('membershipDate')" class="fa fa-warning"></i>
        <span v-show="errors.has('membershipDate')" class="text-danger">
          {{ errors.first('membershipDate') }}
        </span>
      </div>
    </div>
    </fieldset>
      <legend>Church Participation History</legend>
      <fieldset>
      <div class="col-md-2">
        <div class="form-group">
          <label class="label">Church Name</label>
          <input name="churchName" v-model="churchName" v-validate="'required|alpha'"
            :class="{'form-control': true }"
            type="text" placeholder="Eg Delivarance Church Githurai" required>
          <i v-show="errors.has('churchName')" class="fa fa-warning"></i>
          <span v-show="errors.has('churchName')" class="text-danger">
            {{ errors.first('churchName') }}
          </span>
        </div>
    </div>
        <div class="col-sm-2">
      <div class="form-group">
        <label class="label">From Date/Year</label>
        <input name="fromDate" v-model="idNumber" v-validate="'required|numeric'"
          :class="{'form-control': true }"
          type="date" placeholder="" required>
        <i v-show="errors.has('fromDate')" class="fa fa-warning"></i>
        <span v-show="errors.has('fromDate')" class="text-danger">
          {{ errors.first('fromDate') }}
        </span>
      </div>
    </div>
            <div class="col-sm-2">
      <div class="form-group">
        <label class="label">To Date/Year</label>
        <input name="toDate" v-model="idNumber" v-validate="'required|numeric'"
          :class="{'form-control': true }"
          type="date" placeholder="" required>
        <i v-show="errors.has('toDate')" class="fa fa-warning"></i>
        <span v-show="errors.has('toDate')" class="text-danger">
          {{ errors.first('toDate') }}
        </span>
      </div>
    </div>
       <div class="col-md-2">
        <div class="form-group">
          <label class="label">Your Role(s)</label>
          <input name="roles" v-model="churchName" v-validate="'required|alpha'"
            :class="{'form-control': true }"
            type="text" placeholder="Eg Pastor,Worhip Leader,Member etc" required>
          <i v-show="errors.has('role')" class="fa fa-warning"></i>
          <span v-show="errors.has('role')" class="text-danger">
            {{ errors.first('role') }}
          </span>
        </div>
    </div>
           <div class="col-md-2">
        <div class="form-group">
          <button class="btn btn-default"><span class="glyphicon glyphicon-plus"></span></button>
          <button class="btn btn-default"><span class="glyphicon glyphicon-minus"></span></button>
        </div>
    </div>
    </fieldset>
    </div>

  </form>

</template>

<script>
export default {
  name: 'SpiritualInformation',
  data: () => ({

  }),

};
</script>

<style>

</style>
