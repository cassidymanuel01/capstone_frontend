<template>
        <div class="col-md-4 pb-5">
    <div class="booking-card">
        <div class="booking-tumb">
          <img class="img-fluid" :src="booking.prodImage" alt="booking"/>
        </div>
        <div class="booking-details">
          <h4>{{booking.prodName}} </h4>
          <div class="booking-bottom-details d-flex justify-content-center">
            <div class="row">
              <div class="col-12">
                <div class="booking-btns">
                  <router-link class="booking-btn" :to="{name:'singleBooking', params: {id: booking.id}}"
                    ><span>View</span></router-link>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
        </div>
</template>

<script>
export default {
    props:['booking']
}
</script>

<style scoped>

.img-fluid {
  height: 100%;
  width: 100%;
  object-fit: cover;
  overflow-x: hidden;
}
.booking-card {
  width: 380px;
  position: relative;
  background-color: #C37935;
}

.booking-tumb {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  padding: 50px;
  background: #f0f0f0;
}

.booking-tumb img {
  max-width: 100%;
  max-height: 100%;
}

.booking-details {
  padding: 10px;
  background-color: #C37935;
  border: 1px solid white;
  height: 140px
}

.booking-bottom-details {
  overflow: hidden;
  border-top: 1px solid #C37935;
  background-color: #C37935;
  border-bottom: 1px solid #C37935;
}

.booking-bottom-details div {
  width: 130px;
}

@media (max-width: 424px) {
  .booking-card {
    width: 100%;
  }
  .booking-bottom-details div {
    width: 85%;
    display: flex;
    justify-content: center;
  }
}

@media (max-width: 750px) {
  .booking-card {
    width: 100%;
  }
  .booking-bottom-details div {
    width: 85%;
    display: flex;
    justify-content: center;
  }
}

@media (min-width: 768px){
    .col-md-4{
        width: 50% ;
        flex: 0 0 auto;
        display: flex;
        justify-content: center;
    }
}

@media (min-width: 600px){
    .col-md-4{
        width: 50% ;
        flex: 0 0 auto;
        display: flex;
        justify-content: center;
    }
}

@media (max-width: 699px){
    .col-md-4{
        width: 100% ;
        /* flex: 0 0 auto; */
        display: flex;
        justify-content: center;
    }
}

.booking-btn {
  display: inline-block;
  position: relative;
  background: white;
  color: black;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1em;
  letter-spacing: 0.1em;
  padding: 10px 30px 10px 30px;
  width: 100%;
  text-align: center;
}

.booking-btn span {
  position: relative;
  z-index: 2;
  width: 100%;
}

.col-12{
  padding: 0;
}

</style>