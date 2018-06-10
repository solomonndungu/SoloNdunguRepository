<template>
  <div>
    <form class="m-t" role="form" @submit.prevent="handleSubmitMethod">
      <h3 class="font-bold text-center">Welcome to LRC-CMS</h3>
      <hr>
      <div class="form-group">
        <input type="email" class="form-control" placeholder="Username" required="">
      </div>
      <div class="form-group">
        <input type="password" class="form-control" placeholder="Password" required="">
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
};
</script>

<style>

</style>
