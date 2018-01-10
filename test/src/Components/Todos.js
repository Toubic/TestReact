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
                    todo: "Sätt upp en hemsida med Wordpress",
                    type: "Task 1"
                },
                {
                    todo: "Välj tema",
                    type: "Task 2"
                },
                {
                    todo: "Installera plugins",
                    type: "Task 3"
                },
                {
                    todo: "Fyll på med innehåll på hemsidan",
                    type: "Task 4"
                },
                {
                    todo: "Great success!",
                    type: "Task 5"
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
