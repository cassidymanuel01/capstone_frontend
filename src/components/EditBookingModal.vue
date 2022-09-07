<template>
    <div class="modal fade" :id="`editBooking`+ booking.id" tabindex="-1" :aria-labelledby="booking.id+ `EditLabel`" aria-hidden="true">
      <div class="modal-dialog">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title" :id="`editBookingLabel`+booking.id">Edit booking</h5>
                  <button type="button" :id="`editBookingClose`+booking.id" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                  <form method="PUT" @submit="editBooking">
                      <label class="form-label">ID</label>
                      <input type="number" class="form-control" :value="booking.id" readonly>
                      <label class="form-label">Treatment Name</label>
                      <input type="text" class="form-control" v-model="booking.prodName">
                      <label class="form-label">Treatment Image</label>
                      <input type="text" class="form-control" v-model="booking.prodImage">
                      <label class="form-label">Description</label>
                      <textarea style="resize:none;" class="form-control" cols="30" rows="2" v-model="booking.prodDesc"></textarea>
                      <label class="form-label">Category</label>
                      <textarea style="resize:none;" class="form-control" cols="30" rows="2" v-model="booking.prodCategory"></textarea>
                      <label class="form-label">Price</label>
                      <input type="number" class="form-control" v-model="booking.prodPrice">
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
      props:['booking'],
      methods:{
          editBooking(e){
              e.preventDefault();
              let newBooking = {
                  id: this.booking.id,
                  prodName: this.booking.prodName,
                  prodImage: this.booking.prodImage,
                  prodDesc: this.booking.prodDesc,
                  prodCategory: this.booking.prodCategory ,
                  prodPrice: this.booking.prodPrice
              }
              this.$store.dispatch('editBooking',newBooking);
              document.getElementById(`editBookingClose`+this.booking.id).click();
          }
      }
  }
  </script>
  <style scoped>
  
  
  </style>