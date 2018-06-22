<template>
  <div class="col-xs-12">
    <div class="step2">
      <h3>
        <b>Contact Details</b>
      </h3>
      <hr>
      <div class="row mar_ned">
        <div class="col-md-6">
          <div class="form-group">
            <label class="label label-info" for="priEmail">Primary Email</label>
            <input type="email" name="priEmail" id="priEmail" placeholder="Primary Email"
            autocomplete="off" v-model="contact.priEmail" v-validate="'required'"
            :class="{'form-control':true, 'isDanger':errors.has('priEmail')}">
            <span v-show="errors.has('priEmail')" class="text-danger text-center">
              {{errors.first('priEmail')}}
            </span>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label class="label label-info" for="altEmail">Alternative Email</label>
            <input type="email" name="altEmail" id="altEmail" placeholder="Alternative Email"
            autocomplete="off" v-model="contact.altEmail" v-validate="'required|email'"
            :class="{'form-control':true, 'isDanger':errors.has('altEmail')}">
            <span v-show="errors.has('altEmail')" class="text-danger text-center">
              {{errors.first('altEmail')}}
            </span>
          </div>
        </div>
      </div>
      <div class="row mar_ned">
        <div class="col-md-4">
          <div class="form-group">
            <label class="label label-info" for="priPhone">Primary Phone Number</label>
            <input type="number" name="priPhone" id="priPhone" v-validate="'required'"
            placeholder="Primary Phone number" autocomplete="off" v-model="contact.priPhone"
            :class="{'form-control':true, 'isDanger':errors.has('priPhone')}">
            <span v-show="errors.has('priPhone')" class="text-danger text-center">
              {{errors.first('priPhone')}}
            </span>
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group">
            <label class="label label-info" for="homePhone">Home Phone Number</label>
            <input type="number" name="homePhone" id="homePhone" v-validate="'required|numeric'"
            placeholder="Home Phone Number" autocomplete="off" v-model="contact.homePhone"
            :class="{'form-control':true, 'isDanger':errors.has('homePhone')}">
            <span v-show="errors.has('homePhone')" class="text-danger text-center">
              {{errors.first('homePhone')}}
            </span>
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group">
            <label class="label label-info" for="workPhone">Work phone number</label>
            <input type="numbers" name="workPhone" id="workPhone" placeholder="work phone number"
            v-validate="'required|numeric'" autocomplete="off" v-model="contact.workPhone"
            :class="{'form-control':true, 'isDanger':errors.has('workPhone')}">
            <span v-show="errors.has('workPhone')" class="text-danger text-center">
              {{errors.first('workPhone')}}
            </span>
          </div>
        </div>
      </div>
      <div class="row mar_ned">
        <div class="col-md-12">
          <div class="form-group">
            <div class="col-md-12">
              <p align=" ">
                <b class="label label-info" for="postalAdd">Postal Address</b>
              </p>
            </div>
            <div class="col-md-12 col-xs-9">
              <input type="text" name="postalAdd" id="postalAdd" placeholder="Postal Address"
              v-validate="'required|alpha'" autocomplete="off" v-model="contact.postalAdd"
              :class="{'form-control':true, 'isDanger':errors.has('postalAdd')}">
              <span v-show="errors.has('postalAdd')" class="text-danger text-center">
                {{errors.first('postalAdd')}}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="row mar_ned">
        <div class="col-md-12">
          <div class="form-group">
            <div class="col-md-12">
              <p align=" ">
                <b class="label label-info" for="postCode">Postal code</b>
              </p>
            </div>
            <div class="col-md-12">
              <input type="numbers" name="postCode" id="postCode" placeholder="Postal code "
              v-validate="'required|numeric'" autocomplete="off" v-model="contact.postalCode"
              :class="{'form-control':true, 'isDanger':errors.has('postalCode')}">
              <span v-show="errors.has('postalCode')" class="text-danger text-center">
                {{errors.first('postalCode')}}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="row mar_ned">
        <div class="col-md-12">
          <div class="form-group">
            <div class="col-md-12">
              <p align=" ">
                <b class="label label-info" for="town">Town</b>
              </p>
            </div>
            <div class="col-md-12">
              <input type="text" name="town" id="town" v-validate="'required|alpha'"
              placeholder="Town" v-model="contact.town"
              :class="{'form-control':true, 'isDanger':errors.has('town')}">
              <span v-show="errors.has('town')" class="text-danger text-center">
                {{errors.first('town')}}
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
  name: 'ContactForm',
  props: {
    contact: {},
  },
  data() {
    return {};
  },
};
</script>

<style>

</style>
