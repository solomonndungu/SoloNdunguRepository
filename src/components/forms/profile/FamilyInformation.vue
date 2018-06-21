<template>
  <form @submit.prevent="validateBeforeSubmit">
    <legend>Family Relationship</legend>
    <div class="row">
      <fieldset>
        <div class="col-md-4">
          <div class="form-group">
            <label for="spouce">Name of spouce</label>
            <select name="spouce" id="spouce" class="form-control"
            placeholder="" v-validate="'required|alpha'">
              <option value=""> name </option>
            </select>
          </div>
        </div>
      </fieldset>
      <fieldset>
        <div class="col-md-4">
          <div class="form-group">
            <label class="label">Are they a memeber of LRC ?</label>
            <label class="radio-inline">
              <input type="radio" name="spouceMember" required>Yes
            </label>
            <label class="radio-inline">
              <input type="radio" name="spouceMember" required>No
            </label>
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group">
            <input name="altChurch" id="altChurch" class="form-control"
            placeholder="name of the church" v-validate="'required|alpha'">
          </div>
        </div>
      </fieldset>
      <fieldset>
        <div class="col-md-4">
          <div class="form-group">
            <label class="label">Do you have any children ?</label>
            <label class="radio-inline">
              <input type="radio" name="child" required>Yes
            </label>
            <label class="radio-inline">
              <input type="radio" name="child" required>No
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
        <legend>Children Details</legend>
        <div class="col-md-2">
          <div class="form-group">
            <label class="label">Child's Name</label>
            <input name="childName" v-validate="'required|alpha'"
              :class="{'form-control': true }"
              type="text" placeholder="Child's Name">
            <i v-show="errors.has('childName')" class="fa fa-warning"></i>
            <span v-show="errors.has('childName')" class="text-danger">
              {{ errors.first('childName') }}
            </span>
          </div>
        </div>
        <div class="col-md-2">
          <div class="form-group">
            <label class="label">Date Of Birth</label>
            <input name="dobChild" v-validate="'required'"
              :class="{'form-control': true }"
              type="date" required>
            <i v-show="errors.has('dobChild')" class="fa fa-warning"></i>
            <span v-show="errors.has('dobChild')" class="text-danger">
              {{ errors.first('dobChild') }}
            </span>
          </div>
        </div>
        <div class="col-md-2">
          <div class="form-group">
            <label class="label">Dedication Year</label>
            <input name="dedicationPeriod" v-validate="'required'"
              :class="{'form-control': true }"
              type="date" required>
            <i v-show="errors.has('dedicationPeriod')" class="fa fa-warning"></i>
            <span v-show="errors.has('dedicationPeriod')" class="text-danger">
              {{ errors.first('dedicationPeriod') }}
            </span>
          </div>
        </div>
        <div class="col-md-2">
       <div class="form-group">
          <label class="label">LRC Member ?</label>
          <label class="radio-inline">
            <input type="radio" name="childChurch" required>Yes
          </label>
          <label class="radio-inline">
            <input type="radio" name="childChurch" required>No
          </label>
        </div>
        </div>
        <div class="col-md-4">
          <div class="form-group">
            <input name="ChildChurch" id="ChildChurch" class="form-control"
            placeholder="name of the church" v-validate="'required|alpha'">
          </div>
        </div>
      </fieldset>
      <fieldset>
        <legend>Next Of Kin</legend>
        <div class="col-md-4">
          <div class="form-group">
            <label class="label">Next Of Kin Name</label>
            <input name="kinName" v-validate="'required|alpha'"
              :class="{'form-control': true }"
              type="text" placeholder="Next of kin's name">
            <i v-show="errors.has('kinName')" class="fa fa-warning"></i>
            <span v-show="errors.has('kinName')" class="text-danger">
              {{ errors.first('kinName') }}
            </span>
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group">
            <label class="label">Contact</label>
            <input name="kinContact" v-validate="'required | numeric'"
              :class="{'form-control': true }"
              type="phone" placeholder="Next of kin's contact">
            <i v-show="errors.has('kinContact')" class="fa fa-warning"></i>
            <span v-show="errors.has('kinContact')" class="text-danger">
              {{ errors.first('kinContact') }}
            </span>
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group">
            <label class="label">Next Of Kin Relation</label>
            <input name="kinRelationship" v-validate="'required|alpha'"
              :class="{'form-control': true }"
              type="text" placeholder="Next of kin's relationship">
            <i v-show="errors.has('kinRelationship')" class="fa fa-warning"></i>
            <span v-show="errors.has('kinRelationship')" class="text-danger">
              {{ errors.first('kinRelationship') }}
            </span>
          </div>
        </div>
      </fieldset>
    </div>
  </form>
</template>

<script>
export default {
  name: 'FamilyInformation',
  data: () => ({}),
  methods: {},
};
</script>

<style>
</style>
