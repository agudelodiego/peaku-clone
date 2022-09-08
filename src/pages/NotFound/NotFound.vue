<script>
import Animacion from "../../components/Animacion/Animacion.vue";
export default {
  name: "NotFound",
  components: {
    Animacion
  }
}
</script>


<template>
  <div class="Notfound">
    <h1 class="text-center mt-5">Esta paginia se encuentra en construccion</h1>
    <Animacion />
  </div>
</template>



<style scoped>
.Notfound {
  width: 100vw;
  height: 100vh;
  padding: 85px 0 0 130px;
}
</style>