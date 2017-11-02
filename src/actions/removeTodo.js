const removeTodo = (todo)=>{
    return{
        type:'REMOVE_TODO',
        payload:todo
    }
}

export default removeTodo;