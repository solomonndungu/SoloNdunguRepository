<template>
  <div class="loginColumns animated fadeInDown">
    <div class="row">
      <div class="col-md-6">
        <h1 class="logo-name">LRC</h1>
      </div>
      <div class="col-md-6">
        <div class="ibox-content">
            <login-form></login-form>
          <p class="m-t">
            <small>Inspinia we app framework base on Bootstrap 3 &copy; 2014</small>
          </p>
        </div>
      </div>
    </div>
    <hr/>
    <div class="row">
      <div class="col-md-6">
        Neostream Technology Group
      </div>
      <div class="col-md-6 text-right">
        <small>© 2018</small>
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from '../../components/forms/auth/LoginForm';

export default {
  name: 'Login',
  components: {
    'login-form': LoginForm,
  },
};
</script>

<style>

</style>
