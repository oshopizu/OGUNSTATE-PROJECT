<template>  
    <div class="container-fluid">   
        <div class="exec">  
          <h3 class="meet">Meet Our Executive</h3>  
          <button class="view-more-button">View More <i class="fa-solid fa-arrow-right fa-xs"></i></button>  
        </div>  
        <div class="row justify-content-center gx-1">  
          <div data-aos="zoom-in" data-aos-duration="800" data-aos-delay="100" class="col-md-4 p-2">   
            <div class="image-container">  
              <img src="../assets/NewDapo.png" alt="" width="100%">  
              <div class="text">  
                  <h1>Dapo Abiodun</h1>  
                  <p>State Governor</p>  
              </div>  
            </div>  
          </div>  
  
          <div data-aos="zoom-in" data-aos-duration="800" data-aos-delay="100" class="col-md-4 p-2">  
            <div class="image-container">  
              <img src="../assets/deputyg.jpeg" alt="" width="100%">  
              <div class="text">  
                  <h1>Noimot Salako</h1>  
                  <p>Deputy Governor</p>  
              </div>  
            </div>  
          </div>  
  
          <div data-aos="zoom-in" data-aos-duration="800" data-aos-delay="100" class="col-md-4 p-2">  
            <div class="image-container">  
              <img src="../assets/NewProf.png" alt="" width="100%">  
              <div class="text">  
                  <h1>Prof Arigbabu</h1>  
                  <p>Com of Education</p>  
              </div>  
            </div>  
          </div>  
        </div>  
    </div>  
  </template>  
  
  <script>  
  export default {  
    name: 'ogunOffice'  
  }  
  </script>  
  
  
  <style scoped> 
  .meet{
    padding-left: 3.5%;
  } 
  .view-more-button {  
  display: flex; 
  align-items: center; 
  border: 1px solid black;   
  background: none;  
  cursor: pointer; 
  gap: 2px; 
  border-radius: 5px;
  margin-right: 3.7% ;
  
} 

@media screen and (max-width: 576px) {  
  .view-more-button {  
    font-size: 0; 
  }  

  .view-more-button i {  
    font-size: 16px;  
  } 
 }

.row {  
  padding-left: 50px;  
  padding-right: 50px;  
  position: relative;  
}  

.exec {  
  display: flex;  
  justify-content: space-between;  
  padding-top: 30px;  
}  

.exec h3 {  
  color: green;  
}  

.image-container {  
  position: relative;  
  transition: 0.4s;  
}  

.image-container img {  
  width: 100%;  
  display: block;
  height: 500px;  
  object-fit: cover;
}  

.text {  
  position: absolute;  
  bottom: 0;  
  left: 0;  
  width: 50%;  
  background-color: white;  
  padding: 10px;  
  box-shadow: 0px -2px 5px rgba(0, 0, 0, 0.1);  
  text-align: center;  
}  

.text h1 {  
  margin: 0;  
  font-size: 25px;  
  color: green;  
}  

.text p {  
  margin: 0;  
  font-size: 15px;
  font-weight: 500;  
}  

.image-container:hover {  
  transform: scale(0.97);   
  cursor: pointer;  
}  

 
@media screen and (max-width: 576px) {  
  .row {  
    padding-left: 0; 
    padding-right: 0; 
  }  

  .image-container {  
    width: 100%;  
  }  

  .text {  
    width: 70%;   
  }  

  .image-container img {  
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
