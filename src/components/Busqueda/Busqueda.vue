<script>
export default {
  name:"Busqueda",
  props:{
    modelValue: String,
  },
}
</script>



<template>
  <div class="w-auto contenedor-busqueda d-flex flex-column flex-lg-row justify-content-between align-items-center py-3">
    <div class="w-75 w-lg-50">
      <div class="input-group w-100">
        <span class="input-group-text" id="basic-addon1">
          <img class="lupaIcon" src="../../assets/lupa.png" alt="Icono de lupa">
        </span>
        <input type="text" class="form-control" placeholder="Busca por cargo, salario, ubicacion o empresa" aria-label="Username" aria-describedby="basic-addon1" :value="modelValue" @input="$emit('update:modelValue',$event.target.value)" />
      </div>
    </div>
    <div class="w-100 w-lg-50 d-flex justify-content-center justify-content-lg-end align-items-center">
      <button class="btn-filtros m-1">
        Area de trabajo
      </button>
      <button class="btn-filtros m-1">
        Cargo
      </button>
      <button class="btn-filtros m-1">
        Salario
      </button>
      <button class="btn-filtros m-1">
        Ubicacion
      </button>
    </div>
  </div>
</template>


<style scoped>
.contenedor-busqueda{
  background-image: linear-gradient(to right,#03a9f4,#0277bd);
  padding: 0 115px;
}
@media screen and (max-width: 1400px){
  .contenedor-busqueda{
    padding: 0 20px;
  }
}
.search-input{
  outline: none;
  border: none;
  padding: 5px 10px;
}
.lupaIcon{
  width: 20px;
  height: auto;
}
.btn-filtros{
  border: 2px solid #fff;
  background-color: transparent;
  border-radius: 20px;
  padding: 0 20px 0 10px;
  color: #fff;
  background: url("../../assets/desplegar.png") no-repeat 95% center;
  background-size: 13px;
  transition: color 0.4s, background-color 0.5s;
}
.btn-filtros:hover{
  color: #222;
  background-color: #fff;
}
</style>