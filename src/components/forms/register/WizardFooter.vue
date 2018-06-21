<template>
  <div>
    <ul>
      <li class="col-sm-3 col-sm-offset-2">
        <span class="btn btn-info btn-block">
          Previous
        </span>
      </li>
      <li class="col-sm-3 col-sm-offset-2">
        <span class="btn btn-info btn-block" @click="moveNext">
          Save and continue
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'WizardFooter',
  data() {
    return {
      firstName: '',
      middleName: '',
      lastName: '',
    };
  },
  methods: {
    moveNext() {
      const elementId = event.currentTarget.id;
      console.log(elementId);
      if (elementId >= 1) {
        console.log('MOVING TO THE NEXT STEP 🚀');
      }
    },
  },
};
</script>

<style>
</style>
