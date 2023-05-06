<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-back-button default-href="/HomePage"></ion-back-button>
            </ion-buttons>
            <ion-title>Finalizado</ion-title>
            <ion-buttons slot="end">
                <ion-menu-button :auto-hide="false"></ion-menu-button>
            </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-row>
          <ion-col class="ion-text"  style="padding-left: 1rem; padding-right:1rem">
            <p>¡Gracias por Ayudar! </p>
          </ion-col>
        </ion-row>

        <ion-row>
            <ion-col >
                <ion-card>
                    <ion-card-header>
                        <ion-card-title>Has Ganado:</ion-card-title>
        <ion-row>
          <div>
              <ion-card>
                <ion-card-content style="font-size: 40px;">
                  35
                  <ion-icon :icon="star" size="800px"></ion-icon>
                </ion-card-content>
              </ion-card>
            </div>
        </ion-row>
        <ion-row>
          <ion-col class="ion-text-center" >
            <span style="mt-5"><a href="/HacerParo"> Hacer más Paros</a></span>
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
    import { IonBackButton, IonPage, IonButtons, IonHeader, IonToolbar, IonTitle, IonContent, IonMenuButton, IonIcon} from '@ionic/vue';
    import { defineComponent } from 'vue';
    import { personCircle,star } from 'ionicons/icons';

  export default defineComponent({
    name: 'ParoFinalizado',
    components: { IonBackButton, IonButtons, IonPage, IonHeader, IonTitle, IonContent, IonToolbar, IonMenuButton, IonIcon },
    setup() {
      return {  personCircle,star };
    },
  });

</script>

<style scoped>

</style>