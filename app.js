var app_if = new Vue({
    el: '#app-if',
    data: {
      like: false
    },
    methods:{

    }
  })


  Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
  })
  
  var app7 = new Vue({
    el: '#app-7',
    data: {
      groceryList: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' }
      ]
    }
  })

new Vue({
    el:'#app-for',
    data:{
        subjects:[
            'NET LAB',
            'NET DESIGN',
            'NET MANAGE',
            'NET SECURE' 
        ],
        students:[
            {name:'john',age:'22',class:'C'},
            {name:'robert',age:'25',class:'A'},
        ]
    },
    methods:{
    }
})

var app4 = new Vue({
    el: '#app-4',
    data: {
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ]
    }
  })

var app6 = new Vue({
    el: '#app-6',
    data: {
      message: 'Hello Vue!'
    }
  })

/*
var app3 = new Vue({
    el: '#app-3',
    data: {
      seen: true
    }
  })

  

  var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    }
  })

  var app5 = new Vue({
    el: '#app-5',
    data: {
      message: 'Hello Vue.js!'
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      }
    }
  })
  */
