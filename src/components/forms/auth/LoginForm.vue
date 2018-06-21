<template>
  <div>
    <form class="m-t" role="form" @submit.prevent="handleSubmitMethod">
      <h3 class="font-bold text-center">Welcome to LRC-CMS</h3>
      <hr>
      <div class="form-group">
        <input type="email" placeholder="Email" name="email" v-model="email"
          v-validate="'required'"
          :class="{'form-control':true, 'isDanger': errors.has('email')}">
        <span v-show="errors.has('email')" class="text-danger">
          {{errors.first('email')}}
        </span>
      </div>
      <div class="form-group">
        <input type="password" class="form-control" placeholder="Password" name="password">
      </div>
      <button type="submit" class="btn btn-primary block full-width m-b">Login</button>

      <router-link to="/forgot">
        <small>Forgot password?</small>
      </router-link>

    </form>
  </div>
</template>


<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      email: '',
    };
  },
};
</script>

<style>

</style>
