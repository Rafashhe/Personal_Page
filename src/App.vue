<script setup>
import { RouterLink, RouterView } from 'vue-router'

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

  <RouterView />
</template>

<style scoped>
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