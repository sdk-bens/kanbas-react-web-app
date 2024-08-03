import CoursesNavigation from "./Navigation";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import AddAssignmentForm from "./Assignments/addassignmemt";
import QuizDetails from "./Quizzes/QuizDetailsScreen";
import Grades from "./Grades";
import PeopleTable from "./People/Table";
import { FaAlignJustify } from "react-icons/fa";
import PeopleDetails from "./People/Details";
import Quizzes from "./Quizzes";
import QuestionEditor from "./Quizzes/QuestionEditor";


export default function Courses({ courses }: { courses: any[]; }) {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } =  useLocation();
  return (
    <div id="wd-courses" className="h-100">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course && course.name} &gt; {pathname.split("/")[4]}</h2>
      <hr />
      <div className="d-flex">
        <div className="flex-fill">
          <Routes>
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:id" element={<AssignmentEditor />} />
            <Route path="Assignments/:cid/:id" element={<AddAssignmentForm />} />
            <Route path="Quizzes/:cid/:id" element={<QuizDetails />} />
            <Route path="Quizzes/:id/questions" element={<QuestionEditor />} />

            <Route path="Grades" element={<Grades />} />
            <Route path="People" element={<PeopleTable />} />
            <Route path="People/:uid" element={<PeopleTable />} />
            <Route path="Quizzes" element={<Quizzes />} />
          </Routes>
        </div>
      </div>  
    </div>
);}