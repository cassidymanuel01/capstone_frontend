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
    <h3>The only availble date for this month is the</h3>
    <div class="day"><h3>15th of</h3></div>
    <div class="month"><h3>September</h3></div>
  </header>
  <table class="calendar">
    <thead>
      <tr>
        <th>Mon</th>
        <th>Tue</th>
        <th>Wed</th>
        <th>Thu</th>
        <th>Fri</th>
        <th>Sat</th>
        <th>Sun</th>

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
        <td >9</td>
        <td>10</td>
        <td>11</td>
      </tr>
      <tr>
        <td>12</td>
        <td>13</td>
        <td>14</td>
        <td class="current-day">15</td>
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
        <td class="next-month">1</td>
        <td class="next-month">2</td>
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
        id: this.booking[0].id,
        prodName: this.booking[0].prodName,
        prodCategory: this.booking[0].prodCategory,
        prodDesc: this.booking[0].prodDesc,
        prodImage: this.booking[0].prodImage,
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
	padding: 10px;
}

.calendar-container {
	position: relative;
    
}

.calendar-container header {
	border-radius: 1em 1em 0 0;
	background: #c37935;
	color: white;
	padding: 3em 2em 3em 2em ;
    
}

.day {
    font-size: large;
	font-weight: 400;
	line-height: 1em;
}

.month {
    font-size: large;
	line-height: 1em;
	text-transform: lowercase;
}

.calendar {
	background: white;
	border-radius: 0 0 1em 1em;
	-webkit-box-shadow: 0 2px 1px rgba(0, 0, 0, .2), 0 3px 1px white;
	box-shadow: 0 2px 1px rgba(0, 0, 0, .2), 0 3px 1px white;
	display: inline-block;
	padding: 5px;
}

.calendar thead {
	color:#c37935;
	font-weight: 400;
	text-transform: uppercase;
}

.calendar td {
    gap: 1px;
	text-align: center;
    background-color: red;
    color: white;
    border: 2px solid white;
}
/* 
.calendar tbody td:hover {
	background: #c37935;
	color: white;
} */

.current-day {
	background-color: rgb(37, 194, 37) !important;
    color: white !important;
    border: 2px solid white !important;
}

/* .current-day:hover {
	background-color: white;
    color: #c37935;
} */

.prev-month,
.next-month {
	color: white;
    border: 2px solid white;
}

/* .ring-left,
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
} */

</style>
