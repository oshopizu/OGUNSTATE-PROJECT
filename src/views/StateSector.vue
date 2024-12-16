<template>
  <div class="container-fluid sect mt-5">
    <h1 class="keys">State Key Sectors</h1>
    <div class="row justify-content-center gx-1">
        <div class="col-md-4 p-2">
          <div class="images-container">
            <img src="../assets/kid.png" alt="" width="100%" style="height: 300px; object-fit: cover;">
            <div class="texts">
              <p>Infrastructure Development</p>
            </div>
           </div>
        </div>

        <div class="col-md-4 p-2">
          <div class="images-container">
            <img src="../assets/farm.jpeg" alt="" width="100%" style="height: 300px; object-fit: cover;">
            <div class="texts">
              <p>Education Services</p>
            </div>
           </div>
        </div>

        <div class="col-md-4 p-2">
          <div class="images-container">
            <img src="../assets/Hamot.jpeg" alt="" width="100%" style="height: 300px; object-fit: cover;">
            <div class="texts">
              <p>Infrastructure Development</p>
            </div>
           </div>
        </div>

        <div class="col-md-4 p-2">
          <div class="images-container">
            <img src="../assets/House.jpeg" alt="" width="100%" style="height: 300px; object-fit: cover;">
            <div class="texts">
              <p>Healthcare Services</p>
            </div>
           </div>
        </div>

        <div class="col-md-4 p-2">
          <div class="images-container">
            <img src="../assets/Ministry.jpeg" alt="" width="100%" style="height: 300px; object-fit: cover;">
            <div class="texts">
              <p>Housing and Urban Development</p>
            </div>
           </div>
        </div>

        <div class="col-md-4 p-2">
          <div class="images-container">
            <img src="../assets/Tractor.jpeg" alt="" width="100%" style="height: 300px; object-fit: cover;">
            <div class="texts">
              <p>Security and Public Safety</p>
            </div>
           </div>
        </div>
    </div>
    
  </div>
</template>

<script>
export default {
Name: 'StateSector'
}
</script>

<style scoped>
.keys{
  padding-left: 3.5%;
  color: green;
}
.row {  
  padding-left: 50px;  
  padding-right: 50px;  
  position: relative;
}  

.images-container {  
  position: relative;  
  transition: 0.4s; 
  overflow: hidden; 
}  

.images-container img {  
  width: 100%;  
  display: block;  
}  
.texts {  
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

.texts h1 {  
  margin: 0;  
  font-size: 25px;  
  color: green;  
}  

.texts p {  
  margin: 0;  
  font-size: 15px;
  font-weight: 600;  
}  



.images-container:hover {  
  transform: scale(0.97);  
  cursor: pointer;  
} 


.images-container::before {  
    content: "";   
    position: absolute;   
    top: 0;  
    left: 0;  
    right: 0;  
    bottom: 0;  
    background: linear-gradient(to right, rgba(77, 140, 125, 0.6), rgba(58, 134, 109, 0.6)); 
    z-index: 2;  
}  

@media screen and (max-width: 576px) {  
  .row {  
    padding-left: 0; 
    padding-right: 0; 
  }  

  .images-container {  
    width: 100%; /* Ensures full width */  
  }  

  .texts {  
    width: 100%;   
  }  

  .images-container img {  
    width: 100%;  
    display: block;  
  }  
}  

 
@media screen and (min-width: 577px) {  
  .row {  
    padding-left: 50px;  
    padding-right: 50px;  
  }  
}  


</style>