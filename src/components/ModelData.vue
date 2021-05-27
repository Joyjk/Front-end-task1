<template>
    <div>
        
        <h2>Model Data</h2>
        <!-- <h3>{{this.BrandId}}</h3>
        <h3>{{this.Name}}</h3> -->
         
          <b-button pill variant="outline-secondary" to="/home" style="float:right; display:inline; margin-top:-45px; margin-right:100px;">
           Back
          </b-button>

        
        <div>
  <b-table-simple hover small caption-top responsive>
    
    
    <b-thead head-variant="dark">
      
      <b-tr>
        <b-th>Id</b-th>
        <b-th>DataType</b-th>
        <b-th>Brand</b-th>
        <b-th>Model</b-th>
        <b-th>Name</b-th>
        <b-th>DisplayName</b-th>
        <b-th>Description</b-th>
        <b-th>ProtocolOrder</b-th>
      </b-tr>
    </b-thead>
    <b-tbody>
      <b-tr v-for="item in list" v-bind:key="item.Id">
        <b-td >{{item.Id}}</b-td>
        <b-td >{{item.DataType}}</b-td>
        <b-td>{{item.Brand}}</b-td>
        <b-td>{{item.Model}}</b-td>
        <b-td>{{item.Name}}</b-td>
        <b-td variant="">{{item.DisplayName}}</b-td>
        <b-td>{{item.Description}}</b-td>
        <b-td>{{item.ProtocolOrder}}</b-td>
      </b-tr>
      
     
      
      
    </b-tbody>
 
  </b-table-simple>
</div>


    </div>
</template>

<script>

import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios,axios)
export default {
    name:'ModelData',
    data(){
        return{
            BrandId:this.$route.params.brandid,
            Name:this.$route.params.name,
            token:this.$store.state.token,
            list:undefined,
        }
    },
    mounted()
    {
        Vue.axios.get("http://163.47.115.230:30000/api/overview/modeldata/"+this.BrandId+"/"+this.Name,{
            headers: {
                         'Authorization': `${this.token}` 
                      }
        })
        .then((resp)=>{
            this.list=resp.data
            console.warn(resp)
        })
    }
}
</script>