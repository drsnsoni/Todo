import React from 'react'
import { TodoItem } from './TodoItem.js';


export const Todos = (props) => {
	return (

		<div className="container">
		<h3>Todos List</h3>


		{props.todos.length===0? "no Todos" : 

		props.todos.map((todo) => {
			return (
				<>
			<h3>{todo.sno}</h3> 
			<TodoItem todo={todo} key={todo} onDelete={props.onDelete}/>

			</>




			)
			}
	
			)
		}

		</div>

		)
} 