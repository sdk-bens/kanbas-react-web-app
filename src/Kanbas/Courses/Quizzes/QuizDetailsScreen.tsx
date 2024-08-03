import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addQuiz } from "./reducer";
import CoursesNavigation from "../Navigation";
import * as client from "./client"; 



export default function QuizDetails() {
    const { cid, aid } = useParams();
    const dispatch = useDispatch();
    const  [timeLimitCheck, setTimeLimitCheck] = useState(false);


    const [quizData, setQuizData] = useState({
        title: "New Quiz",
        description: "New Quiz Description",
        points: "20",
        due: "2024-07-17",
        availableFrom: "2024-07-01",
        availableUntil: "2024-07-01",
        for: "Everyone",
        published: true,
        quizType: "Graded quiz",
        assignmentGroup: "Quizzes",
        accessCode: "1234",
        showCorrectAnswers: "After last attempt",
        showCorrectAnswersCheck: false,
        webcamRequired: false,
        timeLimit: "25",
        shuffleAnswers: true,
        multipleAttempts: false,
        attempts: "1",
        oneQuestionAtTime: true,
        lockQuestionAfterAnswering: false,
        timeLimitCheckbox: false,
    });

    const handleInputChange = (e: any) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            setQuizData({ ...quizData, [name]: checked });
        } else {
            setQuizData({ ...quizData, [name]: value });
        }
    };

    const handleSave = async () => {
        try {
            const newQuiz = await client.createQuiz(cid as string, quizData);
            dispatch(addQuiz(newQuiz));
        } catch (error) {
            console.error("Error creating quiz:", error);
        }
    };

    

    return (
        <div id="wd-quizzes-editor" className="row">
             
           <div id="wd-quizzes-editor-course-navigation" className="d-none d-md-block col-md-3">
                <CoursesNavigation />
            </div>
            <div id="wd-quizzes-editor-content" className="col-12 col-md-9">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="navbar-nav">
                        <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href={`${cid}/new`}>Details <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={`Quizzes/${cid}/questions`}>Questions</Link>

                        </li>
                        </ul>
                    </div>
                </nav>


          
                <form>
                    <div className="form-group mb-2">
                        <label className="m-1" htmlFor="wd-quizzes-name">
                            Quiz Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="wd-quiz-name"
                            name="title"
                            value={quizData.title}
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
                                    value={quizData.description}
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
                                            value={quizData.points}
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
                                        <label htmlFor="wd-quiz-group" className="form-label">
                                        Quiz Type
                                        </label>
                                    </div>
                                    <div className="col-8">
                                        <select id="wd-wd-quiz-group" className="form-select"
                                        name="quizType"
                                        value={quizData.quizType}
                                        onChange={handleInputChange}>
                                        <option selected value="Graded Quiz">Graded Quiz</option>
                                            <option value="Practice Quiz">Practice Quiz</option>
                                            <option value="Graded Survey">Graded Survey</option>
                                            <option value="Ungraded Survey">Ungraded Survey</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </form>

          
                        <form>
                            <div className="form-group mb-2">
                                <div className="row align-items-center justify-content-end">
                                    <div className="col-auto">
                                        <label htmlFor="wd-quiz-group" className="form-label">
                                        Assignment Group
                                        </label>
                                    </div>
                                    <div className="col-8">
                                        <select id="wd-wd-quiz-group" className="form-select"
                                        name="assignmentGroup"
                                        value={quizData.assignmentGroup}
                                        onChange={handleInputChange}>
                                            <option selected value="ASSIGNMENTS">QUIZZES</option>
                                            <option value="QUIZZES">ASSIGNMENTS</option>
                                            <option value="EXAMS">EXAMS</option>
                                            <option value="PROJECT">PROJECT</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </form>

                        <form>
                            <div className='row mb-3 justify-content-end'>
                            
                                    <div id="wd-assign" className="col-8">
                                        <div className=" rounded me-3 p-3 mb-3 col-md-12 justify-content-end">
                                        <form>
                                    
                                    <div className="form-group mb-2">
                                        <div className="row align-items-center justify-content-start">
                                            <label className="m-1 fw-bold" htmlFor="wd-assign-to">
                                            Options
                                            </label>
                                            
                                            <div className="col-1">
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input"
                                                    id="wd-shuffleAnswers"
                                                    name="shuffleAnswers"
                                                    checked={quizData.shuffleAnswers}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                            <div className="col-auto">
                                                <label className="form-label m-1" htmlFor="wd-shuffleAnswers">
                                                    Shuffle Answers
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <form>
                                    <div className="form-group mb-2">
                                        <div className="row align-items-center justify-content-start">
                                        
                                            <div className="col-1">
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input"
                                                    id="wd-timeLimitCheckbox"
                                                    name="timeLimitCheckbox"
                                                    checked={quizData.timeLimitCheckbox}
                                                    onChange={(e) => {
                                                        handleInputChange(e)
                                                    }}
                                                />
                                            </div>
                                            <div className="col-auto">
                                                <label className="form-label m-1" htmlFor="wd-timeLimitCheckbox">
                                                Time Limit
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                
                                    {quizData.timeLimitCheckbox && (
                                    
                                        
                                            <form>
                                                <div className="form-group mb-2">
                                                    <div className="row align-items-center justify-content-start">
                                                        <div className="col-4">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="wd-timeLimit"
                                                                name="timeLimit"
                                                                value={quizData.timeLimit}
                                                                onChange={handleInputChange}
                                                            
                                                            />
                                                        </div>
                                                        <div className="col-auto">
                                                            <label className="form-label m-1" htmlFor="wd-timeLimit">
                                                                Minutes
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                    
                                    )}
                                            
                                    
                                            
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <form>
                                <div className='row mb-3 justify-content-end'>
                                    <div id="wd-assign" className="col-8">
                                        <div className="  border rounded me-3 p-3 mb-3 col-md-12 justify-content-end">
                                            <form>
                                                <div className="form-group mb-2">
                                                    <div className="row align-items-center justify-content-start">
                                                
                                                        <div className="col-1">
                                                            <input
                                                                type="checkbox"
                                                                className="form-check-input"
                                                                id="wd-multipleAttempts"
                                                                name="multipleAttempts"
                                                                checked={quizData.multipleAttempts}
                                                                onChange={(e) => {
                                                                    handleInputChange(e)
                                                                }}
                                                            />
                                                        </div>
                                                        <div className="col-auto">
                                                            <label className="form-label m-1" htmlFor="wd-multipleAttempts">
                                                            Multiple Attempts
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                            {quizData.multipleAttempts && (
                                            <form>
                                                <div className="form-group mb-2">
                                                    <div className="row align-items-center justify-content-start">
                                                    
                                                        <div className="col-4">
                                                            <input
                                                            type="text"
                                                            className="form-control"
                                                            id="wd-attempts"
                                                            name="attempts"
                                                            value={quizData.attempts}
                                                            onChange={handleInputChange}
                                                            />
                                                        </div>
                                                        <div className="col-auto">
                                                            <label className="form-label m-1" htmlFor="wd-attempts">
                                                                Attempts
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                             )}
                                         </div>
                                    </div>
                                </div>
                            </form>
                            <form>
                                <div className='row mb-3 justify-content-end'>
                                    <div id="wd-assign" className="col-8">
                                        <div className="  border rounded me-3 p-3 mb-3 col-md-12 justify-content-end">
                                            <form>
                                                <div className="form-group mb-2">
                                                    <div className="row align-items-center justify-content-start">
                                                        <div className="col-1">
                                                            <input
                                                                type="checkbox"
                                                                className="form-check-input"
                                                                id="wd-showCorrectAnswersCheck"
                                                                name="showCorrectAnswersCheck"
                                                                checked={quizData.showCorrectAnswersCheck}
                                                                onChange={(e) => {
                                                                    handleInputChange(e)
                                                                }}
                                                            />
                                                        </div>
                                                        <div className="col-auto">
                                                            <label className="form-label m-1" htmlFor="wd-showCorrectAnswersCheck">
                                                                Show Answers
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                               
                                            {quizData.showCorrectAnswersCheck && (
                                                <form>
                                                    <div className="form-group mb-2">
                                                        <div className="row align-items-center justify-content-start">
                                                            <div className="col-auto mt-2">
                                                                <label htmlFor="wd-quiz-group" className="form-label">
                                                                After
                                                                </label>
                                                            </div>
                                                            <div className="col-8">
                                                                <select id="wd-wd-quiz-group" className="form-select" name="showCorrectAnswers"
                                                                                value={quizData.showCorrectAnswers}
                                                                                onChange={handleInputChange}>
                                                                    <option value="After each attempt">Each attempt</option>
                                                                    <option value="After last attempt">Last attempt</option>
                                                                    <option value="After the due date">The due date</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            )}
                                           
                                         </div>
                                    </div>
                                </div>
                            </form>
                    

                     
                     <form>
                            <div className="form-group mb-2">
                                <div className="row align-items-center justify-content-end">
                                    <div className="col-auto">
                                        <label className="form-label m-1" htmlFor="wd-accessCode">
                                            Access Code
                                        </label>
                                    </div>
                                    <div className="col-8">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="wd-accessCode"
                                            name="accessCode"
                                            value={quizData.accessCode}
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
                                        <label className="form-label m-1" htmlFor="wd-oneQuestionAtTime">
                                        One Question
                                        </label>
                                    </div>
                                    <div className="col-8">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="wd-oneQuestionAtTime"
                                            name="oneQuestionAtTime"
                                            checked={quizData.oneQuestionAtTime}
                                            onChange={(e) => {
                                                handleInputChange(e)
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </form>
                        <form>
                            <div className="form-group mb-2">
                                <div className="row align-items-center justify-content-end">
                                    <div className="col-auto">
                                        <label className="form-label m-1" htmlFor="wd-webcam">
                                            WebCam
                                        </label>
                                    </div>
                                    <div className="col-8">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="wd-webcam"
                                            name="webcamRequired"
                                            checked={quizData.webcamRequired}
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
                                        <label className="form-label m-1" htmlFor="wd-lockQuestionAfterAnswering">
                                            Lock Question
                                        </label>
                                    </div>
                                    <div className="col-8">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="wd-lockQuestionAfterAnswering"
                                            name="lockQuestionAfterAnswering"
                                            checked={quizData.lockQuestionAfterAnswering}
                                            onChange={handleInputChange}
                                        />
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
                                                placeholder={quizData.for}
                                                defaultValue={quizData.for}
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
                                                // placeholder="2024-05-13"
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
                                                        name="available"
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
            <hr />
            <div className="row mb-3">
                <div className="col text-end">
                    <Link to={`/Kanbas/Courses/${cid}/Quizzes`} className='btn btn-secondary me-2' id="wd-cancel">
                        Cancel
                    </Link>
                    <Link
                        to={`/Kanbas/Courses/${cid}/Quizzes`}
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
