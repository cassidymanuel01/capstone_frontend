<template>
  <div class="modal fade" :id="`editUser`+ user.id" tabindex="-1" :aria-labelledby="user.id+ `EditLabel`" aria-hidden="true">
      <div class="modal-dialog">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title" :id="`editUserLabel`+user.id">Edit User</h5>
                  <button type="button" :id="`editUserClose`+user.id" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                  <form method="PUT" @submit="editUser">
                      <label class="form-label">ID</label>
                      <input type="number" class="form-control" :value="user.id" readonly>
                      <label class="form-label">Name</label>
                      <input type="text" class="form-control" v-model="user.userName">
                      <label class="form-label">Surname</label>
                      <input type="text" class="form-control" v-model="user.userSurname">
                      <label class="form-label">Email</label>
                      <input type="text" class="form-control" v-model="user.userEmail">
                      <label class="form-label">Password</label>
                      <input type="text" class="form-control" v-model="user.userPassword">
                      <button type="submit" class="btn btn-primary">Save Changes</button>
                  </form>
              </div>
              <div class="modal-footer">
                  <button type="button" class="btn" data-bs-dismiss="modal">Close</button>
              </div>
          </div>
      </div>
    </div>
</template>

<script>
export default {
    props:['user'],
      methods:{
          editUser(e){
              e.preventDefault();
              let newUser = {
                  userName: this.user.userName,
                  userSurname: this.user.userSurname,
                  userEmail: this.user.userEmail,
                  userPassword: this.user.userPassword
              }
              this.$store.dispatch('editUser',newUser);
              document.getElementById(`editUserClose`+this.user.id).click();
          }
      }

}
</script>

<style>

</style>