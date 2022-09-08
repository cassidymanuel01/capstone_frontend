<template>
    <div class="modal fade" :id="`deleteBooking`+booking.id" tabindex="-1" :aria-labelledby="booking.id+`DeleteLabel`" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" :id="`deleteBookingLabel`+booking.id">Delete booking</h5>
                    <button type="button" :id="`deleteBookingClose`+booking.id" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <h3>Are you sure you want to delete this</h3>
                    <button data-bs-dismiss="modal" class="btn btn-primary">CANCEL</button>
                    <button class="btn btn-danger" @click="deleteBooking">DELETE</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['booking'],
    methods:{
        deleteBooking(){
            this.$store.dispatch('deleteBooking',this.booking.id);
            console.log(this.booking.id)
            document.getElementById(`deleteBookingClose`+this.booking.id).click();
        }
    }
}
</script>
<style scoped>
</style>