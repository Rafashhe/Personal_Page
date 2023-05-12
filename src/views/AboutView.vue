<script>

</script>

<template>
  <section class="about">
    

    <div class="about-info">

      <img src="@/assets/rafacort.jpg" class="about-img" alt="">
      <br>
      <ul>
        <li> Rafaella Nair dos Anjos Fonseca Gonçalves</li>
        <li> 31 anos - Signo de Áries </li>
        <li> Bacharel em Turismo pela UFPR</li>
        <li> Consultora de Controladoria na 4Network</li>
      </ul>
    </div>

    <div class="subtitle">
      <p class="texto">
        Conhecida nas redes sociais como: <strong> Rafashhe </strong>, e no cotidiano como <strong>Rafa</strong>.
        <br>
        Nascida dia 09 de abril de 1992 em Curitiba/PR, cidade onde reside até os dias atuais.
        <br>
        Mora no Centro da capital paranaense, junto com seus dois gatinhos (Rubi e Tatá).
        <br>
        Nas horas vagas, opta com frequencia por atividades 'indoor', como ler, escrever, dançar e jogar.
      </p>
      <img src="@/assets/Rafacort2.jpg" alt="" class="img2">
    </div>

  </section>
</template>

<style scoped>
.about {
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding-left: 20rem;
  padding-right: 30rem;
  padding-bottom: 5rem;
  transition: 1s;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  place-content: center;
  
}


.about-info {
  color: #ffffff;
  font-size: 20px;
  line-height: 40px;
  width: 100vw;
  height:30%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  padding-left: 30rem;
}

.about-img {
  width: 10vi;
  object-fit: cover;
  border-radius: 20px;
  border: 3px solid rgb(148, 121, 34);
}

ul {
  margin-left: 100px;
}
.subtitle {
  width: 100vw;
  min-height: 30%;
  transition: 1s;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  padding-left: 30rem;
}

.texto {
  align-content: left;
  color: #fff;
  font-size: 20px;
  line-height: 40px;
}

.img2 {
  top: -35px;
  position: relative;
  height: max-content;
  width: 10vi;
  object-fit: cover;
  border-radius: 20px;
  border: 3px solid rgb(148, 121, 34);
  left: 9%;
}

</style>