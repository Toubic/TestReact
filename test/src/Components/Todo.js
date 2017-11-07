import React, { Component } from 'react';

class Todo extends Component {

    render() {
        return (
                    <li>{this.props.todos[0].todo} ({this.props.todos[0].type})</li>
        );
    }
}

export default Todo;