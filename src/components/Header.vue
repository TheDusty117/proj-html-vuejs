<script>

export default{

}

</script>

<template> 

<div class="additional-info-header">
  <div class="container container-teal">
    <div class="d-flex justify-content-between align-items-center pt-2">
      
      <ul class="m-0 p-0">
        <li>
          <span>open Hours mon sat 9 19 sera</span>
        </li>
      </ul>
  
      <ul class="d-flex gap-5 m-0 p-0">
        <li>
          <span>
            30512345670
          </span>
        </li>
        <li>
          <span>
            emailemailemailemail
          </span>
        </li>
        <li>
          <span>F</span>
        </li>
        <li>
          <span>TWT</span>
        </li>
        <li>
          <span>IN</span>
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
            <h2 class="main-logo">NEX GEN</h2>
          </li>
        </ul>
      </div>

      <div class="col-10">
        <ul class="utility-list d-flex m-0 justify-content-end align-items-center gap-5 fs-5">
          <li>
            <a href="#">home</a>
          </li>
          <li>
            <a href="#">about</a>
          </li>
          <li>
            <a href="#">services</a>
          </li>
          <li>
            <a href="#">process</a>
          </li>
          <li>
            <a href="#">testimonials</a>
          </li>
          <li>
            <a href="#">O</a>
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