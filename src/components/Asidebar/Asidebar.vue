<script>
export default {
  name: "Asidebar",
  data(){
    return {
      open: true
    }
  },
  methods: {
    toggleAside(){
      this.open = !this.open;
    }
  }
}
</script>


<template>
  <nav class="d-inline-flex flex-column justifiy-content-start aside px-3 border-end" :class="open?'active':''">
    <button class="border border-0 btn" @click="toggleAside()" :class="open?'active':''">
      <img src="../../assets/derecha.png" class="btn-img" alt="Icono de flecha">
    </button>
    <router-link to="/empleos" class="decoration text-dark py-2 my-1 px-2 d-flex align-items-center" :class="open?'active':''">
      <img src="../../assets/portafolio.png" alt="Icono de Empleos" class="asideIcon">
      <span class="text-center" :class="open?'active':''">Empleos</span>
    </router-link>
    <router-link to="/postulaciones" class="decoration text-dark py-2 my-1 px-2 d-flex align-items-center" :class="open?'active':''">
      <img src="../../assets/propuesta.png" alt="Icono de Empleos" class="asideIcon">
      <span class="text-center" :class="open?'active':''">Postulaciones</span>
    </router-link>
    <router-link to="/cursos" class="decoration text-dark py-2 my-1 px-2 d-flex align-items-center" :class="open?'active':''">
      <img src="../../assets/controlar.png" alt="Icono de Empleos" class="asideIcon">
      <span class="text-center" :class="open?'active':''">Cursos y retos</span>
    </router-link>
    <router-link to="/bootcamp" class="decoration text-dark py-2 my-1 px-2 d-flex align-items-center" :class="open?'active':''">
      <img src="../../assets/codigo.png" alt="Icono de Empleos" class="asideIcon">
      <span class="text-center" :class="open?'active':''">Bootcamp</span>
    </router-link>
    <router-link to="/premios" class="decoration text-dark py-2 my-1 px-2 d-flex align-items-center" :class="open?'active':''">
      <img src="../../assets/diamante.png" alt="Icono de Empleos" class="asideIcon">
      <span class="text-center" :class="open?'active':''">Premios</span>
    </router-link>
    <router-link to="/cv" class="decoration text-dark py-2 my-1 px-2 d-flex align-items-center" :class="open?'active':''">
      <img src="../../assets/curriculum-vitae-y-cv.png" alt="Icono de Empleos" class="asideIcon">
      <span class="text-center" :class="open?'active':''">CV</span>
    </router-link>
  </nav>  
</template>


<style scoped>
  .asideIcon{
    width: 30px;
    height: auto;
  }
  .decoration{
    text-decoration: none;
  }
  .aside{
    width: 220px;
    height: 100%;
    position: relative;
    transition: width 0.4s ease;
  }
  .btn{
    position: absolute;
    bottom: 200px;
    right: -24px;
  }
  .btn-img{
    width: 30px;
    height: auto;
  }
  nav.active{
    width: 130px;
  }
  a.active{
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  span{
    margin-left: 20px;
  }
  span.active{
    margin: 0;
    padding: 0;
  }
  a.router-link-active{
    background-color: #b3e5fc;
    border-radius: 5px;
  }
</style>