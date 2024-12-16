<template>
  <div class="Govt">
    <h4 style="margin-top: -10px; font-size: 30px; font-weight: 700;" class="text-success text-center ">Open Government</h4>
    <p style="font-size: 20px;padding: 20px;">Ogun State Government actively supports the Open Government Partnership, uniting leaders, civil society, and citizens to foster accountable and inclusive governance. Aligned with Nigeria's 2019-2021 action plan, the state is dedicated to implementing the following initiative:</p>


</div>
</template>

<script>
export default {
 name: 'GovtOpen',
}
</script>

<style scoped>
.Govt {
  padding-top: 50px;
  padding-bottom: 50px;
  padding: 30px;
  margin-top: 15px;
}



   
  @media (max-width: 576px) {  
    .Govt{
      padding: 10px;
      padding-top: 25px;
    }
    .Govt p{
      text-align: center;
      margin-top: 15px;
    }
  }  

  
  @media (min-width: 577px) {  
    .Govt p {  
      font-size: 20px;  
    }  
  }  
</style>