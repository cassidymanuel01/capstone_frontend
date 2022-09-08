<template>
  <div class="modal fade" :id="`deleteUser`+user.id" tabindex="-1" :aria-labelledby="user.id+`DeleteLabel`" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" :id="`deleteUserLabel`+user.id">Delete user</h5>
                    <button type="button" :id="`deleteUserClose`+user.id" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
    props:['user'],
    methods:{
        deleteUser(){
            this.$store.dispatch('deleteUser',this.user.id);
            console.log(this.user.id)
            document.getElementById(`deleteUserClose`+this.user.id).click();
        }
    }
}
</script>

<style>

</style>