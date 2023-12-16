import React from 'react'
import { useState } from 'react';

export const AddTodo = (props) => {
	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");

	const submit = (e) =>
	{
			e.preventDefault();
			if (!title || !desc) {
					alert("Title And Description Can not be Blank");
			}
			props.addTodo(title, desc);
	}
	return (

		<div>
			   <form onSubmit={submit}>
                    <h3 className="mt-5 mb-5"><b>Add Todo</b></h3> 
                    <div>
   
                    <div>
                        <label for="title" className="my-2"><b>Title</b></label>
                        <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control"></input>
                    </div>
                    <div>
                        <label className="my-2"><b>Description</b></label>
                        <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control"></input>
                    </div>
                   
                 <button type="submit" className="btn btn-primary col-1 mt-4 ">Add Todo</button>

                    </div>
                </form>

		</div>
		)
}