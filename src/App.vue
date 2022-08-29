<template>
  <Navbar/>
  <router-view/>
  <Footer/>
  <Login/>
  <Register/>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from  "./components/Footer.vue";
import Register from "./components/Register.vue";
import Login from "./components/Login.vue";

export default ({
  components:{Navbar,Footer, Login, Register}
})

</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Playball&display=swap');

#app {
  font-family: 'Playball', cursive !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
