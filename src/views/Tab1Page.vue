<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>main</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
    <ion-item>
      <ion-label>
        <h1>PARO</h1>
        <p>Sal de apuros con un paro</p>
      </ion-label>
    </ion-item>
    <template>


  <ion-button>Default</ion-button>
  <ion-button :disabled="true">Disabled</ion-button>
</template>
    
  <template>
    <ion-img src="../../assets/logo.png" alt="logo"></ion-img>
  </template>

  <ExploreContainer name="Tab 1 page" />
    </ion-content>  
  </ion-page>
</template>

<script lang="ts">
  import { IonImg,  IonButton } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonImg, IonButton },
  });
</script>
