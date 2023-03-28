<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title></ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-grid :fixed="true">
        <ion-row>
          <ion-col align="center">
            <div class="ion-text-center">
              <p align="center"><ion-img style="width:70%" src="../../assets/logoParo.png" alt="logo"></ion-img></p>
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
            <div class="ion-text-center">
              <ion-button href="/Registrar" >Comenzar</ion-button>
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
    </ion-content>  
  </ion-page>
</template>

<script setup lang="ts">
  import { IonImg,  IonButton, IonCol, IonGrid, IonRow, IonPage  } from '@ionic/vue';
</script>
