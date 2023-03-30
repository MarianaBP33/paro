<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-back-button default-href="/HomePage"></ion-back-button>
            </ion-buttons>
            <ion-title>Comprar Puntos</ion-title>
            <ion-buttons slot="end">
                <ion-menu-button :auto-hide="false"></ion-menu-button>
            </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-row>
          <ion-col class="ion-text">
            <p>Seleciona el paquete de PUNTOS que deseas. </p>
          </ion-col>
        </ion-row>

<ion-row>
  <ion-col>
  <div class="ion-text-center" >
    <ion-button fill="outline" expand="block">100 
                  <ion-icon :icon="star"></ion-icon></ion-button>
            
            <p>40 MXN </p>
         
            </div>
            
          </ion-col>
</ion-row>

<ion-row>
  <ion-col>
  <div class="ion-text-center">
    <ion-button fill="outline" expand="block">200
                  <ion-icon :icon="star"></ion-icon></ion-button>
              <p>60 MXN </p>
            </div>
          </ion-col>
          
</ion-row>

<ion-row>
  <ion-col>
  <div class="ion-text-center">
    <ion-button fill="outline" expand="block">500 
                  <ion-icon :icon="star"></ion-icon></ion-button>
              <p>90 MXN </p>
            </div>
          </ion-col>
          
</ion-row>
<ion-row>
  <ion-col>
  <div class="ion-text-center">
    <ion-button fill="outline" expand="block">1000
                  <ion-icon :icon="star"></ion-icon></ion-button>
              <p>150 MXN </p>
            </div>
          </ion-col>
          
</ion-row>

            <ion-col>
              <div class="ion-text-end">
                <ion-button href="/PagarPuntos" >Pagar</ion-button>
              </div>
            </ion-col>

      </ion-content>
    </ion-page>
</template>
  
<script lang="ts">
    import { IonBackButton, IonPage, IonButtons, IonHeader, IonToolbar, IonTitle, IonContent, IonMenuButton,  IonIcon} from '@ionic/vue';
    import { defineComponent } from 'vue';
    import { personCircle,star } from 'ionicons/icons';
  export default defineComponent({
    name: 'ComprarPuntos',
    components: { IonBackButton, IonButtons, IonPage, IonHeader, IonTitle, IonContent, IonToolbar, IonMenuButton,  IonIcon },
    setup() {
      return {  personCircle,star };
    },
  });

</script>

<style scoped>

</style>