<template>
    <h2>Add users</h2>

        <div class="form-group">
            <label>Name</label>
            <input class="form-control" type="text" v-model="user.name">
        </div>

        <div class="form-group">
            <label>Lastname</label>
            <input class="form-control" type="text" v-model="user.lastname">
        </div>

        <button class="btn btn-primary" @click="submit">Submit</button>
</template>

<script>
export default {
        data(){
            return{
                user:{ 
                    name:'',
                    lastname:''
                }
            }
        },
        methods:{
            submit(){
                console.log(this.user)
            }
        }
}
</script>