import React, { Component } from 'react';
import Todo from './Todo'

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
        let todos;

        if(this.state.todos){
            todos = this.state.todos.map(todo =>{

                return(<Todo todo={todo}/>);
            });
        }
        return (
            <div className="Todos">
                <h2>Todos:</h2>
                <ul>
                    {todos}
                </ul>
            </div>
        );
    }
}

export default Todos;
