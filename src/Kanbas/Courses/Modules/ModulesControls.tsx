import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
export default function ModulesControls() {
    return (
        <div id="wd-modules-controls" className="text-nowrap">
            <div className="d-flex justify-content-end align-items-center">
            
            
                <button id="wd-collapse-all" className="btn btn-md btn-secondary p-1 m-1">
                    Collapse All
                </button>
                <button id="wd-view-progress" className="btn btn-md btn-secondary p-1 m-1">
                    View Progress
                </button>
                
                <div className="dropdown d-inline">
                    <button id="wd-publish-all-btn" className="btn btn-md btn-secondary p-1 m-1 dropdown-toggle d-flex align-items-center"
                        type="button" data-bs-toggle="dropdown">
                        <GreenCheckmark />
                        Publish All
                    </button>
                    <ul className="dropdown-menu">
                        <li>
                            <a id="wd-publish-all-modules-and-items-btn" className="dropdown-item d-flex align-items-center" href="#">
                                <GreenCheckmark />
                                Publish all modules and items
                            </a>
                        </li>
                        <li>
                            <a id="wd-publish-modules-only-button" className="dropdown-item d-flex align-items-center" href="#">
                                <GreenCheckmark />
                                Publish modules only
                            </a>
                        </li>
                        <li>
                            <a id="wd-unpublish-all-modules-and-items" className="dropdown-item d-flex align-items-center" href="#">
                                <GreenCheckmark />
                                Unpublish all modules and items
                            </a>
                        </li>
                        <li>
                            <a id="wd-unpublish-modules-only" className="dropdown-item d-flex align-items-center" href="#">
                                <GreenCheckmark />
                                Unpublish modules only
                            </a>
                        </li>
                    </ul>
                </div>
                <button id="wd-add-module-btn" className="btn btn-md btn-danger p-1 m-1">
                    <FaPlus className="position-relative me-2" style={{ bottom: "1px "}} />
                    Module
                </button>
            </div>
        </div>
    )
}