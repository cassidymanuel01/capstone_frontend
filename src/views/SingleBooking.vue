<template>
  <div class="singleBooking pt-5">
    <div
      class="container d-flex justify-content-center align-items-center flex-column pt-5"
    >
      <div class="booking-card" v-if="booking">
        <router-link to="/allBookings"
          ><button class="btn btn-new">Back</button></router-link
        >
        <div class="booking-tumb">
          <img class="img-fluid" :src="booking[0].prodImage" alt="booking" />
        </div>
        <div class="booking-details">
          <span class="booking-catagory">{{booking[0].prodCategory}}</span>
          <h4>{{booking[0].prodName}}</h4>
          <p>{{booking[0].prodDesc}}</p>
          <div class="booking-bottom-details">
            <div class="row w-100">
              <div class="col-12 w-100 d-flex justify-content-center">
                <div class="booking-price pb-3 d-flex justify-content-center">
                  R{{booking[0].prodPrice}}
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="booking-btns">
                <button type="button"
                  class="btn booking-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  ><span>choose a date</span><i></i
                ></button>
                <Calendar/>
              </div>
            </div>
          </div>
        </div>
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

import Calendar from '@/components/Calendar.vue';

export default {
  components:{Calendar},
    mounted() {
        this.$store.dispatch("getBooking", this.$route.params.id);
    },
    computed: {
        booking() {
            return this.$store.state.booking;
        },
        user() {
            return this.$store.state.user;
        },
    },
    methods: {
      // addCart(){
      //   let booking = {
      //     prodName: this.booking[0].prodName,
      //     prodCategory: this.booking[0].prodCategory,
      //     prodDesc: this.booking[0].prodDesc,
      //     prodmage: this.booking[0].prodmage,
      //     prodPrice: this.booking[0].prodPrice
      //   }
      //   this.$store.dispatch('addCart', booking, this.user.id)
      // }
    }
};
</script>

<style scoped>
.singleBooking {
  background-color: #c37935;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: column;
}

/* .card {
  width: 380px;
  position: relative; */
/* box-shadow: 0 2px 7px #dfdfdf;
  background: #fafafa; */
/* } */

/* .card-body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  padding: 50px; */
/* background: #f0f0f0; */
/* } */

/* .card-body img {
  max-width: 100%;
  max-height: 100%;
}

@media(max-width:450px){
    .card{
        width: 360px;
    }
} */

.img-fluid {
  height: 100%;
  width: 100%;
  object-fit: cover;
  overflow-x: hidden;
}
.booking-card {
  width: 380px;
  position: relative;
  background-color: #c37935;
}

.booking-tumb {
  display: flex;
  align-items: center !important;
  justify-content: center !important;
  height: 300px;
  padding: 50px;
  background: #f0f0f0;
}

.btn-new {
  background-color: #c37935;
  color: white;
  font-weight: 900;
  border: 1px solid white !important;
  border-radius: 10px;
  position: absolute;
  left: -20%;
  background-color: #c37935;
  color: white;
  z-index: 1;
}

.btn-new:hover {
  background-color: white;
  color: #c37935;
  font-weight: 900;
  border: 1px solid #c37935;
  border-radius: 10px;
}

.booking-tumb img {
  max-width: 100%;
  max-height: 100%;
}

.booking-details {
  padding: 10px;
  background-color: #c37935;
  border: 1px solid white;
}

/* .booking-catagory {
  display: block;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  color: color;
  margin-bottom: 18px;
} */

/* .booking-details h4 a {
  font-weight: 500;
  display: block;
  margin-bottom: 18px;
  text-transform: uppercase;
  color: #363636;
  text-decoration: none;
  transition: 0.3s;
} */

/* .booking-details h4 a:hover {
  color: rgb(0, 162, 255);
} */

/* .booking-details p {
  font-size: 15px;
  line-height: 22px;
  margin-bottom: 18px;
  color: black;
} */

.booking-bottom-details {
  overflow: hidden;
  border-top: 1px solid #c37935;
  background-color: #c37935;
  border-bottom: 1px solid #c37935;
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
  .btn-new {
    position: absolute;
    left: -30%;
    background-color: #c37935;
    color: white;
    z-index: 1;
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
  .btn-new {
    position: absolute;
    left: -10%;
    background-color: #c37935;
    color: white;
    z-index: 1;
  }
}

/* @media (max-width: 768px) {
  .col-md-4 {
    width: 50%;
    flex: 0 0 auto;
    display: flex;
    justify-content: center;
  }
  .btn-new {
    position: absolute;
    left: -20%;
    background-color: #c37935;
    color: white;
    z-index: 1;
  }
}

@media (max-width: 690px) {
  .col-md-4 {
    width: 50%;
    flex: 0 0 auto;
    display: flex;
    justify-content: center;
  }
  .btn-new {
    position: absolute;
    left: -20%;
    background-color: #c37935;
    color: white;
    z-index: 1;
  }
} */

/* @media (max-width: 640px) {
  .col-md-4 {
    width: 50%;
    flex: 0 0 auto;
    display: flex;
    justify-content: center;
  }
  .btn-new {
    position: absolute;
    left: -40%;
    background-color: #c37935;
    color: white;
    z-index: 1;
  }
} */

@media (max-width: 720px) {
  .col-md-4 {
    width: 100%;
    /* flex: 0 0 auto; */
    display: flex;
    justify-content: center;
  }
  .btn-new {
    position: absolute;
    left: -10%;
    background-color: #c37935;
    color: white;
    z-index: 1;
  }
}

@media (max-width: 800px) {
  .col-md-4 {
    width: 100%;
    /* flex: 0 0 auto; */
    display: flex;
    justify-content: center;
  }
  .btn-new {
    position: absolute;
    left: -20%;
    background-color: #c37935;
    color: white;
    z-index: 1;
  }
}

@media (max-width: 850px) {
  .col-md-4 {
    width: 100%;
    /* flex: 0 0 auto; */
    display: flex;
    justify-content: center;
  }
  .btn-new {
    position: absolute;
    left: -20%;
    background-color: #c37935;
    color: white;
    z-index: 1;
  }
}

.booking-price {
  font-size: 18px;
  color: white;
  font-weight: 500;
}

.booking-price small {
  font-size: 80%;
  font-weight: 400;
  text-decoration: line-through;
  display: inline-block;
  margin-right: 5px;
}

/* .booking-btn {
  text-align: right;
}

.booking-btn i{
  width: 135px;
} */

/* .booking-btn a {
  display: inline-block;
  margin-left: 5px;
  color: rgb(242, 242, 242);
  transition: 0.3s;
  font-size: 17px;
  width: 135px;
} */

/* .booking-btn a:hover {
  color: rgb(0, 162, 255);
} */

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

/* .booking-btn:hover {
  letter-spacing: 0.20em;
  background-color: rgb(0, 162, 255);
  color: rgb(0, 162, 255);
  box-shadow: 0 0 10px rgb(0, 162, 255);
} */

/* .booking-btn::before {
  content: "";
  position: absolute;
  inset: 2px;
  background: white;
  width: 100%;
} */

.booking-btn span {
  position: relative;
  z-index: 2;
  width: 100%;
}

#loading {
  min-height: 30vh;
}

.loader {
  width: 500px;
  margin: 0 auto;
  border-radius: 10px;
  border: 4px solid transparent;
  position: relative;
  padding: 1px;
}
.loader:before {
  content: "";
  border: 2px solid black;
  border-radius: 5px;
  position: absolute;
  top: -6px;
  right: -4px;
  bottom: -6px;
  left: -4px;
}
.loader .loaderBar {
  position: absolute;
  border-radius: 10px;
  top: 0;
  right: 100%;
  bottom: 0;
  left: 0;
  background: #c37935;
  width: 0;
  animation: LoadingBar 2s linear infinite;
}
</style>
