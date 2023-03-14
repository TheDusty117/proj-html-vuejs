<script>

export default{

}

</script>

<template>

<section class="excellence-sect">

  <div class="container">
    <div class="row main-row">
      <!------------ COLONNA DESCRIZIONE MISSION ------------->
      <div class="col-8">
        <h2 class="pb-4">who we are</h2>
        <h3 class="pb-3"><span><font-awesome-icon icon="fa-regular fa-gem" /> Excellence</span> in Transport</h3>
        <p class="pb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At suscipit aspernatur voluptatum. Provident cupiditate soluta non voluptatum sint sunt voluptatem vel recusandae.</p>
        <p class="pb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eius necessitatibus, molestias sint error voluptates libero est. Sequi veritatis voluptatum. Fuga, quidem.</p>
        <p class="italic-paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente fugiat quo recusandae dolorem, officiis reprehenderit commodi dolor illo natus.</p>
        <p class="pt-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident a eaque quos!</p>
        <ul class="excellence-list">
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
        </ul>
      </div>

      <!------------ COLONNA VARI TAGLI DEI CAMION ------------->
      <div class="col-4">
        <h2 class="pb-3">Vehicle Types</h2>
        <ul class="p-0">

          <li v-for="el in 3" class="d-flex pt-3 gap-4 truck-item">
            <div>
              <img class="truck-img" src="/images/truck-1.png" alt="">
            </div>
            <div>
              <h3>Light</h3>
              <p>Max Weight 1200kg</p>
            </div>
          </li>

        </ul>

        <h2 class="pt-5" >Certifications</h2>
        <ul class="d-flex gap-4 certification-list p-0">
          <li>
            <img src="/images/certificate.png" alt="">
          </li>
          <li>
            <img src="/images/certificate.png" alt="">
          </li>
        </ul>

      </div>

    </div>

  </div>

</section>

</template>

<style lang="scss" scoped>

.excellence-sect{
  background-color: white;
  min-height: 890px;
}

.main-row{
  padding-top: 130px;
}

.truck-img{
  width: 100px;
  background-color: #DAECED;
  border: 7px solid #DAECED;
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
      background-color: #DAECED;
      padding: 0px 15px;
      border-radius: 5px;
      color: #00A29C;
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

.excellence-list{
  li{
    list-style-type: disc;
    font-size: 20px;
  }
}






// COLONNA DEI CAMION E CERTIFICATI
.col-4{}

.truck-item{
  border-bottom: 1px solid grey;
}

.certification-list{
  img{
    width: 150px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
}

</style>