<template>
<div>
  <input type="text" v-model="message">
  <input type="text" v-model="bioData.firstName">
    <input type="text" v-model="bioData.middleName">
    <input type="text" v-model="bioData.lastName">
    <p>firstName:{{bioData.firstName}}</p>
    <p>middleName:{{bioData.middleName}}</p>
    <p>lastName:{{bioData.lastName}}</p>

</div>
</template>

<script>
export default {
  name: 'BioDataInformation',
  data() {
    return {
      //  Bind the form input to this empty data
      bioData: {
        firstName: '',
        middleName: '',
        lastName: '',
        genderMale: '',
        genderFemale: '',
        expertise: '',
        dateOfBirth: '',
        maritalStatus: '',
      },
    };
  },
  methods: {
    showData() {
      console.log(`message = ${this.message}`);
    },
  },
};
</script>

<style>
</style>
