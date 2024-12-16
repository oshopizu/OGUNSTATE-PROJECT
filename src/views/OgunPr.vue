<template>  
    <div class="prs">  
      <div class="row gx-2">  
        <div class="col-sm-3 col-12 mb-2 position-relative">  
          <div class="image-wrapper">  
            <img class="rounded-2" src="../assets/scams.jpeg" alt="Scams" />  
            <div class="image-text">citizen participation in the budget cycle</div>  
          </div>  
        </div>  
        <div class="col-sm-3 col-12 mb-2 position-relative"> 
          <div class="image-wrapper">  
            <img class="rounded-2" src="../assets/psite.jpeg" alt="PSite" />  
            <div class="image-text">open contracting executive sector transparency</div>  
          </div>  
        </div>  
        <div class="col-sm-3 col-12 mb-2 position-relative">   
          <div class="image-wrapper">  
            <img class="rounded-2" src="../assets/tax.jpeg" alt="Tax" />  
            <div class="image-text">tax reporting standards</div>  
          </div>  
        </div>  
        <div class="col-sm-3 col-12 mb-2 position-relative">
          <div class="image-wrapper">  
            <img class="rounded-2" src="../assets/worldb.jpeg" alt="WorldB" />  
            <div class="image-text">world bank ease of doing business index</div>  
          </div>  
        </div>  
      </div>  
    </div>  
  </template>  
  
     
    
<script>
export default {
  name: 'OgunPr'
}
</script>

<style scoped>
.prs{
  overflow: hidden;
}
.row{
  justify-content: center;
  padding-left: 50px;  
  padding-right: 50px;
}
@media screen and (max-width: 576px) {  
  .row {  
    padding-left: 3px; 
    padding-right: 3px; 
  }  

  .image-text {  
    width: 100%;
    padding: 5px;
  }  
}  


.image-wrapper {  
    position: relative;
    overflow: hidden;      
    height: 250px;        
}  

.image-wrapper::before {  
    content: "";   
    position: absolute;   
    top: 0;  
    left: 0;  
    right: 0;  
    bottom: 0;  
    background: linear-gradient(to right, rgba(77, 140, 125, 0.6), rgba(58, 134, 109, 0.6)); 
    z-index: 1;  
}  

.image-wrapper img {  
    width: 100%;         
    height: 100%;        
    object-fit: cover;    
    z-index: 0;          
    display: block;      
}  

.image-text {  
    position: absolute; 
    top: 50%;             
    left: 50%;            
    transform: translate(-50%, -50%);  
    color: white;         
    font-size: 1rem; 
    font-weight: bold;     
    text-align: center;  
    z-index: 2; 
    width: 100%;           
}  
  
@media (max-width: 576px) {  
    .image-wrapper {  
        margin-bottom: 16px;  
    }  
}
</style>