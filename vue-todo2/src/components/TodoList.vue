<template>
    <div>
        <transition-group name="list" tag="ul">
            <li v-for="(todoItem, idx) in propsdata" v-bind:key="todoItem.item" class="shadow">
                <i class="checkBtn fas fa-check" v-bind:class="{checkBtnComplted: todoItem.completed}" 
                v-on:click="toggleComplete(todoItem, idx)"></i>
                <span v-bind:class="{textCompleted: todoItem.completed}"> {{ todoItem.item }}</span>
                <span class="removeBtn" v-on:click="removeTodo(todoItem, idx)">
                    <i class="fas fa-trash-alt"></i>
                </span>
            </li>
        </transition-group>
    </div>
</template>

<script>

export default {
    props: ['propsdata'],
    methods: {
        removeTodo(todoItem, idx){
            this.$emit('removeItem', todoItem, idx);
        },
        toggleComplete(todoItem, idx){
            this.$emit('toggleComplete', todoItem, idx);
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
    .textCompleted{
        text-decoration: line-through;
        color: #b3adad;
    }
    .checkBtnComplted{
        color: #b3adad;
    }
    /*리스트 애니메이션*/
    .list-enter-active, .list-leave-active{
        transition: all 1s
    }
    .list-enter, .list-leave-to{
        opacity: 0;
        transform: translateY(30px);
    }
</style>