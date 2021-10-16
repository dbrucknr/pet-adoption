<template>
  <div class="main-container">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>

    <transition name="fade">
      <Sidebar />
    </transition>

    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/base/Footer.vue';
import Sidebar from '@/components/base/Sidebar.vue';

export default {
  components: {
    Footer,
    Sidebar
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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
