<template>
  <div class="register">
    <div
      class="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Sign up</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
                  <form class="form pb-3">
        <div class="row">
          <div class="col-12">
            <h3 class="display-4 pt-5">Register</h3>
          </div>
          <div class="col-12">
            <h4><label for="name">Name:</label></h4>
          </div>
          <div class="col-12">
            <input
              name="fullname"
              type="text"
              placeHolder="Enter your First Name"
              class="form-control w-100 mx-auto"
              v-model="name"
            />
          </div>
          <div class="col-12">
            <h4><label for="name">Surname:</label></h4>
          </div>
          <div class="col-12">
            <input
              name="surname"
              type="text"
              placeHolder="Enter your First Name"
              class="form-control w-100 mx-auto"
              v-model="surname"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <h4><label for="email">Email:</label></h4>
          </div>
          <div class="col-12">
            <input
              name="email"
              type="email"
              placeHolder="Enter your Email"
              class="form-control w-100 mx-auto"
              v-model="email"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <h4><label for="password">Password:</label></h4>
          </div>
          <div class="col-12">
            <input
              name="userpassword"
              type="password"
              placeHolder="Enter your Password"
              class="form-control w-100 mx-auto"
              v-model="password"
            />
          </div>
        </div>
      </form>
          </div>
          <div class="modal-footer">
            <button class="btn btn-primary border border-0" type="button" @click="register()">Sign up</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      surname: "",
      email: "",
      password: "",
    };
  },
  methods: {
    register() {
      const user = {
        name: this.name,
        surname: this.surname,
        email: this.email,
        password: this.password,
      };
      this.$store.dispatch("register", user);
    },
  },
};
</script>

<style></style>
