<template>

    <div v-if="loading">
        <app-loader></app-loader>
    </div>    
    <div class="row" v-else>

        <div 
            class="col-auto mb-4"
            v-for="(user) in users"
            :key="user.id"
        >
            <div class="card" style="width: 14rem;">
                <img 
                    class="card-img-top" 
                    :src="'https://placebeard.it/300/300?'+ user.id"  
                    alt="Card image cap">
                <div class="card-body">
                    <div class="card-text">
                        <strong>Name:</strong> {{ user.name }}
                    </div>
                    <div class="card-text">
                        <strong>Lastname:</strong> {{ user.lastname }}
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>


<script>
    import axios from 'axios';

    export default {
        data(){
            return {
                users:[],
                loading:true
            }
        },
        methods:{
            loadUsers(){
                axios.get('http://localhost:3004/users')
                .then( response => {
                    this.users = response.data;
                    this.loading = false;
                })
                .catch( error => {
                    this.$toast.error('Oops, something wrong dude,call the admin',{
                        position:'bottom',
                        duration:false
                    });
                    console.log(error);
                })
            }  
        },
        mounted(){
          this.loadUsers()
        }
    }

</script>