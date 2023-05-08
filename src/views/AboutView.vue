<script>

</script>

<template>
  <section class="about">
    <img src="../assets/rafacort.jpg" class="about-img" alt="">

    <div class="about-info">
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
      <img src="../assets/Rafacort2.jpg" alt="" class="img2">
    </div>

  </section>
</template>

<style scoped>
.about {
  height: 87em;
  position: block;
  margin: 0;
  padding: 150px 100px 0;
  transition: 1s;
  display: grid;
  grid-template-columns: 25% 65%;
  grid-gap: 40px;
  place-content: center;
}

.about-info {
  color: #ffffff;
  opacity: 0.6;
  font-size: 20px;
  line-height: 40px;
  padding-top: 3%;
}

.about-img {
  position: relative;
  width: 10vi;
  object-fit: cover;
  border-radius: 20px;
  border: 3px solid rgb(148, 121, 34);
  left: 20%;
}

.subtitle {
  width: 100vw;
  min-height: 100vh;
  padding: 50px 70px;
  margin-top: 15px;
  transition: 1s;
  display: flex;
}

.texto {
  align-content: left;
  color: #fff;
  opacity: 0.6;
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