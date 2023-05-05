<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
             <ion-buttons slot="secondary">
                <ion-button>
                    <ion-icon slot="icon-only" :icon="personCircle"></ion-icon>
                </ion-button>
            </ion-buttons>
            <ion-title>Bienvenida, Mariana</ion-title>
        </ion-toolbar>
      </ion-header>




      <ion-content>

        <ion-row>
            <ion-col >
                <ion-card>
                    <ion-card-header>
                        <ion-icon :icon="star"></ion-icon>
                        <ion-card-title>150</ion-card-title>
                        <ion-card-subtitle>Pts</ion-card-subtitle>
                    </ion-card-header>
                </ion-card>
            </ion-col>
        </ion-row>
        <ion-row>
            <ion-col>
                <div class="ion-text-center" width="50%">
                    <ion-button href="/HacerParo" expand="block" >Hacer un Paro</ion-button>
                </div><br /><br />
            </ion-col>
        </ion-row>
        <ion-row>
            <ion-col>
                <div class="ion-text-center">
                    <ion-button href="/PedirParo" expand="block">Pedir un Paro</ion-button>
                </div><br /><br />
            </ion-col>
        </ion-row>
        <ion-row>
            <ion-col>
                <div class="ion-text-center">
                    <ion-button href="/ComprarPuntos" expand="block">Comprar Puntos</ion-button>
                </div><br /><br />
            </ion-col>
        </ion-row>
        <ion-row>
            <ion-col>
                <div class="ion-text-center">
                    <ion-button href="/CanjearPuntos" expand="block">Canjear Puntos</ion-button>
                </div><br /><br />
            </ion-col>
        </ion-row>
        <ion-row>
            <ion-col>
                <div class="ion-text-center">
                    <ion-button href="/RetirarPuntos" expand="block">Retirar Puntos</ion-button>
                </div><br /><br />
            </ion-col>
        </ion-row>
          
      </ion-content>
    </ion-page>
</template>

<script lang="ts">
    import { IonIcon, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonList, IonMenu, IonRouterOutlet,menuController } from '@ionic/vue';
    import { defineComponent } from 'vue';
    import { personCircle,star } from 'ionicons/icons';

  export default defineComponent({
    name: 'HomePage',
    components: { IonPage, IonHeader, IonIcon, IonTitle,  IonContent, IonToolbar },
    setup() {
      return {  personCircle,star };
    }

  });

</script>

<style scoped>

</style>