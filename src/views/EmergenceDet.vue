<template>
  <div class="container-fluid">
    <div class="row">
      <div class="emergency-details col-md-4 shadow shadow-2">
        <h5>Police Department</h5>
        <div class="mt-3 pres">
          <p>Ogun State Police Control Room</p>
          <p>Emergency: Police Control</p>
          <p>Room:+2347042456789</p>
        </div>
      </div>

      <div class="emergency-details col-md-4 shadow shadow-2">
        <h5>Medical Center</h5>
        <div class="mt-3 pres">
          <p>Ogun State University Teaching Hospital</p>
          <p>info@osuth.ng</p>
          <p>Health Emergency</p>
          <p>Room:+2347042456789</p>
        </div>
      </div>

      <div class="emergency-details col-md-4 shadow shadow-2">
        <h5>State Government</h5>
        <div class="mt-3 pres">
          <p>Ogun state,Nigeria</p>
          <p>info@ogunstate.gov.ng</p>
        </div>
      </div>

      <div class="emergency-details col-md-4 shadow shadow-2 mt-3">
        <h5>FIRE SERVICE</h5>
        <div class="mt-3 pres">
          <div class="pus">
            <p>ONIKOKO</p>
            <p>08035692904</p>
          </div>
          
        </div>
      </div>

      <div class="emergency-details col-md-4 shadow shadow-2 mt-3">
        <h5>Medical Center</h5>
        <div class="mt-3 pres">
          <p>Ogun State University Teaching Hospital</p>
          <p>info@osuth.ng</p>
          <p>Health Emergency</p>
          <p>Room:+2347042456789</p>
        </div>
      </div>

      <div class="emergency-details col-md-4 shadow shadow-2 mt-3">
        <h5>State Government</h5>
        <div class="mt-3 pres">
          <p>Ogun state,Nigeria</p>
          <p>info@ogunstate.gov.ng</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EmergencyDet",
};
</script>

<style scoped>
.pus p{
  line-height: 0.7;
}
.pres{
  text-align: start;
  padding: 0 65px;
}

.row {
  padding: 0 37px;
  justify-content: space-between;
}
.emergency-details {
  text-align: center;
  align-items: center;
  line-height: 0.9;
  height: 50vh;
  width: 32%;
  padding: 0;
}
.emergency-details h5 {
  background: green;
  color: #fff;
  padding: 10px;
  align-items: center;
  font-size: 17px;
  margin: 0 75px;
  margin-top: 35px;
}
.emergency-details p {
  padding-top: 10px;
  line-height: 0.7;
  font-weight: 500;
  font-size: 14px;
}
</style>