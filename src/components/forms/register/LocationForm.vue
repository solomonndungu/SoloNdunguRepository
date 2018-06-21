<template>
<div class="">
  <div class="step3">
    <h5>
      <b>Location Details</b>
    </h5>
    <hr>
    <div class="row mar_ned">
        <div class="col-md-4 col-xs-3">
          <p align="right">
            <b>Country of Residence</b>
          </p>
        </div>
        <div class="col-md-8 col-xs-9">
          <input type="text" name="email" id="email"
          placeholder="Coutry of Residence"
          class="dropselectsec" autocomplete="off" v-model="country">
        </div>
      </div>
      <div class="row mar_ned">
        <div class="col-md-4 col-xs-3">
          <p align="right">
            <b>City/County of Residence</b>
          </p>
        </div>
        <div class="col-md-8 col-xs-9">
          <input type="text" name="email" id="email"
          placeholder="City/County of Residence"
          class="dropselectsec" autocomplete="off" v-model="city">
        </div>
      </div>
          <div class="row mar_ned">
        <div class="col-md-4 col-xs-3">
          <p align="right">
            <b>Nationality</b>
          </p>
        </div>
        <div class="col-md-8 col-xs-9">
          <input type="text" name="email" id="email"
          placeholder="Nationality"
          class="dropselectsec" autocomplete="off" v-model="nationality">
        </div>
      </div>
          <div class="row mar_ned">
        <div class="col-md-4 col-xs-3">
          <p align="right">
            <b>Area of Residence</b>
          </p>
        </div>
        <div class="col-md-8 col-xs-9">
          <input type="text" name="email" id="email"
          placeholder="Area of Residence"
          class="dropselectsec" autocomplete="off" v-model="area">
        </div>
      </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'LocationForm',
  data() {
    return {
      country: '',
      city: '',
      area: '',
      nationality: '',
    };
  },
};
</script>

<style>
</style>
