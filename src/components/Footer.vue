<script>

export default{

}

</script>

<template>
<section>
  <div class="container">
    <div class="row main-row">

      <div class="col-3">
        <div class="card-custom-main">
          <ul class="px-4 contacts-list">
            <li>
              <h2 class="main-logo"><span class="nex-style">NEX</span> GEN</h2>
            </li>
            <li class="pt-4">
              <p>A Functional HTML Template <br> for Corporate & Business</p>
            </li>
            <li class="pt-4">
              <p>+1 (305) 1234-5678</p>
            </li>
            <li>
              <p>cargotransport@example.com</p>
            </li>
            <li>
              <p>Main Avenue, 987</p>
            </li>
            <li class="pt-4">
              <button class="btn btn-custom">GET IN TOUCH</button>
            </li>
            
          </ul>
        </div>
      </div>

      <div class="col-3">
        <div class="card-custom">
          <ul class="pt-4 about-list">
            <li>
              <h2>About</h2>
            </li>
            <li>
              <a href="#">
                <p><font-awesome-icon icon="fa-solid fa-chevron-right" /> The Company</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p><font-awesome-icon icon="fa-solid fa-chevron-right" /> Institutional</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p><font-awesome-icon icon="fa-solid fa-chevron-right" /> Social & Events</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p><font-awesome-icon icon="fa-solid fa-chevron-right" /> Innovation</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p><font-awesome-icon icon="fa-solid fa-chevron-right" /> Environment</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p><font-awesome-icon icon="fa-solid fa-chevron-right" /> Technology</p>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="col-3">
        <div class="card-custom">
          <ul class="pt-4 transport-list">
            <li>
              <h2>Transport</h2>
            </li>
            <li>
              <a href="#">
                <p><font-awesome-icon icon="fa-solid fa-chevron-right" /> Industrialized</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p><font-awesome-icon icon="fa-solid fa-chevron-right" /> Chemicals</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p><font-awesome-icon icon="fa-solid fa-chevron-right" /> Packaged Liquids</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p><font-awesome-icon icon="fa-solid fa-chevron-right" /> Construction</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p><font-awesome-icon icon="fa-solid fa-chevron-right" /> Laminated Wood</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p><font-awesome-icon icon="fa-solid fa-chevron-right" /> And others</p>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="col-3">
        <div class="card-custom">
          <ul class="pt-4 support-list">
            <li>
              <h2>Support</h2>
            </li>
            <li>
              <a href="#">
                <p><font-awesome-icon icon="fa-solid fa-chevron-right" /> Responsibility</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p><font-awesome-icon icon="fa-solid fa-chevron-right" /> Terms of Use</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p><font-awesome-icon icon="fa-solid fa-chevron-right" /> About Cookies</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p><font-awesome-icon icon="fa-solid fa-chevron-right" /> Privacy Policy</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p><font-awesome-icon icon="fa-solid fa-chevron-right" /> Accessibility</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p><font-awesome-icon icon="fa-solid fa-chevron-right" /> Information</p>
              </a>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</section>

<section class="copyright-section">
  <div class="container">
    <div class="row justify-content-between align-items-center">

      <div class="col-5">
        <p class="m-0">Enjoy the low price. We are tracking any intention of piracy.</p>
      </div>

      <div class="col-5 text-end">
        <p class="m-0">© 2023 NEXGEN is Proudly Powered by <span>Gabriele</span>.</p>
      </div>

    </div>
  </div>

</section>

</template>

<style lang="scss" scoped>

section{
  min-height: 610px;
  background-color: #111117;
  color: white;
}


.main-row{
  padding-top: 130px;
}

.card-custom-main{
  .main-logo{
  font-weight: 600;
}
p{
    color: rgb(223, 223, 223);
    font-size: 18px;
    margin-bottom: 0.5rem;
  }
.nex-style{
  color: #00c4c4;
  font-weight: 600;
  background-color: #0583834f;
  padding: 2px 5px 5px 25px;
  border-bottom-left-radius: 30px;
  border-top-left-radius: 30px;
}
.btn-custom{
    color: white;
    border: 2px solid #058283;
    padding: 8px 25px;
    margin-right: 25px;
    font-weight: 600;
  }
.contacts-list{
  padding-top: 0;
}  
  
}






.card-custom{
  background-color: #19191F;
  border-radius: 10px;
  min-height: 330px;
  h3{
    font-size: 28px;
    font-weight: 600;
  }
}

.about-list, .transport-list, .support-list{
  padding-left: 50px;
  h2{
    font-weight: 700;
    padding-bottom: 20px;
  }
  p:hover{
    color: #00A29F;
  }
  p{
    color: rgb(223, 223, 223);
    font-size: 18px;
    margin-bottom: 0.5rem;
  }
}


.copyright-section{
  min-height: 90px;
  background-color: #0D0D11;
  .row{
    min-height: 90px;
  }
  span{
    color: #00c4c4;
  }
}



</style>