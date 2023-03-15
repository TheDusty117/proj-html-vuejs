<script>

export default{

}

</script>

<template>
  <section>
    <div class="container">

      <div class="row feedback-row justify-content-center">
        <div class="col-8 text-center">
          <h2 class="pb-4">customer testimonials</h2>
          <h3 class="pb-3">Trusted <span>Feedback</span></h3>
          <p class="pb-2">We work intensively in search of ideals that can add up in the lives of our customers. This is what moves us and we are grateful for the recognition.</p>
        </div>
      </div>


      <div class="row row-cards justify-content-between pt-4">

<!-- TRITTICO DELLE CARTE ----------->
  <div class="col-custom card-custom">
    <ul class="d-flex justify-content-between px-4 pt-4 pb-1 m-0">
      <li>
        <img class="customer-logo" src="images/logo-1.png" alt="">
      </li>
    </ul>
    <p class="px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore molestiae ipsum itaque, temporibus tempora possimus vel quia rerum.</p>
    <p class="px-4 second-desc">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      <span class="quotes">
        <font-awesome-icon icon="fa-solid fa-quote-right" />
      </span>
    </p>
  </div>

  <div class="col-custom card-custom">
    <ul class="d-flex justify-content-between px-4 pt-4 pb-1 m-0">
      <li>
        <img class="customer-logo" src="images/logo-2.png" alt="">
      </li>
    </ul>
    <p class="px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore molestiae ipsum itaque, temporibus tempora possimus vel quia rerum.</p>
    <p class="px-4 second-desc">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      <span class="quotes">
        <font-awesome-icon icon="fa-solid fa-quote-right" />
      </span>
    </p>
  </div>

  <div class="col-custom card-custom">
    <ul class="d-flex justify-content-between px-4 pt-4 pb-1 m-0">
      <li>
        <img class="customer-logo" src="images/logo-3.png" alt="">
      </li>
    </ul>
    <p class="px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore molestiae ipsum itaque, temporibus tempora possimus vel quia rerum.</p>
    <p class="px-4 second-desc">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      <span class="quotes">
        <font-awesome-icon icon="fa-solid fa-quote-right" />
      </span>
    </p>
    
  </div>

  </div>

    </div>
  </section>
</template>

<style lang="scss" scoped>

section{
  min-height: 780px;
  background-color: #111117;
  color: white;
  p{
    font-weight: 300;
  }
}


.feedback-row{
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
  
  p{
    font-size: 20px;
  }
}

//--------------------------------- ROW DELLE CARTE



.col-custom{
  width: 31%;
}

.second-desc{
  position: relative;
}
.card-custom{
  cursor:default;
  background-color: #19191F;
  border-radius: 10px;
  min-height: 310px;
  h3{
    font-size: 28px;
    font-weight: 600;
  }
  p{
    padding-top: 10px;
    font-size: 20px;
  }
  .customer-logo{
    filter: invert(1);
    width: 120px;
  }

  .quotes{
    position: absolute;
    color: rgb(102, 102, 102);
    font-size: 30px;
    right: 20px;
  }
  
}

.card-custom:hover{
    padding: 10px;
    color: #00fff7;
    transition: 2s;
  }




</style>