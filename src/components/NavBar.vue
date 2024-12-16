<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top mx-md-5">
    <div class="container-fluid">
      <!-- Logo on the left -->
       <div class="d-flex">
        <a class="navbar-brand" href="#">
        <img
          alt="Jasper logo"
          src="../../src/assets/ogun logo.png"
          height="30"
        />
        
      </a>
      <p style="font-size: 20px;"><a href="#" style="text-decoration: none; color: black;">Ogun State Government</a></p>
       </div>
      

      <!-- Toggler for mobile view -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Centered Navbar Links for Desktop -->
      <div
        class="collapse navbar-collapse justify-content-center"
        id="navbarNav"
      >
        <div class="navbar-nav">
          <div class="nav-item dropdown">
            <RouterLink class="nav-link" to="/">Home</RouterLink>
            <div class="dropdown-content">
              <RouterLink to="/home1" class="dropdown-item"
                >Submenu 1</RouterLink
              >
              <RouterLink to="/home2" class="dropdown-item"
                >Submenu 2</RouterLink
              >
            </div>
          </div>
          <div class="nav-item dropdown">
            <RouterLink class="nav-link" to="/serve">Services</RouterLink>
            <div class="dropdown-content">
              <RouterLink to="/accom1" class="dropdown-item"
                >Submenu 1</RouterLink
              >
              <RouterLink to="/accom2" class="dropdown-item"
                >Submenu 2</RouterLink
              >
            </div>
          </div>
          <!-- Repeat as necessary for other links -->
          <RouterLink class="nav-link" to="/about">About</RouterLink>
          <RouterLink class="nav-link" to="/mdas">MDAS</RouterLink>
          <RouterLink class="nav-link" to="/news">News</RouterLink>
          <RouterLink class="nav-link" to="/contact">Contact</RouterLink>
        </div>
      </div>
       
<div class="container">
        <input checked="" class="checkbox" type="checkbox"> 
        <div class="mainbox">
            <div class="iconContainer">
                <svg viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg" class="search_icon"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path></svg>
            </div>
         <input class="search_input" placeholder="search" type="text">
        </div>
    </div>   
    
   
    <div class="dropdown Quick">  
    <button class="dropdown-button Quick-btn">
        Quick Links  
    </button>  
    <div class="dropdown-content Quick-content">  
      <router-link to="/govt"><a href="#">Government</a></router-link>
        <a href="#">MDA</a>  
        <a href="#">Executive</a>  
        <a href="#">Healthcare</a>  
        <a href="#">Education</a>  
      <router-link to="/emergence"><a href="#">Emergency</a></router-link>
    </div>  
</div>

    </div>

    <!-- Offcanvas for mobile view -->
    <div
      class="offcanvas offcanvas-end"
      tabindex="-1"
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
    >
      <div class="offcanvas-header">
        <button>
    Quick Links
  </button>


        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <div class="navbar-nav flex-column">
          <div class="nav-item dropdown">
            <RouterLink class="nav-link" to="/" @click="closeOffCanvas"
              >Home</RouterLink
            >
            <div data-aos="fade-right" class="dropdown-content">
              <RouterLink
                to="/home1"
                class="dropdown-item"
                @click="closeOffCanvas"
                >Submenu 1</RouterLink
              >
              <RouterLink
                to="/home2"
                class="dropdown-item"
                @click="closeOffCanvas"
                >Submenu 2</RouterLink
              >
            </div>
          </div>

          <!-- <RouterLink class="nav-link" to="/accom" @click="closeOffCanvas">Accommodation</RouterLink>   -->
          <div class="nav-item dropdown">
            <RouterLink class="nav-link" to="/accom" @click="closeOffCanvas"
              >Acommodation</RouterLink
            >
            <div class="dropdown-content">
              <RouterLink
                to="/home1"
                class="dropdown-item"
                @click="closeOffCanvas"
                >Submenu 1</RouterLink
              >
              <RouterLink
                to="/home2"
                class="dropdown-item"
                @click="closeOffCanvas"
                >Submenu 2</RouterLink
              >
            </div>
          </div>

          <!-- <RouterLink class="nav-link" to="/template" @click="closeOffCanvas">Template</RouterLink>   -->
          <div class="nav-item dropdown">
            <RouterLink class="nav-link" to="/template" @click="closeOffCanvas"
              >Template</RouterLink
            >
            <div class="dropdown-content">
              <RouterLink
                to="/home1"
                class="dropdown-item"
                @click="closeOffCanvas"
                >Submenu 1</RouterLink
              >
              <RouterLink
                to="/home2"
                class="dropdown-item"
                @click="closeOffCanvas"
                >Submenu 2</RouterLink
              >
            </div>
          </div>

          <!-- <RouterLink class="nav-link" to="/sect" @click="closeOffCanvas">Section</RouterLink>   -->
          <div class="nav-item dropdown">
            <RouterLink class="nav-link" to="/sect" @click="closeOffCanvas"
              >Section</RouterLink
            >
            <div class="dropdown-content">
              <RouterLink
                to="/home1"
                class="dropdown-item"
                @click="closeOffCanvas"
                >Submenu 1</RouterLink
              >
              <RouterLink
                to="/home2"
                class="dropdown-item"
                @click="closeOffCanvas"
                >Submenu 2</RouterLink
              >
            </div>
          </div>
          <!-- 
          <RouterLink class="nav-link" to="/MeganMenu" @click="closeOffCanvas">Mega Menu</RouterLink>   -->
          <div class="nav-item dropdown">
            <RouterLink class="nav-link" to="/MegaMenu" @click="closeOffCanvas"
              >Mega Menu</RouterLink
            >
            <div class="dropdown-content">
              <RouterLink
                to="/home1"
                class="dropdown-item"
                @click="closeOffCanvas"
                >Submenu 1</RouterLink
              >
              <RouterLink
                to="/home2"
                class="dropdown-item"
                @click="closeOffCanvas"
                >Submenu 2</RouterLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template> 



<script>  
export default {  
  name: "NavBar",  


  methods: {  
    closeOffCanvas() {  
      const offcanvasElement = document.getElementById("offcanvasNavbar");  
      const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasElement);  
      if (offcanvasInstance) {  
        offcanvasInstance.hide();  
      }  
    }  
  },  
};  
</script>


<style scoped>
.Quick {  
    position: relative; /* Required for positioning the dropdown */  
    display: inline-block; /* Allow dropdowns to work inline with other elements */  
}  

.Quick-btn{  
    border-radius: .25rem;  
    text-transform: uppercase;  
    font-style: normal;  
    font-weight: 400;  
    padding-left: 25px;  
    padding-right: 25px;  
    color: #fff;  
    -webkit-clip-path: polygon(0 0,0 0,100% 0,100% 0,100% calc(100% - 15px),calc(100% - 15px) 100%,15px 100%,0 100%);  
    clip-path: polygon(0 0,0 0,100% 0,100% 0,100% calc(100% - 15px),calc(100% - 15px) 100%,15px 100%,0 100%);  
    height: 40px;  
    font-size: 0.7rem;  
    line-height: 14px;  
    letter-spacing: 1.2px;  
    transition: .2s .1s;  
    background-image: linear-gradient(90deg,#9ab991,#0e732b);  
    border: none;  
    overflow: hidden;  
}  

.Quick-content {  
    display: none; /* Hide the dropdown by default */  
    position: absolute; /* Position the dropdown absolutely */  
    background-color: white; /* Background color for dropdown */  
    min-width: 160px; /* Minimum width for dropdown */  
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2); /* Shadow for better visibility */  
    z-index: 1; /* Ensure the dropdown appears above other elements */  
}  

.Quick-content a {  
    color: black; /* Color for the links */  
    padding: 12px 16px; /* Padding around dropdown items */  
    text-decoration: none; /* Remove underline from links */  
    display: block; /* Make links block level */  
}  

.Quick-content a:hover {  
    background-color: #f1f1f1; /* Change background on hover */  
}  

.Quick:hover .Quick-content {  
    display: block; /* Show the dropdown when hovering over the dropdown */  
}  
.container {
  position: relative;
  box-sizing: border-box;
  width: fit-content;
}

.mainbox {
  box-sizing: border-box;
  position: relative;
  width: 230px;
  height: 35px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  border-radius: 160px;
  background-color: rgb(0, 0, 0);
  transition: all 0.3s ease;
}

.checkbox:focus {
  border: none;
  outline: none;
}

.checkbox:checked {
  right: 10px;
}

.checkbox:checked ~ .mainbox {
  width: 50px;
}

.checkbox:checked ~ .mainbox .search_input {
  width: 0;
  height: 0px;
}

.checkbox:checked ~ .mainbox .iconContainer {
  padding-right: 8px;
}

.checkbox {
  box-sizing: border-box;
  width: 30px;
  height: 30px;
  position: absolute;
  right: 17px;
  top: 10px;
  z-index: 9;
  cursor: pointer;
  appearance: none;
}

.search_input {
  box-sizing: border-box;
  height: 100%;
  width: 170px;
  background-color: transparent;
  border: none;
  outline: none;
  padding-bottom: 4px;
  padding-left: 10px;
  font-size: 1em;
  color: white;
  transition: all 0.3s ease;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.search_input::placeholder {
  color: rgba(255, 255, 255, 0.776);
}

.iconContainer {
  box-sizing: border-box;
  padding-top: 5px;
  width: fit-content;
  transition: all 0.3s ease;
}

.search_icon {
  box-sizing: border-box;
  fill: white;
  font-size: 1.3em;
}

.navbar-toggler {  
    border: none; /* Remove border */  
    outline: none; /* Remove outline if present on focus */  
    background: none; /* Remove default background */
    position: absolute; /* Let you position it exactly */  
    right: 15px; /* Adjust distance from the left edge */  
    top: 10px;
}  

/* Optional: Custom background color on hover */  
.navbar-toggler:hover {  
    background-color: rgba(0, 0, 0, 0.1); /* Light background on hover */ 
}  

/* Optional: Adding padding, color, etc., to the icon */  
.navbar-toggler-icon {  
    background-image: none; /* Remove Bootstrap's default icon */  
    /* You can add a custom icon as background or style the span here */  
}  

/* Example of adding a custom icon instead */  
.navbar-toggler-icon::before {  
    content: '\f0c9'; /* Example icon (Font Awesome) */  
    font-family: 'Font Awesome 5 Free'; /* Add correct font family */  
    color: #000; /* Set icon color */  
}

.navbar {
  background-color: #f8f9fa; /* Light background for the navbar */
  padding: 10px 20px; /* Padding around the navbar */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  position: relative;
}
/* Ensure logo is consistent */
.navbar-brand img {
  height: 30px;
}

.navbar-nav {
  display: flex;
  justify-content: center; /* Centers the links */
  gap: 20px; /* Space between the items */
  padding: 15px;
  justify-content: center;
}

/* Ensure that links are displayed as block for offcanvas */
.nav-link {
  display: block; /* Ensures navbar links are block on mobile */
  position: relative; /* Required for the pseudo-element */
  color: black; /* Default text color */
  text-decoration: none; /* Remove underline */
  transition: color 0.3s ease; /* Smooth color transition */
  font-family: Georgia, 'Times New Roman', Times, serif;
}

.nav-link:hover {
  color: green; /* Change text color on hover */
  
}

/* Pseudo-element for the hover line */
.nav-link::after {
  content: ""; /* Required for the pseudo-element */
  position: absolute; /* Position it relative to the link */
  left: 0; /* Start from the left */
  bottom: -1px; /* Position it below the text */
  width: 100%; /* Make it the same width as the link */
  height: 2px; /* Height of the line */
  background-color:  #56d5c4; /* Color of the line */
  transform: scaleX(0); /* Initially scale to 0 (hidden) */
  transition: transform 0.3s ease; /* Smooth transition for scaling */
}

.nav-link:hover::after {
  transform: scaleX(1); /* Scale to full width on hover */
}

/* Hide the offcanvas navigation links on desktop */
@media (min-width: 992px) {
  /* Adjust according to your breakpoint */
  .offcanvas {
    display: none; /* Hides the offcanvas in desktop */
  }
  .button{
    display: none;
  }

}

.container-fluid img {
  margin-left: 10%;
}

.nav-item {
  position: relative; /* Required for positioning the dropdown */
}

.dropdown-content {
  display: none; /* Hide the dropdown by default */
  position: absolute; /* Position it below the nav link */
  background-color: white; /* Background of the dropdown items */
  min-width: 150px; /* Minimum width of the dropdown */
  border: 1px solid #ccc; /* Optional border */
  z-index: 1000; /* Ensure it appears above other elements */
}

.dropdown-item {
  padding: 10px; /* Padding for items */
  text-decoration: none; /* Remove underline */
  color: black; /* Text color */
}

/* Show the dropdown on hover */
.nav-item:hover .dropdown-content {
  display: block; /* Show dropdown when hovering over nav-item */
}

.dropdown-item:hover {
  background-color: #f1f1f1; /* Highlight effect on hover */
}

.button {
  position: relative;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  padding-block: 0.5rem;
  padding-inline: 2rem;
  background-color: #56d5c4;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #ffff;
  gap: 10px;
  font-weight: bold;
  border: 3px solid #ffffff4d;
  outline: none;
  overflow: hidden;
  font-size: 15px;
  margin-left: 3cm;
}

.icon {
  width: 24px;
  height: 24px;
  transition: all 0.3s ease-in-out;
}

.button:hover {
  transform: scale(1.05);
  border-color: #fff9;
}

.button:hover .icon {
  transform: translate(4px);
}

.button:hover::before {
  animation: shine 1.5s ease-out infinite;
}

.button::before {
  content: "";
  position: absolute;
  width: 100px;
  height: 100%;
  background-image: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0) 30%,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0) 70%
  );
  top: 0;
  left: -100px;
  opacity: 0.6;
}

@keyframes shine {
  0% {
    left: -100px;
  }

  60% {
    left: 100%;
  }

  to {
    left: 100%;
  }
}

.navigation-btn {
  position: relative;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  padding-block: 0.5rem;
  padding-inline: 2rem;
  background-color: #56d5c4;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #ffff;
  gap: 10px;
  font-weight: bold;
  border: 3px solid #ffffff4d;
  outline: none;
  overflow: hidden;
  font-size: 15px;
}

.icon {
  width: 24px;
  height: 24px;
  transition: all 0.3s ease-in-out;
}

.navigation-btn:hover {
  transform: scale(1.05);
  border-color: #fff9;
}

.navigation-btn:hover .icon {
  transform: translate(4px);
}

.navigation-btn:hover::before {
  animation: shine 1.5s ease-out infinite;
}

.navigation-btn::before {
  content: "";
  position: absolute;
  width: 100px;
  height: 100%;
  background-image: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0) 30%,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0) 70%
  );
  top: 0;
  left: -100px;
  opacity: 0.6;
}

@keyframes shine {
  0% {
    left: -100px;
  }

  60% {
    left: 100%;
  }

  to {
    left: 100%;
  }
}

.offcanvas {
  width: 250px; /* Width of the offcanvas */
}

.offcanvas-header {
  background-color: #f8f9fa; /* Header background */
  border-bottom: 1px solid #ccc; /* Bottom border */
}

.offcanvas-body {
  padding: 15px; /* Padding for the body */
}
</style>


 