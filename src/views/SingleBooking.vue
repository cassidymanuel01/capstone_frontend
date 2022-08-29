<template>
  <div class="singleBooking">
    <div class="container">

    </div>
  </div>
</template>

<script>
export default {
    props:['id'],
    mounted() {
        this.$store.dispatch("getBooking", this.id);
    },
    computed: {
        booking() {
            return this.$store.state.booking;
        },
        user() {
            return this.$store.state.user
        }
    },
    methods:{

    }

}
</script>

<style scoped>

.singleBookings{
  background-color: #C37935;
  color: white;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: column;
}

</style>