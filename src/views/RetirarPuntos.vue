<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-back-button default-href="/HomePage"></ion-back-button>
            </ion-buttons>
            <ion-title>Retirar Puntos</ion-title>
            <ion-buttons slot="end">
                <ion-menu-button :auto-hide="false"></ion-menu-button>
            </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-row>
          <ion-col class="ion-text">
            <h3>Retirar </h3>
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col class="ion-text">
            <p>Agregar cuenta </p>
          </ion-col>

        </ion-row>


      <ion-row>
        <ion-col class="ion-text">
        <ion-item>
    <ion-input placeholder="Numero de tarjeta/cuenta"></ion-input>
  </ion-item>
</ion-col>
        </ion-row>

        <ion-row>
             <ion-col class="ion-text">
      
              </ion-col>
              <p>Puntos: </p>
          <ion-item>
             <ion-input label="Puntos a pagar: " ></ion-input>
          </ion-item>
        
    </ion-row>

            <p>La cantidad minima para retirar es de 100 puntos.</p>
  
  

    <ion-row>
            <ion-col >
                <ion-card>
                    <ion-card-header>
                        <ion-card-subtitle>¡Recuerda!</ion-card-subtitle>
                        <ion-card-text>Por cada 100 puntos te regresamos 30 MXN.</ion-card-text>
                    </ion-card-header>
                </ion-card>
            </ion-col>
        </ion-row>

        <ion-col>
              <div class="ion-text-end">
                <ion-button href="/RetirarPuntos" >Retirar</ion-button>
              </div>
            </ion-col>




      </ion-content>
    </ion-page>
</template>
  
<script lang="ts">
    import { IonBackButton, IonPage, IonButtons, IonHeader, IonToolbar, IonTitle, IonContent, IonMenuButton} from '@ionic/vue';
    import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'RetirarPuntos',
    components: { IonBackButton, IonButtons, IonPage, IonHeader, IonTitle, IonContent, IonToolbar, IonMenuButton },

  });

</script>

<style scoped>

</style>