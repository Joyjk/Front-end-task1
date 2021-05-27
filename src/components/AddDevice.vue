<template>
    <div>
        <h4>Add Device</h4>
         <form @submit.prevent="handleSubmit" style="margin-left:34.375rem;margin-right:34.375rem;">
            <b-form-input v-model="BrandId" placeholder="Enter Brand ID"></b-form-input>
            <b-form-input v-model="Name" placeholder="Enter Name"></b-form-input>
            <input type="hidden" v-model="TypeId" />
            <b-form-input v-model="Comment" placeholder="Enter Comment"></b-form-input>
            <br>
            <b-button type="submit" variant="primary" style="margin-left:100px;display:block">Submit</b-button>
        </form>

        <b-button  variant="outline-secondary" to="/home" style="display:block; float:right;margin-top:-35px;margin-right:670px;">Back</b-button>

    </div>
</template>


<script lang="ts">

import axios from 'axios'
export default ({
    name:'AddDevice',
    data(){
        return{
            TypeId:parseInt(this.$route.params.typeid),
            BrandId:'',
            Name:'',
            Comment:'',
            token:this.$store.state.token,

        }
    },
   
    methods:{
        handleSubmit(){
                

                const allData = {
                    BrandId:this.BrandId,
                    Name:this.Name,
                    TypeId:this.TypeId,
                    Comment:this.Comment
                }

                console.log(allData)
                
            axios.post('http://163.47.115.230:30000/api/devicemodel',allData,{
                     headers: {
                            'Authorization': `${this.token}` 
                            }
               })
             .then(
                 res=>{
                     
                     console.log(res);
                   
                     
                    this.$router.push('/home')
                 }
             ).catch(
                err=>{
                   console.log("Api Error: "+err)
                }
             )
        },
        
    }

})
</script>
