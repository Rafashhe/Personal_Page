<script setup>
import { RouterLink, RouterView } from 'vue-router'

window.onload = function () {
  document.getElementById("load").classList.add("none")
  console.log("carregado");

}
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">Apresentação</RouterLink>
        <RouterLink to="/work">Formação</RouterLink>
        <RouterLink to="/life">Frase da vida</RouterLink>
      </nav>
    </div>
  </header>

  <div class="load" id="load">Pera aí...</div>

  <RouterView />
</template>

<style scoped>
.load {
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0px;
  left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  color: rgb(139, 119, 27);
  }

.none {
  display: none;
}

header {
  line-height: 1.5;
  justify-content: space-evenly;
  padding-top: 10px;
  padding-bottom: 10px;
  text-decoration: none;

}

nav {
  width: 100%;
  display: flex;
  font-size: 24px;
  text-align: center;
  margin-top: 0rem;
  font-weight: 200;
  justify-content: center;
  align-items: center;
  z-index: 9;
  background: #1a1a1a;
}

nav a.router-link-exact-active {
  color: rgb(71, 82, 40);
  text-decoration: none;

}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 10rem;
  border-left: 1px solid transparent;
  text-decoration: none;
  color: rgb(31, 36, 20);
}
</style>