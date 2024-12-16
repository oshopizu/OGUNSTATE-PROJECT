<template>
   <div class="container-fluid ogun-page">
<div class="gate-container">
  <img src="../assets/ogunpics.png" alt="" width="100%" style="margin-top: -7%;">
  <div class="gate-text">
    <p class="col-md-4"> Ogun State was created on the 3rd of February of 1976. It was carved out of the old western of Nigeria and named after Ogun river which runs across it from North to South</p>
    <button class="btn btn-dark"> Ogun State MDAs</button>
  </div>
</div>
    <!-- <h1 class="col-md-4 p-4">The Gateway State</h1>
    <p class="col-md-4 p-3">
      Ogun State was created on the 3rd of February of 1976. It was carved out
      of the old western of Nigeria and named after Ogun river which runs across
      it from North to South
    </p>
    <div class="p-2">
      <button class="btn btn-light">Ogun State MDAs</button>
    </div> -->
  </div>

</template>

<script>
export default {
  Name: 'Gateway'
}
</script>

<style>
.ogun-page{
  position: relative;
}
.gate-text{
  position: absolute;  
  bottom: 14%;           
  left: 35%;             
  transform: translate(-50%, -50%);   
  /* padding: 10px;   */
  text-align: center;  
  color: #fff; 
  z-index: 2;
  font-size: 25px;
}
/* .ogun-page {
  background-image: url(../assets/ogunpics.png);
  height: 70vh;
  margin-top: -10%;
}
.ogun-page h1 {
  color: #fff;
  font-size: 50px;
  padding-top: 2cm;
  width: 40%;
}
.ogun-page p {
  color: #fff;
} */
</style>