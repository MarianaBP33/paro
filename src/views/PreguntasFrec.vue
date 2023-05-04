<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-back-button default-href="/HomePage"></ion-back-button>
            </ion-buttons>
            <ion-title>Preguntas Frecuentes</ion-title>
            <ion-buttons slot="end">
                <ion-menu-button :auto-hide="false"></ion-menu-button>
            </ion-buttons>
        </ion-toolbar>
      </ion-header>
    <ion-content>
        <ion-row>
            <ion-col >


               <h5>¿Pregunta? </h5>
                <p>Respuesta </p>

                <h5>¿Pregunta? </h5>
                <p>Respuesta </p>

                <h5>¿Pregunta? </h5>
                <p>Respuesta </p>

                <h5>¿Pregunta? </h5>
                <p>Respuesta </p>

                <h5>¿Pregunta? </h5>
                <p>Respuesta </p>

                 <h5>¿Pregunta? </h5>
                <p>Respuesta </p>


        

            </ion-col>
        </ion-row>
      </ion-content>
    </ion-page>
</template>
  



<script lang="ts">
    import { IonBackButton, IonPage, IonButtons, IonHeader, IonToolbar, IonTitle, IonContent, IonMenuButton} from '@ionic/vue';
    import { defineComponent } from 'vue';
    

  export default defineComponent({
    name: 'PreguntasFrec',
    components: { IonBackButton, IonButtons, IonPage, IonHeader, IonTitle, IonContent, IonToolbar, IonMenuButton},
    
  });

</script>

<style scoped>

</style>