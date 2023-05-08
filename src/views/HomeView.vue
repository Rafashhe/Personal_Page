<script>
</script>

<template>
  <section class="home-section active">

    <h1 class="hero-heading"> Rafaella <br> Gonçalves</h1>
    <img src="../assets/waterfall.jpg" class="fundo" alt="">
    <img src="../assets/4CIO-185.jpg" class="home-img" alt="">

  </section>
</template>

<style>
.home-section {
  max-width: 100vw;
  height: 100vh;
  padding: 0 150px;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  opacity: 0;
  transition: 1s;
}

.hero-heading {
  color: #2d4206;
  font-size: 120px;
  text-transform: capitalize;
  font-weight: 300;
  opacity: 1;
}

.fundo {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  object-fit: cover;
  opacity: 0.1;
}

.home-img {
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  width: 40%;
  object-fit: cover;
  opacity: 0.2;
}

.home-section.active {
  position: relative;
  opacity: 1;
  z-index: 8;
}
</style>
