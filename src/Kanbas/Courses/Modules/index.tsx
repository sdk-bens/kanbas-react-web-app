import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import CoursesNavigation from "../Navigation";
import { useParams } from "react-router";
import React, { useState } from "react";
import { addModule, editModule, updateModule, deleteModule } from "./reducer";
import { useSelector, useDispatch } from "react-redux";

export default function Modules () {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();
 
  return (
    <div id="wd-modules" className="row">
      <div id="wd-modules-course-navigation" className="d-none d-md-block col-md-3">
        <CoursesNavigation />
      </div>
      
      <div id="wd-modules-controls" className="col-12 col-md-9">
        <div id="wd-modules-buttons" className="row mb-3 justify-content-end">
        <ModulesControls setModuleName={setModuleName} moduleName={moduleName} addModule={() => {
          dispatch(addModule({ name: moduleName, course:cid }));
          setModuleName("")
        }} />
        </div>
        
        <ul id="wd-modules-list" className="list-group rounded-0">
          {modules.filter((module: any) => module.course === cid)
          .map((module: any) => (
            <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  {!module.editing && module.name}
                  {module.editing && (
                    <input
                      className="form-control w-50 d-inline-block ms-2"
                      onChange={(e) => dispatch(updateModule({ ...module, name: e.target.value }))}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          dispatch(updateModule({ ...module, editing: false }));
                        }
                      }}
                      value={module.name}
                    />
                  )}
                </div>
                <ModuleControlButtons 
                moduleId={module._id} 
                deleteModule={(moduleId) => { dispatch(deleteModule(moduleId));
                }} 
                editModule={(moduleId) =>  dispatch(editModule(moduleId))} />
              </div>
              {module.lessons && (
                <ul className="wd-lessons list-group rounded-0">
                  {module.lessons.map((lesson: any) => (
                    <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <BsGripVertical className="me-2 fs-3" />
                        {lesson.name}
                      </div>
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
