Vue.components('todo-footer',{
    template: '<p>This is another global child component</p>'
})

const cmp = {
    template: '<p>This is another local child component</p>'
}

const app = new Vue({
    el: '#app',
    data: {
        message: 'This is a parent component'
    },
    components: {
        'todo-list': cmp
    }
})