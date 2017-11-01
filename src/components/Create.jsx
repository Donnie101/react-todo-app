import React from 'react';

export default class Create extends React.Component {

    state = {
        text: ''
    }

    handleChange = (e) => {
        this.setState({ text: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({text:''});
        this.props.addTodo(this.state.text)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} value={this.state.text} type="text" />
                    <button type="submit">Add Todo</button>
                </form>
            </div>
        );
    }
}