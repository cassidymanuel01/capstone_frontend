<template>
  <Navbar/>
  <router-view/>
  <Footer/>
  <AppointNav/>
  <Login/>
  <Register/>
  <BookingCard />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import Register from "./components/Register.vue";
import Login from "./components/Login.vue";
import BookingCard from "./components/BookingCard.vue";
import AppointNav from "./components/AppointNav.vue";

export default {
  components: { Navbar, Footer, Login, Register, BookingCard, AppointNav },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Aboreto&display=swap");

#app {
  font-family: "Aboreto", cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
