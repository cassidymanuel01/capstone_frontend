<template>
  <div id="NavHolder" class="fixed-top">
    <div id="Navbar" class="container">
      <div id="Navbar-left"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasScrolling"
        aria-controls="offcanvasScrolling"
        style="z-index: 5; font-size: 1rem"
        class="fw-light"
        v-if="user"
      >
        Appointments
      </div>

      <div id="Navbar-center">
        <router-link to="/" id="Logo">Gliss Beauty</router-link>
      </div>

      <div id="Navbar-right" class="fw-light gap-3">
        <router-link
          to="/"
          id="loginlink"
          data-bs-toggle="modal"
          data-bs-target="#staticBackDrop"
        ><i class="bi bi-person" title="Login"></i>
        </router-link>
        <router-link
          to="/"
          id="registerlink"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        ><i class="bi bi-person-fill" title="Register"></i>
        </router-link>
        <div v-if="user">
          <router-link to="/allBookings" id="loginlink"><i class="bi bi-bag" title="Treatments"></i></router-link>
        </div>
        <div v-if="user">
          <router-link v-if="user[0].userRole == 'admin'" to="/admin" id="loginlink">
            <i class="bi bi-book" title="Admin"></i>
          </router-link>
        </div>
        <router-link to="/contact" id="loginlink"
          ><i class="bi bi-telephone" title="Contact"></i
        ></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import AppointNav from "./AppointNav.vue";
export default {
  components: { AppointNav },
  computed: {
    user() {
      return this.$store.state.user;
    },
    cart() {
      return this.$store.state.cart;
    },
  },
};
</script>

<style scoped>
#NavHolder {
  height: 4rem;
  background-color: #c37935;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

#Navbar {
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  vertical-align: middle;
  padding: 0;
}

#Navbar-left {
  display: flex;
  justify-content: start;
}

#Navbar-center {
  display: flex;
  justify-content: center;
  text-decoration: none;
}

#Navbar-right {
  display: flex;
  justify-content: end;
  text-decoration: none;
  color: white;
}

#Navbar-left,
#Navbar-center,
#Navbar-right {
  vertical-align: center;
  font-size: 1.2rem;
}

#Logo {
  text-decoration: none;
  color: white;
}
i {
  padding: 10px;
  font-size: 1.2rem;
}

#loginlink,
#cart,
#registerlink {
  text-decoration: none !important;
  color: white;
}

.bi-person:hover{
  background-color: white ;
  color: #c37935;
  border: 1px solid white;
  border-radius: 50%;
}

.bi-person-fill:hover{
  background-color: white ;
  color: #c37935;
  border: 1px solid white;
  border-radius: 50%;
}

.bi-book:hover{
  background-color: white ;
  color: #c37935;
  border: 1px solid white;
  border-radius: 50%;
}
.bi-bag:hover{
  background-color: white ;
  color: #c37935;
  border: 1px solid white;
  border-radius: 50%;
}

.bi-telephone:hover{
  background-color: white ;
  color: #c37935;
  border: 1px solid white;
  border-radius: 50%;
}

</style>
