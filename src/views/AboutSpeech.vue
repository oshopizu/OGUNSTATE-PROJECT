<template>  
  <div class="speech">  
    <h3>Governor Speech</h3>  
    <div class="row">  
      <div class="col-md-6 dpics">  
        <img src="../assets/speech.jpeg" alt="Governor's Speech Image"/>  
      </div>  
      <div class="col-md-6">  
        <p class="statement">  
          Ogun State is committed to becoming Nigeria’s leading industrial hub  
          by fostering an environment that encourages investment and economic  
          growth. The "Building Our Future Together" agenda promotes transparent  
          and accountable leadership for the benefit of all citizens. Governance  
          initiatives focus on inclusivity, ensuring no one is left behind,  
          regardless of status. A key priority is empowering youth and women  
          through strategic programs designed to drive sustainable development.  
          These initiatives aim to create opportunities, foster innovation,   
          and secure a prosperous future for the state. Together, these efforts  
          reflect a vision of progress, equity, and resilience for Ogun State's  
          growth.  
        </p>  
      </div>  
    </div>  
  </div>  
</template>  

<script>  
export default {  
  name: "AboutSpeech",  
};  
</script>  

<style scoped>  
.dpics {  
  padding: 15px;  
  padding-left: 7%;  
}  

.row {  
  display: flex;  
  flex-wrap: wrap; /* Allow items to wrap on small screens */  
}  

.row img {  
  width: 100%;  
  object-fit: cover;  
  height: auto; /* Change height to auto to maintain aspect ratio */  
}  

.statement {  
  width: 100%;  
  padding: 8px;
  font-size: 23px;
} 


.speech h3 {  
  text-align: center;  
  margin-top: 2cm;  
  font-size: 35px;  
  font-family: Arial, Helvetica, sans-serif;  
  font-weight: 600;  
}  

/* Media Queries for Responsiveness */  
@media (max-width: 768px) {  
  .statement {  
    width: 100%; /* Full width on smaller screens */  
  }  

  .dpics {  
    padding-left: 0; /* Remove left padding on mobile */  
    padding: 10px; /* Small padding for mobile */  
  }  

  .row {   
    flex-direction: column; /* Stack image and text on top of each other */  
  }  

  .speech h3 {  
    font-size: 28px; /* Slightly smaller heading */  
  }  
}  

@media (max-width: 576px) {  
  .speech h3 {  
    font-size: 24px; /* Further reduce heading font size for small devices */  
    margin-top: 1.5cm; /* Slightly smaller top margin */  
  }  

  .statement {  
    font-size: 0.95em; /* Adjust text size for better readability */  
    padding: 5px; /* Reduce padding for smaller devices */  
  }  

  .row img {  
    height: auto; /* Ensure image keeps aspect ratio */  
    background-position: top;
    padding-top: 5%;
    object-fit: cover;
    width: 100%;
  }  
}  
</style>