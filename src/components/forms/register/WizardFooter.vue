<template>
  <div>
    <ul>
      <li class="col-sm-3 col-sm-offset-2">
        <span class="btn btn-info btn-block">
          Previous
        </span>
      </li>
      <li class="col-sm-3 col-sm-offset-2">
        <span class="btn btn-info btn-block" @click="addToUserDetails">
          Save
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'WizardFooter',
  props: ['user'],
  methods: {
    addToUserDetails() {
      console.log(`Data from the method is: ${JSON.stringify(this.user)}`);
      return this.$store.commit('ADD_USER_DETAILS', JSON.stringify(this.user));
    },
  },
};
</script>

<style>
</style>
