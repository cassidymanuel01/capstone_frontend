<template>
  <div class="login">
    <div
      class="modal fade"
      id="staticBackDrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Login</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="form pb-3">
              <div class="row">
                <div class="col-12 fw-bold">
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
                    name="password"
                    type="password"
                    placeHolder="Enter your Password"
                    class="form-control w-100 mx-auto"
                    v-model="password"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
                  class="btn btn-primary border border-0"
                  type="button"
                  @click="login()"
                >
                  Login
                </button>
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
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      const user = {
        email: this.email,
        password: this.password,
      };
      this.$store.dispatch("login", user);
    },
  },
};
</script>

<style></style>
