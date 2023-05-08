<script>
</script>


<template>
  <div class="quote">
    <h2> ♣ Citação Favorita ♣</h2>
    <br>
    <i class=title> Make good art - Neil Gaiman (2012)</i>

    <div class="text">
      <p> A vida as vezes é dura, e quando as coisas ficam difíceis, faça boa arte.
        <br>
        (...)
        <br>
        O marido fugiu com uma política(o)? Faça boa arte.
        <br>
        Perna esmagada e depois devorada por uma jibóia mutante? Faça boa arte.
        <br>
        IR te rastreando? Faça boa arte.
        <br>
        Faça-a nos dias bons também.
        <br>
        Foque nas coisas que só vocês podem fazer.
      </p>
    </div>
  </div>
</template>

<style scoped>
.quote {
  margin: 0;
  padding: 150px 100px 0;
  transition: 1s;
  display: flex;

  place-content: center;
  width: 1950px;
  padding-top: 5%;

  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
}

h2 {
  font-size: 40px;
  color: #918f4c;
  transition: 0.2s;
  text-shadow: 1px 1px 0 #262626, 2px 2px 0 #262626, 3px 3px 0 #262626,
    4px 4px 0 #262626, 5px 5px 0 #262626, 1px 1px 0 #262626, 6px 20px 20px rgba(0, 0, 0, 1),
    -1px -1px 0 #fff;
}

i {
  color: #918f4c;
  opacity: 0.6;
  line-height: 40px;
  font-size: 20px;
  padding-top: 5%;
  display: block;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.text {
  color: #ffffff;
  opacity: 0.6;
  line-height: 40px;
  width: 100vw;
  padding: 100px 70px;
  margin-top: 15px;
  transition: 1s;
  display: flex;
  justify-content: center;
  align-items: center;
}

p {
  font-size: 20px;
  color: #ffffff;
}
</style>
