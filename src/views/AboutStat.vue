<template>
  <div class="population">
    <div class="first-pop">
      <h3>6,379,500</h3>
      <p>Growing Population</p>
    </div>
    <div class="first-pop">
      <h3>16,981km</h3>
      <p>Land mass</p>
    </div>
    <div class="first-pop">
      <h3>$12.46bbillion</h3>
      <p>GDP</p>
    </div>
    <div class="first-pop">
      <h3>1976</h3>
      <p>Year of Foundation</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Aboutpopulation",
};
</script>

<style scoped>
.population {
  margin-top: 2cm;
  overflow: hidden;
  background-image: url(../assets/celeb.png);
  height: 30vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.population p {
  color: white;
}
.population h3 {
  color: white;
}

/* .population::before {  
  content: '';   
  position: absolute;   
  top: 0;   
  left: 0;   
  right: 0;   
  bottom: 0;   
  background-color: #1a4c31;   
  z-index: 2;  
  opacity: 0.7;  
}   */
</style>