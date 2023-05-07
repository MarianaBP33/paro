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
          <ion-col class="ion-text" style="padding-left: 1rem; padding-right:1rem">
            <p>Paros disponibles: </p>
          </ion-col>
        </ion-row>

        <ion-item v-for="(paro,index) in paros" :key="index">
          <ion-row>
            <ion-col>
              <ion-card>
                <ion-card-header>                    
                  <ion-card-subtitle>{{ paro.ownerName }}</ion-card-subtitle>
                    <ion-card-text>{{paro.description}}</ion-card-text>
                </ion-card-header>
                <div>
                  <ion-card>
                    <ion-card-content style="font-size:large">{{ paro.points }}
                      <ion-icon :icon="star"></ion-icon>
                          <ion-button href="/ParoProceso" style="padding-left:5rem" size="30px">Aceptar</ion-button>
                    </ion-card-content>
                  </ion-card>
                </div>
              </ion-card>
            </ion-col>
          </ion-row> 
        </ion-item>    
      </ion-content>
    </ion-page>
</template>
  
<script lang="ts">
    import { IonBackButton, IonPage, IonButtons, IonHeader, IonToolbar, IonTitle, IonContent, IonMenuButton, IonIcon} from '@ionic/vue';
    import { defineComponent } from 'vue';
    import { personCircle,star } from 'ionicons/icons';
    import paroApi from '@/api/paroApi.';

  export default defineComponent({
    name: 'HacerParo',
    components: { IonBackButton, IonButtons, IonPage, IonHeader, IonTitle, IonContent, IonToolbar, IonMenuButton, IonIcon },
    setup() {
      return {  personCircle,star };
    },
    data:() =>({
      paros:[] as any[]
    }),

    created(){
      this.getParos()
    },

    methods:{
      async getParos(){
        const res = await paroApi.get("")
        this.paros = res.data
        console.log(res.data)
      }
    }
  });

</script>

<style scoped>

</style>