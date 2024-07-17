import React, { useState } from "react";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function WorkingWithObjects () {
    const [assignment, setAssignment] = useState({
        id: 1, 
        title: "NodeJS Assignment", 
        description: "Create a NodeJS server with ExpressJS",
        due: "2024-10-10",
        completed: false,
        score: 0,
    });
    
    const [module, setModule] = useState ({
        id: 1,
        name: "ExpressJS",
        description: "Build HTTP Server",
        course: "Web Development",
    })

    const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;
    const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`
    return (
        <div id="wd-working-with-objects">
            <h3>Working With Objects</h3>
            <h4>Retrieving Objects</h4>
            <a id="wd-retrieve-assignments" href={`${REMOTE_SERVER}/lab5/assignment`} className="btn btn-primary">
                Get Assignment
            </a>
            <br /><br />

            <h4>Retrieving Properties</h4>
            <a id="wd-retrieve-assignment-title" href={`${REMOTE_SERVER}/lab5/assignment/title`} className="btn btn-primary">
                Get title
            </a>

            <br /><br />

        
            <h4>Modifying Properties</h4>
            <a id="wd-update-assignment-title" 
                href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}
                className="btn btn-primary float-end">
                Update Assignment Title
            </a>
            <input className="form-control w-75" id="wd-assignment-title"
            value={assignment.title} 
            onChange={(e) => setAssignment({...assignment, title: e.target.value})} />
            <br /><br />
            <h3>Retrieve Module</h3>
            <a id="wd-retrieve-module" href={`${MODULE_API_URL}`} className="btn btn-primary mb-2">
                Get Module
            </a>
            <br />
            <h3>Retrieve Module Name</h3>
            <a id="wd-retrieve-module-name" href={`${MODULE_API_URL}/name`} className="btn btn-primary mb-2">
                Get Module Name
            </a>
            <br />
            <a id="wd-update-module-name" href={`${MODULE_API_URL}/name/${module.name}`}
            className="btn btn-primary float-end">
                Update  Module Name
            </a>
            <input id="wd-module-name" className="form-control w-75" value={module.name}
            onChange={(e) => (setModule({...module, name: e.target.value}))} />
            <br />
            <h3>Modify Assignment Score and status</h3>
            <a id="wd-update-assignment-score" href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}
            className="btn btn-primary float-end">
                Update Assignment Score
            </a>
            <input id="wd-assignment-score" className="form-control w-50" type="number"  value={assignment.score}
            onChange={(e) => (setAssignment({...assignment, score: Number(e.target.value)}))} />
            <br />
            <a id="wd-update-assignment-completed" href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}
            className="btn btn-primary float-end">
                Update Assignment Status
            </a>
            <input id="wd-assignment-completed" type="checkbox"  checked={assignment.completed}
            onChange={(e) => (setAssignment({...assignment, completed: e.target.checked}))} />
            <label id="wd-assignment-completed">Completed</label>
            <br />
            <hr />
            <h3>Modify Module Description</h3>
            <a id="wd-update-module-description" href={`${MODULE_API_URL}/description/${module.description}`}
            className="btn btn-primary float-end">
                Update Module Description
            </a>
            <input id="wd-module-description" className="form-control w-50" value={module.description}
            onChange={(e) => (setModule({...module, description:e.target.value}))} />
            <br />
       
            
        </div>
    )
}