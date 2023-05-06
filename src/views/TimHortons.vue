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
          <ion-col class="ion-text">
            <p>Tim Hortons </p>
          </ion-col>
        </ion-row>
  
  
  <ion-row>
    <ion-col>
    <div class="ion-text-center" >
      <ion-button href="/CodigoCanje" fill="outline" expand="block">Dark Roast
                    </ion-button>
              
              <p>230 pts </p>
          
              </div>
              
            </ion-col>
  </ion-row>
  
  
  
  <ion-row>
    <ion-col>
    <div class="ion-text-center">
      <ion-button href="/CodigoCanje" fill="outline" expand="block">French Vainilla
                   </ion-button>
                <p>100 pts </p>
              </div>
            </ion-col>
            
  </ion-row>
  
  
  
  
  <ion-row>
    <ion-col>
    <div class="ion-text-center">
      <ion-button href="/CodigoCanje" fill="outline" expand="block">Cappuccino
                    </ion-button>
                <p>60 pts </p>
              </div>
            </ion-col>
            
  </ion-row>
  
  
  
  <ion-row>
    <ion-col>
    <div class="ion-text-center">
      <ion-button href="/CodigoCanje" fill="outline" expand="block">Chai Latte
                    </ion-button>
                <p>180 pts </p>
              </div>
            </ion-col>
            
  </ion-row>
  
  
  
  <ion-row>
    <ion-col>
    <div class="ion-text-center">
      <ion-button href="/CodigoCanje" fill="outline" expand="block">Iced Capp
                    </ion-button>
                <p>200 pts </p>
              </div>
            </ion-col>
            
  </ion-row>
  
  <ion-row>
    <ion-col>
    <div class="ion-text-center">
      <ion-button href="/CodigoCanje" fill="outline" expand="block">Fruit Cooler
                    </ion-button>
                <p>260 pts </p>
              </div>
            </ion-col>
            
  </ion-row>
  
  <ion-row>
    <ion-col>
    <div class="ion-text-center">
      <ion-button href="/CodigoCanje" fill="outline" expand="block">Frozen Cold Chocolate
                    </ion-button>
                <p>80 pts </p>
              </div>
            </ion-col>
            
  </ion-row>
  
      </ion-content>
    </ion-page>
  </template>
  
  
  
  
  <script lang="ts">
    import { IonBackButton, IonPage, IonButtons, IonHeader, IonToolbar, IonTitle, IonContent, IonMenuButton} from '@ionic/vue';
    import { defineComponent } from 'vue';
    
  
  export default defineComponent({
    name: 'TimHortons',
    components: { IonBackButton, IonButtons, IonPage, IonHeader, IonTitle, IonContent, IonToolbar, IonMenuButton },
   
  });
  
  </script>
  
  <style scoped>
  
  </style>