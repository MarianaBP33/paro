<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-back-button default-href="/HomePage"></ion-back-button>
            </ion-buttons>
            <ion-title>Pagar Puntos</ion-title>
            <ion-buttons slot="end">
                <ion-menu-button :auto-hide="false">
                </ion-menu-button>
            </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content>

        <div class="ion-text-center">
              <ion-card>
                <ion-card-content >
                  100
                  <ion-icon :icon="star"></ion-icon>
                </ion-card-content>
              </ion-card>

    <p>40 MXN </p>

              
            </div>

        <div>
            <p>Metodos de pago: </p>
        </div>
        <div>
              <ion-card>
              
                <ion-card-content >
                    <ion-card-subtitle>OXXO</ion-card-subtitle>
                    Numero de operacion: 0941526738914
                </ion-card-content>
              </ion-card>
            </div>

            <div>
              <ion-card>
              
                <ion-card-content >
                    <ion-card-subtitle>Tarjeta</ion-card-subtitle>
                    <ion-item>
    <ion-input placeholder="Titular de tarjeta"></ion-input>
  </ion-item>
  <ion-item>
    <ion-input placeholder="Numero de tarjeta"></ion-input>
  </ion-item>

  <ion-row>
<ion-col>
    <ion-item>
    <ion-input placeholder="Expiración"></ion-input>
  </ion-item>
</ion-col>
<ion-col>
    <ion-item>
    <ion-input placeholder="CVV"></ion-input>
  </ion-item>
</ion-col>
  </ion-row>
                </ion-card-content>
              </ion-card>
            </div>


  <div>
             
              <div class="ion-text-end">
                <ion-button href="/PagarPuntos" >Pagar</ion-button>
              </div>
          
 </div>


      </ion-content>
    </ion-page>
</template>
  
<script lang="ts">
    import { IonBackButton, IonPage, IonButtons, IonHeader, IonToolbar, IonTitle, IonContent, IonMenuButton, IonIcon} from '@ionic/vue';
    import { defineComponent } from 'vue';
    import { personCircle,star } from 'ionicons/icons';

  export default defineComponent({
    name: 'PedirParo',
    components: { IonBackButton, IonButtons, IonPage, IonHeader, IonTitle, IonContent, IonToolbar, IonMenuButton, IonIcon },
    setup() {
      return {  personCircle,star };
    },
  });

</script>

<style scoped>

</style>