<template>
  <div>
    <b-navbar toggleable="lg" type="light">
      <div class="container">
        <b-navbar-brand href="#">Wisata</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/Wisata">Wisata</router-link>
            </li>
          </b-navbar-nav>

        
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>

</script>

<style></style>
