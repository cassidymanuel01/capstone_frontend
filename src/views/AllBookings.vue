<template>
  <div class="allBookings pt-5">
    <div class="container">
        <h2 class="display-3 pb-4 pt-4">Treatments</h2>
        <input type="search" class="search-new rounded h-50 text-white" name="search" id="search" placeholder="Search" v-model="search">
        <div class="row" v-if="bookings">
        <BookingCard
          v-for="booking in bookings"
          :key="booking"
          :booking="booking" class="pt-3"
        />
      </div>
      <div v-else id="loading">
        <div class="loader">
          <div class="loaderBar"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BookingCard from "@/components/BookingCard.vue";

export default {
    components: { BookingCard },
  data() {
    return {
      search: "",
    };
  },
  mounted() {
    this.$store.dispatch("getBookings");
  },
  computed:{
    bookings(){
        return this.$store.state.bookings;
    },
    bookings() {
      return this.$store.state.bookings?.filter(bookings =>{
          let isMatch = true;
          if (!bookings.prodName.toLowerCase().includes(this.search.toLowerCase())) {
              isMatch = false;
          }
          return isMatch
          })
        }
  }
};
</script>

<style scoped>
.allBookings {
  background-color: #c37935;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: column;
}

.container {
  gap: 25px;
}

#loading{
  min-height: 100vh;
}

.loader { 
  width:500px; 
  margin:0 auto;
  border-radius:10px;
  border:4px solid transparent;
  position:relative;
  padding:1px;
}
.loader:before {
  content:'';
  border:2px solid black;
  border-radius: 5px;
  position:absolute;
  top:-6px;
  right:-4px;
  bottom:-6px;
  left:-4px;
}
.loader .loaderBar {
  position:absolute;
  border-radius:10px;
  top:0;
  right:100%;
  bottom:0;
  left:0;
  background: #c37935;
  width:0;
  animation:LoadingBar 2s linear infinite;
}

@keyframes LoadingBar {
  0% {
    left:0%;
    right:100%;
    width:0%;
  }
  10% {
    left:0%;
    right:75%;
    width:25%;
  }
  90% {
    right:0%;
    left:75%;
    width:25%;
  }
  100% {
    left:100%;
    right:0%;
    width:0%;
  }

}


.search-new ::placeholder{
  color: white;
  font-weight: 900;
  border: 1px solid white;
  border-radius: 10px;
}

#search{
  margin: 3% auto 5%;
  width: 50%;
}

</style>
