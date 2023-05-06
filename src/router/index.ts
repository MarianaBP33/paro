import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [

      {
        path: '/tab1',
        component: () => import('@/views/Tab1Page.vue')
      },
      {
        path: '/Registrar',
        component: () => import('@/views/RegistrarUsuario.vue')
      },
      {
        path: '/IniciarSesion',
        component: () => import('@/views/IniciarSesion.vue')
      },
      {
        path: '/HomePage',
        component: () => import('@/views/HomePage.vue')
      },
      {
        path: '/HacerParo',
        component: () => import('@/views/HacerParo.vue')
      },
      {
        path: '/PedirParo',
        component: () => import('@/views/PedirParo.vue')
      },
      {
        path: '/ComprarPuntos',
        component: () => import('@/views/ComprarPuntos.vue')
      },
      {
        path: '/RetirarPuntos',
        component: () => import('@/views/RetirarPuntos.vue')
      },
      {
        path: '/PagarPuntos',
        component: () => import('@/views/PagarPuntos.vue')
      },
      {
        path: '/CanjearPuntos',
        component: () => import('@/views/CanjearPuntos.vue')
      },
      {
        path: '/StarBucks',
        component: () => import('@/views/StarBucks.vue')
      },
      {
        path: '/ParoProceso',
        component: () => import('@/views/ParoProceso.vue')
      },
      {
        path: '/ParoFinalizado',
        component: () => import('@/views/ParoFinalizado.vue')
      }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
