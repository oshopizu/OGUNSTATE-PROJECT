<template>
    <NavBar/>
    

  <Router-view />

<FooterComp />

</template>

<script>
import NavBar from './components/NavBar.vue';
import FooterComp from './components/FooterComp.vue';

export default {
   Name :'App',
   components: {
    NavBar,
    FooterComp
   }
}
</script>
<style>


</style>

