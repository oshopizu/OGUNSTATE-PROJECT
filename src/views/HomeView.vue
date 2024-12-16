<template>
  <GatewayState/>
  <ogunOffice/>
  <StateSector/>
  <InvestPage/>
  <farmProduce/>
</template>

<script>
import GatewayState from './GatewayState.vue';
import ogunOffice from './ogunOffice.vue';
import StateSector from './StateSector.vue';
import InvestPage from './InvestPage.vue';
import farmProduce from './farmProduce.vue';

export default {
  Name: "HomeView",
  components:{
    GatewayState,
    ogunOffice,
    StateSector,
    InvestPage,
    farmProduce
  }
};
</script>

<style>




 

</style>



