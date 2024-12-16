<template>
  <div class="div">
    <AboutOgun />
  <PreviewPage/>
  <AboutOgunP/>
  <AboutSpeech/>
  <AboutStat/>
  </div>

  
</template>


<script>
import AboutOgun from './AboutOgun.vue';
import PreviewPage from './PreviewPage.vue';
import AboutOgunP from './AboutOgunP.vue';
import AboutSpeech from './AboutSpeech.vue';
import AboutStat from './AboutStat.vue';
export default{
  name: 'Aboutview',
  components:{
    AboutOgun,
    PreviewPage,
    AboutOgunP,
    AboutSpeech,
    AboutStat

  }
}
</script>
 
<style scoped>
.div{
  overflow-x: hidden;
    margin-top: -200px;
}
</style>

