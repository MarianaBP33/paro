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
                        <ion-label>Correo: </ion-label>
                        <ion-input placeholder="Correo Anáhuac" v-model="user.email"></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label>Contraseña: </ion-label>
                        <ion-input placeholder="Al menos 8 caracteres" type="password" v-model="user.password"></ion-input>
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
                <ion-button @click="login" >Ingresar</ion-button>
              </div><br /><br />
            </ion-col>
            <ion-toast :is-open="isOpen" @didDismiss="setOpen(false)" :message="passwordIssue" :duration="1500"></ion-toast>
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
  import authApi from '@/api/authApi';
  import { IonPage, IonHeader, useIonRouter,IonImg, IonToast, IonCol, IonRow, IonButton, IonToolbar, IonTitle, IonContent, IonInput, IonItem, IonLabel, IonList } from '@ionic/vue';
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    name: 'IniciarSesion',
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
      IonToast,
      IonImg
    },
    data:() =>({
      user:{
        email:"",
        password: "",
      },
      ionRouter: useIonRouter(),
      isOpen:false,
      passwordIssue:""
    }),
    setup() {
      
      const isOpenRef = ref(false);
      const setOpen = (state: boolean) => (isOpenRef.value = state);
     
      return { isOpenRef,setOpen };
      

    },
    methods:{
      async login(){
        const res = await authApi.post("",this.user)
        if(res.status === 400){
          this.passwordIssue="Correo o Contraseña no existen"
          this.isOpen = true
          console.log("correo o contraseña no existen")
        }else{
          console.log('ok')
          this.ionRouter.push('/HomePage');
        }
      }
    }
    
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
