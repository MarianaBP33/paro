<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>main</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
  
  <ion-grid :fixed="true">
  <ion-row>
    <ion-col>
      <div class="ion-justify-content-center">
        <ion-img style="width:70%" src="../../assets/icon/logo.png" alt="logo"></ion-img>
      </div>
    </ion-col>
  </ion-row>

  <ion-row>
    <ion-col>
      <div class="ion-text-center">
        <h1>PARO</h1>
        Sal de apuros con un paro
      </div>
    </ion-col>
  </ion-row>

  <ion-row>
    <ion-col>
      <div class="ion-justify-content-center">
        <ion-button router-link="/Registrar" >Comenzar</ion-button>
      </div>
    </ion-col>
  </ion-row>

  <ion-row>
    <ion-col>
      <div class="ion-text-center">
        <p class="fs-6" >Version 1.0</p>
      </div>
    </ion-col>
  </ion-row>
  </ion-grid>
   

  <ExploreContainer name="Tab 1 page" />
    </ion-content>  
  </ion-page>
</template>

<script lang="ts">
  import { IonImg,  IonButton } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'Tab1Page',
    components: { IonImg, IonButton },
  });
</script>
