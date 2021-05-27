<template>
    <div>
        <h1>Medical Shop</h1>
        <!-- <h2>{{this.$store.state.appName}}</h2>
        <h3>{{this.$store.state.token}}</h3>
        <h3>{{this.$store.state.email}}</h3>
        <h3>{{this.$store.state.id}}</h3> -->

        <br>
        <br>
          <b-container>
                <b-row align-v="center">
                    
                   <Card v-for="items in list2" v-bind:key="items.Id" :TypeId="items.TypeId" :BrandId="items.BrandId" :Name="items.Name" :Description="items.Description" ></Card>
                    

                </b-row>
            </b-container>

         

    </div>
</template>




<script>
import Vue from 'vue'


import axios from 'axios';
import VueAxios from 'vue-axios';
import Card from "./Card"

Vue.use(VueAxios,axios);

export default Vue.extend({
    name:'Home',
    components:{
        Card
    },
    data(){
        return{
            list2:undefined,
            token:this.$store.state.token,
        }
    },
     mounted(){


          if(!this.isLoggedIn)
            {
                this.$router.push('/home')
            }
          

            



        Vue.axios.get("http://163.47.115.230:30000/api/overview/modeltype",{
            headers: {
                         'Authorization': `${this.token}` 
                      }
        })
        .then((resp)=>{
            this.list2=resp.data;
            console.warn(resp)
        })
            
    },
     
    methods:{
        updateModalHere(myValue){
            console.log("Datas: "+myValue)
        }
    },
    computed:{
        isLoggedIn(){
      return  this.$store.getters.loggedIn;
    }
    }
    
    
})
</script>
