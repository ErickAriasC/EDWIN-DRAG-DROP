const list=document.getElementById('list');

Sortable.create(list,{
    animation:100,
    swapThreshold:1,
    chosenClass:'custom-list',
    dragClass:'drag',

    //funcion que se ejecuta cuando el usuario suelte
    onEnd:()=>console-log('funciona'),
    group:'task-list',
    //guardar en localStorage
    store:{
        //guardar los elementos de mi lista de tareas
        set:sortable=>{
            const order = sortable.toArray()
            console.log(order);
            //localStorage guarda strings
            localStorage.setItem(sortable.options.group.name,order.join(','))
        },
        //actualizar siempre el orden de nuestra lista de tareas
        get:sortable =>{
            const order = localStorage.getItem(sortable.options.group.name)
            console.log(order);
            return order ? order.split(','):[]
        }
    }
})