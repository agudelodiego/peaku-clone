
<script>
export default {
  name: "Navbar",
  methods: {
    esconder(){
      this.$refs.close.click();
    }
  }
}
</script>



<template>
  <header class="shadow">
    <nav class="navbar navbar-expand-lg bg-white">
      <div class="container-fluid d-flex justify-content-between alig-items-center
      ">
        <button ref="close" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <router-link class="navbar-brand" to="/">
          <img src="https://peaku.co/img/logo-blue.png?v=2" alt="Logo de la compañia">
        </router-link>
        <router-link to="/" class="px-3 order-3">
          <button class="userIcon-btn">
            <img src="../../assets/account.png" alt="User icon" class="userIcon">
          </button>
        </router-link>
        <div class="collapse order-4 order-lg-0 navbar-collapse w-auto justify-content-sm-end" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link class="nav-link text-center fs-5" to="/" @click="esconder()">Inicio</router-link>
            <router-link class="nav-link text-center fs-5" to="/empleos" @click="esconder()">Empleos</router-link>
            <router-link class="nav-link text-center fs-5" to="/cursos" @click="esconder()">Cursos y retos</router-link>
            <router-link class="nav-link text-center fs-5" to="/preguntas" @click="esconder()">Preguntas</router-link>
            <router-link class="nav-link text-center fs-5" to="/profesores" @click="esconder()">Profesores</router-link>
            <router-link class="nav-link text-center fs-5" to="/empresas" @click="esconder()">Para empresas</router-link>
          </div>
        </div>
      </div>
    </nav>
  </header>  
</template>




<style scoped>
  .userIcon-btn{
    border: none;
    background-color: transparent;
  }
  .userIcon{
  width: 40px;
  height: auto;
  }
  a.router-link-active{
    color: black;
  }
</style>