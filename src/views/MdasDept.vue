<template>
  <div class="mda">
        <h1>MDA's</h1>
        <p>Ministries, Department, Agencies and public bodies.</p>
  </div>
</template>

<script>
export default {
   name: 'MdasDept'
}
</script>

<style>
.mda{
    background-image: url(../assets/celeb.png) ;
    height: 70vh;
    object-fit: cover;
    background-size: cover;
    position: relative;
    background-position: center;
    padding: 160px 70px;
    line-height: 0.5;
}
h1 {
    color: white;
    z-index: 2;
    position: relative;
    font-size: 40px;
    font-family: sans-serif;
}
p{
    color: white;
    z-index: 2;
    position: relative;
    font-size: 20px;

}

.mda::before {  
    content: "";   
    position: absolute;   
    top: 0;  
    left: 0;  
    right: 0;  
    bottom: 0;  
    background: linear-gradient(to right, rgba(77, 140, 125, 0.6), rgba(58, 134, 109, 0.6)); 
   
}  
</style>