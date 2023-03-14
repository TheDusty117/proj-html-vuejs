<script>

export default{

}

</script>

<template>
<section>
  <div class="container">
      <div class="row main-row justify-content-center">

        <div class="col-8 col-results text-center">
          <h2>what are we doing</h2>
          <h3 class="p-4"><span>Logistical</span> Procedure</h3>
        </div>

      </div>

      <ul class="d-flex numbers-list justify-content-evenly gap-5 text-center">
        <li>
          <h2>128</h2>
          <h3>Certifications</h3>
        </li>
        <li>
          <h2>230</h2>
          <h3>Employees</h3>
        </li>
        <li>
          <h2>517</h2>
          <h3>Customers</h3>
        </li>
        <li>
          <h2>94</h2>
          <h3>Countries Served</h3>
        </li>
      </ul>

    </div>
</section>
</template>

<style lang="scss" scoped>

section{
  min-height: 590px;
  background-image: url('images/bg-10.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: white;
}

.main-row{
  padding-top: 110px;
}

.col-results{
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
      background-color: #00a29d50;
      padding: 0px 15px;
      border-radius: 5px;    
    }
  }
}

.numbers-list{
  padding: 90px 0px 0px 0px;
  h2{
    color: #00A29C;
    font-size: 38px;
    font-weight: 700;
  }
}



</style>