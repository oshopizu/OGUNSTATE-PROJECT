<template>
  <NewsEra/>
  <UpdatesPage/>
  <CardPage/>
  
</template>

<script>
import NewsEra from './NewsEra.vue';
import UpdatesPage from './UpdatesPage.vue';
import CardPage from './CardPage.vue';
export default {
    Name :'NewsPage',
    components:{
       NewsEra,
       UpdatesPage,
       CardPage
    }
}
</script>

<style>

</style>