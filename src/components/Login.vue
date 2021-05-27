<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="handleSubmit" style="margin-left:550px;margin-right:550px;">
            <b-form-input v-model="email" placeholder="Enter your Email"></b-form-input>
            <b-form-input v-model="password" placeholder="Enter your Password"></b-form-input>
            <br>
            <b-button type="submit" variant="primary">Submit</b-button>
        </form>
    </div>
</template>


<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
export default Vue.extend({
    name:'Login',
    data(){
        return {
            email:'',
            password:'',
            user:{
                id:'',
                email:''
            },
            access_token:''
        }
    },
    methods:{
        handleSubmit(){
                console.log(this.email+"            "+this.password);

                const loginData = {
                    email:this.email,
                    password:this.password
                }

                
            axios.post('http://163.47.115.230:30000/api/login',loginData,{
                     headers: {
                            'Authorization': `Basic asc` 
                            }
               })
             .then(
                 res=>{
                     
                     console.log(res);
                     this.access_token=res.data.access_token;
                     this.user.id = res.data.user.id;
                     this.user.email = res.data.user.email;

                     console.log("the access token: "+this.access_token)

                     const sendData = {
                         tokens:res.data.access_token,
                         id:res.data.user.id,
                         email:res.data.user.email
                     }

                    this.$store.dispatch('retrieveToken',sendData)
                     
                    this.$router.push('/home')
                 }
             ).catch(
                err=>{
                   console.log("Api Error: "+err)
                }
             )
        }
    }


})
</script>