<template>
  <div class="">
    <div class="step6">
      <h3>
        <b>Academic Details</b>
      </h3>
      <hr>
      <h5>
        <b>Tertiary Education(University/college/professional certification) </b>
      </h5>
      <div class="col-md-8 col-xs-9">
          <input type="text" name="email" id="email"
          placeholder="Institution"
          class="dropselectsec" autocomplete="off" v-model="institution">
        </div>
        <div class="col-md-8 col-xs-9">
          <input type="text" name="email" id="email"
          placeholder="fromDate"
          class="dropselectsec" autocomplete="off" v-model="fromDate">
        </div>
        <div class="col-md-8 col-xs-9">
          <input type="text" name="email" id="email"
          placeholder="To Date"
          class="dropselectsec" autocomplete="off" v-model="toDate">
        </div>
        <div class="col-md-8 col-xs-9">
          <input type="text" name="email" id="email"
          placeholder="your Roles"
          class="dropselectsec" autocomplete="off" v-model="qualification">
        </div>
        <button>Add</button>

         <h5>
        <b>Secondary School </b>
      </h5>
      <div class="col-md-8 col-xs-9">
          <input type="text" name="email" id="email"
          placeholder="Institution"
          class="dropselectsec" autocomplete="off" v-model="secinstitution">
        </div>
        <div class="col-md-8 col-xs-9">
          <input type="text" name="email" id="email"
          placeholder="fromDate"
          class="dropselectsec" autocomplete="off" v-model="secfromDate">
        </div>
        <div class="col-md-8 col-xs-9">
          <input type="text" name="email" id="email"
          placeholder="To Date"
          class="dropselectsec" autocomplete="off" v-model="sectoDate">
        </div>
        <div class="col-md-8 col-xs-9">
          <input type="text" name="email" id="email"
          placeholder="your Roles"
          class="dropselectsec" autocomplete="off" v-model="secqualification">
        </div>
        <button>Add</button>

         <h5>
        <b>Primary School</b>
      </h5>
      <div class="col-md-8 col-xs-9">
          <input type="text" name="email" id="email"
          placeholder="Institution"
          class="dropselectsec" autocomplete="off" v-model="priinstitution">
        </div>
        <div class="col-md-8 col-xs-9">
          <input type="text" name="email" id="email"
          placeholder="fromDate"
          class="dropselectsec" autocomplete="off" v-model="prifromDate">
        </div>
        <div class="col-md-8 col-xs-9">
          <input type="text" name="email" id="email"
          placeholder="To Date"
          class="dropselectsec" autocomplete="off" v-model="pritoDate">
        </div>
        <div class="col-md-8 col-xs-9">
          <input type="text" name="email" id="email"
          placeholder="your Roles"
          class="dropselectsec" autocomplete="off" v-model="priqualification">
        </div>
        <button>Add</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AcademicForm',
  data() {
    return {
      qualification: '',
      fromDate: '',
      toDate: '',
      institution: '',
      secqualification: '',
      secfromDate: '',
      sectoDate: '',
      secinstitution: '',
      priqualification: '',
      prifromDate: '',
      pritoDate: '',
      priinstitution: '',
    };
  },
};
</script>

<style>

</style>
