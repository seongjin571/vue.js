<template>
    <div>
        <ul>
            <li v-for="(todoItem, idx) in todoItems" v-bind:key="todoItem" class="shadow">
                {{ todoItem }}
                <span class="removeBtn" v-on:click="removeTodo(todoItem, idx)">
                    <i class="fas fa-trash-alt"></i>
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data: function(){
        return{
            todoItems: []
        }
    },
    methods: { 
        removeTodo: function(todoItem, idx){
            localStorage.removeItem(todoItem);
            this.todoItems.splice(idx, 1);
        }
    },
    created: function(){
        if(localStorage.length > 0){
            for(let i = 0; i < localStorage.length; i++){
                if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
                    this.todoItems.push(localStorage.key(i));
                }
            }
        }
    }
}
</script>

<style scoped>
    ul{
        list-style-type: none;
        padding-left: 0px;
        margin-top: 0;
        text-align: center;
    }
    li{
        display: flex;
        min-height: 50px;
        height: 50px;
        line-height: 50px;
        margin: 0.5rem 0;
        padding: 0 0.9rem;
        background: white;
        border-radius: 5px;
    }
    .checkBtn{
        line-height: 45px;
        color: #62acde;
        margin-right: 5px;
    }
    .removeBtn{
        margin-left: auto;
        color: #de4343;
    }
    .list-enter-active, .list-leave-active{
        transition: all 1s
    }
    .list-enter, .list-leave-to{
        opacity: 0;
        transform: translateY(30px);
    }
</style>