<template>
<div>
  <form @submit.prevent="validateBeforeSubmit">
    <legend>Residence and Nationality</legend>
    <div class="row">
      <fieldset>
        <div class="col-md-4">
          <div class="form-group">
            <label class="label">Country of Residence</label>
            <input name="country"  v-validate="'required|alpha'"
              :class="{'form-control': true }" type="text" placeholder="Country of residence"
              required>
            <i v-show="errors.has('country')" class="fa fa-warning"></i>
            <span v-show="errors.has('country')" class="text-danger">
              {{ errors.first('country') }}
            </span>
          </div>
        </div>
      </fieldset>
      <fieldset>
        <div class="col-md-4">
          <div class="form-group">
            <label class="label">City/ County of Residence</label>
            <input name="city" v-validate="'required|alpha'"
              :class="{'form-control': true }" placeholder="Enter City/ Country of residence"
              type="text" required>
            <i v-show="errors.has('city')" class="fa fa-warning"></i>
            <span v-show="errors.has('city')" class="text-danger">
              {{ errors.first('city') }}
            </span>
          </div>
        </div>
    </fieldset>
    <fieldset>
      <div class="col-md-4">
        <div class="form-group">
          <label class="label">Nationality</label>
          <input name="nationality"  v-validate="'required|alpha'"
            :class="{'form-control': true }" placeholder="Enter your nationality"
            type="text" required>
          <i v-show="errors.has('nationality')" class="fa fa-warning"></i>
          <span v-show="errors.has('nationality')" class="text-danger">
            {{ errors.first('nationality') }}
          </span>
        </div>
      </div>
    </fieldset>
    <fieldset>
      <div class="col-md-4">
        <div class="form-group">
          <label class="label">Home Address</label>
          <input name="home"  v-validate="'required|alpha'"
            :class="{'form-control': true }" placeholder="Enter your home address"
            type="text" required>
          <i v-show="errors.has('home')" class="fa fa-warning"></i>
          <span v-show="errors.has('home')" class="text-danger">
            {{ errors.first('home') }}
          </span>
        </div>
      </div>
    </fieldset>
    </div>
  </form>
     <div class="row">
          <div class="col-md-6">
            <div class="ibox ">
             <div class="ibox-title">
             <h5>Google Maps</h5>
            </div>
           <div class="ibox-content">
     <div class="google-map" id="map"></div>
    </div>
    </div>
     </div>
</div>
</div>
</template>

<script>
export default {
  name: 'LocationInformation',
  data: () => ({}),
  methods: {},
};
</script>

<style>
</style>
