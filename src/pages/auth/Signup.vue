<template>
  <div class="middle-box text-center loginscreen   animated fadeInDown">
    <div>
      <div>

        <h1 class="logo-name">
          <img src="/static/img/logo.png" class="img-responsive">
        </h1>

      </div>
      <h3>Register to LRC-CMS</h3>
      <p>Create account to see it in action.</p>
      <signup-form></signup-form>
      <p class="m-t">
        <small>Neostream Technology Group &copy; 2018</small>
      </p>
    </div>
  </div>
</template>


<script>
import SignupForm from '@/components/forms/auth/SignupForm';

export default {
  name: 'Signup',
  components: {
    'signup-form': SignupForm,
  },
};
</script>

<style>

</style>
