import React from 'react';
import CoursesNavigation from '../Navigation';
export default function AssignmentEditor() {
    return (
        <div id="wd-assignment-editor" className="row">
            <div id="wd-assignments-editor-course-navigation" className="d-none d-md-block col-md-3">
                <CoursesNavigation />
            </div>

            <div id="wd-assignments-editor-content" className="col-12 col-md-9">
                <div className="mb-3">
                    <label htmlFor="wd-name" className="form-label">Assignment Name</label>
                    <input id="wd-name" value="A1" className="form-control" />
                </div>

                <div className="mb-3">
                    <div
                        id="wd-description"
                        className="form-control"
                        contentEditable
                        style={{ whiteSpace: "pre-wrap", minHeight: "10rem", padding: "0.5rem", border: "1px solid #ced4da", borderRadius: "0.25rem" }}
                    >
                        The assignment is <span className='text-danger'>available online</span>.<br/>
                        Submit a link to the landing page of your Web application running on Netlify.<br/>
                        The landing page should include the following:<br/>
                        <ul>
                            <li>your full name and section,</li>
                            <li>links to each of the lab assignments, link to the Kanbas application,</li>
                            <li>links to all relevant source code repositories,</li>
                        </ul>
                        the Kanbas application should include a link to navigate back to the landing page.
                    </div>
                </div>

                <div className="row mb-3 justify-content-end">
                    <div className="col-md-4 text-end">
                        <label htmlFor="wd-points" className="form-label">Points</label>
                    </div>
                    <div className="col-md-8">
                        <input id="wd-points" value={100} className="form-control" />
                    </div>
                </div>

                <div className="row mb-3 justify-content-end">
                    <div className="col-md-4 text-end">
                        <label htmlFor="wd-group" className="form-label">Assignment Group</label>
                    </div>
                    <div className="col-md-8">
                        <select id="wd-group" className="form-select">
                            <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
                            <option value="QUIZZES">QUIZZES</option>
                            <option value="EXAMS">EXAMS</option>
                            <option value="PROJECT">PROJECT</option>
                        </select>
                    </div>
                </div>

                <div className="row mb-3 justify-content-end">
                    <div className="col-md-4 text-end">
                        <label htmlFor="wd-display-grade-as" className="form-label">Displayed Grade as</label>
                    </div>
                    <div className="col-md-8">
                        <select id="wd-display-grade-as" className="form-select">
                            <option selected value="Percentage">Percentage</option>
                            <option value="Point">Point</option>
                            <option value="Letter">Letter</option>
                        </select>
                    </div>
                </div>

                <div className="row mb-3 justify-content-end">
                    <div className="col-md-4 text-end">
                        <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
                    </div>

                    <div className="col-md-8">
                        <div className="border rounded me-3 p-3 mb-3 col-md-12 justify-content-end ">

                            <div className="col-md-8 mb-3">
                                <select id="wd-submission-type" className="form-select">
                                    <option selected value="Online">Online</option>
                                    <option value="Offline">Offline</option>
                                </select>
                            </div>
                            <div className="col-md-8">
                                <label className="form-label fw-bold">Online Entry Options</label>
                                
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="wd-text-entry"/>
                                    <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="wd-website-url"/>
                                    <label className="form-check-label" htmlFor="wd-website-url">Website URL</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="wd-media-recordings"/>
                                    <label className="form-check-label" htmlFor="wd-media-recordings">Media Recordings</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="wd-student-annotation"/>
                                    <label className="form-check-label" htmlFor="wd-student-annotation">Student Annotation</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="wd-file-upload"/>
                                    <label className="form-check-label" htmlFor="wd-file-upload">File Uploads</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                
        

                <div className='row mb-3 justify-content-end'>
                    <div className="col-md-4 text-end">
                        <label htmlFor="wd-submission-type" className="form-label">Assign</label>
                    </div>

                    
                    <div className="col-md-8">
                        <div className="border rounded me-3 p-3 mb-3 col-md-12 justify-content-end">
                            <div className="row  justify-content-start">
                                <div className="col-md-12 fw-bold text-start">
                                    <label htmlFor="wd-assign-to" className="form-label">Assign to</label>
                                </div>
                            </div>

                            <div className="col-md-12 mb-2 ">
                                    <input id="wd-assign-to" value="everyone" className="form-control" />
                            </div> 

                            <div className="row justify-content-start">
                                <div className="col-md-12 fw-bold text-start">
                                    <label htmlFor="wd-due-date" className="form-label">Due</label>
                                </div>
                            </div>
                            <div className="col-md-12 mb-2">
                                    <input type="date" id="wd-due-date" value="2024-05-13" className="form-control"/>
                            </div>

                            <div className="row mb-3 justify-content-start">
                                <div className="col-6">
                                    <div className="col-md-12 text-start fw-bold">
                                        <label htmlFor="wd-available-from" className="form-label">Available from</label>
                                    </div>
                                    
                                    <div className="col-md-12 text-start">
                                        <input type="date" id="wd-available-from" value="2024-05-13" className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="col-md-12 text-start fw-bold">
                                        <label htmlFor="wd-available-until" className="form-label">Until</label>
                                    </div>
                                    
                                    <div className="col-md-12">
                                        <input type="date" id="wd-available-until" value="2024-05-13" className="form-control"/>
                                    </div>

                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="my-4" />

                <div className="row mb-3">
                    <div className="col text-end">
                        <button id="wd-cancel" className="btn btn-secondary me-2">Cancel</button>
                        <button id="wd-save"  className="btn btn-danger">Save</button>
                    </div>
                </div>
            </div>
        </div>
        
    );
}
