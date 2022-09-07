import { createStore } from 'vuex'
import router from '@/router'
import {toRaw} from 'vue'

export default createStore({
  state: {
    bookings: null,
    booking: null,
    user:null,
    token:null,
    cart: null,
    users: null,
    total: 0
  },

  getters: {
  },

  mutations: {
    setBookings(state, bookings){
      state.bookings = bookings
    },
    setBooking(state, booking){
      state.booking = booking
    },
    setUser(state, user){
      state.user = user
    },
    setToken(state, token){
      state.token = token
    },
    setUsers(state, users){
      state.users = users
    },
    setUserCart(state, cart){
      state.cart = cart
    },
    setTotal(state, total){
      state.total = total
    },
    Logout(state) {
      state.user = "",
        state.token = ""
    }
  },

  actions: {
    async getBookings(context){
      let fetched = await fetch('https://capstone-backend-api-1.herokuapp.com/bookings');
      let res = await fetched.json();
      context.commit('setBookings', res.bookings)
    },

    async getUsers(context){
      let fetched = await fetch('https://capstone-backend-api-1.herokuapp.com/users');
      let res = await fetched.json();
      context.commit('setUsers', res.users)
    },

    async getBooking(context, id){
      let fetched = await fetch('https://capstone-backend-api-1.herokuapp.com/bookings/' + id);
      let res = await fetched.json();
      context.commit('setBooking', res.bookings)
    },

    register(context, payload){
      const {name, surname, email, password} = payload
      fetch ('https://capstone-backend-api-1.herokuapp.com/users', {
        method: 'POST',
        body: JSON.stringify({
          userName: name,
          userSurname: surname,
          userEmail: email,
          userPassword: password
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        },
      })
      .then((response) => response.json())
      .then((data) => {
        if(data.msg == "The provided email already exists. Please enter another one") {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'The provided email already exists.Please try another one',
          })
        } else {
          Swal.fire({
            icon: 'success',
            title: "Registration Successful",
            text: 'Book an appointment today',
          })
          context.commit('setToken',data.token);
        }
      });
    },

    async editUser(context,payload){
      fetch('https://capstone-backend-api-1.herokuapp.com/users/'+ payload.id, {
          method:'PUT',
          body: JSON.stringify(payload),
          headers:{
              'Content-type': 'application/json; charset=UTF-8'
          }
      })
      .then((res)=> res.json())
      .then((data)=> context.dispatch('getUsers'));
  },

  async deleteUser(context,id){
    fetch('https://capstone-backend-api-1.herokuapp.com/users/'+ id, {
        method:'DELETE'
    })
    .then((res)=> res.json())
    .then((data)=> context.dispatch('getUsers'))
},

    login(context, payload){
      const {email, password} = payload;
      fetch('https://capstone-backend-api-1.herokuapp.com/users', {
        method: 'PATCH',
        body: JSON.stringify({
          userEmail: email,
          userPassword: password
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        },
      })
      .then(res => res.json())
      .then(data => {
        if (data.msg == "Email Not Found. Please register"){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Email Not Found. Please register',
          })
        } else {
          if(data.msg == 'Password is Incorrect') {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Password is Incorrect',
            })
          } else {
            Swal.fire({
              icon: 'success',
              title: 'Welcome',
              text: 'Book an appointment today',
            })
            context.commit('setUser', data.user)
            context.commit('setToken', data.token)
            console.log(data.token);
            console.log(data.user)
            context.dispatch('getUserCart')
           }
          }
        });
      },

    async editBooking(context,payload){
      fetch('https://capstone-backend-api-1.herokuapp.com/bookings/'+ payload.id, {
          method:'PUT',
          body: JSON.stringify(payload),
          headers:{
              'Content-type': 'application/json; charset=UTF-8'
          }
      })
      .then((res)=> res.json())
      .then((data)=> context.dispatch('getBookings'));
  },

  async addBooking(context,payload){
    fetch('https://capstone-backend-api-1.herokuapp.com/bookings', {
        method:'POST',
        body: JSON.stringify(payload),
        headers:{
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
    .then((res)=> res.json())
    .then((data)=> context.dispatch('getBookings'));
},

  async deleteBooking(context,id){
      fetch('https://capstone-backend-api-1.herokuapp.com/bookings/'+ id, {
          method:'DELETE'
      })
      .then((res)=> res.json())
      .then((data)=> context.dispatch('getBookings'))
  },

  async getUserCart(context){
    let fetched = await fetch('https://capstone-backend-api-1.herokuapp.com/users/' + context.state.user.id + '../components/AppointNav.vue');
    let res = await fetched.json();
    context.commit('setUserCart', res.cart)
    context.dispatch('getTotalCart')
  },

  addCart(context, payload){
    const {prodName,prodDesc,prodPrice,prodImage,prodCategory} = payload
    fetch('https://capstone-backend-api-1.herokuapp.com/users/' + context.state.user.id + '../components/AppointNav.vue', {
    method: 'POST',
    body: JSON.stringify({
        prodName: prodName,
        prodDesc: prodDesc,
        prodPrice: prodPrice,
        prodImage: prodImage,
        prodCategory: prodCategory
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((response) => response.json())
    .then((data) => {
        if (data.results == 'There is no user with that id') {
          alert(data.results)
        } else {
          alert('Item Added')
          context.dispatch('getUserCart')
        }
  })
},
getTotalCart(context){
  let total = 0;
  toRaw(context.state.cart).forEach(booking => {
    total = total + booking.price
  });
  context.commit('setTotal', total)
},
deleteCart(context){
  fetch('https://capstone-backend-api-1.herokuapp.com/users/' + context.state.user.id + '../components/AppointNav.vue', {
  method: 'DELETE'
  })
  .then((res) => res.json())
  .then((data) =>{
    if (data.result == 'There is no user with that ID') {
      alert(data.result)
    } else {
      alert(
        'The purchase of ' + context.state.user.userName + ' with a total of R' + Math.round((context.state.total + Number.EPSILON)*100)/100)
      context.dispatch('getUserCart')
    }
  })
}
 },


  modules: {
  }
})
