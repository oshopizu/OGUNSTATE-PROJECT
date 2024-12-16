<template>  
    <div class="container pr p-3">  
      <p class="push">  
        The push by the Ogun State Government to actively participate in the above commitments will ensure that the State Government is more collaborative with the citizens, and the citizenry are also adequately informed.  
      </p>  
    </div>  
  </template>  
  
  <script>  
  export default {  
    name: 'ReviewPr',  
  }  
  </script>  
  
  <style scoped>  
  .push {  
    font-size: 20px;  
    width: 100%;  
    word-wrap: break-word;   
  }  
   
  @media (max-width: 576px) {  
    .container {  
      padding: 15px;
    }  
    
    .push {  
      font-size: 18px;
    }  
  }  
  
  @media (min-width: 577px) {  
    .push {  
      font-size: 20px;  
    }  
  }  
  </style>