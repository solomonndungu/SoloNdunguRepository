<template>

  <form @submit.prevent="validateBeforeSubmit">
    <legend>Contact Information</legend>
    <div class="row">
      <fieldset>
      <div class="col-md-4">
        <div class="form-group">
          <label class="label">Primary Email</label>
          <input name="primaryEmail"  v-validate="'required|alpha'"
            :class="{'form-control': true }"
            type="text" placeholder="Primary Email">
          <i v-show="errors.has('primaryEmail')" class="fa fa-warning"></i>
          <span v-show="errors.has('primaryEmail')" class="text-danger">
            {{ errors.first('primaryEmail') }}
          </span>
        </div>
      </div>
      </fieldset>
      <fieldset>
      <div class="col-md-4">
        <div class="form-group">
          <label class="label">Alternative Email</label>
          <input name="alternativeEmail"  v-validate="'required|alpha'"
            :class="{'form-control': true }"
            type="text" placeholder="Enter your alternative email" required>
          <i v-show="errors.has('alternativeEmail')" class="fa fa-warning"></i>
          <span v-show="errors.has('alternativeEmail')" class="text-danger">
            {{ errors.first('alternativeEmail') }}
          </span>
        </div>
      </div>
      </fieldset>
      <fieldset>
      <div class="col-md-4">
        <div class="form-group">
          <label class="label">Primary Phone Number</label>
          <input name="priPhoneNumber"  v-validate="'required|alpha'"
            :class="{'form-control': true }"
            type="text" placeholder="primary phone number" required>
          <span class="text-muted">eg +254712345678</span>
          <i v-show="errors.has('primaryPhoneNumber')" class="fa fa-warning"></i>
          <span v-show="errors.has('primaryPhoneNumber')" class="text-danger">
            {{ errors.first('primaryPhoneNumber') }}
          </span>
        </div>
    </div>
      </fieldset>
      <fieldset>
      <div class="col-md-4">
        <div class="form-group">
          <label class="label">Home Phone Number</label>
          <input name="homePhoneNumber"  v-validate="'required|alpha'"
            :class="{'form-control': true }"
            type="text" placeholder="home phone number" required>
          <i v-show="errors.has('homePhoneNumber')" class="fa fa-warning"></i>
          <span v-show="errors.has('homePhoneNumber')" class="text-danger">
            {{ errors.first('homePhoneNumber') }}
          </span>
        </div>
    </div>
      </fieldset>
      <fieldset>
          <div class="col-md-4">
        <div class="form-group">
          <label class="label">Work Phone Number</label>
          <input name="workPhoneNumber"  v-validate="'required|alpha'"
            :class="{'form-control': true }"
            type="text" placeholder="work phone number" required>
          <i v-show="errors.has('workPhoneNumber')" class="fa fa-warning"></i>
          <span v-show="errors.has('workPhoneNumber')" class="text-danger">
            {{ errors.first('workPhoneNumber') }}
          </span>
        </div>
    </div>
      </fieldset>
      <fieldset>
          <div class="col-md-2">
        <div class="form-group">
          <label class="label">Postal Address</label>
          <input name="postalAddress"  v-validate="'required|alpha'"
            :class="{'form-control': true }"
            type="text" placeholder="postal Address" required>
          <i v-show="errors.has('postalAddress')" class="fa fa-warning"></i>
          <span v-show="errors.has('postalAddress')" class="text-danger">
            {{ errors.first('postalAddress') }}
          </span>
        </div>
    </div>
          <div class="col-md-2">
        <div class="form-group">
          <label class="label">Postal Code</label>
          <input name="postalCode"  v-validate="'required|alpha'"
            :class="{'form-control': true }"
            type="text" placeholder="postalCode" required>
          <i v-show="errors.has('postalCode')" class="fa fa-warning"></i>
          <span v-show="errors.has('postalCode')" class="text-danger">
            {{ errors.first('postalCode') }}
          </span>
        </div>
    </div>
              <div class="col-md-2">
        <div class="form-group">
          <label class="label">Town</label>
          <input name="town"  v-validate="'required|alpha'"
            :class="{'form-control': true }"
            type="text" placeholder="town" required>
          <i v-show="errors.has('town')" class="fa fa-warning"></i>
          <span v-show="errors.has('town')" class="text-danger">
            {{ errors.first('town') }}
          </span>
        </div>
    </div>
      </fieldset>
    </div>
  </form>
</template>

<script>
export default {
  name: 'ContactInformation',
  data: () => ({

  }),

};
</script>

<style>

</style>
