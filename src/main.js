import { createApp } from "vue";
import "./style.css";
import {createRouter,createWebHashHistory,createWebHistory} from "vue-router";
import App from "./App.vue";
import * as bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

//*--------------------Paginas de la spa---------------
import Empleos from "./pages/Empleos/Empleos.vue";
import NotFound from "./pages/NotFound/NotFound.vue";
//*--------------------------------------------------



//*------------------------Rutas---------------------
const routes = [
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
  {path: "/empleos", component: Empleos},
]
//*--------------------------------------------------



//*-------------------Creacion del router-------------
const router = createRouter({
  history: createWebHistory(),
  routes: routes
})
//*---------------------------------------------------


//*----------------Objeto aplicacion de vue------------
const app = createApp(App);

// Le indicamos a vue que utilice el router
app.use(router);

// Montamos la aplicacion
app.mount("#app");
//*----------------------------------------------------

