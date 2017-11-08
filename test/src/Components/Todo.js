import React, { Component } from 'react';

class Todo extends Component {

    render() {
        return (
                    <li>{this.props.todo.todo} ({this.props.todo.type})</li>
        );
    }
}

export default Todo;