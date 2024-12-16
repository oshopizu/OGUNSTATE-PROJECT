<template>
  <div class="container-fluid text-center Financial mt-5">
    <div class="finance rounded-3 mt-2">
        <h3 class="text-center"><b>Financial Statement</b></h3>
    </div>

    <div class="reports mt-3">
      
      <div class="border border-2 rounded-4 text-white report-item">
       <div class="vect">
          <span><i class="fa-solid fa-vector-square" style="color: #63E6BE; background: white; padding: 20px; border-radius: 50px;"></i></span>
        </div>
        <div class="sect" >
          <h2 class="text-start">State financial report</h2>
          <p class="rats">Get Access to Ogun State Comprehensive Annual Reports, Receipts Reporting and Other Financial Reports</p>
        </div>
        
      </div>
      <div class="border border-2 rounded-4  mt-2 text-white report-item text-start">
        <div class="vect">
          <span><i class="fa-solid fa-vector-square" style="color: #63E6BE; background: white; padding: 20px; border-radius: 50px;"></i></span>
        </div>
      <div class="sect">
        <h2 class="text-start">State Auditors Report</h2>
        <p>An Evaluation Of the State’s Financial Entity</p>
      </div>
        
      </div>
      <div class="border border-2 rounded-4 mt-2 text-white report-item">
        <div class="vect">
          <span><i class="fa-solid fa-vector-square" style="color: #63E6BE; background: white; padding: 20px; border-radius: 50px;"></i></span>
        </div>
        <div class="sect">
          <h2 class="rats">Local Government Financial Reports</h2>
        <p class="text-start">An Open Repository Ogun’s Expenditures</p>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: 'FinancialPage'
}
</script>

<style scoped>
.reports{
  padding: 20px;
}
.finance{
    width: 25%;
    margin: auto;
    color: #016d39;
    background: #fbfbfb;
    padding: 10px;
    font-weight: 500;
}
.Financial {
    background: #016d39;
    height: 100vh;
    padding: 20px;
}
.reports p{
    font-size: 20px;
}
.report-item {  
  display: flex; /* Enable flexbox layout */  
  align-items: flex-start;  
  width: 100%;  
  gap: 5px; /* Minimal gap between vect and sect */
  align-items: center;
  padding: 40px;
  padding-left: 20%;
  
}  

.vect {  
  flex-shrink: 0; /* Prevents the icon from shrinking */  
}  
 

/* Optional: If you want to manage the title and paragraph spacing */  
.sect h2 {  
  margin: 0; /* Remove default margin */ 
  font-size: 23px; 
}  

.sect p {  
  margin: 0; /* Remove default margin */  

}  
@media screen and (max-width: 576px) {
      .report-item{
        width: 100%;
        display: flex;
        padding: 6%;
        
     }
     .rats{
      text-align: start;
      font-size: 15px;
     }
     .reports p{
        font-size: 10px;
     }
     .finance{
        width: 100%;
     }
     .reports{
      padding: 0;
     
     }
     .sect p {  
  font-size: 13px; 
  text-align: start;

} 
.Financial{
  height: 80vh;
} 
}
</style>