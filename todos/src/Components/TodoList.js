import React, { Component } from 'react';
// import queryString from "query-string";
import TodoItem from "./TodoItem.js";
import todoList from '../todos.json';
import TodoHeader from './TodoHeader.js';
import TodoFooter from './TodoFooter.js';

class TodoList extends Component {
    state = {
        todos: todoList
    };    
    render() {
        const { todos } = this.props;
        return (
            // react.fragment is used when there are multpile big tag things
            <React.Fragment>
                <TodoHeader handleAddTodo={this.props.handleAddTodo}/>
                <section className="main">
                    <ul className="todo-list">
                        {/* when put in comp state; when inside the map function, it will be a single todo */}
                        {todos.map(todo => <TodoItem key={todo.id} title={todo.title} completed={todo.completed} handleToggleCompletedTodo={this.props.handleToggleCompletedTodo(todo.id)} handleDestroyOne={this.props.handleDestroyOne(todo.id)} />)}
                        {/* call the hTCT and pass in the todoid and store inside clickedTodoId var, which causes cTI to be in scope for event function  --> completeTodo can also just be hTCT; it rerenders only 1 when props change */}
                    </ul>
                </section>
                <TodoFooter completed={this.props.completed} handleDestroyAllCompletedTodos={this.props.handleDestroyAllCompletedTodos}/>
            </React.Fragment>
        );
    };
};

export default TodoList;