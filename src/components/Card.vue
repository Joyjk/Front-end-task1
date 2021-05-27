<template>
     <div>
  <b-card
    no-body
    style="width: 20rem; height: 20rem; margin: 5px;"
    img-src=""
    img-alt=""
    img-top
  >
    

    <b-card-body>
      <b-card-title> {{Name}}</b-card-title>
      
      <b-card-text>
         {{Description}}
      </b-card-text>
    </b-card-body>

      <b-list-group flush>
      
      <b-list-group-item>{{BrandId}}</b-list-group-item>
     </b-list-group>

    

    

    <b-card-footer>
         <!-- <a href="#" class="card-link">Buy now</a> -->
         <!-- <router-link  :to="'/modeldata/'+BrandId+'/'+Name">Details</router-link> -->
         &nbsp;
         &nbsp;

         
         <!-- <router-link :to="'/add/'+TypeId">Add Device</router-link> -->
         <b-button :to="'/modeldata/'+BrandId+'/'+Name" size="sm" style="margin-right:5px;">Details </b-button>

        <b-button :to="'/add/'+TypeId" size="sm">Add Device </b-button>
         
    </b-card-footer>

    
  </b-card>

  


</div>
</template>

<script>
export default {
    name:'Card',
    props:['Name','Description','BrandId','TypeId'],
    data(){
      return{
          allDatas: {
            BrandId:this.props.BrandId,
            Name:this.props.Name
          }
      }
    },
    
}
</script>