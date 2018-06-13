<template>
 <div>
  <nav class="navbar-default navbar-static-side" role="navigation">
    <div class="sidebar-collapse">
      <ul class="nav metismenu" id="side-menu">
        <li class="nav-header">
          <div class="dropdown profile-element">
            <span>
              <img alt="image" class="img-circle" :src="'../../../static/img/profile_small.jpg'" />
            </span>
            <a data-toggle="dropdown" class="dropdown-toggle" href="#">
              <span class="clear">
                <span class="block m-t-xs">
                  <strong class="font-bold">Username</strong>
                </span>
                <span class="text-muted text-xs block">User role
                  <b class="caret"></b>
                </span>
              </span>
            </a>
            <ul class="dropdown-menu animated fadeInRight m-t-xs">
              <li>
                <router-link tag="a" to="/home">Link</router-link>
              </li>
            </ul>
          </div>
          <div class="logo-element">
            LRC
          </div>
        </li>
        <li v-show="1 === 1">
          <router-link tag="a" to="/home/dashboard">
            <i class="fa fa-bar-chart-o"></i>
            <span class="nav-label">Dashboards</span>
          </router-link>
        </li>
        <li>
          <router-link tag="a" to="/home/profile">
            <i class="fa fa-user"></i>
            <span class="nav-label">Personal Information</span>
            <router-link to=""><span class="fa arrow"></span></router-link>
          </router-link>
          <ul class="nav nav-second-level collapse">
            <li>
              <router-link to="/home/profile">Profile Link</router-link>
            </li>
          </ul>
        </li>
         <li>
          <router-link tag="a" to="/groups">
            <i class="fa fa-group"></i>
            <span class="nav-label">People Groups</span>
            <router-link to=""><span class="fa arrow"></span></router-link>
          </router-link>
          <ul class="nav nav-second-level collapse">
            <li>
              <router-link to="/groups">People Groups Link</router-link>
            </li>
          </ul>
        </li>
         <li>
          <router-link tag="a" to="/notice">
            <i class="fa fa-book"></i>
            <span class="nav-label">Notices</span>
            <router-link to=""><span class="fa arrow"></span></router-link>
          </router-link>
          <ul class="nav nav-second-level collapse">
            <li>
              <router-link to="/notice">Notices Link</router-link>
            </li>
          </ul>
        </li>
         <li>
          <router-link tag="a" to="/events">
            <i class="fa fa-calendar"></i>
            <span class="nav-label">Upcoming Events</span>
            <router-link to=""><span class="fa arrow"></span></router-link>
          </router-link>
          <ul class="nav nav-second-level collapse">
            <li>
              <router-link to="/events">Events Link</router-link>
            </li>
          </ul>
        </li>
         <li>
          <router-link tag="a" to="/resources">
            <i class="fa fa-briefcase"></i>
            <span class="nav-label">Resources</span>
            <router-link to=""><span class="fa arrow"></span></router-link>
          </router-link>
          <ul class="nav nav-second-level collapse">
            <li>
              <router-link to="/events">Events Link</router-link>
            </li>
          </ul>
        </li>
         <li>
          <router-link tag="a" to="/social">
            <i class="fa fa-cloud"></i>
            <span class="nav-label">Social Board</span>
            <router-link to=""><span class="fa arrow"></span></router-link>
          </router-link>
          <ul class="nav nav-second-level collapse">
            <li>
              <router-link to="/social">Social Board</router-link>
            </li>
          </ul>
        </li>
         <li>
          <router-link tag="a" to="/child">
            <i class="fa fa-child"></i>
            <span class="nav-label">Children Corner</span>
            <router-link to=""><span class="fa arrow"></span></router-link>
          </router-link>
          <ul class="nav nav-second-level collapse">
            <li>
              <router-link to="/child">Children Corner links</router-link>
            </li>
          </ul>
        </li>
         <li>
          <router-link tag="a" to="/help">
            <i class="fa fa-question"></i>
            <span class="nav-label">Help Center</span>
            <router-link to=""><span class="fa arrow"></span></router-link>
          </router-link>
          <ul class="nav nav-second-level collapse">
            <li>
              <router-link to="/help">Help Center links</router-link>
            </li>
          </ul>
        </li>
         <li>
          <router-link tag="a" to="/settings">
            <i class="fa fa-gear"></i>
            <span class="nav-label">Settings</span>
            <router-link to=""><span class="fa arrow"></span></router-link>
          </router-link>
          <ul class="nav nav-second-level collapse">
            <li>
              <router-link to="/settings">Settings links</router-link>
            </li>
          </ul>
        </li>
      </ul>

    </div>
  </nav>
 </div>
</template>

<script>
export default {
  name: 'Sidebar',
};
</script>

<style>

</style>
