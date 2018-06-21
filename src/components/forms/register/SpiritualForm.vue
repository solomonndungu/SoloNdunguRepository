<template>
  <div class="">
    <div class="step5">
      <h5>
        <b>Spiritual Details</b>
      </h5>
      <hr>
      <div class="row mar_ned">
      </div>
      <div class="row mar_ned">
        <div class="col-md-4 col-xs-3">
          <p align="right">
            <b>Date of birth</b>
          </p>
        </div>
        <div class="col-md-8 col-xs-9">
          <div class="row">
            <div class="col-md-4 col-xs-4 wdth">
              <select name="visa_status" id="visa_status"
              class="dropselectsec1">
                <option value="">Date</option>
                <option value="2">1</option>
              </select>
            </div>
            <div class="col-md-4 col-xs-4 wdth">
              <select name="visa_status" id="visa_status"
              class="dropselectsec1">
                <option value="">Month</option>
                <option value="2">Jan</option>
              </select>
            </div>
            <div class="col-md-4 col-xs-4 wdth">
              <select name="visa_status" id="visa_status"
              class="dropselectsec1">
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
            <b>Marital Status</b>
          </p>
        </div>
        <div class="col-md-8 col-xs-9">
          <label class="radio-inline">
            <input type="radio" name="inlineRadioOptions" id="inlineRadio2"
            value="option2"> Single
          </label>
          <label class="radio-inline">
            <input type="radio" name="inlineRadioOptions" id="inlineRadio3"
            value="option3"> Married
          </label>
        </div>
      </div>
      <div class="row mar_ned">
        <div class="col-md-4 col-xs-3">
          <p align="right">
            <b>Highest Education</b>
          </p>
        </div>
        <div class="col-md-8 col-xs-9">
          <select name="highest_qualification" id="highest_qualification"
          class="dropselectsec">
            <option value=""> Select Highest Education</option>
            <option value="1">Ph.D</option>
          </select>
        </div>
      </div>
      <div class="row mar_ned">
        <div class="col-md-4 col-xs-3">
          <p align="right">
            <b>Specialization</b>
          </p>
        </div>
        <div class="col-md-8 col-xs-9">
          <input type="text" name="specialization" id="specialization"
          placeholder="Specialization"
          class="dropselectsec" autocomplete="off">
        </div>
      </div>
      <div class="row mar_ned">
        <div class="col-md-4 col-xs-3">
          <p align="right">
            <b>Year of Passed Out</b>
          </p>
        </div>
        <div class="col-md-8 col-xs-9">
          <select name="year_of_passedout" id="year_of_passedout"
          class="birthdrop">
            <option value="">Year</option>
            <option value="1980">1980</option>
          </select>
        </div>
      </div>
      <div class="row mar_ned">
        <div class="col-md-4 col-xs-3">
          <p align="right">
            <b>Total Experience</b>
          </p>
        </div>
        <div class="col-md-8 col-xs-9">
          <div class="row">
            <div class="col-md-6 col-xs-6 wdth">
              <select name="visa_status" id="visa_status"
              class="dropselectsec1">
                <option value="">Month</option>
                <option value="2">Jan</option>
              </select>
            </div>
            <div class="col-md-6 col-xs-6 wdth">
            </div>
          </div>
        </div>
      </div>
      <div class="row mar_ned">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SpiritualForm',

};
</script>

<style>

</style>
