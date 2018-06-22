<template>
<div>
  <div class="step2">
    <h5>Lrc Membership Details</h5>
    <hr>
    <div class="row mar_ned">
       <div class="col-md-4 col-xs-3">
           <p align="right">
             <b>Are you a registerd LRC member?</b>
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
            <b>Date of LRC Membership</b>
          </p>
        </div>
        <div class="col-md-8 col-xs-9">
          <div class="row">
            <div class="col-md-4 col-xs-4 wdth">
              <select name="visa_status" id="visa_status"
              class="dropselectsec1" v-model="date">
                <option value="">Date</option>
                <option value="2">1</option>
              </select>
            </div>
            <div class="col-md-4 col-xs-4 wdth">
              <select name="visa_status" id="visa_status"
              class="dropselectsec1" v-model="month">
                <option value="">Month</option>
                <option value="2">Jan</option>
              </select>
            </div>
            <div class="col-md-4 col-xs-4 wdth">
              <select name="visa_status" id="visa_status"
              class="dropselectsec1" v-model="year">
                <option value="">Year</option>
                <option value="2">1990</option>
              </select>
            </div>
          </div>
        </div>
      </div>
  </div>

     <li class="col-sm-3 col-sm-offset-2">
       <router-link to="/home/personal">
        <span class="btn btn-info btn-block">
          Previous
        </span>
        </router-link>
      </li>

</div>

</template>

<script>
export default {
  name: 'Membership',
  data() {
    return {
      picked: '',
      date: '',
      month: '',
      year: '',
    };
  },
  beforeDestroy: function () {
    console.log('membership');
  },
};
</script>

<style>

</style>
