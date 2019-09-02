<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
    <TodoList v-bind:propsdata="todoItems" v-on:removeItem="removeOneItem" v-on:toggleComplete="toggleOneItem"></TodoList>
    <TodoFooter v-on:clearTodo="removeAllTodo"></TodoFooter>

  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  data(){
    return{
      todoItems: []
    }
  },
  methods: {
    addOneItem(todoItem){
      const obj = {completed: false, item: todoItem};
      localStorage.setItem(todoItem, JSON.stringify(obj));
      this.todoItems.push(obj);
    },
    removeOneItem(todoItem, idx){
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(idx, 1);
    },
    toggleOneItem(todoItem, idx){
      this.todoItems[idx].completed = !this.todoItems[idx].completed;
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    removeAllTodo(){
      this.todoItems = [];
      localStorage.clear();
    }
  },
  created(){
      if(localStorage.length > 0){
        for(let i = 0; i < localStorage.length; i++){
            if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
                this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
            }
        }
      }
  },
  components:{
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  }
}
</script>

<style>
body{
  text-align: center;
  background-color: #F6F6F6;
}
input{
  border-style: groove;
  width: 200px;
}
button{
  border-style: groove;
}
.shadow{
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
