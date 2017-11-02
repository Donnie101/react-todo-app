import React from 'react';
import { connect } from 'react-redux';
import Create from './Create';
import revmoveTodo from '../actions/removeTodo';
import addTodo from '../actions/addTodo';
import { setErorr, noError } from '../actions/error'


class TodoList extends React.Component {

    addTodo = (todo) => {

        let isDuplicate = this.props.todos.find((item) => {
            return item === todo;
        })

        if (!isDuplicate) {
            this.props.addTodo(todo)
            this.props.noError()
        } else {
            this.props.setErorr()
        }

    }


    render() {
        return (
            <div>
                <h2>Todo List</h2>
                {this.props.error && <p>{this.props.error}</p>}
                <ul>
                    {this.props.todos.map((todo) => {
                        return <li key={todo}>{todo}<button onClick={() => {
                            this.props.revmoveTodo(todo)
                        }}>remove</button></li>
                    })}
                </ul>
                <Create addTodo={this.addTodo} />
            </div>

        );
    }
}

function mapStateToProps({ todos, error }) {
    return { todos, error }
}

export default connect(mapStateToProps, { revmoveTodo, addTodo, setErorr, noError })(TodoList);