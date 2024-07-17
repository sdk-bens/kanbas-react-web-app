import "./index.css";
import CoursesNavigation from "../Navigation";
import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { updateAssignment, deleteAssignment } from "./reducer"; 
import { useSelector, useDispatch } from "react-redux";
import * as client from "./client";

export default function AssignmentEditor() {
    const { cid, id } = useParams();
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);

    const [assignmentData, setAssignmentData] = useState({
        title: "",
        description: "",
        points: "",
        dueDate: "",
        available: "",
        availableUntil: ""
    });

    useEffect(() => {
        const assignment = assignments.find((assign: any) => assign._id === id);
        if (assignment) {
            setAssignmentData({
                title: assignment.title,
                description: assignment.description,
                points: assignment.points.toString(),
                dueDate: assignment.dueDate,
                available: assignment.available,
                availableUntil: assignment.availableUntil
            });
        }
    }, [id, assignments]);

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setAssignmentData({ ...assignmentData, [name]: value });
    };

   

    const handleSave = async () => {
        try {
            await client.updateAssignment({
                ...assignments.find((assign: any) => assign._id === id),
                ...assignmentData
            });
            console.log("Assignment updated successfully!");
        } catch (error) {
            console.error("Error updating assignment:", error);
        }
    };

    

    return (
        <div id="wd-assignment-editor" className="row">
            <div id="wd-assignments-editor-course-navigation" className="d-none d-md-block col-md-3">
                <CoursesNavigation />
            </div>

            <div id="wd-assignments-editor-content" className="col-12 col-md-9">
                {assignments.filter((assign: any) => assign._id === id).map((assignment: any) => (
                    <div key={assignment._id}>
                        <form>
                            <div className="form-group mb-2">
                                <label className="m-1" htmlFor="wd-assignment-name">
                                    Assignment Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="wd-assignment-name"
                                    name="title"
                                    value={assignmentData.title}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </form>

                        <form>
                            <div className="form-group mb-2">
                                <textarea
                                    className="form-control"
                                    id="wd-assignment-description"
                                    name="description"
                                    value={assignmentData.description}
                                    onChange={handleInputChange}
                                    style={{
                                        whiteSpace: "pre-wrap",
                                        minHeight: "5rem",
                                        padding: "0.5rem",
                                        border: "1px solid #ced4da",
                                        borderRadius: "0.25rem",
                                        width: "100%"
                                    }}
                                />
                            </div>
                        </form>

                        <form>
                            <div className="form-group mb-2">
                                <div className="row align-items-center justify-content-end">
                                    <div className="col-auto">
                                        <label className="form-label m-1" htmlFor="wd-points">
                                            Points
                                        </label>
                                    </div>
                                    <div className="col-8">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="wd-points"
                                            name="points"
                                            value={assignmentData.points}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        </form>
                        <form>
                <div className="form-group mb-2">
                    <div className="row align-items-center justify-content-end">
                        <div className="col-auto">
                            <label htmlFor="wd-assignment-group" className="form-label">
                            Assignment Group
                            </label>
                        </div>
                        <div className="col-8">
                            <select id="wd-wd-assignment-group" className="form-select">
                                <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
                                <option value="QUIZZES">QUIZZES</option>
                                <option value="EXAMS">EXAMS</option>
                                <option value="PROJECT">PROJECT</option>
                            </select>
                        </div>
                    </div>
                </div>
                </form>
                <form>
                <div className="form-group mb-2">
                    <div className="row align-items-center justify-content-end">
                        <div className="col-auto">
                            <label htmlFor="wd-display-grade-as" className="form-label">
                                Displayed Grade as
                            </label>
                        </div>
                    <div className="col-8">
                        <select id="wd-display-grade-as" className="form-select">
                        <option selected value="Percentage">Percentage</option>
                        <option value="Point">Point</option>
                        <option value="Letter">Letter</option>
                        </select>
                    </div>
                    </div>
                </div>
                </form>

                <form>
                    <div className="row mb-3 justify-content-end">
                        <div className="col-auto">
                            <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
                        </div>

                        <div id="wd-submission-type" className="col-8">
                            <div className="border rounded me-3 p-3 mb-3 col-md-12 justify-content-end ">
                                <div className="col-md-8 mb-3">
                                    <select id="wd-submission-type-drop-down" className="form-select">
                                        <option selected value="Online">Online</option>
                                        <option value="Offline">Offline</option>
                                    </select>
                                </div>

                                <form>
                                    <div className="form-group mb-2">
                                        <label className="m-1 fw-bold form-label" htmlFor="wd-submission-type-options">
                                            Online Entry Options
                                        </label>

                                        <div id="wd-submission-type-options">
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" id="text-entry" />
                                                <label className="form-check-label" htmlFor="text-entry">Text Entry</label>
                                            </div>
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" id="website-url" />
                                                <label className="form-check-label" htmlFor="website-url">Website URL</label>
                                            </div>
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" id="media-recordings" />
                                                <label className="form-check-label" htmlFor="media-recordings">Media Recordings</label>
                                            </div>
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" id="student-annotation" />
                                                <label className="form-check-label" htmlFor="student-annotation">Student Annotation</label>
                                            </div>
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" id="file-uploads" />
                                                <label className="form-check-label" htmlFor="file-uploads">File Uploads</label>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>                
                </form>
                <form>
                    <div className='row mb-3 justify-content-end'>
                        <div className="col-auto">
                            <label htmlFor="wd-assign" className="form-label">Assign</label>
                        </div>
                            <div id="wd-assign" className="col-8">
                                <div className="border rounded me-3 p-3 mb-3 col-md-12 justify-content-end">
                                    <form>
                                        <div className="form-group mb-2">
                                            <label className="m-1 fw-bold" htmlFor="wd-assign-to">
                                            Assign to
                                            </label>
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                id="wd-assign-to"
                                                placeholder="Everyone"
                                                defaultValue={"Everyone"}
                                            />
                                        </div>
                                    </form>

                                    <form>
                                        <div className="form-group mb-2">
                                            <label className="m-1 fw-bold" htmlFor="wd-assign-due">
                                                Due
                                            </label>
                                            <input 
                                                type="date" 
                                                className="form-control" 
                                                id="wd-assign-due"
                                                placeholder="2024-05-13"
                                                name="dueDate"
                                                // value={assignmentData.dueDate}
                                                defaultValue={"2024-05-13"}
                                                onChange={handleInputChange}    
                                            />

                                        </div>
                                    </form>
                            
                                    <div className="row mb-3 justify-content-start">
                                        <div className="col-6">

                                            <form>
                                                <div className="form-group mb-2">
                                                    <label className="m-1 fw-bold" htmlFor="wd-assign-available-from">
                                                        Available from
                                                    </label>

                                                    <input 
                                                        type="date" 
                                                        className="form-control" 
                                                        id="wd-assign-available-from"
                                                        placeholder="2024-05-13"
                                                        name="available"
                                                        // value={assignmentData.available}
                                                        defaultValue={"2024-05-13"}
                                                        onChange={handleInputChange}



                                                    />
                                                
                                                </div>
                                            </form>

                                        </div>

                                        <div className="col-6">

                                            <form>
                                                <div className="form-group mb-2">
                                                    <label className="m-1 fw-bold" htmlFor="wd-assign-until">
                                                    Until
                                                    </label>

                                                    <input 
                                                        type="date" 
                                                        className="form-control" 
                                                        id="wd-assign-until"
                                                        placeholder="2024-05-13"
                                                        defaultValue={"2024-05-13"}
                                                        name="availableUntil"
                                                        onChange={handleInputChange}

                                                    />
                                                
                                                </div>
                                            </form>
                                        </div>                                 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>


                        <hr className="my-4" />
                        <div className="row mb-3">
                            <div className="col text-end">
                                <Link to={`/Kanbas/Courses/${cid}/Assignments`} className='btn btn-secondary me-2' id="wd-cancel" >
                                    Cancel
                                </Link>
                                
                                <Link to={`/Kanbas/Courses/${cid}/Assignments`} 
                                    className='btn btn-danger me-2' 
                                    id="wd-cancel"
                                    onClick={handleSave}
                                    >
                                        Save
                                </Link>

                                
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}


