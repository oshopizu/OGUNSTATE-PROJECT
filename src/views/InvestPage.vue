<template>
  <div class="mt-2 text-center">
  <div class="img-container">
    <img src="../assets/gateway.png" alt="" width="100%" style="object-fit: cover; height: 70vh;">
    <div class="img-text">
     <h1 class="gateway">Invest in Ogun State</h1>
    <p class="text-center">....Agriculture, Manufacturing, Innovation and more
    </p>
    <p class="text-center">
      Ogun State is Nigeria’s largest industrial hub, strategically located near
      Lagos, making it ideal for investments in manufacturing, agriculture, and
      logistics. With robust infrastructure and industrial parks, the state
      offers a dynamic environment for business growth and innovation
    </p>
    <button class="btn btn-light rounded-2" style="margin-top: 2cm;">
      Invest in Ogun State
    </button>

    </div>

  </div>
      
  </div>
</template>

<script>
export default {
  name: 'InvestPage'
}
</script>

<style scoped>

.img-text {  
  position: absolute;  
  top: 50%;           
  left: 50%;              
  transform: translate(-50%, -50%);   
  padding: 10px;  
  box-shadow: 0px -2px 5px rgba(0, 0, 0, 0.1);  
  text-align: center;  
  color: #fff; 
  z-index: 2;
}  
.img-container{
  position: relative;
}
.gateway {
  font-size: 50px;
  border-left: 7px solid green;
  margin: auto;
  width: 65%;
}


@media (max-width: 768px) {  
  .gateway {  
    font-size: 1rem;  
    width: 80%;  
  }  

  .img-text {  
    padding: 5px;  
    width: 90%;   
  }  

  .img-text p {  
    font-size: 0.9rem;  
  }  

  button {  
    font-size: 0.9rem;   
    margin-top: 1.5cm;  
  }  
}  

@media (max-width: 576px) {  
  .gateway {  
    font-size: 2rem;   
    width: 100%;   
  }  

  .img-text p {  
    font-size: 1rem;  
  }  

  button {  
    font-size: 1.4rem; 
    margin-top: 1cm;   
  }  


}

</style>

