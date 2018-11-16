import React, { Component } from 'react';
import TodoItem from "./TodoItem.js";
import todoList from '../todos.json';

class TodoList extends Component {
    state = {
        todos: todoList
    };

    // function inside funciton; once called the first time, the first outer funxtion will run and implicitly returns inner function (the event handler); first param is event obj sent from dom; cTI can be accessed inside inner funct
    handleToggleCompletedTodo = clickedTodoId => event => {
        // map makes new array to get results in newtodos
        const newTodos = this.state.todos.map(todo => {
            // get todo id that matches one was clicked; if this is false, no run
            if (todo.id === clickedTodoId) {
                // change completed value/any boolean value (t vs f)
                todo.completed = !todo.completed;
            }
            return todo; // have to return original todo obj
        });
        // overwrite todos w/ newtodos
        this.setState({ todos: newTodos });
    };

    handleAddTodo = event => {
        const { todos } = this.state;
        let makeId = Math.floor(Math.random() * 333666999);
        if (event.keyCode === 13) { // 13 is the code for enter; could also do event.key == "Enter"
            let newTodos = todos.slice(0); // copy curr arr and return new; can go back in time 
            let newlyEnteredTodo = {
                userId: 1,
                id: makeId,
                title: event.target.value,
                completed: false
            };
            newTodos.push(newlyEnteredTodo);
            this.setState({ todos: newTodos });
            event.target.value = "";
        };
    };

    handleDestroyOne = clickedTodoId => event => {
        const newTodos = this.state.todos.filter(todo => {
            if (todo.id === clickedTodoId) {
                return false
            }
            return true;
        });
        this.setState({ todos: newTodos });
    };

    handleDeleteAllCompletedTodos = event => {
        const newTodos = this.state.todos.filter(todo => {
            if (todo.completed === true) {
                return false;
            }
            return true;
        });
        this.setState({
            todos: newTodos
        });
    };

    render() {
        // if didnt do this, change todos.map to this.state.todos.map; do use state but not modifying it now
        const { todos } = this.state;
        return (
            <section className="todoapp">
                <header className="header">
                    <h1>todos</h1>
                    <input className="new-todo" placeholder="What needs to be done?" autoFocus onKeyDown={this.handleAddTodo} />
                    {/* the autoFocus auto sleects that input, so it makes it faster for the user; cAn do for loginbox */}
                </header>
                <section className="main">
                    <ul className="todo-list">
                        {/* when put in comp state; when inside the map function, it will be a single todo */}
                        {todos.map(todo => <TodoItem key={todo.id} title={todo.title} completed={todo.completed} handleToggleCompletedTodo={this.handleToggleCompletedTodo(todo.id)} handleDestroyOne={this.handleDestroyOne(todo.id)} />)}
                        {/* call the hTCT and pass in the todoid and store inside clickedTodoId var, which causes cTI to be in scope for event function  --> completeTodo can also just be hTCT; it rerenders only 1 when props change */}
                    </ul>
                </section>
                <footer className="footer">
                    <span className="todo-count"><strong>0</strong> item(s) left</span>
                    <button className="clear-completed" onClick={this.handleDeleteAllCompletedTodos}>Clear completed</button>
                </footer>
            </section>
        );
    };
};  

export default TodoList;