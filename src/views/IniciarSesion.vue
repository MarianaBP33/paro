<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title></ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true" text-center>
            <ion-header collapse="condense">
              <ion-toolbar>
                <ion-title class="ion-title">¡Bienvenido de Vuelta!</ion-title>
              </ion-toolbar>
            </ion-header>
          <ion-row>
            <ion-col >
                <p align="center"><ion-img style="width:30%" src="../../assets/logoParo.png" alt="logo"></ion-img></p>
            </ion-col>
            </ion-row><br />
          <ion-row>
            <ion-col>
                <ion-list>
                    <ion-item>
                        <ion-label>Nombre: </ion-label>
                        <ion-input placeholder="Nombre Completo"></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label>Contraseña: </ion-label>
                        <ion-input placeholder="Al menos 8 caracteres"  type="password"></ion-input>
                    </ion-item><br /><br />
                </ion-list>
                <ion-row>
                    <ion-col align="center">
                        <span><a href="/Registrar"> ¿Olvidatse tu contraseña?</a></span>
                    </ion-col>
                </ion-row>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              <div class="ion-text-center">
                <ion-button href="/HomePage" >Ingresar</ion-button>
              </div><br /><br />
            </ion-col>
        </ion-row>
        <ion-row>
          <ion-col class="ion-text-center" >
            <span style="mt-5">¿No tienes cuenta?<a href="/Registrar"> Registrate</a></span>
          </ion-col>
        </ion-row>
          
      </ion-content>
    </ion-page>
</template>
  
<script lang="ts">
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonItem, IonLabel, IonList } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'IniciarSesion',
  });

</script>
<style scoped>
  .ion-title {
    position: absolute;
    font-size: 18px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
  }
</style>
