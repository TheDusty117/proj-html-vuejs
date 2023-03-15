<script>

export default{

}

</script>

<template>
<section>
  <div class="container">
    <div class="row main-row justify-content-between">

      <div class="col-8">
        <h2 class="pb-4">road transport</h2>
        <h3 class="pb-3">Main <span>Services</span></h3>
        <p class="pb-2">With all of this expertise and capability comes an unrivalled commitment to customer service. We will work hard to understand your needs in order to develop a productive, long-term partnership.</p>
      </div>

      <div class="col-2 text-end">
        <button class="btn btn-custom">SEE ALL</button>
      </div>  
      
    </div>

    <div class="row row-cards justify-content-between pt-4">

      <!-- TRITTICO DELLE CARTE DEI PRINCIPALI SERVIZI ----------->
      <div class="col-custom card-custom">
        <ul class="d-flex justify-content-between px-4 pt-5 pb-1 m-0">
          <li><font-awesome-icon icon="fa-solid fa-truck-ramp-box" /></li>
          <li>
            <a href="#">
              <font-awesome-icon icon="fa-solid fa-arrow-right" />
            </a>
          </li>
        </ul>
        <h3 class="px-4 py-2">Technology</h3>
        <p class="px-4">We are continually focused on developing technology solutions adapted to our client's needs.</p>
      </div>
  
      <div class="col-custom card-custom">
        <ul class="d-flex justify-content-between px-4 pt-5 pb-1 m-0">
          <li>
            <font-awesome-icon icon="fa-solid fa-temperature-low" />
          </li>
          <li>
            <a href="#">
              <font-awesome-icon icon="fa-solid fa-arrow-right" />
            </a>
          </li>
        </ul>
        <h3 class="px-4 py-2">Reefer Cargo</h3>
        <p class="px-4">Regular and frequent, monitoring from the receipt of the loaded container to final destination.</p>
      </div>
  
      <div class="col-custom card-custom">
        <ul class="d-flex justify-content-between px-4 pt-5 pb-1 m-0">
          <li><font-awesome-icon icon="fa-solid fa-boxes-stacked" /></li>
          <li>
            <a href="#">
              <font-awesome-icon icon="fa-solid fa-arrow-right" />
            </a>
          </li>
        </ul>
        <h3 class="px-4 py-2">Dry Cargo</h3>
        <p class="px-4">We work with most types of dry cargo, from valuable cargo to the most dangerous requiring care.</p>
      </div>
      
    </div>


  </div>
</section>
</template>

<style lang="scss" scoped>

section{
  min-height: 835px;
  background-color: #111117;
  color: white;
  p{
    font-weight: 300;
  }
}

.main-row{
  padding-top: 130px;
}
.col-8{
  h2{
    text-transform: uppercase;
    font-weight: 700;
    font-size: 20px;
    color: #00A29C;

  }
  h3{
    font-weight: 800;
    font-size: 50px;
    span{
      background-color: #0E272D;
      padding: 0px 15px;
      border-radius: 5px;    
    }
  }
  .italic-paragraph{
    font-style: italic;
    border-left: 5px solid #DAECED;
    padding: 12px 20px 12px 20px;
  }
  p{
    font-size: 20px;
  }
}

.btn-custom{
    border: 2px solid #058283;
    padding: 8px 25px;
    color: white;
    margin-top: 150px;
}

.row-cards{
  // gap: 30px;
}

.col-custom{
  width: 31%;
}
.card-custom{
  background-color: #19191F;
  border-radius: 10px;
  min-height: 310px;
  h3{
    font-size: 28px;
    font-weight: 600;
  }
  p{
    font-size: 20px;
  }
  .fa-truck-ramp-box, .fa-temperature-low, .fa-boxes-stacked{
    color: #058283;
    background: #0E272D;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    text-align: center;
    line-height: 100px;
    vertical-align: middle;
    padding: 15px;
  }
  .fa-arrow-right{
    color: #058283;
    font-size: 30px;
  }
}
</style>