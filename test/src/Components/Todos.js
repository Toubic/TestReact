import React, { Component } from 'react';

class Todos extends Component {


    constructor(){
        super();
        this.state = {
            todos: []
        }
    }

    componentWillMount(){
        this.setState({
            todos: [
                {
                    todo: "Todo 1",
                    type: "Type 1"
                },
                {
                    todo: "Todo 2",
                    type: "Type 2"
                },
                {
                    todo: "Todo 3",
                    type: "Type 3"
                }
            ]
        }
        )
    }

    render() {
        return (
            <div className="Todos">
                <h2>Todos:</h2>
                <ul>
                    <li>{this.state.todos[0].todo} ({this.state.todos[0].type})</li>
                    <li>{this.state.todos[1].todo} ({this.state.todos[1].type})</li>
                    <li>{this.state.todos[2].todo} ({this.state.todos[2].type})</li>
                </ul>
            </div>
        );
    }
}

export default Todos;
