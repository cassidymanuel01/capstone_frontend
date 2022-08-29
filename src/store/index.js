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
      context.commit('setBooking', res.booking)
    },

    register(context, payload){
      const {name, surname, email, password} = payload
      fetch ('https://capstone-backend-api-1.herokuapp.com/users', {
        method: 'POST',
        body: JSON.stringify({
          userName: name,
          userSurname: surname,
          userEmail: email,
          userPassowrd: password
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        },
      })
      .then((response) => response.json())
      .then((data) => {
        if(data.msg == "The provided email already exists.Please try another one") {
          alert("The provided email already exists.Please try another one");
        } else {
          alert('Registration Successful');
          context.commit('setToken',data.token);
          setTimeout(() =>{
            router.push('../components/Login.vue'), 5000
          })
        }
      });
    },

    login(context, payload){
      const {email, password} = payload 
      fetch('https://capstone-backend-api-1.herokuapp.com/users', {
        method: 'PATCH',
        body: JSON.stringify({
          userEmail: email,
          userPassowrd: password,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        },
      })
      .then((response) => response.json())
      .then((data) => {
        if (data.msg == 'Email Was Not Found.') {
          alert(data.msg)
        } else {
          if(data.msg == 'Password Is Incorrect') {
            alert(data.msg)
          } else {
            alert(`Welcome ${data.user[0].userName}`)
            context.commit('setUser', data.user[0])
            context.commit('setToken', data.token)
            context.dispatch('getUserCart')
            setTimeout(() => {
              router.push('/allBookings'), 5000
            })
          }
        }
      });
    },

  },

  modules: {
  }
})
