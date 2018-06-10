<template>
  <div class="passwordBox animated fadeInDown">
    <div class="row">

      <div class="col-md-12">
        <div class="ibox-content">

          <h2 class="font-bold">Forgot password</h2>

          <p>
            Enter your email address and your password will be reset and emailed to you.
          </p>

          <div class="row">

            <div class="col-lg-12">
                <forgot-password></forgot-password>
            </div>
          </div>
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
import ForgotPasswordForm from '../../components/forms/auth/ForgotPasswordForm';

export default {
  name: 'ForgotPassword',
  components: {
    'forgot-password': ForgotPasswordForm,
  },
};
</script>

<style>

</style>
