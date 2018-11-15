import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import todoList from './todos.json';

// pascal case helps with distinguishing from html
// no state b/c no way to change components with state,; this is just displaying and showing render method
class TodoItem extends Component {
  render() {
    // if dont do this, change this to match the stuff with todos and this.state
    const { title, completed } = this.props;
    return (
      // it will be completed
      // <li className={completed && "completed"}> // this will make an error
      // still want something to return even if empty
      <li className={completed ? "completed" : ""}>
        <div className="view">
          <input className="toggle" type="checkbox" defaultChecked={completed} />
          {/* change checked to defaultChecked b/c that's not a react thingy */}
          <label>{title}</label>
          <button className="destroy"></button>
        </div>
      </li>
    );
  };
};

class TodoList extends Component {
  state = {
    todos: todoList
  };
  render() {
    // if didnt do this, change todos.map to this.state.todos.map; do use state but not modifying it now
    const { todos } = this.state;
    return (
      <section className="main">
        <ul className="todo-list">
          {/* when put in comp state; when inside the map function, it will be a single todo */}
          {todos.map(todo => <TodoItem key={todo.id} title={todo.title} completed={todo.completed} />)}
        </ul>
      </section>
    );
  };
};

class App extends Component {
  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input className="new-todo" placeholder="What needs to be done?" autoFocus />
          {/* the autoFocus auto sleects that input, so it makes it faster for the user; cAn do for loginbox */}
        </header>
        <TodoList />
        <footer className="footer">
          <span className="todo-count"><strong>0</strong> item(s) left</span>
          <button className="clear-completed">Clear completed</button>
        </footer>
      </section>
    );
  };
};

export default App;
