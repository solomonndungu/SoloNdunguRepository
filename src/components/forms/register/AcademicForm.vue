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
          class="dropselectsec" autocomplete="off" v-model="academic.institution">
        </div>
        <div class="col-md-8 col-xs-9">
          <input type="text" name="email" id="email"
          placeholder="fromDate"
          class="dropselectsec" autocomplete="off" v-model="academic.from_date">
        </div>
        <div class="col-md-8 col-xs-9">
          <input type="text" name="email" id="email"
          placeholder="To Date"
          class="dropselectsec" autocomplete="off" v-model="academic.to_date">
        </div>
        <div class="col-md-8 col-xs-9">
          <input type="text" name="email" id="email"
          placeholder="your Roles"
          class="dropselectsec" autocomplete="off" v-model="academic.qualification">
        </div>
        <button>Add</button>

         <h5>
        <b>Secondary School </b>
      </h5>
      <div class="col-md-8 col-xs-9">
          <input type="text" name="email" id="email"
          placeholder="Institution"
          class="dropselectsec" autocomplete="off" v-model="academic.secondary">
        </div>
        <div class="col-md-8 col-xs-9">
          <input type="text" name="email" id="email"
          placeholder="fromDate"
          class="dropselectsec" autocomplete="off" v-model="academic.from_date">
        </div>
        <div class="col-md-8 col-xs-9">
          <input type="text" name="email" id="email"
          placeholder="To Date"
          class="dropselectsec" autocomplete="off" v-model="academic.to_date">
        </div>
        <div class="col-md-8 col-xs-9">
          <input type="text" name="email" id="email"
          placeholder="your Roles"
          class="dropselectsec" autocomplete="off" v-model="academic.qualification">
        </div>
        <button>Add</button>

         <h5>
        <b>Primary School</b>
      </h5>
      <div class="col-md-8 col-xs-9">
          <input type="text" name="email" id="email"
          placeholder="Institution"
          class="dropselectsec" autocomplete="off" v-model="academic.primary">
        </div>
        <div class="col-md-8 col-xs-9">
          <input type="text" name="email" id="email"
          placeholder="fromDate"
          class="dropselectsec" autocomplete="off" v-model="academic.from_date">
        </div>
        <div class="col-md-8 col-xs-9">
          <input type="text" name="email" id="email"
          placeholder="To Date"
          class="dropselectsec" autocomplete="off" v-model="academic.to_date">
        </div>
        <div class="col-md-8 col-xs-9">
          <input type="text" name="email" id="email"
          placeholder="your Roles"
          class="dropselectsec" autocomplete="off" v-model="academic.qualification">
        </div>
        <button>Add</button>
    </div>
  </div>

</template>

<script>
export default {
  name: 'AcademicForm',
  props: {
    academic: {},
  },
};
</script>

<style>

</style>
