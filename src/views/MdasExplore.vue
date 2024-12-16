<template>
  <div class="Explore">
    <h1>Explore Our Goverment Departments</h1>
  </div>
  <div class="container-fluid mt-5">
    <div class="row">
      <div class="card col-md-4">
        <img src="../assets/ogunhouse.png" alt="ballot" />
        <div class="card-body">
          <h3 style="text-align: center">
            Ministry of Physical Planning and Urban Development
          </h3>
          <p style="text-align: justify;">
            The Ministry of Physical Planning and Urban Development came into
            existence on the 5th of November, 2012. It came into being upon the
            upgrading of the Bureau of Urban and Physical Planning into a
            full-fledged Ministry by the Senator Ibikunle Amosun led
            Administration
          </p>
          <div class="bts">
            <button>View Ministry</button>
          </div>
        </div>
      </div>

      <div class="card col-md-4">
        <img
          src="../assets/ogunhouse.png"
          alt="ballot"
          style="object-fit: cover"
        />
        <div class="card-body">
          <h3 style="text-align: center">Ministry of Forestry</h3>
          <p style="text-align: justify;">
            The Ogun State Ministry of Forestry plays a crucial role in managing
            and preserving the state's rich forest resources. It oversees
            afforestation programs, promotes sustainable logging practices, and
            works to combat deforestation
          </p>
          <div class="bts">
            <button>View Ministry</button>
          </div>
        </div>
      </div>

      <div class="card col-md-4">
        <img
          src="../assets/ogunhouse.png"
          alt="ballot"
          style="object-fit: cover"
        />
        <div class="card-body">
          <h3 style="text-align: center">Ministry of Environment</h3>
          <p style="text-align: justify;">
            The Ogun State Ministry of Environment is responsible for
            safeguarding the environment and promoting sustainable development.
            It oversees waste management, pollution control, and environmental
            protection initiative
          </p>
          <div class="bts">
            <button>View Ministry</button>
          </div>
        </div>
      </div>

      <div class="card col-md-4 mt-4">
        <img
          src="../assets/ogunhouse.png"
          alt="ballot"
          style="object-fit: cover"
        />
        <div class="card-body">
          <h3 style="text-align: center">
            Ministry of Physical Planning and Urban Development
          </h3>
          <p style="text-align: justify;">
            The Ministry of Physical Planning and Urban Development came into
            existence on the 5th of November, 2012. It came into being upon the
            upgrading of the Bureau of Urban and Physical Planning into a
            full-fledged Ministry by the Senator Ibikunle Amosun led
            Administration
          </p>
          <div class="bts">
            <button>View Ministry</button>
          </div>
        </div>
      </div>

      <div class="card col-md-4 mt-4">
        <img
          src="../assets/ogunhouse.png"
          alt="ballot"
          style="object-fit: cover"
        />
        <div class="card-body">
          <h3 style="text-align: center">Ministry of Works & Infrastructure</h3>
          <p style="text-align: justify;">
            The Ministry had been in existence since the creation of Ogun State
            in 1976. However, it has gone through various changes in term of
            structure and mandate overtime. At a period, it was known and
            addressed as Ministry of Works and Housing while the past Civilian
          </p>
          <div class="bts">
            <button>View Ministry</button>
          </div>
        </div>
      </div>

      <div class="card col-md-4 mt-4">
        <img
          src="../assets/ogunhouse.png"
          alt="ballot"
          style="object-fit: cover"
        />
        <div class="card-body">
          <h3 style="text-align: center">Ministry of Housing</h3>
          <p style="text-align: justify;">
            Formulation and Implementation of Government Policies on Housing
            Projects (Public Building and Housing Delivery). Facilitating and
            Assisting Government Agencies in the Implementation of Government
            Programs relating to Housing and Building matters. Rendering
            Consultancy Services to other Agencies
          </p>
          <div class="bts">
            <button>View Ministry</button>
          </div>
        </div>
      </div>

      <div class="card col-md-4 mt-4">
        <img
          src="../assets/ogunhouse.png"
          alt="ballot"
          style="object-fit: cover"
        />
        <div class="card-body">
          <h3 style="text-align: center">
            Ministry of Education Science & Technology
          </h3>
          <p style="text-align: justify;">
            To develop a purposeful, inclusive and engaging education system
            that produces successful, inspired, self-motivated lifelong
            learners, who possess the skills and knowledge necessary to be
            productive contributors to the State and the changing world
          </p>
          <div class="bts">
            <button>View Ministry</button>
          </div>
        </div>
      </div>

      <div class="card col-md-4 mt-4">
        <img
          src="../assets/ogunhouse.png"
          alt="ballot"
          style="object-fit: cover"
        />
        <div class="card-body">
          <h3 style="text-align: center">Ministry of Budget and Planning</h3>
          <p style="text-align: justify;">
            The Ministry of Budget and Planning came into existence in 2011 as a
            result of the transformation of the former Bureau of Management and
            Budget into a full-fledged Ministry through six (6) Departments
          </p>
          <div class="bts">
            <button>View Ministry</button>
          </div>
        </div>
      </div>

      <div class="card col-md-4 mt-4">
        <img
          src="../assets/ogunhouse.png"
          alt="ballot"
          style="object-fit: cover"
        />
        <div class="card-body">
          <h3 style="text-align: center">Ministry of Culture and Tourism.</h3>
          <p style="text-align: justify;">
            The agency’s objectives are spelt out as follows: To work towards
            best practice in Culture and Tourism Promotion and Development. To
            harness local talents and potentials. To facilitate a socially
            balanced, environmentally friendly and economically viable sector.
          </p>
          <div class="bts">
            <button style="outline: none;">View Ministry</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MdasExplore",
};
</script>

<style scoped>
.Explore{
  padding-top: 35px;
}
.bts {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  
}
.bts button {
  outline: none;
  padding: 10px;
  border: 2px solid green;
  color: green;
  border-radius: 5px;
  width: 50%;

}
.row {
  justify-content: center;
  gap: 7px;
}
h1 {
  text-align: center;
  color: black;
  margin-top: 15px;
  font-family: "Times New Roman", Times, serif;
  font-size: 35px;
}
.card p {
  color: black;
  font-weight: 400;
}
.card h3 {
  font-weight: 600;
  font-family: serif;
  font-size: 25px;
}
.card {
  width: 30%;
  /* border: none; */
}
/* .card :hover{
  box-shadow: ;
} */
</style>