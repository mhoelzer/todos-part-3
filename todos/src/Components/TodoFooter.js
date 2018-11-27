import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { connect } from 'net';

class TodoFooter extends Component {
    render() {
        // if dont do this, change this to match the stuff with todos and this.state
        // const { title, completed, handleToggleCompletedTodo, handleDestroyOne } = this.props;
        return (
            <footer className="footer">
                {/* should be 0 default; change to {completed} */}
                <span className="todo-count"><strong>{this.props.completed}</strong> item(s) left</span>
                <ul className="filters">
                    {/* if do NavLink, add in activeClassName="selected" and add exact to each, or if have the switch, just put with / in route; or classname={filter === "all"?"seected":""} */}
                    <li><NavLink exact to="/" activeClassName="selected">All</NavLink></li>
                    <li><NavLink exact to="/active" activeClassName="selected">Active</NavLink></li>
                    <li><NavLink exact to="/completed" activeClassName="selected">Completed</NavLink></li>
                </ul>
                <button className="clear-completed" onClick={this.props.handleDestroyAllCompletedTodos}>Clear completed</button>
            </footer>
        );
    };
};

export default TodoFooter;