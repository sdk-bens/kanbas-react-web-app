import "./index.css"
import { FaFileExport } from "react-icons/fa6";
import { FaFileImport } from "react-icons/fa6";
import { FaGear } from "react-icons/fa6";




export default function GradesControl() {
    return (
        <div id="wd-grades-controls" className="text-nowrap">
            <div className="d-flex justify-content-end align-items-center">
                <button id="wd-import-grades-btn" className="btn btn-md btn-secondary p-2 m-1">
                <FaFileImport className="me-2 fs-5" />
                    Import
                </button>

                <button id="wd-export-grades-btn" className="btn btn-md btn-secondary p-2 m-1">
                    <FaFileExport className="me-2 fs-5" />
                    Export
                </button> 
                <button id="wd-settings-grades-btn" className="btn btn-md btn-secondary p-2 m-1">
                    <FaGear className="fs-5"/>
                </button>  
            </div>
        </div>
    )
}
