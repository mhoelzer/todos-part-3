(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e){e.exports=[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1},{userId:1,id:3,title:"fugiat veniam minus",completed:!1},{userId:1,id:4,title:"et porro tempora",completed:!0},{userId:1,id:5,title:"laboriosam mollitia et enim quasi adipisci quia provident illum",completed:!1}]},16:function(e,t,a){e.exports=a(26)},21:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),l=a(13),r=a.n(l),c=(a(21),a(5)),s=a(6),d=a(8),i=a(7),m=a(9),u=a(28),p=function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.completed,o=e.handleToggleCompletedTodo,l=e.handleDestroyOne;return n.a.createElement("li",{className:a?"completed":""},n.a.createElement("div",{className:"view"},n.a.createElement("input",{className:"toggle",type:"checkbox",defaultChecked:a,onClick:o}),n.a.createElement("label",null,t),n.a.createElement("button",{className:"destroy",onClick:l})))}}]),t}(o.Component),h=a(10),f=function(e){function t(){var e,a;Object(c.a)(this,t);for(var o=arguments.length,n=new Array(o),l=0;l<o;l++)n[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(n)))).state={todos:h},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.todos;return n.a.createElement(n.a.Fragment,null,n.a.createElement("header",{className:"header"},n.a.createElement("h1",null,"todos"),n.a.createElement("input",{className:"new-todo",placeholder:"What needs to be done?",autoFocus:!0,onKeyDown:this.props.handleAddTodo})),n.a.createElement("section",{className:"main"},n.a.createElement("ul",{className:"todo-list"},t.map(function(t){return n.a.createElement(p,{key:t.id,title:t.title,completed:t.completed,handleToggleCompletedTodo:e.props.handleToggleCompletedTodo(t.id),handleDestroyOne:e.props.handleDestroyOne(t.id)})}))),n.a.createElement("footer",{className:"footer"},n.a.createElement("span",{className:"todo-count"},n.a.createElement("strong",null,this.props.completed)," item(s) left"),n.a.createElement("ul",{className:"filters"},n.a.createElement("li",null,n.a.createElement(u.a,{exact:!0,to:"/",activeClassName:"selected"},"All")),n.a.createElement("li",null,n.a.createElement(u.a,{exact:!0,to:"/active",activeClassName:"selected"},"Active")),n.a.createElement("li",null,n.a.createElement(u.a,{exact:!0,to:"/completed",activeClassName:"selected"},"Completed"))),n.a.createElement("button",{className:"clear-completed",onClick:this.props.handleDestroyAllCompletedTodos},"Clear completed")))}}]),t}(o.Component),E=a(29),v=a(27),b=function(e){function t(){var e,a;Object(c.a)(this,t);for(var o=arguments.length,n=new Array(o),l=0;l<o;l++)n[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(n)))).state={todos:h},a.handleToggleCompletedTodo=function(e){return function(t){var o=a.state.todos.map(function(t){return t.id===e&&(t.completed=!t.completed),t});a.setState({todos:o})}},a.handleAddTodo=function(e){var t=a.state.todos,o=Math.floor(333666999*Math.random());if(13===e.keyCode){var n=t.slice(0),l={userId:1,id:o,title:e.target.value,completed:!1};n.push(l),a.setState({todos:n}),e.target.value=""}},a.handleDestroyOne=function(e){return function(t){var o=a.state.todos.filter(function(t){return t.id!==e});a.setState({todos:o})}},a.handleDestroyAllCompletedTodos=function(e){var t=a.state.todos.filter(function(e){return!0!==e.completed});a.setState({todos:t})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.todos,t={handleAddTodo:this.handleAddTodo,handleDestroyOne:this.handleDestroyOne,handleToggleCompletedTodo:this.handleToggleCompletedTodo,handleDestroyAllCompletedTodos:this.handleDestroyAllCompletedTodos,completed:e.filter(function(e){return!e.completed}).length};return n.a.createElement("section",{className:"todoapp"},n.a.createElement(E.a,null,n.a.createElement(v.a,{path:"/active",render:function(a){return n.a.createElement(f,Object.assign({},a,t,{todos:e.filter(function(e){return!e.completed})}))}}),n.a.createElement(v.a,{path:"/completed",render:function(a){return n.a.createElement(f,Object.assign({},a,t,{todos:e.filter(function(e){return e.completed})}))}}),n.a.createElement(v.a,{path:"/",render:function(a){return n.a.createElement(f,Object.assign({},a,t,{todos:e}))}})))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(b,null),document.getElementById("root"))}},[[16,2,1]]]);
//# sourceMappingURL=main.0378f61c.chunk.js.map