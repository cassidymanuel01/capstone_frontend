<template>
  <div class="allBookings pt-5">
    <div class="container">
        <h2 class="display-3 pb-4 pt-4">Treatments</h2>
        <div class="row" v-if="bookings">
        <BookingCard
          v-for="booking in bookings"
          :key="booking"
          :booking="booking"
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

</style>
