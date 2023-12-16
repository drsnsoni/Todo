import './App.css';
import Header from './components/Header.js';
import {Todos} from './components/Todos.js';
import {AddTodo} from './components/AddTodo.js';
import React , { useState, useEffect } from 'react';


function App() {
    let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo = [];
  }else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }


  // add text="sometext" another shows default text in header tag
  const onDelete =(todo) => {
    console.log("I am On Delete of todo ", todo);

    setTodos(todos.filter((e)=>{
      return e!=todo;
    }));

   localStorage.setItem("todos", JSON.stringify(todos));
  }

const addTodo =(title, desc) => { 

    let sno;

    if (todos.length==0) {
      sno=0;
    }else{
      sno = todos[todos.length - 1].sno + 1;
    }
  

  console.log("work", title, desc);
  const myTodo= {
    sno: sno,
    title: title,
    desc: desc
  }
  setTodos([...todos, myTodo]);
  console.log(myTodo);
  
}

const [todos, setTodos] = useState([initTodo]);
  useEffect(()=>{
     localStorage.setItem("todos", JSON.stringify(todos));

      },[todos])


  return (
    <div className="App">
      
     <Header title="Todos list" login={true} /> 
     <hr></hr>
     <AddTodo addTodo={addTodo}/>
     <Todos todos={todos} onDelete={onDelete}/>
    </div>
  );
}

export default App;
