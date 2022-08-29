<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About us</router-link> |
    <router-link to="/allBookings">Bookings</router-link> |
    <router-link to="/singleBooking">Booking</router-link> |
    <router-link to="/contact">Contact</router-link> |
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#staticBackDrop"
    >
      Login
    </button>
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#staticBackdrop"
    >
      Sign up
    </button>
  </nav>
</template>

<script>
import modal from "../components/Login.vue"
import modall from '../components/Register.vue'
export default {
    components:{modal, modall}
};
</script>

<style>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
