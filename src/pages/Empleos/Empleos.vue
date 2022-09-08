<script>
import Busqueda from "../../components/Busqueda/Busqueda.vue";
import Cards from "../../components/Cards/Cards.vue";

export default {
  name:"Empleos",
  components: {
    Busqueda,
    Cards
  },
  data(){
    return {

      // La informacion dentro de este array, normalmente vendria de un API
      datosAPI: [
        {
          image: "https://cdn.pixabay.com/photo/2016/11/19/14/16/man-1839500_960_720.jpg",
          titulo: "Desarrollador react js",
          empresa: "Facebook",
          ubicacion: "Remoto",
          salario: "10k USD",
          vacantes: "7",
          fecha: "2 horas antes",
          tecnologias: ['React','Node','Python','Ingles']
        },
        
        {
          image: "https://cdn.pixabay.com/photo/2015/09/09/19/56/office-932926_960_720.jpg",
          titulo: "Desarrollador angular js",
          empresa: "Google",
          ubicacion: "Remoto",
          salario: "12k USD",
          vacantes: "14",
          fecha: "22 horas antes",
          tecnologias: ['Angular','Java','SQL','Ingles']
        },
        {
          image: "https://cdn.pixabay.com/photo/2016/11/30/20/58/programming-1873854_960_720.png",
          titulo: "Desarrollador backen",
          empresa: "Emtelco",
          ubicacion: "Cali",
          salario: "2M COP",
          vacantes: "1",
          fecha: "5 dias antes",
          tecnologias: ['Node','Java','SQL','Linux']
        },
        {
          image: "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_960_720.jpg",
          titulo: "Desarrollador fullstack",
          empresa: "Bancolombia",
          ubicacion: "Medellin",
          salario: "2M COP",
          vacantes: "3",
          fecha: "6 dias antes",
          tecnologias: ['Node','Vue','Express','PostgreSQL']
        }, 
        {
          image: "https://cdn.pixabay.com/photo/2015/03/29/08/55/entrepreneur-696976_960_720.png",
          titulo: "Desarrollador Vue js",
          empresa: "PeakU",
          ubicacion: "Remoto",
          salario: "3M COP",
          vacantes: "1",
          fecha: "6 dias antes",
          tecnologias: ['Python','Django','PostgreSQL','Vue']
        },
        {
          image: "https://cdn.pixabay.com/photo/2015/01/08/18/24/programming-593312_960_720.jpg",
          titulo: "Arquitecto cloud",
          empresa: "Amazon",
          ubicacion: "Remoto",
          salario: "15k USD",
          vacantes: "5",
          fecha: "10 dias antes",
          tecnologias: ['AWS','Ingles','SCRUM','VEM']
        },
        {
          image: "https://cdn.pixabay.com/photo/2017/03/04/12/15/programming-2115930_960_720.jpg",
          titulo: "Arquitecto fullstack",
          empresa: "Google",
          ubicacion: "Remoto",
          salario: "12k USD",
          vacantes: "2",
          fecha: "10 dias antes",
          tecnologias: ['Angular','Ingles','Node','Python']
        },
        {
          image: "https://cdn.pixabay.com/photo/2016/11/19/14/16/man-1839500_960_720.jpg",
          titulo: "Desarrollador react js",
          empresa: "Facebook",
          ubicacion: "Remoto",
          salario: "10k USD",
          vacantes: "7",
          fecha: "2 horas antes",
          tecnologias: ['React','Node','Python','Ingles']
        },
        {
          image: "https://cdn.pixabay.com/photo/2015/09/09/19/56/office-932926_960_720.jpg",
          titulo: "Desarrollador angular js",
          empresa: "Google",
          ubicacion: "Remoto",
          salario: "12k USD",
          vacantes: "14",
          fecha: "22 horas antes",
          tecnologias: ['Angular','Java','SQL','Ingles']
        },
        {
          image: "https://cdn.pixabay.com/photo/2016/11/30/20/58/programming-1873854_960_720.png",
          titulo: "Desarrollador backen",
          empresa: "Emtelco",
          ubicacion: "Cali",
          salario: "2M COP",
          vacantes: "1",
          fecha: "5 dias antes",
          tecnologias: ['Node','Java','SQL','Linux']
        },
        {
          image: "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_960_720.jpg",
          titulo: "Desarrollador fullstack",
          empresa: "Bancolombia",
          ubicacion: "Medellin",
          salario: "2M COP",
          vacantes: "3",
          fecha: "6 dias antes",
          tecnologias: ['Node','Vue','Express','PostgreSQL']
        }, 
        {
          image: "https://cdn.pixabay.com/photo/2015/03/29/08/55/entrepreneur-696976_960_720.png",
          titulo: "Desarrollador Vue js",
          empresa: "PeakU",
          ubicacion: "Remoto",
          salario: "3M COP",
          vacantes: "1",
          fecha: "6 dias antes",
          tecnologias: ['Python','Django','PostgreSQL','Vue']
        },
        {
          image: "https://cdn.pixabay.com/photo/2015/01/08/18/24/programming-593312_960_720.jpg",
          titulo: "Arquitecto cloud",
          empresa: "Amazon",
          ubicacion: "Remoto",
          salario: "15k USD",
          vacantes: "5",
          fecha: "10 dias antes",
          tecnologias: ['AWS','Ingles','SCRUM','VEM']
        },
        {
          image: "https://cdn.pixabay.com/photo/2017/03/04/12/15/programming-2115930_960_720.jpg",
          titulo: "Arquitecto fullstack",
          empresa: "Google",
          ubicacion: "Remoto",
          salario: "12k USD",
          vacantes: "2",
          fecha: "10 dias antes",
          tecnologias: ['Angular','Ingles','Node','Python']
        }
      ],

      // El array ofertas se llenaria de manera dinamica
      ofertas: [],
      buscar: ""
    }
  },
  created(){
    this.ofertas = this.datosAPI
  },
  methods:{
    filtrarOfertas(){

      // Array donde iremos ingresando los elementos encontrados
      let encontrados = [];
      // Expresion regular que hara la busqueda
      let expReg = new RegExp(this.buscar,"i");

      for(let objeto of this.datosAPI){
        if(expReg.test(objeto.titulo)){
          encontrados.push(objeto);
        }
        else if(expReg.test(objeto.empresa)){
          encontrados.push(objeto);
        }
        else if(expReg.test(objeto.ubicacion)){
          encontrados.push(objeto);
        }
        else if(expReg.test(objeto.salario)){
          encontrados.push(objeto);
        }
        else{
          for(let i of objeto.tecnologias){
            if(expReg.test(i)){
              encontrados.push(objeto);
            }
          }
        }
      }
      this.ofertas = encontrados;
    }
  },
  watch:{
    buscar(){
      // Este watcher se encargara de hacer el llamado a un metodo, el cual se encargara de hacer el filtro
      this.filtrarOfertas();
    }
  }
}
</script>


<template>
  <div class="contenedor">
    <Busqueda v-model="buscar"/>
    <div v-if="ofertas.length > 0" class="paddingRes w-100 py-2">
      <Cards v-for="(oferta, index) in ofertas" :key="index" :array="oferta.tecnologias">
        <template #img>
          <img :src="oferta.image" alt="Imagen de la oferta laboral" class="imgCard">
        </template>
        <template #titulo>{{oferta.titulo}}</template>
        <template #empresa>{{oferta.empresa}}</template>
        <template #ubicacion>{{oferta.ubicacion}}</template>
        <template #salario>{{oferta.salario}}</template>
        <template #vacantes>{{oferta.vacantes}}</template>
        <template #fecha>{{oferta.fecha}}</template>
      </Cards>
    </div>
    <div v-else class="d-flex flex-column justify-content-center align-items-center">
      <h1 class="text-center mt-2">
        Sin resultados
      </h1>
      <img class="imgNotFound" src="../../assets/error.png" alt="Imagen de no enconrtrado">
    </div>
  </div>
</template>



<style scoped>
.contenedor{
  padding: 85px 0 0 130px;
  width: 100vw;
  min-height: 100vh;
  background-color: #f5f5f5;
}
.paddingRes{
  padding: 0 120px;
}
@media screen and (max-width: 1400px){
  .paddingRes{
    padding: 0 20px;
  }
}
.imgNotFound{
  width: 30%;
  height: auto;
}
</style>