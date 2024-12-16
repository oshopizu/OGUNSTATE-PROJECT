<template>  
  <div class="history">  
    <h1>Our History and Heritage</h1>  
    <p style="text-align: center; font-size: 20px">Historical Memories</p>  

    <div class="History-content">  
      <div class="create">  
        <h3>Creation Of Ogun State</h3>  
        <p>  
          Ogun State was carved out of the old Western State on February 3,  
          1976, during Nigeria's military rule under General Murtala Mohammed.  
          It was named after the Ogun River, which runs through the state.  
        </p>  
      </div>  

      <div class="views">  
        <img src="../assets/ogunlogs.png" alt="Ogun Logs" />  
      </div>  

      <div class="views">  
        <img  
          src="../assets/awolowo.jpeg"  
          alt="Chief Awolowo"  
        />  
      </div>  

      <div class="create">  
        <h3>Role in Nigeria's Independence</h3>  
        <p>  
          Ogun State played a vital role in Nigeria’s history as the home of  
          prominent nationalist leaders like Chief Obafemi Awolowo and the first  
          Nigerian President, Chief Olusegun Obasanjo.  
        </p>  
      </div>  

      <div class="create">  
        <h3>Cultural Evolution</h3>  
        <p>  
          Ogun State hosts diverse sub-ethnic groups—Egba, Ijebu, Remo, Yewa,  
          and Awori—each with rich cultural traditions. It’s also famed as the  
          birthplace of the globally celebrated Adire fabric.  
        </p>  
      </div>  

      <div class="views">  
        <img src="../assets/attire.png" alt="Adire Fabric" />  
      </div>  
    </div>  
  </div>  
</template>  

<script>  
export default {  
  name: "AboutOgunP",  
};  
</script>  

<style scoped>  
.history {  
  /* padding: 5px;   */
  margin-top: 20px;
  background: #fbfff1;  
}  

.history h1 {  
  text-align: center;  
  padding-top: 20px;
}  
.History-content {  
  display: flex;  
  flex-wrap: wrap; /* Allows items to wrap onto the next line */  
  justify-content: space-between;
  align-items: flex-start; 
  margin: 0 auto; 
  max-width: 1200px; /* Restrict to a max width */  
  padding: 10px;
   /* gap: 7px; */
}  

.create {  
  flex: 1 1 40%; /* Grow to fill space, allow to shrink, base width of 45% */  
  margin: 10px;
}
.create p{
  font-size: 20px;
  line-height: 1.6;
}  

.views {  
  flex: 1 1 30%; /* Grow to fill space, allow to shrink, base width of 30% */  
  margin: 10px; /* Space around images */  
}  

.views img {  
  width: 100%; 
  height: auto; 
  border-radius: 5px;   
}  



/* .History-content {  
  padding: 20px;  
  display: flex;  
  flex-wrap: wrap; 
  justify-content: center;  
}  

.create {  
  flex: 1 1 300px;
  padding: 20px;  
  margin: 10px;  
  box-sizing: border-box; 
}  

.views {  
  flex: 1 1 300px; 
  margin: 10px;  
  text-align: center;  
}  

.views img {  
  width: 100%; 
  height: auto; 
  max-width: 100%;  
  object-fit: cover; 
}  

.History-content p {  
  font-size: 23px;  
  font-weight: 400;  
}   */

/* Media Queries for Mobile Responsiveness */  

@media (max-width: 576px) {  
  .create, .views {  
    flex: 1 1 100%; /* Stack on small screens */ 

  }  
}  
</style>