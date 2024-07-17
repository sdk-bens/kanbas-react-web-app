import React, { useState } from "react";


const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function WorkingWithArrays() {
    const API = `${REMOTE_SERVER}/lab5/todos`;
    const [todo, setTodo] = useState(
        {id: "1",
        title: "NodeJS Assignment",
        description: "Create a NodeJS Server with ExpressJS",
        due: "20211-09-09",
        completed: false,
    });
    return (
        <div id="wd-working-with-arrays">
            <h3>Working With Arrays</h3>
            <h4>Retrieving Arrays</h4>
            <a id="wd-retrieve-todos" className="btn btn-primary" href={API}>
                Get Todos
            </a><br />
            <h4> Retrieving an item from an Array by ID</h4>
            <a id="wd-retrieve-todo-by-id" className="btn btn-primary float-end" href={`${API}/${todo.id}`}>
                Get Todo by ID
            </a>
            <input id="wd-todo-id" value={todo.id} className="form-control w-50"
            onChange={(e) => setTodo({...todo, id: e.target.value})} />
            <hr />
            <h4> Filtering Array Items</h4>
            <a id="wd-retrieve-completed-todos" className="btn btn-primary"
            href={`${API}?completed=true`}>
                Get Completed Todos
            </a>
            <br /><br />
            <h3>Creating new items in Array</h3>
            <a id="wd-create-new-todo" className="btn btn-primary"
            href={`${API}/create`}>
                Create Todo
            </a>
            <br /><br />
            <h4>Deleting from an Array</h4>
            <a id="wd-deleting-todo" 
            href={`${API}/${todo.id}/delete`} 
            className="btn btn-primary float-end">
                Delete Todo with ID= {todo.id}
            </a>
            <input value={todo.id} className="form-control w-50" 
            onChange={(e) => setTodo({...todo, id: e.target.value})} />
            <br /><br />
            <h3>Updating an Item in an Array</h3>
            <a href={`${API}/${todo.id}/title/${todo.title}`} className="btn btn-primary float-end">
                Update todo
            </a>
            <input value={todo.title} className="form-control w-25 float-start me-2" 
            onChange={(e) => setTodo({...todo, title: e.target.value})} />
            <br /><br /><hr />
            <h3>Update description, completed</h3>
            {/* <a id="wd-update-todo-description" href={`${API}/${todo.id}/description/${todo.description}`} className="btn btn-primary float-end">
            Describe Todo ID = {todo.id}            
            </a>
            
            <input className="form-control mb-2" type="number" style={{width: "80px"}} value={todo.id}
            onChange={(e) => setTodo({...todo, id: e.target.value})} />
            <input className="form-control w-50" value={todo.description}
            onChange={(e) => setTodo({...todo, description: e.target.value})} /> */}

            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
                <input className="form-control" type="number" style={{ width: "80px", marginRight: "7px" }} value={todo.id}
                onChange={(e) => setTodo({...todo, id: e.target.value})} />
                <input className="form-control" style={{ width: "300px", marginRight: "10px" }} value={todo.description}
                onChange={(e) => setTodo({...todo, description: e.target.value})} />
            </div>
            <a id="wd-update-todo-description" href={`${API}/${todo.id}/description/${todo.description}`} className="btn btn-primary">
                Describe Todo ID = {todo.id}
            </a>
            </div>
            <br/>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                <div style={{ display: "flex", alignItems: "center" }}>
                <input className="form-control me-2" type="number" style={{width: "80px"}} value={todo.id}
                        onChange={(e) => setTodo({...todo, id: e.target.value})} />
                        <input className="me-2" id="wd-todo-completed" type="checkbox" checked={todo.completed}
                        onChange={(e) => setTodo({...todo, completed: e.target.checked})} />
                        <label id="wd-update-todo-completed">Completed</label>

                </div>
                <a id="wd-update-todo-completed" href={`${API}/${todo.id}/completed/${todo.completed}`} className="btn btn-primary">
                        Complete Todo ID = {todo.id}
                    </a>
            </div>

            

            <br /><br /> 
            
        </div>
    );
}