<template>
    <div class="top">
        <div class="about">
       <div class="about-content">
       <h3>About</h3>
       <h1>OGUN STATE</h1>
       <p><i>Discover the Heart of Nigeria’s Growth and Development</i></p>
       </div>
       <button>Explore more</button>
       
   </div>
    </div>
    
 
</template>

<script>
export default {
    name: 'AboutOgun'

}
</script>

<style scoped>  
.about {  
    position: relative;  
    background-image: url(../assets/ogunround.jpeg);  
    height: 110vh; /* Adjust as needed for responsiveness */  
    width: 100%;  
    background-size: cover; /* Cover is usually sufficient */  
    background-repeat: no-repeat;
    max-width: 100%;
}  

.about-content {  
    position: absolute;  
    top: 50%;  
    left: 3.5%;  
    color: #ffff;  
    transform: translateY(-50%); /* Vertically center the content */  
}  

.about::before {  
    content: "";   
    position: absolute;   
    top: 0;  
    left: 0;  
    right: 0;  
    bottom: 0;  
    background:#636363;   
    opacity: 0.4;   
}  

.about-content p {  
    font-size: 1.5em; /* Base font size for larger screens */  
}  

.about button {  
    padding: 15px 20px; /* Added padding for better touch area */  
    border-radius: 8px;  
    position: absolute;  
    top: 85%;  
    left: 50%;  
    color: green;  
    border: none;  
    width: 15%; /* Increased button width */  
    transform: translateX(-50%); /* Center the button */  
}  

.about-content h1 {  
    font-weight: 700;  
}  

/* Media Queries for Responsiveness */  

@media (max-width: 768px) {  
    .about {  
        height: 80vh; /* Reduced height for tablets and smaller devices */  
        background-position: top;
        max-width: 100%;
    }  
    
    .about-content {  
        left: 5%; /* Adjusted left positioning for smaller screens */  
    }  

    .about-content p {  
        font-size: 1.2em; /* Smaller font size for mobile devices */  
    }  

    .about button {  
        width: 30%; /* Increase button width for easier access */  
        top: 80%; /* Slightly adjusted button position */  
    }  
}  


@media (max-width: 800px) {  
    .about {  
        height: 80vh; /* Reduced height for tablets and smaller devices */  
        background-position: top;
    }  
    
    .about-content {  
        left: 5%; /* Adjusted left positioning for smaller screens */  
    }  

    .about-content p {  
        font-size: 1.2em; /* Smaller font size for mobile devices */  
    }  

    .about button {  
        width: 30%; /* Increase button width for easier access */  
        top: 80%; /* Slightly adjusted button position */  
    }  
}  

@media (max-width: 1114px) {  
    .about {  
        height: 80vh; /* Reduced height for tablets and smaller devices */  
        background-position: top;
    }  
    
    .about-content {  
        left: 5%; /* Adjusted left positioning for smaller screens */  
    }  

    .about-content p {  
        font-size: 1.2em; /* Smaller font size for mobile devices */  
    }  

    .about button {  
        width: 30%; /* Increase button width for easier access */  
        top: 80%; /* Slightly adjusted button position */  
    }  
}  



@media (max-width: 576px) {  
    .about {  
        height: 90vh; 
        width: 100%;
        background-position: top;
        max-width: 100%;
        object-fit: cover;
        transform: 0;
        translate: 0;
        max-height: 80vh;
    }  

    .about-content {  
        left: 4%; /* Less margin on small screens */  
        width: 90%;
        top: 70%; /* Allow content to take more space */  
    }  

    .about-content h1 {  
        font-size: 2em; /* Reduced heading size */  
    }  
    
    .about-content p {  
        font-size: 1.1em; /* Smaller paragraph text */  
    }  

    .about button {  
        width: 50%; /* Full width button for small screens */  
        top: 85%; /* Adjust button position based on mobile layout */  
    }  
}  
</style>
