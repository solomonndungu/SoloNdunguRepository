<template>
  <form @submit.prevent="validateBeforeSubmit">
    <legend>Academic Details</legend>
    <div class="row">
      <legend>Tertiary Education(University/college/Professional Certiication)</legend>
      <fieldset>
      <div class="col-md-2">
        <div class="form-group">
          <label class="label">Institution</label>
          <input name="institution"  v-validate="'required|alpha'"
            :class="{'form-control': true }"
            type="text" placeholder="Eg NorthGate school" required>
          <i v-show="errors.has('institution')" class="fa fa-warning"></i>
          <span v-show="errors.has('institution')" class="text-danger">
            {{ errors.first('institution') }}
          </span>
        </div>
    </div>
        <div class="col-sm-2">
      <div class="form-group">
        <label class="label">From Date/Year</label>
        <input name="fromDate"  v-validate="'required|numeric'"
          :class="{'form-control': true }"
          type="date" placeholder="" required>
        <i v-show="errors.has('fromDate')" class="fa fa-warning"></i>
        <span v-show="errors.has('fromDate')" class="text-danger">
          {{ errors.first('fromDate') }}
        </span>
      </div>
    </div>
            <div class="col-sm-2">
      <div class="form-group">
        <label class="label">To Date/Year</label>
        <input name="toDate"  v-validate="'required|numeric'"
          :class="{'form-control': true }"
          type="date" placeholder="" required>
        <i v-show="errors.has('toDate')" class="fa fa-warning"></i>
        <span v-show="errors.has('toDate')" class="text-danger">
          {{ errors.first('toDate') }}
        </span>
      </div>
    </div>
       <div class="col-md-2">
        <div class="form-group">
          <label class="label">Qualification</label>
          <input name="roles"  v-validate="'required|alpha'"
            :class="{'form-control': true }"
            type="text" placeholder="Eg KCSE Certificate" required>
          <i v-show="errors.has('qualification')" class="fa fa-warning"></i>
          <span v-show="errors.has('qualification')" class="text-danger">
            {{ errors.first('role') }}
          </span>
        </div>
    </div>
           <div class="col-md-2">
        <div class="form-group">
          <button class="btn btn-default"><span class="glyphicon glyphicon-plus"></span></button>
          <button class="btn btn-default"><span class="glyphicon glyphicon-minus"></span></button>
        </div>
    </div>
    </fieldset>
    <legend>Secondary School</legend>
    <fieldset>
      <div class="col-md-2">
        <div class="form-group">
          <label class="label">Institution</label>
          <input name="institution"  v-validate="'required|alpha'"
            :class="{'form-control': true }"
            type="text" placeholder="Eg NorthGate school" required>
          <i v-show="errors.has('institution')" class="fa fa-warning"></i>
          <span v-show="errors.has('institution')" class="text-danger">
            {{ errors.first('institution') }}
          </span>
        </div>
    </div>
        <div class="col-sm-2">
      <div class="form-group">
        <label class="label">From Date/Year</label>
        <input name="fromDate"  v-validate="'required|numeric'"
          :class="{'form-control': true }"
          type="date" placeholder="" required>
        <i v-show="errors.has('fromDate')" class="fa fa-warning"></i>
        <span v-show="errors.has('fromDate')" class="text-danger">
          {{ errors.first('fromDate') }}
        </span>
      </div>
    </div>
            <div class="col-sm-2">
      <div class="form-group">
        <label class="label">To Date/Year</label>
        <input name="toDate"  v-validate="'required|numeric'"
          :class="{'form-control': true }"
          type="date" placeholder="" required>
        <i v-show="errors.has('toDate')" class="fa fa-warning"></i>
        <span v-show="errors.has('toDate')" class="text-danger">
          {{ errors.first('toDate') }}
        </span>
      </div>
    </div>
       <div class="col-md-2">
        <div class="form-group">
          <label class="label">Qualification</label>
          <input name="roles"  v-validate="'required|alpha'"
            :class="{'form-control': true }"
            type="text" placeholder="Eg KCSE Certificate" required>
          <i v-show="errors.has('qualification')" class="fa fa-warning"></i>
          <span v-show="errors.has('qualification')" class="text-danger">
            {{ errors.first('role') }}
          </span>
        </div>
    </div>
           <div class="col-md-2">
        <div class="form-group">
          <button class="btn btn-default"><span class="glyphicon glyphicon-plus"></span></button>
          <button class="btn btn-default"><span class="glyphicon glyphicon-minus"></span></button>
        </div>
    </div>
    </fieldset>
     <legend>Primary School</legend>
    <fieldset>
      <div class="col-md-2">
        <div class="form-group">
          <label class="label">Institution</label>
          <input name="institution"  v-validate="'required|alpha'"
            :class="{'form-control': true }"
            type="text" placeholder="Eg NorthGate school" required>
          <i v-show="errors.has('institution')" class="fa fa-warning"></i>
          <span v-show="errors.has('institution')" class="text-danger">
            {{ errors.first('institution') }}
          </span>
        </div>
    </div>
        <div class="col-sm-2">
      <div class="form-group">
        <label class="label">From Date/Year</label>
        <input name="fromDate"  v-validate="'required|numeric'"
          :class="{'form-control': true }"
          type="date" placeholder="" required>
        <i v-show="errors.has('fromDate')" class="fa fa-warning"></i>
        <span v-show="errors.has('fromDate')" class="text-danger">
          {{ errors.first('fromDate') }}
        </span>
      </div>
    </div>
    <div class="col-sm-2">
      <div class="form-group">
        <label class="label">To Date/Year</label>
        <input name="toDate"  v-validate="'required|numeric'"
          :class="{'form-control': true }"
          type="date" placeholder="" required>
        <i v-show="errors.has('toDate')" class="fa fa-warning"></i>
        <span v-show="errors.has('toDate')" class="text-danger">
          {{ errors.first('toDate') }}
        </span>
      </div>
    </div>
       <div class="col-md-2">
        <div class="form-group">
          <label class="label">Qualification</label>
          <input name="roles"  v-validate="'required|alpha'"
            :class="{'form-control': true }"
            type="text" placeholder="Eg KCSE Certificate" required>
          <i v-show="errors.has('qualification')" class="fa fa-warning"></i>
          <span v-show="errors.has('qualification')" class="text-danger">
            {{ errors.first('role') }}
          </span>
        </div>
    </div>
           <div class="col-md-2">
        <div class="form-group">
          <button class="btn btn-default"><span class="glyphicon glyphicon-plus"></span></button>
          <button class="btn btn-default"><span class="glyphicon glyphicon-minus"></span></button>
        </div>
    </div>
    </fieldset>
    </div>

  </form>

</template>

<script>
export default {
  name: 'AcademicInformation',
  data: () => ({

  }),
};
</script>

<style>

</style>
