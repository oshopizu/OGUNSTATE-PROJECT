<template>
  <div class="container emergency p-3">
    <div>
      <p><b>Police Emergency</b>: +234 XXXX XXX XXX</p>
    </div>
    <div>
      <p><b>State Helpline</b>: +234 XXXX XXX XXX</p>
      <p><b>Ambulance Services</b>: +234 XXXX XXX XXX</p>
    </div>
  </div>
  <div class="container emerge-number p-2">
    <div class="row">
      <div class="fire-services col-sm-4">
        <p><b>Fire Services:</b></p>
        <div>
          <p>ONIKOKO <br />08035692904</p>
          <p>
            IJEMO STATION <br />
            08035596945
          </p>
          <p>
            SAGAMU STATION <br />
            08065226846
          </p>
          <p>
            OTA STATION <br />
            08032262208
          </p>
        </div>
      </div>

      <div class="col-sm-4">
        <h3><b>Ogun-State</b></h3>
        <h3 class="text-success numb"><b>Emergency Number</b></h3>
      </div>

      <div class="fire-services col-sm-4">
        <p><b>PPRO:</b></p>
        <div>
          <p>09159578888</p>
          <p><b>CONTROL ROOM</b></p>
          <p>09062837609</p>
          <p>09151027369</p>
          <p>07084972994</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EmergencyPage",
};
</script>

<style>
.numb {
  margin-top: -5px;
}

.fire-services {
  display: flex; /* Maintain flex display */
  /* flex-direction: column; */
  gap: 8px; /* Maintain gap between items */
}

.emergency {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap; /* Allow wrapping for small screens */
}

@media (min-width: 576px) {
  .fire-services {
    flex-direction: row; /* Change to row direction on larger screens */
  }

  .fire-services p {
    margin: 0 10px; /* Add margin to space items in row layout */
  }
}

@media (max-width: 576px) {
  .emergency {
    flex-direction: column; /* Stack items vertically in mobile view */
    align-items: flex-start; /* Align items to the start */
  }

  .fire-services {
    width: 100%; /* Ensure full width for fire services on mobile */
  }

  .fire-services p {
    margin: 0; /* Remove margin for better spacing */
  }
}
</style>