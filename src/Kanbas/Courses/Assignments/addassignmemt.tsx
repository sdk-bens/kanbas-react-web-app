import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addAssignment } from "./reducer";

export default function AddAssignmentForm() {
  const { cid } = useParams();
  const dispatch = useDispatch();

  const [assignmentData, setAssignmentData] = useState({
    title: "New Assignment",
    description: "New Assignment Description",
    points: "100",
    dueDate: "2024-07-17",
    available: "2024-07-01",
    availableUntil: ""
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setAssignmentData({ ...assignmentData, [name]: value });
  };

  const handleSave = () => {
    const newAssignment = {
      _id: new Date().getTime().toString(),
      ...assignmentData,
      course: cid
    };
    dispatch(addAssignment(newAssignment));
  };

  return (
    <div id="wd-assignments-editor" className="ms-5">
      <label htmlFor="wd-name" className="mb-2">Assignment Name</label>
      <input
        type="text"
        className="form-control"
        id="wd-assignment-name"
        name="title"
        value={assignmentData.title}
        onChange={handleInputChange}
      />
      <br />
      <br />
      <textarea
        id="wd-description"
        className="form-control"
        style={{ width: "800px", height: "400px" }}
        name="description"
        value={assignmentData.description}
        onChange={handleInputChange}
      />
      <br />
      <div className="col">
        <div className="wd-flex-row-container">
          <label htmlFor="wd-points" className="me-3 pt-1" style={{ marginLeft: "240px" }}>Points</label>
          <input
            id="wd-points"
            className="form-control"
            name="points"
            value={assignmentData.points}
            style={{ width: "500px" }}
            onChange={handleInputChange}
          />
        </div>
        <br />
        <div className="wd-flex-row-container">
          <label htmlFor="wd-group" className="me-3 pt-1" style={{ marginLeft: "150px" }}> Assignment Group </label><br />
          <select id="wd-group" className="wd-css-styling-dropdowns" style={{ height: "40px", width: "500px", borderColor: "#E8E9EB", borderWidth: "2px", borderRadius: "5px" }}>
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          </select>
        </div><br /><br />
        <div className="wd-flex-row-container">
          <label htmlFor="wd-display-grade-as" className="me-3 pt-1" style={{ marginLeft: "160px" }}> Display Grade as </label><br />
          <select id="wd-display-grade-as" className="wd-css-styling-dropdowns" style={{ height: "40px", width: "500px", borderColor: "#E8E9EB", borderWidth: "2px", borderRadius: "5px" }}>
            <option value="PERCENTAGE">Percentage</option>
          </select>
        </div><br /><br />
        <div className="wd-flex-row-container float-start">
          <label htmlFor="wd-submission-type" style={{ marginLeft: "160px" }}> Submission Type </label>
          <p className="wd-border-fat wd-border-solid ms-3 pt-3 pb-3 ps-3 pe-3" style={{ width: "500px", borderColor: "#E8E9EB", borderWidth: "2px", borderRadius: "5px" }}>
            <select id="wd-submission-type" className="wd-css-styling-dropdowns" style={{ height: "40px", width: "450px", borderColor: "#E8E9EB", borderWidth: "2px", borderRadius: "5px" }}>
              <option value="ONLINE">Online</option>
            </select><br /><br />
            <b>Online Entry Options</b><br /><br />
            <input type="checkbox" name="check-genre" id="wd-text-entry" />
            <label htmlFor="wd-text-entry">&nbsp;&nbsp;Text Entry</label><br /><br />
            <input type="checkbox" name="check-genre" id="wd-website-url" />
            <label htmlFor="wd-website-url">&nbsp;&nbsp;Website URL</label><br /><br />
            <input type="checkbox" name="check-genre" id="wd-media-recordings" />
            <label htmlFor="wd-media-recordings">&nbsp;&nbsp;Media Recordings</label><br /><br />
            <input type="checkbox" name="check-genre" id="wd-student-annotation" />
            <label htmlFor="wd-student-annotation">&nbsp;&nbsp;Student Annotation</label><br /><br />
            <input type="checkbox" name="check-genre" id="wd-file-upload" />
            <label htmlFor="wd-file-upload">&nbsp;&nbsp;File Uploads</label><br /><br />
          </p>
        </div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <div className="wd-flex-row-container float-start">
          <label htmlFor="wd-assign-to" style={{ marginLeft: "234px" }}> Assign </label>
          <p className="wd-border-fat wd-border-solid ms-3 pt-3 pb-3 ps-3 pe-3" style={{ width: "500px", borderColor: "#E8E9EB", borderWidth: "2px", borderRadius: "5px" }}>
            <label htmlFor="wd-assign-to" className="mb-1"><b>Assign to</b></label><br />
            <input id="wd-assign-to" className="form-control" value="Everyone" /><br /><br />
            <div style={{ backgroundColor: "#F2F2F2", borderRadius: "3px", paddingLeft: "100px", marginLeft: "15px", marginTop: "-78px", width: "125px" }}><b>x</b></div><br />
            <label htmlFor="wd-due-date"> <b>Due</b> </label> <br />
            <input
              type="date"
              className="form-control"
              id="wd-due-date"
              name="dueDate"
              value={assignmentData.dueDate}
              onChange={handleInputChange}
            /><br /><br />
            <div className="wd-flex-row-container">
              <div>
                <label htmlFor="wd-available-from"> <b>Available from</b> </label>
                <input
                  type="date"
                  className="form-control"
                  id="wd-available-from"
                  name="available"
                  value={assignmentData.available}
                  onChange={handleInputChange}
                  style={{ width: "225px" }}
                />
              </div>
              <div className="ms-3">
                <label htmlFor="wd-available-until"> <b>Until</b> </label><br />
                <input
                  type="date"
                  className="form-control"
                  id="wd-available-until"
                  name="availableUntil"
                  value={assignmentData.availableUntil}
                  onChange={handleInputChange}
                  style={{ width: "225px" }}
                /><br />
              </div>
            </div>
          </p>
        </div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <hr />
        <div className="row mb-3">
          <div className="col text-end">
            <Link to={`/Kanbas/Courses/${cid}/Assignments`} className='btn btn-secondary me-2' id="wd-cancel">
              Cancel
            </Link>
            <Link
              to={`/Kanbas/Courses/${cid}/Assignments`}
              className='btn btn-danger me-2'
              id="wd-save"
              onClick={handleSave}
            >
              Save
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
