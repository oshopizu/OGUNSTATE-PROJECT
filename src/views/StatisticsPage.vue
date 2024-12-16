<template>
  <div class="Bureau">
    <h3 class="Stat">Public Data-Bureau of Statictics</h3>

    <div class="wrap">
      <div class="data">
        <span
          ><i
            class="fa-solid fa-vector-square"
            style="
              color: #63e6be;
              background: #018647;
              padding: 20px;
              border-radius: 50px;
            "
          ></i
        ></span>
        <div class="text-center pub">
          <h2 class="text-start">Search State Online Publications</h2>
          <P
            class="text-start" >Search The State Database For Written Publications, Case Studies,
            Keynote Speeches, Etc On Area of Interest Within Ogun State</P
          >
        </div>
      </div>

      <div class="data" style="margin-top: -19px;">
        <span
          ><i
            class="fa-solid fa-vector-square"
            style="
              color: #63e6be;
              background: #018647;
              padding: 20px;
              border-radius: 50px;
            "
          ></i
        ></span>
        <div class="text-center pub">
          <h2>State Statictics Annual</h2>
          <P
             class="text-start">Lookup Ogun’s Annual Reports</P
          >
        </div>
      </div>

      <div class="data" style="margin-top: -19px;">
        <span
          ><i
            class="fa-solid fa-vector-square"
            style="
              color: #63e6be;
              background: #018647;
              padding: 20px;
              border-radius: 50px;
            "
          ></i
        ></span>
        <div class="text-center pub">
          <h2 class="text-start">Search State Online Publications</h2>
          <P
            class="text-start" >Ogun Provide Open Access to a Publicly Available Dataset, Maps and
            Statistics</P
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StatisticsPage",
};
</script>

<style scoped>
@media (max-width: 576px) {  
  .data {  
    flex-direction: column; /* Stack items vertically */  
    width: 100%; /* Ensure it takes full width */  
    padding: 20px; /* Adjust padding for mobile */  
  }  

  .data span {  
    margin-bottom: 15px; /* Add spacing between icon and text */  
  }  
.Stat{
  width: 100%;
  margin: 0;
  padding: 10px;
}
  
  .Bureau{
    width: 100%;
  } 
}

.Stat {
  border: 2px solid #018647;
  border-top: 0;
  border-right: 0;
  border-bottom-left-radius: 5px;
  width: 32%;
  text-align: center;
  color: #018647;
  padding: 5px;
}
.Bureau {
  padding: 2%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.data h2 {
  color: #018647;
  margin: 0;
  font-size: 20px;
}
.data p {
  color: #69ac8c;
  margin-top: -2px;
  margin: 0;
  
}

.data {
  display: flex;
  width: 100%;
  gap: 7px;
  padding: 40px;
  align-items: center;
}
.pub p {
  font-size: 15px;
  font-weight: 400;
}
.pub {
  color: #018647;
  margin-top: -3px;
}
</style>