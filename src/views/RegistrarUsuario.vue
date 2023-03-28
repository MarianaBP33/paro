<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title></ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-header collapse="condense" >
          <ion-toolbar>
            <ion-title class="ion-text-center" size="large">¡Bienvenido!</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-row>
          <ion-col class="ion-text-center">
            <p>¿Listo para hacer tu vida más fácil?</p>
            <p>¡Regístrate!</p>
          </ion-col><br />
        </ion-row>
          <ion-row>
            <ion-col>
          <ion-list>
            <ion-item>
              <ion-label>Nombre: </ion-label>
              <ion-input placeholder="Nombre Completo"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label>Correo: </ion-label>
              <ion-input placeholder="ejemplo@anahuac.mx"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label>Contraseña: </ion-label>
              <ion-input placeholder="Al menos 8 caracteres"  type="password"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label>Confirmar Contraseña: </ion-label>
              <ion-input  type="password"></ion-input>
            </ion-item>
          </ion-list><br />
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              <div class="ion-text-center">
                <ion-button href="/Registrar" >Registrar</ion-button>
              </div><br /><br />
            </ion-col>
        </ion-row>
        <ion-row>
          <ion-col class="ion-text-center">
            <span>¿Ya tienes tu cuenta?<a href="/IniciarSesion"> Ingresa</a></span>
          </ion-col>
        </ion-row>
          
      </ion-content>
    </ion-page>
</template>
  
<script lang="ts">
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonItem, IonLabel, IonList } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'RegistrarUsuario',
  });

</script>

<style scoped>
  .ion-title {
    position: absolute;
    font-size: large;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
  }
</style>