<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-back-button default-href="/HomePage"></ion-back-button>
            </ion-buttons>
            <ion-title>Pedir un Paro</ion-title>
            <ion-buttons slot="end">
                <ion-menu-button :auto-hide="false">
                </ion-menu-button>
            </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content>

        <ion-row>
          <ion-col class="ion-text">
            <p>Descripción: </p>
          </ion-col>
        </ion-row>


   <ion-card>
    <ion-card-content>
      <ion-item>
        <ion-input placeholder="Escribe los detalles del paro"></ion-input>
      </ion-item>
    </ion-card-content>
  </ion-card>

  <div>
    <ion-row>
             <ion-col class="ion-text">
                <p>Puntos a pagar: </p>
              </ion-col>
          <ion-item>
             <ion-input label="Puntos a pagar: " ></ion-input>
          </ion-item>
    </ion-row>
    <ion-col>
              <div class="ion-text-end">
                <ion-button href="/PedirParo" >Enviar</ion-button>
              </div>
            </ion-col>
  
 </div>


      </ion-content>
    </ion-page>
</template>
  
<script lang="ts">
    import { IonBackButton, IonPage, IonButtons, IonHeader, IonToolbar, IonTitle, IonContent, IonMenuButton} from '@ionic/vue';
    import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'PedirParo',
    components: { IonBackButton, IonButtons, IonPage, IonHeader, IonTitle, IonContent, IonToolbar, IonMenuButton },

  });

</script>

<style scoped>

</style>