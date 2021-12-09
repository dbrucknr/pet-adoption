<template>
  <div class="main-container">
    <Topbar />
    <transition name="fade">
      <Sidebar />
    </transition>
    <div class="router-view">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/base/Footer.vue';
import Sidebar from '@/components/base/Sidebar.vue';
import Topbar from '@/components/base/Topbar.vue'

export default {
  components: {
    Footer,
    Sidebar, 
    Topbar
  }
}
</script>

<style>
.v-enter-active, .v-leave-active {
  transition: opacity .5s ease;
}
.v-enter, .v-leave-to {
  opacity: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  color: #2c3e50;
}
.main-container {
  background-color: rgb(237,184,121);
  height: 100vh;
}
.router-view {
  margin-top: 50px;
}
</style>
