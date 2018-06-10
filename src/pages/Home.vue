<template>
  <div id="wrapper">
    <sidebar-nav></sidebar-nav>
    <div id="page-wrapper" class="gray-bg">
      <navbar-nav></navbar-nav>
      <topbar-nav></topbar-nav>
      <wizard-form></wizard-form>
      <footer-nav></footer-nav>
    </div>
  </div>
</template>

<script>
import Footer from '../components/layouts/footer';
import Sidebar from '../components/layouts/navigation/Sidebar';
import Navbar from '../components/layouts/navigation/Navbar';
import Topbar from '../components/layouts/navigation/Topbar';
import Wizard from '../components/forms/Wizard';

export default {
  name: 'Home',
  components: {
    'footer-nav': Footer,
    'sidebar-nav': Sidebar,
    'navbar-nav': Navbar,
    'topbar-nav': Topbar,
    'wizard-form': Wizard,
  },
};
</script>

<style>

</style>
