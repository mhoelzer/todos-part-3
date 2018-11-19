import React, { Component } from 'react';
import TodoList from "./TodoList.js";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <TodoList />
      </BrowserRouter>
    );
  };
};

export default App;