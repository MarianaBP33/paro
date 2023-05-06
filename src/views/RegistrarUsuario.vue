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
              <ion-input placeholder="Nombre" v-model="user.firstName"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label>Apellido: </ion-label>
              <ion-input placeholder="Apellido " v-model="user.lastName"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label>Correo: </ion-label>
              <ion-input placeholder="ejemplo@anahuac.mx" v-model="user.email"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label>No. Teléfono: </ion-label>
              <ion-input placeholder="xxx-xxx-xxxx" v-model="user.phone"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label>Contraseña: </ion-label>
              <ion-input placeholder="Al menos 8 caracteres"  type="password" v-model="user.password"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label>Confirmar Contraseña: </ion-label>
              <ion-input  type="password" v-model="passwordConfirm"></ion-input>
            </ion-item>
            <ion-toast :is-open="isOpen" @didDismiss="setOpen(false)" :message="passwordIssue" :duration="1500"></ion-toast>
          </ion-list><br />
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              <div class="ion-text-center">
                <ion-button @click="handleRegister()">Registrar</ion-button>
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
  import authApi from '@/api/authApi';
import { IonPage, IonHeader, useIonRouter, IonToolbar, IonToast, alertController, IonTitle, IonContent, IonInput, IonItem, IonLabel, IonList, IonCol, IonRow, IonButton } from '@ionic/vue';
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    name: 'RegistrarUsuario',
    components:{
      IonInput,
      IonPage, 
      IonHeader, 
      IonToolbar, 
      IonTitle, 
      IonContent, 
      IonItem, 
      IonLabel, 
      IonList, 
      IonCol,
      IonRow, 
      IonButton,
      IonToast
    },
    data:() =>({
      user:{
        firstName: "",
        lastName: "",
        email:"",
        password: "",
        phone:"",
        points:0
      },
      passwordConfirm: "",
      ionRouter: useIonRouter(),
      isOpen:false,
      passwordIssue:""
    }),

    created() {
        console.log('hello world');
    },

    setup() {
      const presentAlert = async () => {
        const alert = await alertController.create({
          header: 'Alert',
          subHeader: 'Important message',
          message: 'This is an alert!',
          buttons: ['OK'],
        });
        
        await alert.present();
      };
      const isOpenRef = ref(false);
      const setOpen = (state: boolean) => (isOpenRef.value = state);
     
      return { presentAlert,isOpenRef,setOpen };
      

    },

    methods:{

      handleRegister(){
        const passwordPattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[A-Z]).{8,}$/;

        if(this.user.email.endsWith("@anahuac.mx")){
          if(this.user.password == this.passwordConfirm){
            if(passwordPattern.test(this.user.password)){
              console.log(this.user)
              this.register()
              this.ionRouter.push('/IniciarSesion');
            }else{
              this.passwordIssue="Contraseña debe contener 8 caracteres y 1 especial(!@#$%^&*)"
              this.isOpen = true
            }
          }else{
            this.passwordIssue="Contraseñas no coinciden"
            this.isOpen = true
          }
        }else{
          this.passwordIssue="El correo debe terminar con '@anahuac.mx'"
          this.isOpen = true
        }
      },
      async register(){
        const res = await authApi.post("/register", this.user)
        console.log(res)
      }
    }
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