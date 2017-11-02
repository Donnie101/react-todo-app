const addTodo = (todo)=>{
    return{
        type:'ADD_TODO',
        payload:todo
    }
}

export default addTodo;