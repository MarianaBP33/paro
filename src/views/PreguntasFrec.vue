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


                <h6>¿Puedo pagar con tarjeta? </h6>
                <p>Si, contamos con método de pago con tarjeta. </p>
                <br>

                <h6>¿Tienen algun numero de servicio?  </h6>
                <p>No contamos con un numero al que te puedas comunicar, pero te proporcionamos el siguiente correo de atención soporteparo@gmail.com</p>
                <br>

                <h6>¿Puedo canjear codigos en otros establecimientos de Queretaro?  </h6>
                <p>Unicamente puedes cambiar tus codigos en establecimientos dentro de la universidad o en cercanías.</p>
                <br>

                <h6>¿Cuanto tiempo tardara mi paro en ser terminado?  </h6>
                <p>Eso depende de la persona que realizará el paro para ti.</p>
                <br>

                <h6>¿Cuanto tengo que ingresar para pedir mi primer paro?  </h6>
                <p>Contamos con una variedad de paquetes que puedes elejir antes de solicitar tu primer paro.  </p>
                <br>

                <h6>¿Todos los productos del establecimiento al que quiero canjera mis puntos, son validos?  </h6>
                <p>Solo los productos que estan disponible en nuestra App son validos para el canje de codigos. </p>
                <br>

        

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