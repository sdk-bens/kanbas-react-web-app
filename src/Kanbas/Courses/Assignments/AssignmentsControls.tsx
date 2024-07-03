import { FaPlus } from "react-icons/fa6";
import { AiOutlineSearch } from 'react-icons/ai';
import "./index.css"
import { addAssignment } from "./reducer";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';

export default function AssignmentsControls() {
    const dispatch = useDispatch();
    const { cid, id } = useParams();

    return (
        <div id="wd-assignments-controls" className="text-nowrap">
            <div className="d-flex justify-content-end align-items-center">

                <div id="wd-assignment-controls-position-absolute" className="input-group  p-1 m-1 rounded-2">
                    <div className="wd-assignment-controls-pos-absolute-top">
                        <AiOutlineSearch className="fs-5 text-secondary"/>
                    </div>
                    <div className="wd-assignment-controls-pos-absolute-regular">
                        <input 
                        type="text" 
                        className="form-control rounded-2 ps-5" 
                        placeholder="Search..." />
                    </div> 
                </div>

                <button id="wd-group" className="btn btn-lg btn-secondary p-1 m-1">
                    <FaPlus className="me-2" />
                    Group
                </button>

                    <Link key={`${cid}/new`} to={`${cid}/new`} 
                                   
                        id="wd-add-assignment-btn" 
                        className="btn btn-lg btn-danger p-1 m-1 " 
                        >
                        <FaPlus className="me-2" />
                        Assignment
                    </Link>
               
            </div>
        </div>
    )
}
