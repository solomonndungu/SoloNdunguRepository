<template lang="html">
  <div id="wrapper">
    <sidebar-nav></sidebar-nav>
    <div id="page-wrapper" class="gray-bg">
      <navbar-nav></navbar-nav>
      <wizard-form></wizard-form>
      <footer-nav></footer-nav>
    </div>
  </div>
</template>

<script>
import Footer from '@/components/layouts/footer';
import Sidebar from '@/components/layouts/navigation/Sidebar';
import Navbar from '@/components/layouts/navigation/Navbar';
import Wizard from '@/components/forms/Wizard';

export default {
  name: 'Home',
  components: {
    'footer-nav': Footer,
    'sidebar-nav': Sidebar,
    'navbar-nav': Navbar,
    'wizard-form': Wizard,
  },
};
</script>

<style lang="css">
</style>
