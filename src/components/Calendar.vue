<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Calendar</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
            <div class="container">

<div class="calendar-container">

  <header>
    
    <div class="day">9</div>
    <div class="month">September</div>

  </header>

  <table class="calendar">
    
    <thead>

      <tr>

        <td>Mon</td>
        <td>Tue</td>
        <td>Wed</td>
        <td>Thu</td>
        <td>Fri</td>
        <td>Sat</td>
        <td>Sun</td>

      </tr>

    </thead>

    <tbody>

      <tr>
        <td class="prev-month">29</td>
        <td class="prev-month">30</td>
        <td class="prev-month">31</td>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
      </tr>

      <tr>
        <td>5</td>
        <td>6</td>
        <td>7</td>
        <td>8</td>
        <td class="current-day">9</td>
        <td>10</td>
        <td>11</td>
      </tr>

      <tr>
        <td>12</td>
        <td>13</td>
        <td>14</td>
        <td>15</td>
        <td>16</td>
        <td>17</td>
        <td >18</td>
      </tr>

      <tr>
        <td>19</td>
        <td>20</td>
        <td>21</td>
        <td>22</td>
        <td>23</td>
        <td>24</td>
        <td>25</td>
      </tr>

      <tr>
        <td>26</td>
        <td>27</td>
        <td>28</td>
        <td>29</td>
        <td>30</td>
        <td>31</td>
        <td class="next-month">1</td>
      </tr>

    </tbody>

  </table>

  <div class="ring-left"></div>
  <div class="ring-right"></div>

</div> 

</div> 
        </div>
        <div class="modal-footer">
          <div class="row">
            <div class="col-12">
              <div class="booking-btns">
                <button class="btn"
                  @click="addCart()"
                >
                  book now
                </button>
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
    props: ["id"],
    mounted() {
        this.$store.dispatch("getBooking", this.id);
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
    addCart() {
      let booking = {
        prodName: this.booking[0].prodName,
        prodCategory: this.booking[0].prodCategory,
        prodDesc: this.booking[0].prodDesc,
        prodmage: this.booking[0].prodmage,
        prodPrice: this.booking[0].prodPrice,
      };
      this.$store.dispatch("addCart", booking, this.user.id);
    },
  },
};
</script>

<style scoped>

.modal-content{
  background-color: #c37935;
  color: white;
}

.btn{
  background-color: #c37935;
  color: white;
  font-weight: 900;
  border: 1px solid white;
  border-radius: 10px;
}

.btn:hover{
  background-color: white ;
  color: #c37935;
  font-weight: 900;
  border: 1px solid #c37935;
  border-radius: 10px;
}



body {
	background: white;
  display: grid;
	margin: 0;
  place-items: center;
}

table {
	border-collapse: collapse;
	border-spacing: 0;
}

td {
	padding: 0;
}

.calendar-container {
	position: relative;
	width: 350px;
}

.calendar-container header {
	border-radius: 1em 1em 0 0;
	background: #c37935;
	color: white;
	padding: 3em 2em 3em 2em ;
}

.day {
	font-size: 8em;
	font-weight: 900;
	line-height: 1em;
}

.month {
	font-size: 4em;
	line-height: 1em;
	text-transform: lowercase;
}

.calendar {
	background: white;
	border-radius: 0 0 1em 1em;
	-webkit-box-shadow: 0 2px 1px rgba(0, 0, 0, .2), 0 3px 1px white;
	box-shadow: 0 2px 1px rgba(0, 0, 0, .2), 0 3px 1px white;
	color: #c37935;
	display: inline-block;
	padding: 2em;
}

.calendar thead {
	color:#c37935;
	font-weight: 700;
	text-transform: uppercase;
}

.calendar td {
	padding: .5em 1em .5em 1em;
	text-align: center;
}

.calendar tbody td:hover {
	background: white;
	color: white;
}

.current-day {
	color: #c37935;
}

.prev-month,
.next-month {
	color: white;
}

.ring-left,
.ring-right {
	position: absolute;
	top: 230px;
}

.ring-left { left: 2em; }
.ring-right { right: 2em; }

.ring-left:before,
.ring-left:after,
.ring-right:before,
.ring-right:after {
	background: white;
	border-radius: 4px;
	-webkit-box-shadow: 0 3px 1px rgba(0, 0, 0, .3), 0 -1px 1px rgba(0, 0, 0, .2);
	box-shadow: 0 3px 1px rgba(0, 0, 0, .3), 0 -1px 1px rgba(0, 0, 0, .2);
	content: "";
	display: inline-block;
	margin: 8px;
	height: 32px;
	width: 8px;
}

</style>
