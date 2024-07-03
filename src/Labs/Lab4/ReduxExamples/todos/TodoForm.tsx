import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";



export default function TodoForm()
    {
        const { todo } = useSelector((state: any) => state.todosReducer);
        const dispatch = useDispatch();
        return (
            <li className="list-group-item d-flex justify-content-between align-items-center">

                <div className="col-6">
                    <input value={todo.title}
                    onChange={ (e) => dispatch(setTodo({ ...todo, title: e.target.value }))} 
                    className="form-control me-2"/>
                </div>
                <div className="col-4 d-flex justify-content-end">
                    <button onClick={() => dispatch(updateTodo(todo))}
                        id="wd-update-todo-click"
                        className="btn btn-warning m-1">Update
                    </button>
                    <button onClick={() => dispatch(addTodo(todo))}
                        id="wd-add-todo-click"
                        className="btn btn-success m-1">Add
                    </button>
                

                </div>
           
            </li>
        );
    }