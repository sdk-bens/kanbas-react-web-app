import React from 'react';
import GradesControl from "./GradesControls";
import CoursesNavigation from "../Navigation";
import { AiOutlineSearch } from 'react-icons/ai';
import { FaFilter } from "react-icons/fa6";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as db from "../../Database";
import { useParams } from "react-router";
import { TbFileArrowRight } from "react-icons/tb";

export default function Grades() {
  const { cid } = useParams<{ cid: string }>();
  const courses  = db.courses;
  const enrollments  = db.enrollments;
  const grades  = db.grades;
  const users  = db.users;

  const enrolledUsers: string[] = enrollments
    .filter(enrollment => enrollment.course === cid)
    .map(enrollment => enrollment.user);

  const enrolledUserDetails  = users.filter(user => enrolledUsers.includes(user._id));

  const assignmentsForCourse  = grades.filter(grade => enrolledUsers.includes(grade.student));

  const assignmentIds: string[] = [];
  assignmentsForCourse.forEach(assignment => {
    if (!assignmentIds.includes(assignment.assignment)) {
      assignmentIds.push(assignment.assignment);
    }
  });

  const getGrade = (studentId: string, assignmentId: string): string => {
    const gradeEntry = grades.find(grade => grade.student === studentId && grade.assignment === assignmentId);
    return gradeEntry ? gradeEntry.grade : '';
  };

  return (
    <div id="wd-grades" className="row ps-3">
      <div id="wd-grades-navigation" className="d-none d-md-block col-md-3">
        <CoursesNavigation />
      </div>

      <div id="wd-grades-content" className="col-12 col-md-9">
        <div id="wd-grades-controls-buttons" className="row mb-3 justify-content-end">
          <GradesControl />
        </div>

        <div className="row mb-5">
          <div className="col-6">
            <form>
              <div className="form-group">
                <label className="fw-bold m-1" htmlFor="wd-student-search">
                  Student Names
                </label>
                <div className="input-group rounded-2">
                  <div className="wd-grades-search-icon-position">
                    <AiOutlineSearch className="fs-5 text-secondary"/>
                  </div>
                  <input 
                    type="text" 
                    className="form-control rounded-2 ps-5" 
                    id="wd-student-search"
                    placeholder="Search Students" 
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="col-6">
            <form>
              <div className="form-group">
                <label className="fw-bold m-1" htmlFor="wd-assignment-search">
                  Assignment Names
                </label>
                <div className="input-group rounded-2">
                  <div className="wd-grades-search-icon-position">
                    <AiOutlineSearch className="fs-5 text-secondary"/>
                  </div>
                  <input 
                    type="text" 
                    className="form-control rounded-2 ps-5" 
                    id="wd-assignment-search"
                    placeholder="Search Assignments" 
                  />
                </div>
              </div>
            </form>
          </div>
        </div>

        <div id="wb-grade-filter">
          <button id="wd-import-grades-btn" className="btn btn-md btn-secondary me-2 mb-4">
            <FaFilter className="me-2 fs-5" />
            Apply Filter
          </button>
        </div>

        <div id="wd-grades-table" className="table-responsive col-12">
          <table className="table table-striped table-bordered table-hover">
            <thead>
              <tr>
                <th>Student Name</th>
                {assignmentIds.map(assignmentId => (
                  <th key={assignmentId} className="text-center">{assignmentId}<br/><span className="small">Out of 100</span></th>
                ))}
              </tr>
            </thead>
            <tbody>
              {enrolledUserDetails.map(user => (
                <tr key={user._id}>
                  <td className="text-danger">{`${user.firstName} ${user.lastName}`}</td>
                  {assignmentIds.map(assignmentId => (
                    <td key={assignmentId} className="text-center" tabIndex={0}>
                      <div className="input-group bg-light w-75 mx-auto bg-transparent">
                        <input 
                          type="text" 
                          className="form-control text-center border-red-on-focus rounded-2 w-50 bg-inherit input-transparent-border" 
                          placeholder={getGrade(user._id, assignmentId)} 
                          defaultValue={getGrade(user._id, assignmentId)}
                        />
                        <div className="input-group-append submit-button-container">
                          <button className="btn btn-secondary ms-2 submit-button">
                            <TbFileArrowRight />
                          </button>
                        </div>
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
