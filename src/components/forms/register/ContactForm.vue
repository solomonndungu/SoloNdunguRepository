<template>
  <div class="">
    <div class="step2">
      <h3>
        <b>Contact Details</b>
      </h3>
      <hr>
      <div class="row mar_ned">
        <div class="col-md-4 col-xs-3">
          <p align="right">
            <b>Primary Email</b>
          </p>
        </div>
        <div class="col-md-8 col-xs-9">
          <input type="text" name="email" id="email"
          placeholder="Primary Email"
          class="dropselectsec" autocomplete="off" v-model="contactDetails.priEmail">
        </div>
      </div>
      <div class="row mar_ned">
        <div class="col-md-4 col-xs-3">
          <p align="right">
            <b>Alternative Email</b>
          </p>
        </div>
        <div class="col-md-8 col-xs-9">
          <input type="text" name="altemail" id="altemail"
          placeholder="Alternative Email"
          class="dropselectsec" autocomplete="off" v-model="contactDetails.altEmail">
        </div>
      </div>
      <div class="row mar_ned">
        <div class="col-md-4 col-xs-3">
          <p align="right">
            <b>Primary Phone Number</b>
          </p>
        </div>
        <div class="col-md-8 col-xs-9">
          <input type="text" name="phoneno" id="phoneno"
          placeholder="Primary Phone number"
          class="dropselectsec" autocomplete="off" v-model="contactDetails.priEmail">
        </div>
      </div>
      <div class="row mar_ned">
        <div class="col-md-4 col-xs-3">
          <p align="right">
            <b>Home Phone Number</b>
          </p>
        </div>
        <div class="col-md-8 col-xs-9">
          <input type="text" name="homephone" id="homephone"
          placeholder="Home Phone Number"
          class="dropselectsec" autocomplete="off" v-model="contactDetails.homePhone">
        </div>
      </div>
      <div class="row mar_ned">
        <div class="col-md-4 col-xs-3">
          <p align="right">
            <b>Work phone number</b>
          </p>
        </div>
        <div class="col-md-8 col-xs-9">
          <input type="text" name="workphone" id="workphone"
          placeholder="work phone number"
          class="dropselectsec" autocomplete="off" v-model="contactDetails.workPhone">
        </div>
      </div>
          <div class="row mar_ned">
        <div class="col-md-4 col-xs-3">
          <p align="right">
            <b>Postal Address</b>
          </p>
        </div>
        <div class="col-md-8 col-xs-9">
          <input type="text" name="family" id="family"
          placeholder="Postal Address"
          class="dropselectsec" autocomplete="off" v-model="contactDetails.postalAddress">
        </div>
      </div>
                <div class="row mar_ned">
        <div class="col-md-4 col-xs-3">
          <p align="right">
            <b>Postal code</b>
          </p>
        </div>
        <div class="col-md-8 col-xs-9">
          <input type="text" name="family" id="family"
          placeholder="Postal code "
          class="dropselectsec" autocomplete="off" v-model="contactDetails.postalCode">
        </div>
      </div>
                <div class="row mar_ned">
        <div class="col-md-4 col-xs-3">
          <p align="right">
            <b>Town</b>
          </p>
        </div>
        <div class="col-md-8 col-xs-9">
          <input type="text" name="family" id="family"
          placeholder="Town"
          class="dropselectsec" autocomplete="off" v-model="contactDetails.town">
        </div>
      </div>
      {{contactDetails}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      contactDetails: {
        priEmail: '',
        altEmail: '',
        priPhone: '',
        homePhone: '',
        workPhone: '',
        postalAddress: '',
        postalCode: '',
        town: '',
      },
    };
  },
  methods: {
    postToBackEnd() {
    },
  },
};
</script>

<style>

</style>
