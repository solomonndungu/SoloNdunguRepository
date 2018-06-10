<template>
  <div>
    <form class="m-t" role="form" @submit.prevent="handleSubmitMethod">
      <div class="form-group">
        <input type="email" class="form-control" placeholder="Email address" required="">
      </div>

      <button type="submit" class="btn btn-primary block full-width m-b">
          Send new password
      </button>

    </form>
  </div>
</template>


<script>
export default {
  name: 'ForgotPasswordForm',
};
</script>

<style>

</style>
