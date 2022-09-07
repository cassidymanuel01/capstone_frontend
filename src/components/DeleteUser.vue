<template>
  <div class="modal fade" :id="`deleteUser`+users.id" tabindex="-1" :aria-labelledby="users.id+`DeleteLabel`" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" :id="`deleteUserLabel`+users.id">Delete user</h5>
                    <button type="button" :id="`deleteUserClose`+users.id" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <h3>Are you sure you want to delete this user</h3>
                    <button data-bs-dismiss="modal" class="btn btn-primary">CANCEL</button>
                    <button class="btn btn-danger" @click="deleteUser()">DELETE</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['users'],
    methods:{
        deleteUser(){
            this.$store.dispatch('deleteUser',this.users.id);
            console.log(this.users.id)
            document.getElementById(`deleteUserClose`+this.users.id).click();
        }
    }
}
</script>

<style>

</style>