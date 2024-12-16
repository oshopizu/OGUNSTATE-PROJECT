<template>
  <div class="preview">
    <h1>Welcome to Ogun State</h1>
    <div class="row">
        <div class="col-md-6">
            <img src="../assets/ogunpics.png" alt="">
        </div>
        <div class="col-md-6 move">
           <p style="font-size: 1.3rem;">Ogun State, located in southwestern Nigeria, is known as the Gateway State due to its strategic proximity to Lagos, the country's commercial capital, and other neighboring states. Established in 1976, it has become a thriving economic hub, with a strong industrial base housing numerous multinational companies and factories.</p>
           <p style="font-size: 1.3rem;">The state is rich in cultural heritage and history, being the birthplace of notable figures in Nigeria’s political, literary, and social landscape. Key attractions include Olumo Rock, a historic site symbolizing the resilience of the Egba people, and the Adire fabric markets, showcasing indigenous textile craftsmanship.</p>
           <p style="font-size: 1.3rem;">Ogun's economy is diverse, driven by manufacturing, agriculture, and trade. Its educational institutions, such as Covenant University and Federal University of Agriculture, contribute significantly to Nigeria's academic landscape. With a population that reflects its vibrant culture and traditions, Ogun State remains an important player in Nigeria's growth story</p>
        </div>
    </div>
    <div class="culture">
        <p>A vibrant state known for its rich history, industrial strength, and cultural diversity</p>
    </div>
  </div>
</template>

<script>
export default {
  name:'PreviewPage'
}
</script>

<style scoped>

.move{
    margin-top: -27px;
}

.culture p{
    font-size: 22px;
    text-align: center;
    padding: 25px;
    margin-top: 10px;
    font-weight: 600;
}
.row p{
    font-size: 50px;
    font-weight: 500;
    font-size: 20px;
    width: 100%;
}
.row{
    /* justify-content: center; */
    /* padding: 10px; */
    margin-top: 24px;
    /* display: flex; */
}
.row img{
    width: 100%;
    border-radius: 11px;
    height: 70vh;
    object-fit: cover;
}
.preview{
    padding: 20px;
}
.preview h1{
    text-align: center;
    padding-top: 13px;
    font-family: 'Times New Roman', Times, serif;
}
@media (max-width: 576px) {  
  .row {  
    flex-direction: column;  
    padding: 0;
    
    
  }  
  
  .row img {  
    height: 60vh;  
    max-height: none;  
    width: 100%;
    object-fit: cover;
  }  
}  
.row p{
    margin-top: 20px;
    font-size: 15px;
}


@media (max-width: 800px) {  
  .row {  
    flex-direction: column; /* Stack items vertically */  
    padding: 0; /* Remove padding on smaller screens */  
    width: 100%;
  }  

  .row img {  
    max-height: 100vh; /* Adjust height for mobile */  
    width: 100%; /* Ensure full width */  
    height: 60vh; /* Maintain aspect ratio */  
    object-fit: cover;
  }  

  .row p {  
    margin-top: 10px; /* Adjust margin for paragraphs */  
    font-size: 15px; /* Smaller font size for mobile */  
  }  
}  




</style>