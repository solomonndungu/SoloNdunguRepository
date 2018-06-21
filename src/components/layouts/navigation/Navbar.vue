<template>
  <div class="row border-bottom">
    <nav class="navbar navbar-static-top" role="navigation" style="margin-bottom: 0">
      <div class="navbar-header">
        <a class="navbar-minimalize minimalize-styl-2 btn btn-primary" href="#sidebar">
          <i class="fa fa-bars"></i>
        </a>
        <form role="search" class="navbar-form-custom" action="search_results.html">
          <div class="form-group">
            <input type="text" placeholder="Search for something..." class="form-control"
            name="top-search" id="top-search">
          </div>
        </form>
      </div>
      <ul class="nav navbar-top-links navbar-right">
        <li>
          <span class="m-r-sm text-muted welcome-message">Welcome to LRC-CMS</span>
        </li>
        <li class="dropdown">
          <router-link tag="a" to="" class="dropdown-toggle count-info"
          data-toggle="dropdown">
            <i class="fa fa-envelope"></i>
            <span class="label label-warning">16</span>
          </router-link>
          <ul class="dropdown-menu dropdown-messages" id="msgDropDown">
            <li>
              <div class="dropdown-messages-box">
                <router-link to="/profile:id" class="pull-left">
                  <img alt="image" class="img-circle" :src="'/static/img/'">
                </router-link>
                <div class="media-body">
                  <small class="pull-right">46h ago</small>
                  <strong>Message Sender Name</strong> Message
                  <br>
                  <small class="text-muted">Time the message</small>
                </div>
              </div>
            </li>
            <li class="divider"></li>
            <li>
              <div class="text-center link-block">
                <router-link tag="a" to="/notices/mailbox">
                  <i class="fa fa-envelope"></i>
                  <strong>Read All Messages</strong>
                </router-link>
              </div>
            </li>
          </ul>
        </li>
        <li class="dropdown">
          <router-link class="dropdown-toggle count-info" data-toggle="dropdown" tag="a" to="">
            <i class="fa fa-bell"></i>
            <span class="label label-primary">8</span>
          </router-link>
          <ul class="dropdown-menu dropdown-alerts">
            <li>
              <router-link to="/notices/mailbox/mail:id" tag="a">
                <div>
                  <i class="fa fa-envelope fa-fw"></i> You have 16 messages
                  <span class="pull-right text-muted small">4 minutes ago</span>
                </div>
              </router-link>
            </li>
            <li class="divider"></li>
            <li>
              <div class="text-center link-block">
                <router-link tag="a" to="/notices/mailbox">
                  <strong>See All Alerts</strong>
                  <i class="fa fa-angle-right"></i>
                </router-link>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <router-link tag="a" to="/">
            <i class="fa fa-sign-out"></i> Log out
          </router-link>
        </li>
      </ul>

    </nav>
  </div>
</template>


<script>
export default {
  name: 'Navbar',
};
</script>

<style>

</style>
