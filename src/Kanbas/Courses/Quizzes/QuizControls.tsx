import { FaPlus } from "react-icons/fa6";
import { AiOutlineSearch } from 'react-icons/ai';
import "./index.css"
import { addQuiz } from "./reducer";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';

export default function QuizControls() {
    const dispatch = useDispatch();
    const { cid, id } = useParams();

    return (
        <div id="wd-quizzes-controls" className="text-nowrap">
            <div className="d-flex justify-content-end align-items-center">

                <div id="wd-quiz-controls-position-absolute" className="input-group  p-1 m-1 rounded-2">
                    <div className="wd-quiz-controls-pos-absolute-top">
                        <AiOutlineSearch className="fs-5 text-secondary"/>
                    </div>
                    <div className="wd-quiz-controls-pos-absolute-regular">
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
                                   
                        id="wd-add-quiz-btn" 
                        className="btn btn-lg btn-danger p-1 m-1 " 
                        >
                        <FaPlus className="me-2" />
                        Quiz
                    </Link>
               
            </div>
        </div>
    )
}
