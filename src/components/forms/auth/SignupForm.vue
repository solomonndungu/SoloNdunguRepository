<template>
  <div>
    <form class="m-t" role="form" @submit.prevent="handleSubmitMethod">
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Name" required="">
      </div>
      <div class="form-group">
        <input type="email" class="form-control" placeholder="Email" required="">
      </div>
      <div class="form-group">
        <input type="password" class="form-control" placeholder="Password" required="">
      </div>
      <div class="form-group">
        <div class="checkbox i-checks">
          <label>
            <input type="checkbox">
            <i></i> Agree the terms and policy </label>
        </div>
      </div>
      <button type="submit" class="btn btn-primary block full-width m-b">Register</button>

      <p class="text-muted text-center">
        <small>Already have an account?</small>
      </p>
      <router-link class="btn btn-sm btn-white btn-block" to="/">Login</router-link>
    </form>
  </div>
</template>


<script>
export default {
  name: 'SignupForm',
};
</script>

<style>

</style>
