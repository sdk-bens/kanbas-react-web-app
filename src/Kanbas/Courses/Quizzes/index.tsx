// import QuizControls from "./QuizControls";
// import { BsGripVertical } from "react-icons/bs";
// import { BsPlus } from "react-icons/bs";
// import { MdOutlineEditNote } from "react-icons/md";
// import LessonControlButtons from "../Modules/LessonControlButtons";
// import { IoEllipsisVertical } from "react-icons/io5";
// import "./index.css"
// import CoursesNavigation from "../Navigation";
// import * as db from "../../Database"
// import { Link, useParams } from "react-router-dom";
// import React, { useState, useEffect } from "react";
// import { addQuiz, deleteQuiz, updateQuiz, setQuizzes } from "./reducer";

// import { useSelector, useDispatch } from "react-redux";
// import QuizControlButtons from "./QuizControlButtons";
// import { FaPlus } from "react-icons/fa";

// import * as client from "./client";

// export default function Quizzes() {
//     const { cid } = useParams();
//     const [quizTitle, setQuizTitle] = useState("");
//     const { quizzes } = useSelector((state: any) => state.quizzesReducer);
//     const dispatch = useDispatch();

//     const fetchQuiz = async () => {
//         const quiz = await client.findQuizzesForCourse(cid as string);
//         dispatch(setQuizzes(quiz));
//     };

//     useEffect(() => {
//         fetchQuiz();
//     }, []);

//     const removeQuiz = async (quizId: string) => {
//         await client.deleteQuiz(quizId);
//         dispatch(deleteQuiz(quizId));
//     };

//     return (
//         <div id="wd-quizzes" className="row">
//             <div id="wd-quizzes-course-navigation" className="d-none d-md-block col-md-3">
//                 <CoursesNavigation />
//             </div>
//             <div id="wd-quizzes-contents" className="col-12 col-md-9">
//                 <div id="wd-quizzes-control" className="row mb-3 justify-content-end">
//                     <QuizControls />
//                 </div>
//                 <ul id="wd-quizzes-list" className="list-group rounded-0">
//                     <li className="wd-quizzes list-group-item p-0 mb-5 fs-5 border-gray">
//                         <div className="wd-title p-3 ps-2 bg-secondary">
//                             <BsGripVertical className="me-2 fs-3" />
//                             QUIZZES
//                             <div className="float-end fs-5">
//                                 <span className="border rounded-5 p-2">10% of Total</span>
//                                 <BsPlus className="fs-3" />
//                                 <IoEllipsisVertical className="fs-4" />
//                             </div>
//                         </div>
//                         <ul className="wd-quizzes list-group rounded-0 border-5 border-start border-success">
//                             {quizzes.filter((quiz: any) => quiz.course === cid).map((quiz: any) => (
//                                 <li key={quiz._id} className="wd-quizzes list-group-item p-3 ps-1">
//                                     <div className="row align-items-center">
//                                         <div className="col-auto">
//                                             <BsGripVertical className="me-2 fs-2 text-success" />
//                                         </div>
//                                         <div className="col">
//                                             <Link
//                                                 className="wd-quiz-link fw-bold text-dark text-decoration-none"
//                                                 to={`/Kanbas/Courses/${cid}/quizzes/${quiz._id}`}
//                                             >
//                                                 {quiz.title}
//                                             </Link>
//                                             <div className="fs-6">
//                                                 <span className="text-danger">Multiple Modules </span> |
//                                                 <span className="text-muted">
//                                                     <span className="fw-bold"> Not available until</span> {quiz.available} |
//                                                     <span className="fw-bold"> Due</span> {quiz.dueDate} at 11:59 pm |
//                                                     <span className="fw-bold"> Points</span> {quiz.points}
//                                                 </span>
//                                             </div>
//                                         </div>
//                                         <div className="col-auto">
//                                             <QuizControlButtons
//                                                 quizId={quiz._id}
//                                                 deleteQuiz={(quizId) => {removeQuiz(quizId)}}
//                                             />
//                                         </div>
//                                     </div>
//                                 </li>
//                             ))}
//                         </ul>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     );
// }
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { BsGripVertical } from "react-icons/bs";
import { BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import CoursesNavigation from "../Navigation";
import * as db from "../../Database";
import { addQuiz, deleteQuiz, updateQuiz, setQuizzes } from "./reducer";
import QuizControlButtons from "./QuizControlButtons";
import * as client from "./client";
import "./index.css";
import QuizControls from "./QuizControls";
import QuizDetails from "./QuizDetailsScreen";
import { useNavigate } from 'react-router-dom';


export default function Quizzes() {
  const { cid } = useParams();
  const [quizTitle, setQuizTitle] = useState("");
  const { quizzes } = useSelector((state: any) => state.quizzesReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const fetchQuiz = async () => {
    const quiz = await client.findQuizzesForCourse(cid as string);
    dispatch(setQuizzes(quiz));
  };

  useEffect(() => {
    fetchQuiz();
  }, []);

  const removeQuiz = async (quizId: string) => {
    await client.deleteQuiz(quizId);
    dispatch(deleteQuiz(quizId));
  };

  const navigateToQuizDetails = (quizId: string) => {
    navigate(`/new`);  };

  const publishQuiz = async (quizId: string) => {
    // Implement the logic to publish the quiz
  };

  const unpublishQuiz = async (quizId: string) => {
    // Implement the logic to unpublish the quiz
  };

  return (
    <div id="wd-quizzes" className="row">
      <div id="wd-quizzes-course-navigation" className="d-none d-md-block col-md-3">
        <CoursesNavigation />
      </div>
      <div id="wd-quizzes-contents" className="col-12 col-md-9">
        <div id="wd-quizzes-control" className="row mb-3 justify-content-end">
          <QuizControls />
        </div>
        <ul id="wd-quizzes-list" className="list-group rounded-0">
          <li className="wd-quizzes list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />
              QUIZZES
              <div className="float-end fs-5">
                <span className="border rounded-5 p-2">10% of Total</span>
                <BsPlus className="fs-3" />
                <IoEllipsisVertical className="fs-4" />
              </div>
            </div>
            <ul className="wd-quizzes list-group rounded-0 border-5 border-start border-success">
              {quizzes.filter((quiz: any) => quiz.course === cid).map((quiz: any) => (
                <li key={quiz._id} className="wd-quizzes list-group-item p-3 ps-1">
                  <div className="row align-items-center">
                    <div className="col-auto">
                      <BsGripVertical className="me-2 fs-2 text-success" />
                    </div>
                    <div className="col">
                    <a 
                          className="wd-quiz-link fw-bold text-dark text-decoration-none"
                          href={`/Kanbas/Courses/${cid}/quizzes/${quiz._id}`}
                        >
                         {quiz.title}
                        </a>
                       
                     
                      <div className="fs-6">
                        <span className="text-danger">Multiple Modules </span> |
                        <span className="text-muted">
                          <span className="fw-bold"> Not available until</span> {quiz.available} |
                          <span className="fw-bold"> Due</span> {quiz.dueDate} at 11:59 pm |
                          <span className="fw-bold"> Points</span> {quiz.points}
                        </span>
                      </div>
                    </div>
                    <div className="col-auto">
                      <QuizControlButtons
                        quizId={quiz._id}
                        deleteQuiz={removeQuiz}
                        navigateToQuizDetails={navigateToQuizDetails}
                        publishQuiz={publishQuiz}
                        unpublishQuiz={unpublishQuiz}
                        isPublished={quiz.isPublished}
                      />
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

