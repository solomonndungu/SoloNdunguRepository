<template>
  <div class="">
    <div class="step5">
      <h5>
        <b>Spiritual Details</b>
      </h5>
      <hr>
      <div class="row mar_ned">
        <div class="col-md-4 col-xs-3">
          <p align="right">
            <b>Date of Salvation</b>
          </p>
        </div>
        <div class="col-md-8 col-xs-9">
          <div class="row">
            <div class="col-md-4 col-xs-4 wdth">
              <select name="visa_status" id="visa_status"
              class="dropselectsec1" v-model="salvationDate">
                <option value="">Date</option>
                <option value="2">1</option>
              </select>
            </div>
            <div class="col-md-4 col-xs-4 wdth">
              <select name="visa_status" id="visa_status"
              class="dropselectsec1" v-model="salvationMonth">
                <option value="">Month</option>
                <option value="2">Jan</option>
              </select>
            </div>
            <div class="col-md-4 col-xs-4 wdth">
              <select name="visa_status" id="visa_status"
              class="dropselectsec1" v-model="salvationYear">
                <option value="">Year</option>
                <option value="2">1990</option>
              </select>
            </div>
          </div>
        </div>
      </div>
            <div class="row mar_ned">
        <div class="col-md-4 col-xs-3">
          <p align="right">
            <b>Date of Baptism</b>
          </p>
        </div>
        <div class="col-md-8 col-xs-9">
          <div class="row">
            <div class="col-md-4 col-xs-4 wdth">
              <select name="visa_status" id="visa_status"
              class="dropselectsec1" v-model="baptismDate">
                <option value="">Date</option>
                <option value="2">1</option>
              </select>
            </div>
            <div class="col-md-4 col-xs-4 wdth">
              <select name="visa_status" id="visa_status"
              class="dropselectsec1" v-model="baptismMonth">
                <option value="">Month</option>
                <option value="2">Jan</option>
              </select>
            </div>
            <div class="col-md-4 col-xs-4 wdth">
              <select name="visa_status" id="visa_status"
              class="dropselectsec1" v-model="baptismYear">
                <option value="">Year</option>
                <option value="2">1990</option>
              </select>
            </div>
          </div>
        </div>
      </div>
            <div class="row mar_ned">
        <div class="col-md-4 col-xs-3">
          <p align="right">
            <b>Date of First Service Attendace</b>
          </p>
        </div>
        <div class="col-md-8 col-xs-9">
          <div class="row">
            <div class="col-md-4 col-xs-4 wdth">
              <select name="visa_status" id="visa_status"
              class="dropselectsec1" v-model="serviceDate">
                <option value="">Date</option>
                <option value="2">1</option>
              </select>
            </div>
            <div class="col-md-4 col-xs-4 wdth">
              <select name="visa_status" id="visa_status"
              class="dropselectsec1" v-model="serviceMonth">
                <option value="">Month</option>
                <option value="2">Jan</option>
              </select>
            </div>
            <div class="col-md-4 col-xs-4 wdth">
              <select name="visa_status" id="visa_status"
              class="dropselectsec1" v-model="serviceYear">
                <option value="">Year</option>
                <option value="2">1990</option>
              </select>
            </div>
          </div>
        </div>
        <h5>
        <b>Church Participation History</b>
      </h5>
      <div class="col-md-8 col-xs-9">
          <input type="text" name="email" id="email"
          placeholder="Church Name"
          class="dropselectsec" autocomplete="off" v-model="churchName">
        </div>
        <div class="col-md-8 col-xs-9">
          <input type="text" name="email" id="email"
          placeholder="From Date"
          class="dropselectsec" autocomplete="off" v-model="fromDate">
        </div>
        <div class="col-md-8 col-xs-9">
          <input type="text" name="email" id="email"
          placeholder="Your Roles"
          class="dropselectsec" autocomplete="off" v-model="yourRoles">
        </div>
        <div class="col-md-8 col-xs-9">
          <button>Add</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SpiritualForm',
  data() {
    return {
      salvationDate: '',
      salvationMonth: '',
      salvationYear: '',
      baptismDate: '',
      baptismMonth: '',
      baptismYear: '',
      serviceDate: '',
      serviceMonth: '',
      serviceYear: '',
      churchName: '',
      yourRoles: '',
      fromDate: '',
    };
  },
};
</script>

<style>

</style>
