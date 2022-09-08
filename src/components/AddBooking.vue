<template>
    <div class="modal fade" id="addBooking" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="addBookingLabel">New Treatment</h5>
        </div>
        <div class="modal-body">
          <form method="POST" @submit="addBooking">
                      <label class="form-label">Product Name</label>
                      <input type="text" class="form-control" v-model="prodName">
  
                      <label class="form-label">Product Image</label>
                      <input type="text" class="form-control" v-model="prodImage">
  
                      <label class="form-label">Description</label>
                      <textarea style="resize:none;" class="form-control" cols="30" rows="2" v-model="prodDesc"></textarea>
  
                      <label class="form-label">Category</label>
                      <input type="text" class="form-control" v-model="prodCategory">
  
                      <label class="form-label">Price</label>
                      <input type="number" class="form-control" v-model="prodPrice">
  
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
     data(){
      return{
          prodName: '',
          prodImage:'',
          prodDesc:'',
          prodCategory:'',
          prodPrice:''
      }
     },
      computed:{
          user(){
              return this.$store.state.user
          }
      },
      methods:{
          addBooking(e){
              e.preventDefault();
              let newBooking = {
                  prodName: this.prodName,
                  prodImage: this.prodImage,
                  prodDesc: this.prodDesc,
                  prodCategory: this.prodCategory ,
                  prodPrice: this.prodPrice
              }
              this.$store.dispatch('addBooking',newBooking);
           }
      }
  }
  </script>
  
  <style>
  
  </style>