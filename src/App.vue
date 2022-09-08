<script>
import Navbar from "./components/Navbar/Navbar.vue";
import Asidebar from "./components/Asidebar/Asidebar.vue";

export default {
  name: "App",
  components:{
    Navbar,
    Asidebar
  },
  data(){
    return {
      mensaje: "Hola vite, este es mi primer programa"
    }
  }
}
</script>




<template>
  <div id="SPA">
    <Navbar class="Nav" />
    <Asidebar class="Aside" />
    <router-view class="dinamic"></router-view>
  </div>
</template>



<style scoped>
  #SPA{
    display: grid;
    width: 100%;
    display: grid;
    grid-template-areas:
    'navbar  navbar  navbar  navbar  navbar'
    'asidebar conten conten conten conten'
    'asidebar conten conten conten conten'
    'asidebar footr  footr  footr  fontr';
  }
  .Nav{
    grid-area: navbar;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 100;
  }
  .Aside{
    grid-area: asidebar;
    position: fixed;
    left: 0;
    margin-top: 85px;
    background-color: #fff;
    z-index: 20;
  }
  .dinamic{
    grid-area: conten;
  }
</style>