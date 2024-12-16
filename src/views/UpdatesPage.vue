<template>
  <div class="container-fluid p-5 p-md-5 p-lg-5">
    <div class="updates mt-2">
      <h3>Updates</h3>
      <select name="categotry" id="category">
        <option value="">Category</option>
        <option value="">Executives</option>
        <option value="">MDAS</option>
        <option value="">Government</option>
      </select>
    </div>

    <div
      id="carouselExampleSlidesOnly"
      class="carousel slide"
      data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="5000">
          <img src="../assets//delegates.jpg" class="d-block w-100" alt="..."  style="height: 75vh; object-fit: cover;"/>

        </div>
        <div class="carousel-item" data-bs-interval="5000">
          <img src="../assets/gateway.png" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item" data-bs-interval="5000">
          <img src="../assets/farm-ogun.png" class="d-block w-100" alt="..." />
        </div>
      </div>
    </div>

    <!-- <div
      id="carouselExampleSlidesOnly"
      class="carousel slide mt-3"
      data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="5000">
          <img
            src="../assets/delegates.jpg"
            class="d-block w-100"
            alt="..."
            style="height: 80vh; object-fit: cover"/>
          <div class="carousel-caption d-none d-md-block text-start w-50">
            <h5>March 29, 2023</h5>
            <p style="font-size: 10px">
              Replacing Stomach Infrastructure with Project Infrastructure,
              Sujimoto Congratulates Prince Dapo Abiodun, Ogun State Governor
              Re-elect
            </p>
            <p>
              The journey to Prince Dapo Abiodun’s re-election as Governor of
              Ogun State was a tumultuous one, marked by internal and external
              political strife. ‘However, despite the challenges, I was eager to
              make the trip down to Ogun State to congratulate my egbon and
              mentor in person.’
            </p>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="5000">
          <img
            src="../assets/gateway.png"
            class="d-block w-100"
            alt="..."
            style="height: 80vh"/>
          <div class="carousel-caption d-none d-md-block text-start">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="5000">
          <img
            src="../assets/farm-ogun.png"
            class="d-block w-100"
            alt="..."
            style="height: 80vh"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
      </div>
      <div class="More-Info mt-3 text-center">
        <button class="btn">Read More</button>
      </div>
      <hr class="mt-5" />
    </div> -->
  </div>
</template>

<script>
export default {
  name: "UpdatesPage",
};
</script>

<style scoped>
@media (max-width: 576px) {  
    .container-fluid {  
        padding: 0px; /* Reduced padding on mobile */  
    }  
  }
.updates select {
  background: #cde0cc;
  border-radius: 5px;
  border: none;
}

.updates {
  display: flex;
  justify-content: space-between;
}
.btn {
  width: 5cm;
  padding: 10px;
  color: black;
  border: 2px solid green;
}
</style>