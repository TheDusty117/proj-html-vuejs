<script>

export default{
  data(){
    return{

      links: [

        {
          title: 'home',
        },
        {
          title: 'about',
        },
        {
          title: 'services',
        },
        {
          title: 'process',
        },
        {
          title: 'testimonials',
        },

      ]


    }
  }

}

</script>

<template> 

<div class="additional-info-header">
  <div class="container container-teal">
    <div class="d-flex justify-content-between row-contacts-opening align-items-center">
      
      <ul class="m-0 p-0">
        <li>
          <span><font-awesome-icon icon="fa-solid fa-clock" /> Open Hours: Mon-Sat - 9:00-18:00</span>
        </li>
      </ul>
  
      <ul class="d-flex gap-5 m-0 p-0">
        <li>
          <span>
            <font-awesome-icon icon="fa-solid fa-phone" />+(305) 1234-5678
          </span>
        </li>
        <li>
          <span>
            <font-awesome-icon icon="fa-solid fa-envelope" /> cargotransport@example.com
          </span>
        </li>
        <li>
          <a href="#">
            <span><font-awesome-icon class="icon-hover" icon="fa-brands fa-facebook-f" /></span>
          </a>
        </li>
        <li>
          <a href="#">
            <span><font-awesome-icon class="icon-hover" icon="fa-brands fa-twitter" /></span>
          </a>
        </li>
        <li>
          <a href="#">
            <span><font-awesome-icon class="icon-hover" icon="fa-brands fa-linkedin-in" /></span>
          </a>
        </li>
      </ul>
      
    </div>


  </div>
</div>


<!--------------------SEZIONE CON BACKGROUND CAMION------------------------------------------------->
<section>
  <div class="container">
    <div class="row justify-content-between pt-3">
      
      <div class="col-2">
        <ul class="p-0">
          <li>
            <a href="#">
              <h2 class="main-logo"><span class="nex-style">NEX</span> GEN</h2>
            </a>
          </li>
        </ul>
      </div>

      <div class="col-10">
        <ul class="utility-list d-flex m-0 justify-content-end align-items-center gap-5 fs-5">
          <li v-for="link in links">
            <a href="#">{{ link.title }}</a>
          </li>
          
          <li>
            <a href="#"><font-awesome-icon class="icon-hover" icon="fa-regular fa-user" /></a>
          </li>
          <li>
            <button class="btn btn-custom btn-custom-active">GET IN TOUCH</button>
          </li>
          
        </ul>

      </div>


    </div>





    <!------------------------------- CARGO TRANSPORT ROW-->
    <div class="row focus-row">
      <div class="col-6">
        <h2>logistic services</h2>
        <h3 class="main-focus">cargo <br> transport </h3>
        <p class="mission-description pt-4">Fractional or exclusive road cargo transportation to all <br> regions with small, mnedium and large veichles.</p>
        <ul class="d-flex p-0 pt-4">
          <li>
            <button class="btn btn-custom btn-custom-active">GET IN TOUCH</button>
          </li>
          <li>
            <button class="btn btn-custom">READ MORE</button>
          </li>
        </ul>
      </div>
    </div>

  </div>
</section>

</template>

<style lang="scss" scoped>

*{
  color: white;
}

section{
  background-color: grey;
  min-height: 860px;
  background-image: url('images/bg-9.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-blend-mode: multiply;
  
  
}

a:hover, .icon-hover:hover{
  color: #00c4c4;

}
.row-contacts-opening{
  padding-top: 13px;
}

.additional-info-header{
  background-color: #21333E;
  height: 50px;
}

.btn-custom{
    border: 2px solid #058283;
    padding: 8px 25px;
  }
.btn-custom-active{
    border: 2px solid #058283;
    background-color: #058283;
  }

.main-logo{
  font-weight: 600;
}
.nex-style{
  color: #00c4c4;
  font-weight: 600;
  background-color: #0583834f;
  padding: 2px 5px 5px 25px;
  border-bottom-left-radius: 30px;
  border-top-left-radius: 30px;
}

.utility-list{
  li{
    text-transform: uppercase;
    font-weight: 500;
  }
}

.focus-row{
  margin-top: 140px;
  h2{
    text-transform: uppercase;
    font-size: 22px;
    
  }
  .btn-custom{
    border: 2px solid #058283;
    padding: 8px 25px;
    margin-right: 25px;
    font-weight: 600;
  }
  .btn-custom-active{
    border: 2px solid #058283;
    background-color: #058283;
    
  }
}

.main-focus{
  font-size: 75px;
  text-transform: uppercase;
  font-weight: 800;
}

.mission-description{
  font-size: 22px;
}


</style>