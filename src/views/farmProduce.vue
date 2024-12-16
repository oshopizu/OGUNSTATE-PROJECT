<template>  
  <div class="farm-produce  mt-3">  
    <div class="image-container">  
      <img src="../assets/farm-ogun.png" alt="" style="object-fit: cover; width: 100%; height: 40%;">  
      
<button class="btn">View More</button>


    </div>  
  </div>  
</template>  

<script>  
export default {  
  name: 'farmProduce'  
}  
</script>
<style scoped> 
.btn {
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  padding: 10px 20px;
  font-size: 17px;
  cursor: pointer;
  font-weight: bold;
  background: transparent;
  position: relative;
  transition: all 1s;
  overflow: hidden;
}

.btn:hover {
  color: white;
}

.btn::before {
  content: "";
  position: absolute;
  height: 100%;
  width: 0%;
  top: 0;
  left: -40px;
  transform: skewX(45deg);
  background-color: rgb(55, 128, 0);
  z-index: -1;
  transition: all 1s;
}

.btn:hover::before {
  width: 160%;
}


.farm-produce {  
  position: relative;   
}  

.image-container {  
  position: relative;  
}  

.farm-produce img {  
  width: 100%;  
  object-fit: cover;  
}  

.farm-produce button {  
  position: absolute;   
  bottom: 20px;  
  left: 50%;  
  transform: translateX(-50%);  
  z-index: 10;  
}
</style>