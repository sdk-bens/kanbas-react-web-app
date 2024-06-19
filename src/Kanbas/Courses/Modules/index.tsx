import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import CoursesNavigation from "../Navigation";
import CourseStatus from "../Home/Status";
import { useParams } from "react-router";
import * as db from "../../Database"

export default function Modules () {
  const { cid } = useParams();
  const modules = db.modules;
  return (
    <div id="wd-modules" className="row">
      <div id="wd-modules-course-navigation" className="d-none d-md-block col-md-3">
        <CoursesNavigation />
      </div>
      
      <div id="wd-modules-controls" className="col-12 col-md-9">
        <div id="wd-modules-buttons" className="row mb-3 justify-content-end">
          <ModulesControls />
        </div>
        
        <ul id="wd-modules-list" className="list-group rounded-0">
          {modules.filter((module: any) => module.course === cid)
          .map((module: any) => (
            <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                {module.name}
                <ModuleControlButtons />
              </div>
              {module.lessons && (
                <ul className="wd-lessons list-group rounded-0">
                  {module.lessons.map((lesson: any) => (
                  <li className="wd-lesson list-group-item p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" />
                    {lesson.name}
                    <LessonControlButtons />
                  </li>
                  ))}
                </ul>
              )}
              
            </li>
          ))}
        </ul>
      </div>
      
    </div>
  );
}
