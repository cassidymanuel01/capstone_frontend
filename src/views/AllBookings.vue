<template>
  <div class="allBookings">
    <div class="container">

    </div>
  </div>
</template>

<script>
export default {
    data() {

        return{
            search:''
        }
    },
    mounted() {
        this.$store.dispatch("getBookings");
    },
    computed: {
        bookings() {
            return this.$store.state.bookings?.filter(bookings =>{
                let isMatch = true;
                if(!bookings.title.toLowerCase().includes(this.search.toLowerCase())) {
                    isMatch = false;
                }
                return isMatch
            })
        }
    },
};
</script>

<style scoped>

.allBookings{
  background-color: #C37935;
  color: white;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: column;
}

</style>