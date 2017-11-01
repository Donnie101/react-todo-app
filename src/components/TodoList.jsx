import React from 'react';
import Create from './Create';

export default class TodoList extends React.Component {

    state = {
        todos: [],
        error: ''
    }

    addTodo = (todo) => {

        let isDuplicate = this.state.todos.find((item) => {
            return item === todo;
        })

        if (!isDuplicate) {
            this.setState((prevState) => {
                return { todos: [...prevState.todos, todo], error: '' }
            })
        } else {
            this.setState({ error: 'ITEM ALREADY ADDED' })
        }

    }

    deleteTodo = (todo) => {
        let todos = this.state.todos.filter((item) => {
            return item !== todo;
        })

        this.setState({ todos })
    }

    render() {
        return (
            <div>
                <h2>Todo List</h2>
                {this.state.error && <p>{this.state.error}</p>}
                <ul>
                    {this.state.todos.map((todo) => {
                        return <li key={todo}>{todo}<button onClick={() => {
                            this.deleteTodo(todo)
                        }}>remove</button></li>
                    })}
                </ul>
                <Create addTodo={this.addTodo} />
            </div>

        );
    }
}