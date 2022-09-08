<template>
  <div class="w-100 d-flex justify-content-center py-5">
    <img class="Engranaje-1" src="../../assets/configuraciones.png" alt="Imagen animada de un engranaje">
    <img class="Engranaje-2" src="../../assets/configuraciones.png" alt="Imagen animada de un engranaje">
  </div>
</template>


<script>
export default {
  name:"Animacion"
}
</script>


<style scoped>
  @keyframes horario{
    from{
      transform: rotate(0deg);
    }
    to{
      transform: rotate(360deg);
    }
  }
  @keyframes antihorario{
    from{
      transform: rotate(360deg);
    }
    to{
      transform: rotate(0deg);
    }
  }
  .Engranaje-1{
  width: 200px;
  height: auto;
  animation: horario 10s linear infinite forwards;
}
.Engranaje-2{
  position: relative;
  top: 100px;
  width: 140px;
  height: 140px;
  animation: antihorario 10s linear infinite forwards;
}
</style>