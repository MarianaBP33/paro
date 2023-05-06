<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-back-button default-href="/HomePage"></ion-back-button>
            </ion-buttons>
            <ion-title>Hacer un Paro</ion-title>
            <ion-buttons slot="end">
                <ion-menu-button :auto-hide="false"></ion-menu-button>
            </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-row>
          <ion-col class="ion-text"  style="padding-left: 1rem; padding-right:1rem">
            <p>Paro en proceso: </p>
          </ion-col>
        </ion-row>

        <ion-row>
            <ion-col >
                <ion-card>
                    <ion-card-header>
                        <ion-card-subtitle>Jose Perez</ion-card-subtitle>
                        <ion-card-text>Olvide mi cargador de iphone en el A109, estoy en el polideportivo.</ion-card-text>
        <ion-row>
          <div>
              <ion-card>
                <ion-card-content >
                  35
                  <ion-icon :icon="star"></ion-icon>
                </ion-card-content>
              </ion-card>
            </div>
         
            <ion-col>
              <div class="ion-text-end">
                <ion-button href="/ParoFinalizado" >Finalizar</ion-button>
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
    import { IonBackButton, IonPage, IonButtons, IonHeader, IonToolbar, IonTitle, IonContent, IonMenuButton, IonIcon} from '@ionic/vue';
    import { defineComponent } from 'vue';
    import { personCircle,star } from 'ionicons/icons';

  export default defineComponent({
    name: 'ParoProceso',
    components: { IonBackButton, IonButtons, IonPage, IonHeader, IonTitle, IonContent, IonToolbar, IonMenuButton, IonIcon },
    setup() {
      return {  personCircle,star };
    },
  });

</script>

<style scoped>

</style>