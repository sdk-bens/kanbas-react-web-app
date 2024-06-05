import AssignmentsControls from "./AssignmentsControls";
import { BsGripVertical } from "react-icons/bs";
import { BsPlus } from "react-icons/bs";
import { MdOutlineEditNote } from "react-icons/md";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { IoEllipsisVertical } from "react-icons/io5";
import "./index.css"

import CoursesNavigation from "../Navigation";
export default function Assignments() {
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
                  <span className="border rounded-5 p-2">40% of Total</span> <BsPlus className="fs-3"/> <IoEllipsisVertical className="fs-4" />
                </div>
              </div>
              <ul className="wd-assignments list-group rounded-0 border-5 border-start border-success">
                <li className="wd-assignments list-group-item p-3 ps-1">
                  <div className="row align-items-center">
                      <div className="col-auto">
                            <BsGripVertical className="me-2 fs-3" />
                      </div>
                      <div className="col-auto">
                            <MdOutlineEditNote className="me-2 fs-2 text-success" />
                      </div>
                      <div className="col">
                        <a className="wd-assignment-link fw-bold text-dark text-decoration-none"
                            href="#/Kanbas/Courses/1234/Assignments/123">
                              A1
                        </a>
                    
                        <div className="fs-6">
                          <span className="text-danger">Multiple Modules </span><span className="text-muted">| <span className="fw-bold">Not available until</span><span> May 6 at 12:00 am </span>
                          |</span>
                        </div>
                        <div className="fs-6 text-muted">
                          <span className="fw-bold">Due </span><span>May 13 at 11:59 pm </span><span>|</span><span> 100 pts </span>
                        </div>
                      </div>
                      <div className="col-auto">
                        <LessonControlButtons />
                      </div>
                    </div>
                </li>

                <li className="wd-assignments list-group-item p-3 ps-1">
                  <div className="row align-items-center">
                      <div className="col-auto">
                            <BsGripVertical className="me-2 fs-3" />
                      </div>
                      <div className="col-auto">
                            <MdOutlineEditNote className="me-2 fs-2 text-success" />
                      </div>
                      <div className="col">
                        <a className="wd-assignment-link fw-bold text-dark text-decoration-none"
                          href="#/Kanbas/Courses/1234/Assignments/123">
                            A2
                        </a>
                        <div className="fs-6">
                          <span className="text-danger">Multiple Modules </span><span className="text-muted">|  <span className="fw-bold">Not available until</span><span> May 13 at 12:00 am </span>
                          |</span>
                        </div>
                        <div className="fs-6 text-muted">
                          <span className="fw-bold">Due </span><span>May 20 at 11:59 pm </span> <span>|</span> <span> 100 pts </span>
                        </div>
                      </div>
                      <div className="col-auto">
                        <LessonControlButtons />
                      </div>
                    </div>
                </li>

                <li className="wd-assignments list-group-item p-3 ps-1">
                  <div className="row align-items-center">
                      <div className="col-auto">
                            <BsGripVertical className="me-2 fs-3" />
                      </div>
                      <div className="col-auto">
                            <MdOutlineEditNote className="me-2 fs-2 text-success" />
                      </div>
                      <div className="col">
                        <a className="wd-assignment-link fw-bold text-dark text-decoration-none"
                            href="#/Kanbas/Courses/1234/Assignments/123">
                              A3
                        </a>
                        <div className="fs-6">
                          <span className="text-danger">Multiple Modules </span><span className="text-muted">| <span className="fw-bold">Not available until</span><span> May 20 at 12:00 am </span>
                          |</span>
                        </div>
                        <div className="fs-6 text-muted">
                          <span className="fw-bold">Due</span><span> May 27 at 11:59 pm </span> <span>|</span> <span> 100 pts </span>
                        </div>
                      </div>
                      <div className="col-auto">
                        <LessonControlButtons />
                      </div>
                    </div>
                </li>

                <li className="wd-assignments list-group-item p-3 ps-1">
                  <div className="row align-items-center">
                      <div className="col-auto">
                            <BsGripVertical className="me-2 fs-3" />
                      </div>
                      <div className="col-auto">
                            <MdOutlineEditNote className="me-2 fs-2 text-success" />
                      </div>
                      <div className="col">
                      <a className="wd-assignment-link fw-bold text-dark text-decoration-none"
                            href="#/Kanbas/Courses/1234/Assignments/123">
                              A4
                        </a>
                        <div className="fs-6">
                          <span className="text-danger">Multiple Modules </span><span className="text-muted">| <span className="fw-bold">Not available until</span><span> June 19 at 12:00 am </span>
                          |</span>
                        </div>
                        <div className="fs-6 text-muted">
                          <span className="fw-bold">Due</span><span> Jul 3 at 11:59 pm </span> <span>|</span> <span> 100 pts </span>
                        </div>
                      </div>
                      <div className="col-auto">
                        <LessonControlButtons />
                      </div>
                    </div>
                </li>

                <li className="wd-assignments list-group-item p-3 ps-1">
                  <div className="row align-items-center">
                      <div className="col-auto">
                            <BsGripVertical className="me-2 fs-3" />
                      </div>
                      <div className="col-auto">
                            <MdOutlineEditNote className="me-2 fs-2 text-success" />
                      </div>
                      <div className="col">
                      <a className="wd-assignment-link fw-bold text-dark text-decoration-none"
                            href="#/Kanbas/Courses/1234/Assignments/123">
                              A5
                        </a>
                        <div className="fs-6">
                          <span className="text-danger">Multiple Modules </span><span className="text-muted">| <span className="fw-bold">Not available until</span><span> Jul 3 at 12:00 am </span>
                          |</span>
                        </div>
                        <div className="fs-6 text-muted">
                          <span className="fw-bold">Due</span><span> Jul 17 at 11:59 pm </span> <span>|</span> <span> 100 pts </span>
                        </div>
                      </div>
                      <div className="col-auto">
                        <LessonControlButtons />
                      </div>
                    </div>
                </li>

                <li className="wd-assignments list-group-item p-3 ps-1">
                  <div className="row align-items-center">
                      <div className="col-auto">
                            <BsGripVertical className="me-2 fs-3" />
                      </div>
                      <div className="col-auto">
                            <MdOutlineEditNote className="me-2 fs-2 text-success" />
                      </div>
                      <div className="col">
                      <a className="wd-assignment-link fw-bold text-dark text-decoration-none"
                            href="#/Kanbas/Courses/1234/Assignments/123">
                              A6
                        </a>
                        <div className="fs-6">
                          <span className="text-danger">Multiple Modules </span><span className="text-muted">| <span className="fw-bold">Not available until</span><span> Jul 17 at 12:00 am </span>
                          |</span>
                        </div>
                        <div className="fs-6 text-muted">
                          <span className="fw-bold">Due</span><span> Jul 31 at 11:59 pm </span> <span>|</span> <span> 100 pts </span>
                        </div>
                      </div>
                      <div className="col-auto">
                        <LessonControlButtons />
                      </div>
                    </div>
                </li>

                
              </ul>
            </li>
          </ul> 
        </div>
      </div>
  );}
  