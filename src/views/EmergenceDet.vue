<template>  
  <div class="container-fluid">  
    <div class="row">  
      <div class="emergency-details col-md-4 col-sm-6 col-12 shadow shadow-2">  
        <h5>Police Department</h5>  
        <div class="mt-3 pres">  
          <p>Ogun State Police Control Room</p>  
          <p>Emergency: Police Control</p>  
          <p>Room: +2347042456789</p>  
        </div>  
      </div>  

      <div class="emergency-details col-md-4 col-sm-6 col-12 shadow shadow-2">  
        <h5>Medical Center</h5>  
        <div class="mt-3 pres">  
          <p>Ogun State University Teaching Hospital</p>  
          <p>info@osuth.ng</p>  
          <p>Health Emergency</p>  
          <p>Room: +2347042456789</p>  
        </div>  
      </div>  

      <div class="emergency-details col-md-4 col-sm-6 col-12 shadow shadow-2">  
        <h5>State Government</h5>  
        <div class="mt-3 pres">  
          <p>Ogun State, Nigeria</p>  
          <p>info@ogunstate.gov.ng</p>  
        </div>  
      </div>  

      <div class="emergency-details col-md-4 col-sm-6 col-12 shadow shadow-2 mt-3">  
        <h5>FIRE SERVICE</h5>  
        <div class="mt-3 pres">  
          <div class="pus">  
            <p>ONIKOKO</p>  
            <p>08035692904</p>  
          </div>  
        </div>  
      </div>  

      <div class="emergency-details col-md-4 col-sm-6 col-12 shadow shadow-2 mt-3">  
        <h5>PPRO</h5>  
        <div class="mt-3 pres">  
          <p>09159578888</p> 
        </div>  
      </div>  

      <div class="emergency-details col-md-4 col-sm-6 col-12 shadow shadow-2 mt-3">  
        <h5>OTHER CONTROL ROOM</h5>  
        <div class="mt-3 pres">  
          <p>09062837609</p>  
          <p>09120141706</p>  
          <p>09151027369</p>
          <p>07084972994</p>
        </div>  
      </div>  
    </div>  
  </div>  
</template>  

<script>  
export default {  
  name: "EmergencyDet",  
};  
</script>  

<style scoped>  
.pus p {  
  line-height: 1;
}  
.pres {  
  text-align: start;  
  padding: 0 20px; 
}  

.row {  
  padding: 0 15px;
  justify-content: space-between;  
}  
.emergency-details {  
  text-align: center;  
  align-items: center;  
  line-height: 1; 
  height: 50vh; 
  margin: 10px 15px;
  width: 31%;
}  
.emergency-details h5 {  
  background: green;  
  color: #fff;  
  padding: 10px;  
  font-size: 17px;  
  margin: 15px 35px; 
}  
.emergency-details p {  
  padding-top: 5px; 
  font-weight: 500;  
  font-size: 14px;  
}  

/* Media Queries for additional responsiveness */  
@media (max-width: 768px) {  
  .emergency-details h5 {  
    font-size: 1.25rem; /* Slightly smaller text on medium screens */  
    margin: 5px 35px;
  }  
  .emergency-details p {  
    font-size: 25px; /* Smaller text for details */  
  margin: 0 14px;
  }  
  .emergency-details{
       width: 100%;
       padding: 12px 0;
  }
}  

@media (max-width: 884px) {  
  .emergency-details h5 {  
    font-size: 1.25rem; /* Slightly smaller text on medium screens */ 
    margin: 5px 35px;
  }  
  .emergency-details p {  
    font-size: 19px; /* Smaller text for details */  
    margin: 0 14px;
    font-weight: 600;
    line-height: 1.2;
  }  
  .emergency-details{
       width: 45%;
       padding: 12px 0;
  }
  .row{
    display: flex;
    flex-wrap: wrap;
  
  }
  
}  
 /* @media (max-width: 1288px) {  
  .emergency-details h5 {  
    font-size: 1.25rem; 
    margin: 5px 45px;
  }  
  .emergency-details p {  
    font-size: 19px; 
    margin: 0 14px;
    font-weight: 600;
    line-height: 1.2;
  }  
  .emergency-details{
       width: 47%;
       padding: 12px 0;
  }
  .row{
    display: flex;
    flex-wrap: wrap;
  }
  
}    */


@media (max-width: 576px) {  
  .emergency-details {  
    padding: 15px; /* Added padding for mobile */ 
    width: 100%; 
    margin: 0;
  }  
  .emergency-details h5 {  
    font-size: 1rem; /* Smaller heading for very small screens */  
  }  
  .emergency-details p {  
    font-size: 14px; /* Even smaller text for mobile clarity */ 
    text-align: start; 
  }  
}  
</style>