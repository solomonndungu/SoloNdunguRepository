<template>
  <form @submit.prevent="validateBeforeSubmit">
    <legend>Profession Details</legend>
    <div class="row">
      <fieldset>
        <div class="col-md-12">
          <div class="form-group">
            <label class="label">Occupation Status</label>
            <label class="radio-inline">
              <input type="radio" name="occupation" v-model="employed" required>Employed
            </label>
            <label class="radio-inline">
              <input type="radio" name="occupation" v-model="selfEmployed" required>Self-Employed
            </label>
            <label class="radio-inline">
              <input type="radio" name="occupation" v-model="unEmployed" required>Unemployed
            </label>
          </div>
        </div>
      </fieldset>
      <fieldset>
        <div class="col-md-4">
          <div class="form-group">
            <label for="expertise">Area of Expertise</label>
            <select name="expertise" id="expertise" class="form-control"
            placeholder="Area of Expertise">
              <option value=""> job </option>
            </select>
          </div>
        </div>
      </fieldset>
      <fieldset>
        <legend>Work/ Employment History</legend>
        <div class="col-md-2">
          <div class="form-group">
            <label class="label">Institution</label>
            <input name="institution" v-model="institution" v-validate="'required|alpha'"
              :class="{'form-control': true }"
              type="text" placeholder="Institution">
            <i v-show="errors.has('institution')" class="fa fa-warning"></i>
            <span v-show="errors.has('institution')" class="text-danger">
              {{ errors.first('institution') }}
            </span>
          </div>
        </div>
        <div class="col-md-2">
          <div class="form-group">
            <label class="label">From Date/ Year</label>
            <input name="employmentStart" v-model="employmentStart" v-validate="'required|alpha'"
              :class="{'form-control': true }"
              type="date" required>
            <i v-show="errors.has('employmentStart')" class="fa fa-warning"></i>
            <span v-show="errors.has('employmentStart')" class="text-danger">
              {{ errors.first('employmentStart') }}
            </span>
          </div>
        </div>
        <div class="col-md-2">
          <div class="form-group">
            <label class="label">End Date/ Year</label>
            <input name="employmentEnd" v-model="employmentEnd" v-validate="'required|alpha'"
              :class="{'form-control': true }"
              type="date" required>
            <i v-show="errors.has('employmentEnd')" class="fa fa-warning"></i>
            <span v-show="errors.has('employmentEnd')" class="text-danger">
              {{ errors.first('employmentEnd') }}
            </span>
          </div>
        </div>
        <div class="col-md-2">
          <div class="form-group">
            <label class="label">Role</label>
            <input name="employmentRole" v-model="employmentRole" v-validate="'required|alpha'"
              :class="{'form-control': true }"
              type="date" required>
            <i v-show="errors.has('employmentRole')" class="fa fa-warning"></i>
            <span v-show="errors.has('employmentRole')" class="text-danger">
              {{ errors.first('employmentRole') }}
            </span>
          </div>
        </div>
      </fieldset>
    </div>
  </form>
</template>

<script>
export default {
  name: 'ProfessionInformation',
  data: () => ({}),
  methods: {},
};
</script>

<style>
</style>
