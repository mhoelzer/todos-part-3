import React, { Component } from 'react';

class TodoHeader extends Component {
    render() {
        return (
            <header className="header">
                <h1>todos</h1>
                <input className="new-todo" placeholder="What needs to be done?" autoFocus onKeyDown={this.props.handleAddTodo} />
                {/* the autoFocus auto sleects that input, so it makes it faster for the user; cAn do for loginbox */}
            </header>
        );
    };
};

export default TodoHeader;