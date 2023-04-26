<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-back-button default-href="/HomePage"></ion-back-button>
            </ion-buttons>
            <ion-title>Canjear Puntos</ion-title>
            <ion-buttons slot="end">
                <ion-menu-button :auto-hide="false"></ion-menu-button>
            </ion-buttons>
        </ion-toolbar>
      </ion-header>
    <ion-content>
        <ion-row>
          <ion-col class="ion-text">
            <p>Selecciona un establecimiento </p>
          </ion-col>
        </ion-row>

        <ion-row>
            <ion-col >
                
                    <ion-button expand="block" size= "large" color= "light" href="/StarBucks">
                    Starbucks 
                    <ion-icon slot="start" name="SB"></ion-icon>
                    </ion-button>
            </ion-col>
        </ion-row>

        <ion-row>
            <ion-col >
                
                    <ion-button expand="block" size= "large" color= "light" >
                    Sinforosa
                    <ion-icon slot="start" name="SB"></ion-icon>
                    </ion-button>
            </ion-col>
        </ion-row>

        <ion-row>
            <ion-col >
                
                    <ion-button expand="block" size= "large" color= "light" >
                    Bubba Station 
                    <ion-icon slot="start" name="SB"></ion-icon>
                    </ion-button>
            </ion-col>
        </ion-row>

        <ion-row>
            <ion-col >
                
                    <ion-button expand="full" size= "large" color= "light" >
                    Tim Hortons
                    <ion-icon slot="start" name="SB"></ion-icon>
                    </ion-button>
            </ion-col>
        </ion-row>

        <ion-row>
            <ion-col >
                
                    <ion-button expand="full" size= "large" color= "light">
                     Luka
                    <ion-icon slot="start" name="SB"></ion-icon>
                    </ion-button>
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
    name: 'CanjearPuntos',
    components: { IonBackButton, IonButtons, IonPage, IonHeader, IonTitle, IonContent, IonToolbar, IonMenuButton, IonIcon },
    setup() {
      return {  personCircle,star };
    },
  });

</script>

<style scoped>

</style>