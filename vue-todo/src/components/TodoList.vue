<template>
    <section>
        <ul>
            <li v-for="(todoItem, idx) in todoItems" :key="todoItem" class="shadow">
                <i class="checkBtn fas fa-check" aria-hidden="true"></i>
                {{ todoItem }}
                <span class="removeBtn" type="button" @click="removeTodo(todoItem, idx)">
                    <i class="far fa-trash-alt" aria-hidden="true"></i>
                </span>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    data(){
        return{
            todoItems: []
        }
    },
    created(){
        if(localStorage.length > 0){
            for(let i = 0; i < localStorage.length; i++){
                this.todoItems.push(localStorage.key(i));
            }
        }
    },
    methods:{
        removeTodo(todoItem, idx){
            localStorage.removeItem(todoItem);
            this.todoItems.splice(idx, 1);
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
</style>