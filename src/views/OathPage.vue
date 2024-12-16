<template>
  <div class="container-fluid oath mt-5">
    <div class="text-center  budget rounded-3">
      <h3 class="p-3 mt-5 lighter">State Budget</h3>
      <span><i class="fa-solid fa-vector-square" style="color: #63E6BE; background: #008647; padding: 20px; border-radius: 50px;"></i></span>
      <h3 class="mt-4 light">Ministry of budget and planning documents</h3>
      <p>MTEF report, budget assessments, Etc.  </p>
    </div>
  </div>
</template>

<script>
export default {
 name: 'OathPage'
}
</script>

<style scoped>
.budget p{
  font-weight: 500;
  font-size: 100px;
  color: black;

}
.lighter{
  color: #1e7c4f;
  font-weight: 700;
  font-size: 32px;
}
.light{
  color: #157e4b;
  font-weight: 600;
}
.oath{
    background-image: url(../assets/oath.jpeg);
    position: relative;  
    background-size: cover;  
    height: 70vh;  
    width: 100%;  
    background-repeat: no-repeat;  
    background-position: center;
    display: flex;
    align-items: center;
    object-fit: cover;
    padding: 0;
    border-radius: 7px;
}
.oath::before {  
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
  .budget {  
    position: relative;  
    z-index: 2;   
    padding: 20px; 
    color: #016d39;
    height: 60vh;
    background: #cddcd7;
    width: 100%;
    /* align-items: center;
    justify-content: center; */
  }
  .budget p{
    font-size: 25px;
    font-weight: 500;
  }
 @media (max-width: 575.98px) {
    .oath{
        display: flex;
        align-items: center;
    }
    .budget{
        width: 100%;
        padding: 20px;
        margin: auto;
        
    }
    .budget p{
      font-size: 18px;
      font-weight: 400;
    }
 }
</style>