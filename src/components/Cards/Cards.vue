<script>
export default {
  name: "Cards",
  props:['array'],
  data(){ 
    return {
      skills: this.array
    }
  }
}
</script>



<template>
  <div class="Card w-100 d-flex justify-content-between px-3 py-3 mb-4 border border-1">
    <div class="imgContainer">
      <slot name="img"></slot>
    </div>
    <div class="w-100 d-flex flex-column justify-content-evenly pe-3 ps-5">
      <div class="">
        <div class="fs-2 fw-bold d-block d-lg-inline">
          <slot name="titulo"></slot>
        </div>
        <span v-for="(value, index) in skills" :key="index" class="border border-1 border-dark mx-1 px-1 rounded-4">{{value}}</span>
      </div>
      <div class="d-none d-lg-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center">
          <img src="../../assets/oficina.png" class="IconsCards me-1" alt="Icono de empresa">
          <slot name="empresa"></slot>
        </div>
        <div class="d-flex align-items-center">
          <img src="../../assets/ubicacion.png" class="IconsCards me-1" alt="Icono de ubicacion">
          <slot name="ubicacion"></slot>
        </div>
        <div class="d-flex align-items-center">
          <img src="../../assets/billete.png" class="IconsCards me-1" alt="Icono de ubicacion">
          <slot name="salario"></slot>
        </div>
        <div class="d-flex align-items-center">
          <img src="../../assets/personas.png" class="IconsCards me-1" alt="Icono de ubicacion">
          <slot name="vacantes"></slot>
        </div>
        <div class="d-flex align-items-center">
          <img src="../../assets/calendario.png" class="IconsCards me-1" alt="Icono de ubicacion">
          <slot name="fecha"></slot>
        </div>
      </div>
    </div>
  </div>
</template>


<style>
.Card{
  width: 100%;
  height: 115px;
  background-color: #fff;
  box-shadow: none;
  cursor: pointer;
  transition: box-shadow 0.3s;
}
.Card:hover{
  box-shadow: 0px 5px 12px #bdbdbd;
}
.imgContainer{
  width: 120px;
  height: 100%;
}
.imgCard{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.IconsCards{
  width: auto;
  height: 20px;
}
</style>