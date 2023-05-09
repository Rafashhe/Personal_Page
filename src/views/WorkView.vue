<script>
import card from '../components/card.vue';

export default {
  data() {
    return {
      tech:
        [
          {
            title: "Alimentos e Bebidas"
          },
          {
            title: "Planejamento e Gestão do Turismo"
          },
          {
            title: "Hotelaria"
          },
          {
            title: "Transportes"
          },
          {
            title: "Eventos"
          },
          {
            title: "Lazer e Recreação"
          },
          {
            title: "Agenciamento"
          }
        ]
    }
  },
  components: {
    card
  }
}

</script>

<template>

  <section>

    <div class="work-view">

        <div class="up">
              <h2>.:: Formação ::.</h2>
              <p>Turismo | UFPR | 2016-2019
              </p>
              <h3>Áreas possíveis</h3>
            </div>

            <div class="sessao">
              <div v-for="x in tech">
                <card :data="x.title" />
              </div>
            </div>

            <div class="down">
              <h2>.:: Profissão ::.</h2>
              <p>4Network | 2019-atualmente</p>
              <h3>Jornada na empresa</h3>
            </div>


            <div class="sessao2">
              <img src="../assets/cartao.png" classe="cart" alt="">
              <!-- <h6>Assistente de Eventos | RP</h6>
              <h6>Assistente de Controladoria</h6>
              <h6>Analista de Controladoria</h6>
              <h6>Consultora de Controladoria</h6> -->
            </div>

      </div>

  </section>

  
    


</template>

<style scoped>
.sessao {

  width: 1550px;

  margin: auto;
  place-items: center;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  justify-content: center;
  align-items: center;
  text-align: center;

}

.up {
  color: #ffffff;
  opacity: 0.6;
  line-height: 40px;
  padding-top: 2%;
  display: block;
  justify-content: center;
  align-items: center;
  justify-content: center;
  align-items: center;
  text-align: center;

}

h2 {
  font-size: 40px;
}

p {
  font-size: 20px;
  justify-content: space-evenly;
  word-spacing: 50px;
}
.sessao2 {

width: 1550px;
padding-top: 20px;
margin: auto;
place-items: center;

display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;

justify-content: center;
align-items: center;
text-align: center;

}
.down {
  color: #ffffff;
  opacity: 0.6;
  line-height: 40px;
  padding-top: 2%;
  display: block;
  justify-content: center;
  align-items: center;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.work-view {
  width: 100vw;
  height: 100vh;
}

section {
  background-image: url(../assets/ad-1628398908.jpg);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
