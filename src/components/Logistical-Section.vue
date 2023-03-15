<script>

export default{
  data(){
    return{

      cards: [

        {
          number: '01',
          title: 'Collection of information',
        },
        {
          number: '02',
          title: 'Service Invoice Sending',
        },
        {
          number: '03',
          title: 'Withdrawal of the Cargo',
        },
        {
          number: '04',
          title: 'Transport Customer Order',
        },
        {
          number: '05',
          title: 'Successful Delivery',
        },

      ]


    }
  }

}

</script>

<template>
<section class="main-section">

  <section class="sub-section1">
    <div class="container">
      <div class="row main-row justify-content-center">

        <div class="col-8 col-logistical text-center">
          <h2>how it works in practice</h2>
          <h3><span>Logistical</span> Procedure</h3>
          <p class="pt-2">We work with innovative methodologies to ensure that the entire delivery process is done from start to finish as planned.</p>
        </div>

      </div>
    </div>
  </section>

  <section class="sub-section2">
    
      <div class="row secondary-row justify-content-center gap-4 text-center pt-5">

        <div v-for="card in cards" class="col-2">
          <div>
            <h2>{{card.number}}</h2>
          </div>
          <h3>{{ card.title }}</h3>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>

        
        
      </div>
   
  </section>

</section>
</template>

<style lang="scss" scoped>

.sub-section1{
  // position: relative;
}
.main-section{
  background-color: white;
  min-height: 720px;

  .sub-section1{
    height: calc(720px/2);
    border-bottom: 4px solid #CCE3DE;
  
  }
  .main-row{
    padding-top: 130px;
  }
}

.col-logistical{
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
      background-color: #DAECED;
      padding: 0px 15px;
      border-radius: 5px;
      color: #00A29C;
    }
  }
  p{
    font-size: 20px;
  }
}




.secondary-row{
    width: 100%;
  .col-2{
    position: relative;
  }
  p{
    font-size: 20px;
  }
  h2{
    position: absolute;
    font-weight: 700;
    color: #00A29C;
    margin: 0;
    top: -80%;
    right: 50%;
    translate: 50%;
    width: 40px;
    height: 40px;
    background-color: #EEF4ED;
    border-radius: 999px;
  }
  
 
}


</style>