import GradesControl from "./GradesControls";
import CoursesNavigation from "../Navigation";
import { AiOutlineSearch } from 'react-icons/ai';
import { FaFilter } from "react-icons/fa6";
import "./index.css"
import { TbFileArrowRight } from "react-icons/tb";


import 'bootstrap/dist/css/bootstrap.min.css';


export default function Grades () {
  return (
    <div id="wd-grades" className="row">

        <div id="wd-grades-navigation" className="d-none d-md-block col-md-3">
          <CoursesNavigation />
        </div>

        <div id="wd-grades-content" className="col-12 col-md-9">

          <div id="wd-grades-controls-buttons" className="row mb-3 justify-content-end">
            <GradesControl />
          </div>

          <div className="row mb-5">

            <div className="col-6">
              <div className="text-start fw-bold mb-3">
                <label htmlFor="wd-available-from" className="form-label">Student Names</label>
              </div>

              <div className="input-group rounded-2">
                <div className="wd-assignment-controls-pos-absolute-top">
                  <AiOutlineSearch className="fs-5 text-secondary"/>
                </div>

                <div className="wd-grades-controls-pos-absolute-regular w-100">
                  <input 
                    type="text" 
                    className="form-control rounded-2 ps-5" 
                    placeholder="Search Students" />
                </div> 

              </div>

            </div>
            
            <div className="col-6">

              <div className="col-md-12 text-start fw-bold mb-3">
                <label htmlFor="wd-available-until" className="form-label">Assignment Names</label>
              </div>

              <div id="wd-assignment-controls-position-absolute" className="input-group  me-5 rounded-2">
                
                <div className="wd-assignment-controls-pos-absolute-top">
                          <AiOutlineSearch className="fs-5 text-secondary"/>
                </div>

                <div className="wd-grades-controls-pos-absolute-regular w-100">
                  <input 
                    type="text" 
                    className="form-control rounded-2 ps-5" 
                    placeholder="Search Assignments" />
                  </div> 

              </div>

            </div> 

          </div>

          <div id="wb-grade-filter">

            <button id="wd-import-grades-btn" className="btn btn-md btn-secondary me-2 mb-4">
              <FaFilter className="me-2 fs-5" />
                Apply Filter
              </button>
              
          </div>

          <div id="wd-grades-table" className="table-responsive col-12">
            
            <table className="table table-striped table-bordered table-hover" >
                <thead>
                  <tr>
                    <th >Student Name</th>
                    <th className="text-center">A1 SETUP<br/><span className="small">Out of 100</span></th>
                    <th className="text-center">A2 HTML<br/><span className="small">Out of 100</span></th>
                    <th className="text-center">A3 CSS<br/><span className="small">Out of 100</span></th>
                    <th className="text-center"> A4 BOOTSTRAP<br/><span className="small">Out of 100</span></th>
                  </tr>
                </thead>

                <tbody>
                <tr>

                  <td className="text-danger">
                    Jane Adams
                  </td>

                  <td className="text-center" tabIndex={0}>
                    <div className="input-group bg-light w-75 mx-auto bg-transparent">
                        <input 
                            type="text" 
                            className="form-control text-center border-red-on-focus rounded-2 w-50 bg-inherit input-transparent-border" 
                            placeholder="100%" 
                            defaultValue="100%"
                        />
                        <div className="input-group-append submit-button-container">
                          <button className="btn btn-secondary ms-2 submit-button">
                              <TbFileArrowRight />
                          </button>
                        </div>
                      </div>
                    </td>

                  <td className="text-center" tabIndex={0}>
                    <div className="input-group bg-light w-75 mx-auto bg-transparent">
                      <input 
                        type="text" 
                        className="form-control text-center border-red-on-focus rounded-2 w-50 bg-inherit input-transparent-border" 
                        placeholder="96.67%"
                        defaultValue="96.67%"
                        />
                      <div className="input-group-append submit-button-container">
                          <button className="btn btn-secondary ms-2 submit-button">
                              <TbFileArrowRight />
                          </button>
                        </div>
                    </div>
                  </td>

                  <td className="text-center" tabIndex={0}>
                    <div className="input-group bg-light w-75 mx-auto bg-transparent">
                      <input 
                        type="text" 
                        className="form-control text-center border-red-on-focus rounded-2 w-50 bg-inherit input-transparent-border" 
                        placeholder="92.18%"
                        defaultValue="92.18%"
                      />
                      <div className="input-group-append submit-button-container">
                          <button className="btn btn-secondary ms-2 submit-button">
                              <TbFileArrowRight />
                          </button>
                        </div>
                    </div>
                  </td>

                  <td className="text-center" tabIndex={0}>
                    <div className="input-group bg-light w-75 mx-auto bg-transparent">
                      <input 
                        type="text" 
                        className="form-control text-center border-red-on-focus rounded-2 w-50 bg-inherit input-transparent-border" 
                        placeholder="66.22%"
                        defaultValue="66.22%"
                      />
                      <div className="input-group-append submit-button-container">
                          <button className="btn btn-secondary ms-2 submit-button">
                              <TbFileArrowRight />
                          </button>
                        </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="text-danger">Christina Allen</td>
                  <td className="text-center" tabIndex={0}>
                    <div className="input-group bg-light w-75 mx-auto bg-transparent">
                        <input 
                            type="text" 
                            className="form-control text-center border-red-on-focus rounded-2 w-50 bg-inherit input-transparent-border" 
                            placeholder="100%" 
                            defaultValue="100%"
                        />
                        <div className="input-group-append submit-button-container">
                          <button className="btn btn-secondary ms-2 submit-button">
                              <TbFileArrowRight />
                          </button>
                        </div>
                      </div>
                    </td>

                  <td className="text-center" tabIndex={0}>
                    <div className="input-group bg-light w-75 mx-auto bg-transparent">
                      <input 
                        type="text" 
                        className="form-control text-center border-red-on-focus rounded-2 w-50 bg-inherit input-transparent-border" 
                        placeholder="100%"
                        defaultValue="100%"
                        />
                      <div className="input-group-append submit-button-container">
                          <button className="btn btn-secondary ms-2 submit-button">
                              <TbFileArrowRight />
                          </button>
                        </div>
                    </div>
                  </td>

                  <td className="text-center" tabIndex={0}>
                    <div className="input-group bg-light w-75 mx-auto bg-transparent">
                      <input 
                        type="text" 
                        className="form-control text-center border-red-on-focus rounded-2 w-50 bg-inherit input-transparent-border" 
                        placeholder="100%"
                        defaultValue="100%"
                      />
                      <div className="input-group-append submit-button-container">
                          <button className="btn btn-secondary ms-2 submit-button">
                              <TbFileArrowRight />
                          </button>
                        </div>
                    </div>
                  </td>

                  <td className="text-center" tabIndex={0}>
                    <div className="input-group bg-light w-75 mx-auto bg-transparent">
                      <input 
                        type="text" 
                        className="form-control text-center border-red-on-focus rounded-2 w-50 bg-inherit input-transparent-border" 
                        placeholder="100%"
                        defaultValue="100%"
                      />
                      <div className="input-group-append submit-button-container">
                          <button className="btn btn-secondary ms-2 submit-button">
                              <TbFileArrowRight />
                          </button>
                        </div>
                    </div>
                  </td>
                
                </tr>
                <tr>
                    <td className="text-danger">Samreen Ansari</td>
                    <td className="text-center" tabIndex={0}>
                    <div className="input-group bg-light w-75 mx-auto bg-transparent">
                        <input 
                            type="text" 
                            className="form-control text-center border-red-on-focus rounded-2 w-50 bg-inherit input-transparent-border" 
                            placeholder="100%" 
                            defaultValue="100%"
                        />
                        <div className="input-group-append submit-button-container">
                          <button className="btn btn-secondary ms-2 submit-button">
                              <TbFileArrowRight />
                          </button>
                        </div>
                      </div>
                    </td>

                  <td className="text-center" tabIndex={0}>
                    <div className="input-group bg-light w-75 mx-auto bg-transparent">
                      <input 
                        type="text" 
                        className="form-control text-center border-red-on-focus rounded-2 w-50 bg-inherit input-transparent-border" 
                        placeholder="100%"
                        defaultValue="100%"
                        />
                      <div className="input-group-append submit-button-container">
                          <button className="btn btn-secondary ms-2 submit-button">
                              <TbFileArrowRight />
                          </button>
                        </div>
                    </div>
                  </td>

                  <td className="text-center" tabIndex={0}>
                    <div className="input-group bg-light w-75 mx-auto bg-transparent">
                      <input 
                        type="text" 
                        className="form-control text-center border-red-on-focus rounded-2 w-50 bg-inherit input-transparent-border" 
                        placeholder="88%"
                        defaultValue="88%"
                      />
                      <div className="input-group-append submit-button-container">
                          <button className="btn btn-secondary ms-2 submit-button">
                              <TbFileArrowRight />
                          </button>
                        </div>
                    </div>
                  </td>

                  <td className="text-center" tabIndex={0}>
                    <div className="input-group bg-light w-75 mx-auto bg-transparent">
                      <input 
                        type="text" 
                        className="form-control text-center border-red-on-focus rounded-2 w-50 bg-inherit input-transparent-border" 
                        placeholder="70%"
                        defaultValue="70%"
                      />
                      <div className="input-group-append submit-button-container">
                          <button className="btn btn-secondary ms-2 submit-button">
                              <TbFileArrowRight />
                          </button>
                        </div>
                    </div>
                  </td>
                </tr>

                <tr>
                    <td className="text-danger">Han Bao</td>
                    <td className="text-center" tabIndex={0}>
                    <div className="input-group bg-light w-75 mx-auto bg-transparent">
                        <input 
                            type="text" 
                            className="form-control text-center border-red-on-focus rounded-2 w-50 bg-inherit input-transparent-border" 
                            placeholder="100%" 
                            defaultValue="100%"
                        />
                        <div className="input-group-append submit-button-container">
                          <button className="btn btn-secondary ms-2 submit-button">
                              <TbFileArrowRight />
                          </button>
                        </div>
                      </div>
                    </td>

                  <td className="text-center" tabIndex={0}>
                    <div className="input-group bg-light w-75 mx-auto bg-transparent">
                      <input 
                        type="text" 
                        className="form-control text-center border-red-on-focus rounded-2 w-50 bg-inherit input-transparent-border" 
                        placeholder="85%"
                        defaultValue="85%"
                        />
                      <div className="input-group-append submit-button-container">
                          <button className="btn btn-secondary ms-2 submit-button">
                              <TbFileArrowRight />
                          </button>
                        </div>
                    </div>
                  </td>

                  <td className="text-center" tabIndex={0}>
                    <div className="input-group bg-light w-75 mx-auto bg-transparent">
                      <input 
                        type="text" 
                        className="form-control text-center border-red-on-focus rounded-2 w-50 bg-inherit input-transparent-border" 
                        placeholder="100%"
                        defaultValue="100%"
                      />
                      <div className="input-group-append submit-button-container">
                          <button className="btn btn-secondary ms-2 submit-button">
                              <TbFileArrowRight />
                          </button>
                        </div>
                    </div>
                  </td>

                  <td className="text-center" tabIndex={0}>
                    <div className="input-group bg-light w-75 mx-auto bg-transparent">
                      <input 
                        type="text" 
                        className="form-control text-center border-red-on-focus rounded-2 w-50 bg-inherit input-transparent-border" 
                        placeholder="90%"
                        defaultValue="90%"
                      />
                      <div className="input-group-append submit-button-container">
                          <button className="btn btn-secondary ms-2 submit-button">
                              <TbFileArrowRight />
                          </button>
                        </div>
                    </div>
                  </td>
                </tr>

                <tr>
                    <td className="text-danger">Mahi Sai Srinivas Bobbili </td>
                    <td className="text-center" tabIndex={0}>
                    <div className="input-group bg-light w-75 mx-auto bg-transparent">
                        <input 
                            type="text" 
                            className="form-control text-center border-red-on-focus rounded-2 w-50 bg-inherit input-transparent-border" 
                            placeholder="100%" 
                            defaultValue="100%"
                        />
                        <div className="input-group-append submit-button-container">
                          <button className="btn btn-secondary ms-2 submit-button">
                              <TbFileArrowRight />
                          </button>
                        </div>
                      </div>
                    </td>

                  <td className="text-center" tabIndex={0}>
                    <div className="input-group bg-light w-75 mx-auto bg-transparent">
                      <input 
                        type="text" 
                        className="form-control text-center border-red-on-focus rounded-2 w-50 bg-inherit input-transparent-border" 
                        placeholder="100%"
                        defaultValue="100%"
                        />
                      <div className="input-group-append submit-button-container">
                          <button className="btn btn-secondary ms-2 submit-button">
                              <TbFileArrowRight />
                          </button>
                        </div>
                    </div>
                  </td>

                  <td className="text-center" tabIndex={0}>
                    <div className="input-group bg-light w-75 mx-auto bg-transparent">
                      <input 
                        type="text" 
                        className="form-control text-center border-red-on-focus rounded-2 w-50 bg-inherit input-transparent-border" 
                        placeholder="100%"
                        defaultValue="100%"
                      />
                      <div className="input-group-append submit-button-container">
                          <button className="btn btn-secondary ms-2 submit-button">
                              <TbFileArrowRight />
                          </button>
                        </div>
                    </div>
                  </td>

                  <td className="text-center" tabIndex={0}>
                    <div className="input-group bg-light w-75 mx-auto bg-transparent">
                      <input 
                        type="text" 
                        className="form-control text-center border-red-on-focus rounded-2 w-50 bg-inherit input-transparent-border" 
                        placeholder="66.22%"
                        defaultValue="66.22%"
                      />
                      <div className="input-group-append submit-button-container">
                          <button className="btn btn-secondary ms-2 submit-button">
                              <TbFileArrowRight />
                          </button>
                        </div>
                    </div>
                  </td>
                </tr>

                <tr>
                    <td className="text-danger">Sian Cao</td>
                    <td className="text-center" tabIndex={0}>
                    <div className="input-group bg-light w-75 mx-auto bg-transparent">
                        <input 
                            type="text" 
                            className="form-control text-center border-red-on-focus rounded-2 w-50 bg-inherit input-transparent-border" 
                            placeholder="100%" 
                            defaultValue="100%"
                        />
                        <div className="input-group-append submit-button-container">
                          <button className="btn btn-secondary ms-2 submit-button">
                              <TbFileArrowRight />
                          </button>
                        </div>
                      </div>
                    </td>

                  <td className="text-center" tabIndex={0}>
                    <div className="input-group bg-light w-75 mx-auto bg-transparent">
                      <input 
                        type="text" 
                        className="form-control text-center border-red-on-focus rounded-2 w-50 bg-inherit input-transparent-border" 
                        placeholder="96.67%"
                        defaultValue="96.67%"
                        />
                      <div className="input-group-append submit-button-container">
                          <button className="btn btn-secondary ms-2 submit-button">
                              <TbFileArrowRight />
                          </button>
                        </div>
                    </div>
                  </td>

                  <td className="text-center" tabIndex={0}>
                    <div className="input-group bg-light w-75 mx-auto bg-transparent">
                      <input 
                        type="text" 
                        className="form-control text-center border-red-on-focus rounded-2 w-50 bg-inherit input-transparent-border" 
                        placeholder="92.18%"
                        defaultValue="92.18%"
                      />
                      <div className="input-group-append submit-button-container">
                          <button className="btn btn-secondary ms-2 submit-button">
                              <TbFileArrowRight />
                          </button>
                        </div>
                    </div>
                  </td>

                  <td className="text-center" tabIndex={0}>
                    <div className="input-group bg-light w-75 mx-auto bg-transparent">
                      <input 
                        type="text" 
                        className="form-control text-center border-red-on-focus rounded-2 w-50 bg-inherit input-transparent-border" 
                        placeholder="66.22%"
                        defaultValue="66.22%"
                      />
                      <div className="input-group-append submit-button-container">
                          <button className="btn btn-secondary ms-2 submit-button">
                              <TbFileArrowRight />
                          </button>
                        </div>
                    </div>
                  </td>
                </tr>
                </tbody>
              </table>
            </div> 


        

        
    

    </div>
    </div>
  );
}