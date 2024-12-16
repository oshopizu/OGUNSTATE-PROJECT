<template>
    <div class="container-fluid proper mt-5">
      <div class="text-center  procurement rounded-3">
        <h3 class="p-3 mt-5 procs">Procurement</h3>
        <span><i class="fa-solid fa-vector-square" style="color: #63E6BE; background: #008647; padding: 20px; border-radius: 50px;"></i></span>
        <h2 class="mt-4 props">Bureau Of  Public Procurement </h2>
        <p>Contracts, Tender, Public Procurement, And Etc.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
   name: 'ProcurementPage'
  }
  </script>
  
  <style scoped>
  .procurement p{
    font-weight: 500;
    font-size: 100px;
    color: black;
  
  }
  .procs{
    color: #1e7c4f;
    font-weight: 700;
    font-size: 32px;
  }
  .props{
    color: #157e4b;
    font-weight: 600;
  }
  .proper{
      background-image: url(../assets/procurement.jpeg);
      position: relative;  
      background-size: cover;  
      height: 70vh;  
      width: 100%;  
      background-repeat: no-repeat;  
      background-position: center;
      display: flex;
      align-items: center;
      object-fit: cover;
      padding: 20px;
      border-radius: 7px;
      
  }
  .proper::before {  
      content: "";  
      position: absolute;  
      top: 0;  
      left: 0;  
      right: 0;  
      bottom: 0;  
      background: #9fc7ad;  
      opacity: 0.7;  
      z-index: 1; 
    }  
    .procurement {  
      position: relative;  
      z-index: 1; 
      opacity: 0.8;  
      padding: 20px; 
      color: #016d39;
      height: 60vh;
      background:#cfdfd4;
      width: 100%;
    }
    .procurement h2{
        font-size: 14px;
        font-weight: 700;
    }
    .procurement h3{
        font-size: 25px;
    }
    .procurement p{
      font-size: 30px;
      font-weight: 600;
    }
   @media (max-width: 575.98px) {
      .proper{
          display: flex;
          align-items: center;
      }
      .procurement{
          width: 100%;
          padding: 20px;
          margin: auto;
      }
      .procurement p{
        font-size: 13px;
        font-weight: 500;
      }
   }
  </style>