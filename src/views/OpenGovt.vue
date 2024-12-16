<template>
  <GovtOpen />
  <OgunPr />
  <ReviewPr />
  <LawPage />
  <OathPage />
  <FinancialPage />
  <StatisticsPage />
  <ProcurementPage />
</template>

<script>
import GovtOpen from './GovtOpen.vue';
import OgunPr from './OgunPr.vue';
import ReviewPr from './ReviewPr.vue';
import LawPage from './LawPage.vue';
import OathPage from './OathPage.vue';
import FinancialPage from './FinancialPage.vue';
import StatisticsPage from './StatisticsPage.vue';
import ProcurementPage from './ProcurementPage.vue';
export default {
 name:'OpenGovt',
 components: {
    GovtOpen,
    OgunPr,
    ReviewPr,
    LawPage,
    OathPage,
    FinancialPage,
    StatisticsPage,
    ProcurementPage
 }
}
</script>

<style>

</style>