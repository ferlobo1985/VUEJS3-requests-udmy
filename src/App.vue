<template>
  <app-header></app-header>
        <div class="container">
            <div>
              <button 
                type="button" 
                class="btn btn-primary mr-1"
                @click="active = 'compUsers'"
              >Users</button>

              <button 
                type="button" 
                class="btn btn-secondary"
                @click="active = 'compAddUsers'"
              >Add users</button>
            </div>

            <br/>

            <component :is="this.active"></component>
        </div>
    <app-footer></app-footer>
</template>

<script>
  import compUsers from './components/Users.vue';
  import compAddUsers from './components/AddUsers.vue';

  export default{
    data(){
      return{
        active:'compUsers'
      }
    },
    components:{
      compUsers,
      compAddUsers
    }
  }
</script>
