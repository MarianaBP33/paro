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
            <p>Bubba Station </p>
          </ion-col>
        </ion-row>
  
  
  <ion-row>
    <ion-col>
    <div class="ion-text-center" >
      <ion-button href="/CodigoCanje" fill="outline" expand="block">Taro Regular
                    </ion-button>
              
              <p>230 pts </p>
          
              </div>
              
            </ion-col>
  </ion-row>
  
  
  
  <ion-row>
    <ion-col>
    <div class="ion-text-center">
      <ion-button href="/CodigoCanje" fill="outline" expand="block">Mango Match
                   </ion-button>
                <p>100 pts </p>
              </div>
            </ion-col>
            
  </ion-row>
  
  
  
  
  <ion-row>
    <ion-col>
    <div class="ion-text-center">
      <ion-button href="/CodigoCanje" fill="outline" expand="block">Obleas Amarea Cacao
                    </ion-button>
                <p>60 pts </p>
              </div>
            </ion-col>
            
  </ion-row>
  
  
  
  <ion-row>
    <ion-col>
    <div class="ion-text-center">
      <ion-button href="/CodigoCanje" fill="outline" expand="block">Cookies & Cream
                    </ion-button>
                <p>180 pts </p>
              </div>
            </ion-col>
            
  </ion-row>
  
  
  
  <ion-row>
    <ion-col>
    <div class="ion-text-center">
      <ion-button href="/CodigoCanje" fill="outline" expand="block">Tropical Berry
                    </ion-button>
                <p>200 pts </p>
              </div>
            </ion-col>
            
  </ion-row>
  
  <ion-row>
    <ion-col>
    <div class="ion-text-center">
      <ion-button href="/CodigoCanje" fill="outline" expand="block">ChocoChip
                    </ion-button>
                <p>260 pts </p>
              </div>
            </ion-col>
            
  </ion-row>
  
  <ion-row>
    <ion-col>
    <div class="ion-text-center">
      <ion-button href="/CodigoCanje" fill="outline" expand="block">Choco Menta
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
    name: 'BubbaStation',
    components: { IonBackButton, IonButtons, IonPage, IonHeader, IonTitle, IonContent, IonToolbar, IonMenuButton },
   
  });
  
  </script>
  
  <style scoped>
  
  </style>