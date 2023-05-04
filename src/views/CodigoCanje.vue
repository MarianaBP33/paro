<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-back-button default-href="/CanjearPuntos"></ion-back-button>
            </ion-buttons>
            <ion-title>Canjear Puntos</ion-title>
            <ion-buttons slot="end">
                <ion-menu-button :auto-hide="false"></ion-menu-button>
            </ion-buttons>
        </ion-toolbar>
      </ion-header>
    <ion-content>
        <ion-row>
            <ion-col >
                <ion-card>
                    <ion-card-header>
                        <ion-card-subtitle>237234467346242</ion-card-subtitle>
                        <ion-card-text>Lleva este codigo a tu establecimiento mas cercano para canjear por tus productos favoritos.</ion-card-text>
        <ion-row>

            <ion-col>
              <div class="ion-text-end">
                <ion-button href="/CanjearPuntos" >OK</ion-button>
              </div>
            </ion-col>
        </ion-row>
                    </ion-card-header>
                </ion-card>
            </ion-col>
        </ion-row>
      </ion-content>
    </ion-page>
</template>
  



<script lang="ts">
    import { IonBackButton, IonPage, IonButtons, IonHeader, IonToolbar, IonTitle, IonContent, IonMenuButton} from '@ionic/vue';
    import { defineComponent } from 'vue';
    

  export default defineComponent({
    name: 'CanjearPuntos',
    components: { IonBackButton, IonButtons, IonPage, IonHeader, IonTitle, IonContent, IonToolbar, IonMenuButton},
    
  });

</script>

<style scoped>

</style>