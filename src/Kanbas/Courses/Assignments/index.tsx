import AssignmentsControls from "./AssignmentsControls";
import { BsGripVertical } from "react-icons/bs";
import { BsPlus } from "react-icons/bs";
import { MdOutlineEditNote } from "react-icons/md";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { IoEllipsisVertical } from "react-icons/io5";
import "./index.css"
import CoursesNavigation from "../Navigation";
import * as db from "../../Database"
import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { addAssignment, deleteAssignment, updateAssignment, setAssignments } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import AssignmentControlButtons from "./AssignmentControlButton";
import { FaPlus } from "react-icons/fa";

import * as client from "./client";


export default function Assignments() {
  
  const { cid } = useParams();
  const [ assignmentTitle, setAssignmentTitle ] = useState("");
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch();

  const dateObjectToHtmlDateString = (date: Date) => {
    return `${date.getFullYear()}-${date.getMonth() + 1 < 10 ? 0 : ""}${date.getMonth()+1}
    -${date.getDate() + 1 < 10 ? 0 : ""}${date.getDate() + 1}`;
  };

  const fetchAssignment = async () => {
    const assignment = await client.findAssignmentsForCourse(cid as string);
    dispatch(setAssignments(assignment));
  };
  useEffect(() => {
    fetchAssignment();
  }, []);

  const removeAssignment = async (assignmentId: string) => {
    await client.deleteAssignment(assignmentId);
    dispatch(deleteAssignment(assignmentId));
  };



    return (
      <div id="wd-assignments" className="row">
         <div id="wd-assignments-course-navigation" className="d-none d-md-block col-md-3">
          <CoursesNavigation />
         </div>

    
        <div id="wd-assignments-contents" className="col-12 col-md-9">
          <div id="wd-assignments-control" className="row mb-3 justify-content-end">
            <AssignmentsControls />< br /><br />
          </div>
          

         
          <ul id="wd-assignments-list" className="list-group rounded-0">
            <li className="wd-assignments list-group-item p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                ASSIGNMENTS 
                <div className="float-end fs-5">
                  <span className="border rounded-5 p-2">40% of Total</span> 
                  <BsPlus className="fs-3"/> 
                  <IoEllipsisVertical className="fs-4" />
                </div>
              </div>

              <ul className="wd-assignments list-group rounded-0 border-5 border-start border-success">
                {assignments.filter((assignment: any) => assignment.course === cid).map((assignment: any) => (
                  <li key={assignment._id} className="wd-assignments list-group-item p-3 ps-1">
                    <div className="row align-items-center">
                      <div className="col-auto">
                        <BsGripVertical className="me-2 fs-2 text-success" />
                      </div>
                      <div className="col">
                        <a 
                          className="wd-assignment-link fw-bold text-dark text-decoration-none"
                          href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                        >
                          {assignment.title}
                        </a>
                        
                        <div className="fs-6">
                          <span className="text-danger">Multiple Modules </span> |
                          <span className="text-muted">
                            {/* <span className="fw-bold"> Not available until</span> {dateObjectToHtmlDateString(assignment.available)} |
                            <span className="fw-bold"> Due</span> {dateObjectToHtmlDateString(assignment.dueDate)} at 11:59 pm | */}
                            <span className="fw-bold"> Not available until</span> {assignment.available} |
                            <span className="fw-bold"> Due</span> {assignment.dueDate} at 11:59 pm |
                            <span className="fw-bold"> Points</span> {assignment.points}
                          </span>
                        </div>
                      </div>
                      <div className="col-auto">
                        <AssignmentControlButtons
                        assignmentId={assignment._id} 
                        deleteAssignment={(assignmentId) => { removeAssignment(assignmentId);
                      
                        }} />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
  }
                
