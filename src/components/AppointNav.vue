<template>
    <div class="cart" v-if="user">
    <div class="offcanvas offcanvas-start offcanvas-show" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div class="offcanvas-body" >
    <p>{{user.userName}}'s Cart</p>
    <div v-if="cart" id="cart">
      <div id="card" v-for="booking in cart" :key="booking" :booking="booking">
          <img :src="booking.prodImage" alt="Cart Item" class="img-fluid">
          <h3>{{booking.prodName}}</h3>
          <h5>R{{booking.prodPrice}}</h5>
      </div>
      <div id="total">
        <h2>R{{total}}</h2>
      </div>
    </div>
    <div v-else>
        <h3>No Items in Cart</h3>
    </div>
  </div>
  <div class="offcanvas-footer">
    <button type="button" class="btn" id="clearButton" @click="clear()">Checkout</button>
  </div>
</div>
</div>
</template>

<script>

import BookingCard from './BookingCard.vue';

export default {
    components:{BookingCard},
    computed:{
      user(){
        return this.$store.state.user
      },
      cart(){
        return this.$store.state.cart
      },
      total(){
        return Math.round((this.$store.state.total + Number.EPSILON)*100)/100
      }
    },
    methods:{
      clear(){
        this.$store.dispatch('deleteCart')
        this.cart = null
      }
    }
}
</script>

<style scoped>
section{
    padding: 0;
}

#sideNav{
    
    color: white;
    z-index: 2;
    
}

.offcanvas{
    z-index: 4;
    border-right: white;
}

.offcanvas-body{
    background-color: white;
    color:  #C37935;
    padding-top: 5rem ;
    border: #C37935;
}

#products{
    padding: 0;
}

a{
    color: #C37935;
    text-decoration: none;
}

.cart {
  position: fixed;
  background-color:  #C37935;
  width: 100%;
  z-index: 10;
}

.cart a {
  font-weight: bold;
  color: white;
  text-decoration: none;
}

.cart a.router-link-exact-active {
  color: white;
}

.cart a:hover {
  color: white;
}

h1{
  color:white;
}

.btn{
  background-color: #c37935;
  color: white;
  font-weight: 900;
  border: 2px solid white;
  border-radius: 10px;
}

.btn:hover{
  background-color: white ;
  color: #c37935;
  font-weight: 900;
  border: 2px solid #c37935;
  border-radius: 10px;
}


</style>