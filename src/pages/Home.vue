<template>
  <div id="wrapper">
    <sidebar-nav></sidebar-nav>
    <div id="page-wrapper" class="gray-bg">
      <navbar-nav></navbar-nav>
      <topbar-nav></topbar-nav>
      <router-view/>
      <footer-nav></footer-nav>
    </div>
  </div>
</template>

<script>
import Footer from '../components/layouts/footer';
import Sidebar from '../components/layouts/navigation/Sidebar';
import Navbar from '../components/layouts/navigation/Navbar';
import Topbar from '../components/layouts/navigation/Topbar';

export default {
  name: 'Home',
  components: {
    'footer-nav': Footer,
    'sidebar-nav': Sidebar,
    'navbar-nav': Navbar,
    'topbar-nav': Topbar,
  },
};
</script>

<style>

</style>
