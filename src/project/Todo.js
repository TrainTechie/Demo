
import React from "react";


function Todo({ todo, index, markTodo, removeTodo }) {
  return (
    <div  className="todo" >
      <span>{todo.text}</span>
      <div>
        <button onClick={() => markTodo(index)}>✓</button>{' '}
        <button onClick={() => removeTodo(index)}>✕</button>
      </div>
    </div>
  );
}

function FormTodo({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}> 
      <form ><b>Add Todo</b></form>
      <input type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
    <button variant="primary mb-3" type="submit">
      Submit
    </button>
  </form>
  );
}

function Application1() {
  const [todos, setTodos] = React.useState([
    {
      text: "This is a sampe todo",
      isDone: true
    }
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const markTodo = index => {
  const newTodos = [...todos];
  newTodos[index].isDone = true;
  setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">Todo List</h1>
        <FormTodo addTodo  ={addTodo} />
        <div>
          {todos.map((todo, index) => (        
                <Todo
                key={index}
                index={index}
                todo={todo}
                markTodo={markTodo}
                removeTodo={removeTodo}
                />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Application1;
