<template>
  <div class="contact pt-5">
    <div class="video">
            <img src="https://i.ytimg.com/vi/cr3Bf53Lseo/maxresdefault.jpg" alt="logo"/>
            <div class="overlay">
                <div class="container">
                    <h2>contact us</h2>
                    <p class="h2-bottom">We value all our customers so just fucking contact us.</p>
                    <div class="social">
                        <i class="fa fa-facebook"></i>
                        <i class="fa fa-twitter"></i>
                        <i class="fa fa-instagram"></i>
                        <i class="fa fa-linkedin"></i>
                        <i class="fa fa-pinterest"></i>
                    </div>
                    <form>
                        <input type="text" name="name" placeholder=" your name">
                        <input type="email" name="email" placeholder="your email">
                        <input type="tel" name="phone" placeholder="your phone">
                        <textarea placeholder="your message"></textarea>
                        <button><div>send
                            <i class="fa fa-arrow-right"></i></div>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.contact{
  background-color: #C37935;
  color: white;
  height: 100vh;
}

.video {
    min-width: 100%;
    max-height: 720px;
    overflow: hidden;    position: relative;
    text-align: center;

}
.video img {
    min-width: 100%;
    min-height: 100%;

}
.video .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: white;
    padding-top: 80px;
    background-color: #C37935;;
}
.video .overlay h2 {
  text-transform: uppercase;
  font-size: 35px
}
.video .overlay p {
    color: white !important;
}
.video .overlay .social {
    margin-top: 40px;
}
.video .overlay .social i {
    width: 55px;
    height: 55px;
    border-radius: 50%;
    border: 1px solid white;
    line-height: 35px;
    font-size: 25px;
    transition: .5s ease;
    margin-right: 5px;
}
.video .overlay .social i:last-child {
    margin-right: 0;
}
.video .overlay .social i:hover {
    border-color:  #C37935;
    cursor: pointer;
    box-shadow: 0 0 20px #C37935;
    transform: scale(1.2)
}


@media(max-width:574px){
    .video .overlay .social i {
    width: 45px;
    height: 35px;
    border-radius: 50%;
    line-height: 15px;
    font-size: 25px;
    transition: .5s ease;
    margin-right: 5px;
}
}

.video .overlay form {
    width: 80%;
    margin: 60px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.video .overlay form input {
    height: 40px;
    background-color: transparent;
    padding: 5px 0px;
    border: 0;
    border-bottom: 1px solid white;
    margin-bottom: 30px;
  color: white;
}
.video .overlay form textarea {
    background-color: transparent;
    padding: 5px 0px;
    border: 0;
    border-bottom: 1px solid white;
    margin-bottom: 30px;
    height: 40px;
    width: 100%;
  color:white;
}
.video .overlay form input:focus,.video .overlay form textarea:focus {
    border-bottom-color: #C37935;
    box-shadow: 0px 0px 20px #C37935;
}
.video .overlay form input::-webkit-input-placeholder,
.video .overlay form textarea::-webkit-input-placeholder {
    color: #e8e8e8;
    text-transform: capitalize;
}
.video .overlay form [name="name"],
.video .overlay form [name="email"],
.video .overlay form [name="phone"] {
    width: 31%;
}
.video .overlay form [name="website"],
.video .overlay form [name="subject"] {
    width: 48%;
    margin-bottom: 80px;
}
.video .overlay form button {
    background-color: transparent;
    padding: 10px 0;
    width: 100%;
    border: 1px solid white;
    color: white;
    text-transform: uppercase;
    transition: 1s ease;
    overflow: hidden;
}
.video .overlay form button:hover {
    color: white;
    border-color: #C37935;
    box-shadow: 0 0 20px white;
  cursor: pointer
}
.video .overlay form button:hover div {
   /* transform: rotate(-422deg) scale(1.5, 1.5) translate(50%, 50px);*/
    transform: scale(2) translateX(200px);
    transition: 1s ease-in-out;
    color: transparent;
}
/* ----------- start media query for video & contact ----*/
@media only screen and (max-width: 575px) {
    .video .overlay {
        padding-top: 40px;
    }
    .video .overlay .social {
        margin-top: 10px;        
        
    }
    .video .overlay .social i {
        width: 40px;
        height: 40px;
        font-size: 20px;
        line-height: 40px;
        padding: 30px;
        bottom: 10%;
    }
    .video .overlay form {
        width: 90%;
        margin: 40px auto 0;
        flex-direction: column;
        align-items: center;
    }
    .video .overlay form input {
        width: 95% !important;
        margin-bottom: 15px !important;
    }
    .video .overlay form textarea {
        width: 95%;
        margin-top: 15px;
    }
    .video .overlay form button {
        width: 95%;
    }
}
@media (min-width: 576px) and (max-width: 991px) {
    
    .video .overlay form {
        width: 90%;
        margin: 60px auto 0;
    }
    .video .overlay form [name="name"],
    .video .overlay form [name="email"] {
        width: 48%;
    }
    .video .overlay form [name="phone"],
    .video .overlay form [name="website"] {
        width: 48%;
        margin-bottom: 30px;
    }
    .video .overlay form [name="subject"] {
        width: 100%;
    }
    
}


</style>

