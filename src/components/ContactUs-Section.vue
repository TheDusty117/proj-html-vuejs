<script>

export default{

}

</script>

<template>
<section>
  <div class="container">
    <div class="row main-row">

      <div class="col-8">
        <h2>send a message</h2>
        <h3>Get in <span>Touch</span></h3>
        <p class="pt-2">We will respond to your message as soon as possible.</p>

        <ul class="row gap-3 p-0">
          <li class="col-5 p-0">
            <input class="form-control" type="text" placeholder="Name" aria-label="default input example">
          </li>
          <li class="col-5 p-0">
            <input class="form-control" type="text" placeholder="Email" aria-label="default input example">
          </li>
          <li class="col-5 p-0">
            <input class="form-control" type="text" placeholder="Phone" aria-label="default input example">
          </li>
          <li class="col-5 p-0">
            <select class="form-select" aria-label="Default select example">
              <option selected>More Info</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </li>
          <li class="col-10 p-0">
            <input class="form-control form-custom" type="text" placeholder="Phone" aria-label="default input example">
          </li>
        </ul>
      </div>

      <div class="col-4">
        <h2>Example Inc.</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <ul class="contacts-list p-0">
          <li>
            <h4><font-awesome-icon icon="fa-solid fa-phone" /> +1 (305) 1234-5678</h4>
          </li>
          <li>
            <h4><font-awesome-icon icon="fa-solid fa-envelope" /> hello@example.com</h4>
          </li>
          <li>
            <h4><font-awesome-icon icon="fa-solid fa-location-dot" /> Main Avenue,987</h4>
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

section{
  min-height: 850px;
  background-color: white;
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
      background-color: #DAECED;
      padding: 0px 15px;
      border-radius: 5px;
      color: #00A29C;
    }
  }
  p{
    font-size: 20px;
  }
  .form-custom{
    
  }

}


.col-4{
  p{
    font-size: 20px;
  }

  .fa-phone, .fa-envelope, .fa-location-dot{
    color: #058283;
    background: #DAECED;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    text-align: center;
    line-height: 100px;
    vertical-align: middle;
    padding: 15px;
  }
  h4{
    color: #058283;
  }
  .btn-custom{
    color: #058283;
    font-weight: 600;
    border: 2px solid #058283;
    padding: 8px 25px;
    margin-right: 25px;
  }
}

</style>