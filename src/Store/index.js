import Vue from 'vue';
import Vuex from 'vuex'


Vue.use(Vuex);

// const state ={
//     user: null
// };

const store = new Vuex.Store({

    state:{
        appName:'Try1 Vuex By joy Karmakar',
        token:  null, //localStorage.getItem('access_token') ||
        
        email:null,
        id:null
    },
    getters: {
        getAppName: state =>{
            return state.appName;
        },
       
        getAccessToken: state=>{
            return state.token;
        },
        loggedIn(state){
            return state.token != null
        },
        getEmail: state=>{
            return state.email;
        },
        getId: state=>{
            return state.id;
        }
       
    },
    actions: {
        retrieveToken(context,credentials){

            const token_here = credentials.tokens;
            const id = credentials.id;
            const email = credentials.email;
            
            console.log(token_here)
            localStorage.setItem('access_token',token_here)
            context.commit('retrieveToken',token_here)
            context.commit('retrieveID',id)
            context.commit('retrieveEmail',email)

        },
        distroyAccessToken(context){

            //if

            localStorage.removeItem('access_token')
            context.commit('distroyAccessToken')


        },
        distroyAccessUserID(context){

            //if

            localStorage.removeItem('access_token')
            context.commit('distroyAccessUserID')


        },
        retrieveOrderList(context,credentials){
            const orderList = credentials.dataRes
            context.commit('retrieveOrderList',orderList)
        }

    },
    mutations: {
        retrieveToken(state,token){
            state.token=token
        },
        retrieveID(state,id){
            state.id=id
        },
        distroyAccessToken(state){
            state.token=null
        },
        distroyAccessUserID(state){
            state.id=null
        },

        retrieveEmail(state,dataRes){
            state.email=dataRes
        }


    }

});


export default store;