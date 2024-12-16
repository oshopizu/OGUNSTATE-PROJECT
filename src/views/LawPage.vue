<template>
  <div class="laws">
    <div class="text-center mt-3">
      <h2>Bills & Laws</h2>
    </div>
    <div class="pads">
      <div class="bills d-flex flex-column  flex-md-row justify-content-center">
        <div
          class="col-12 col-md-4 d-flex flex-column border border-2 rounded-3 p-5 mx-2 mb-2 cover"
        >
        <span><i class="fa-solid fa-vector-square" style="color: #63E6BE; background: #008647; padding: 20px; border-radius: 50px;"></i></span>
          <p class="text-success legt"><b>Search Legislation</b></p>
          <p class="Laws-p">
            Read up on current laws and proposed bills.
          </p>
        </div>

        <div
          class="col-12 col-md-4 d-flex flex-column border border-2 rounded-3 p-5 mx-2 mb-2 cover"
        >
        <span><i class="fa-solid fa-vector-square" style="color: #63E6BE; background: #008647; padding: 20px; border-radius: 50px;"></i></span>
          <p class="text-success legt"><b>Ogun Constitution</b></p>
          <p class="Laws-p">
            The Ogun State Constitution consists of laws that are codified.
          </p>
        </div>

        <div
          class="col-12 col-md-4 d-flex flex-column border border-2 rounded-3 p-5 mx-2 mb-2 cover"
        >
        <span><i class="fa-solid fa-vector-square" style="color: #63E6BE; background: #008647; padding: 20px; border-radius: 50px;"></i></span>
          <p class="text-success legt "><b>Approved Treaties</b></p>
          <p class="Laws-p">
            Here are up-to-date inquiries on agreements, pacts, and major
            treaties between tribes and ethnic groups within the state.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>  
  
  <script>
export default {
  name: "LawPage",
};
</script>  
  
  <style scoped>
  .Laws-p{
    margin-top: -19px;
    font-size: 20px;
    font-weight: 500;
    color: black;
  }
  .pads{
    margin-top: -50px;
  }
  .laws{
    padding: 40px;
    justify-content: center;
  }
.laws h2 {
  color: #fff;
  z-index: 2;
  position: relative;
}

.cover {
  background: #bdc7bf;
  height: 50vh;
}

.legt {
  font-size: 40px;
}

.laws {
  position: relative;
  background-image: url(/src/assets/law.jpeg);
  object-fit: cover;
  background-size: cover;
  height: 90vh;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
}

.laws::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to left, #4d8c7d, #3a866d);
  opacity: 0.7;
  z-index: 1;
}

.bills {
  position: relative;
  z-index: 2;
  padding: 20px;
  color: white;
  margin-top: 2cm;
}

@media (max-width: 575.98px) {
  .laws {
    height: auto;
    min-height: 100vh;
    padding-left: 0;
    padding-right: 0;
  }
  .pads {
    width: 100%;
   
  }

  .bills {
    width: 100%;
    justify-content: center;
    align-items: center;
  }

  .border {
    border-width: 1px;
  }

  .cover {
    width: 100%;
    padding-left: 0;
    padding-right: 0;
    align-items: center;
    text-align: center;
    padding: 10;
    height: 35vh;
  }
  .legt {
  font-size: 15px;
}
.Laws-p{
  font-size: 15px;
  margin-top: 5px;
}

}
</style>