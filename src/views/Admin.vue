<template>
  <div class="admin">
    <div class="container pt-5">
        <div class="table-responsive">
      <table class="table">
        <tr>
          <th class="table__heading">ID</th>
          <th class="table__heading">User Name</th>
          <th class="table__heading">User Surname</th>
          <th class="table__heading">Email</th>
          <th class="table__heading">Cart</th>
          <th class="table__heading">Edit User</th>
        </tr>
        <tbody v-if="users">
          <tr class="table__row" v-for="user in users" :key="user" :user="user">
            <td class="table__content" data-heading="ID">{{ user.id }}</td>
            <td class="table__content" data-heading="User Name">
              {{ user.userName }}
            </td>
            <td class="table__content" data-heading="User Surname">
              {{ user.userSurname }}
            </td>
            <td class="table__content" data-heading="Email">
              {{ user.userEmail }}
            </td>
            <td class="table__content" data-heading="Cart">
              <button data-bs-toggle="modal" data-bs-target="#cart" class="btn">cart</button>
              <CartModal :booking="booking" style="z-index: 1504;"/>
            </td>
            <td class="table__content" data-heading="Edit User">
              <button
                  data-bs-toggle="modal" :data-bs-target="`#editUser`+user.id"
                  class="btn rounded rounded-1"
                >
                  Edit
                </button>
                <br>
                <br>
                <button
                  data-bs-toggle="modal" :data-bs-target="`#deleteUser`+user.id"
                  class="btn rounded rounded-1"
                >
                  Delete
                </button>
                <EditUser :user="user" />
                <DeleteUser :user="user" />
            </td>
          </tr>
        </tbody>
      </table>
      </div>
      <br />
      <div class="table-responsive">
        <table class="table table-white table-hover">
          <thead>
            <tr>
              <th class="table__heading">ID</th>
              <th class="table__heading">Booking Name</th>
              <th class="table__heading">Descrip</th>
              <th class="table__heading">Booking Image</th>
              <th class="table__heading">Price</th>
              <th class="table__heading">Category</th>
              <th class="table__heading">
                <button
                  data-bs-toggle="modal" data-bs-target="#addBooking"
                  class="btn-add rounded rounded-1"
                >
                  ADD
                </button>
                <AddBooking :booking="booking" />
              </th>
            </tr>
          </thead>
          <tbody v-if="bookings">
            <tr v-for="booking in bookings" :key="booking" :booking="booking">
              <th class="table__content" data-heading="ID">{{ booking.id }}</th>
              <th class="table__content" data-heading="Booking Name">{{ booking.prodName }}</th>
              <th class="table__content" data-heading="Descrip">{{ booking.prodDesc }}</th>
              <th class="table__content" data-heading="Booking Image">
                <img class="img-fluid" :src="booking.prodImage" alt="booking" />
              </th>
        <th class="table__content" data-heading="Price">{{ booking.prodPrice }}</th>
              <th class="table__content" data-heading="Category">{{ booking.prodCategory }}</th>
              <th class="table__content" data-heading="ADD">
                <button
                  data-bs-toggle="modal" :data-bs-target="`#editBooking`+booking.id"
                  class="btn rounded rounded-1"
                >
                  Edit
                </button>
                <br>
                <br>
                <button
                  data-bs-toggle="modal" :data-bs-target="`#deleteBooking`+booking.id"
                  class="btn rounded rounded-1"
                >
                  Delete
                </button>
                <EditBooking :booking="booking" />
                <DeleteBooking :booking="booking" />
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import EditBooking from '@/components/EditBookingModal.vue';
import DeleteBooking from '@/components/DeleteBookingModal.vue';
import AddBooking from '@/components/AddBooking.vue';

export default {

  components: { EditBooking, DeleteBooking, AddBooking},
  mounted() {
    this.$store.dispatch("getBookings");
    this.$store.dispatch("getUsers");
  },
  computed: {
    bookings() {
      return this.$store.state.bookings;
    },
    users() {
      return this.$store.state.users;
    },
    user(){
      return this.$store.state.user
    }
  },

}
</script>

<style scoped>

.admin{
  background-color: #C37935;
  color: white;
  padding: 20px;
}

.table__heading { border-bottom: 2px solid  #C37935; }
 @media (max-width: 800px) {
 .table__heading {
display: none;
}
 .table__content {
 display: block;
 padding: .5rem 0;
}
 .table__row {
 margin: .25rem 1rem;
 padding: .5rem 0;
 display: block;
 border-bottom: 2px solid  #C37935;
}
 .table__content:before {
 content: attr(data-heading);
 display: inline-block;
 width: 5rem;
 margin-right: .5rem;
 color: #999;
 font-size: .75rem;
 font-weight: 700;
 text-transform: uppercase;
 letter-spacing: 2px;
}
.btn-add{
    background-color: black;
    color: white;
}
}

table{
    color: black;
  background-color: rgb(242, 242, 242);
  padding: 60px !important;
}

.table{
    color: black;
  background-color: rgb(242, 242, 242);
  padding: 50px !important;
}

.img-fluid {
  height: 100%;
  width: 100%;
  object-fit: cover;
  overflow-x: hidden;
  aspect-ratio: 1;
}

.btn{
    border: 1px solid black;
}



</style>