<template>
  <div class="hero">
    <!-- Desktop -->
    <div class="d-none d-md-block">
      <div class="row mt-4">
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2>
                <strong>Ayo Wisata ke Malang,</strong>
                <br />
              </h2>
              <p>Ayo Segera Reservasi Disini</p>
              <router-link class="btn btn-lg btn-success" to="/Wisata">
                <b-icon-arrow-right></b-icon-arrow-right>Pesan
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <img src="https://asset.kompas.com/crops/_E_jZ5BACnxCQ_2WVh_S5fkwZeA=/0x0:1000x667/750x500/data/photo/2020/01/22/5e281e5a7f0aa.jpg" width="100%" />
        </div>
      </div>
    </div>

    <!-- Mobile -->
    <div class="d-sm-block d-md-none">
      <div class="row mt-4">
        <div class="col-md-6 mb-3">
          <img src="https://asset.kompas.com/crops/_E_jZ5BACnxCQ_2WVh_S5fkwZeA=/0x0:1000x667/750x500/data/photo/2020/01/22/5e281e5a7f0aa.jpg" width="100%" />
        </div>
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2>
                <strong>Ayo Wisata Ke Malang,</strong>
                <br />in Your Gadget
              </h2>
              <p>Ayo segera pilih dan pesan makanan favorit Anda</p>
              <button class="btn btn-lg btn-success">
                <b-icon-arrow-right></b-icon-arrow-right>Pesan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style>
</style>