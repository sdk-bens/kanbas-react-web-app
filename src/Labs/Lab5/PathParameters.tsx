import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function PathParameters() {
    const [a, setA] = useState("34");
    const [b, setB] = useState("23");
    return (
        <div>
            <h3> Path Parameters</h3>
            <input className="form-control mb-2" id="wd-path-parameters-a" 
            type="number" value={a} style={{width: "535px"}} onChange={(e) => setA(e.target.value)}/>
            <input className="form-control mb-2" id="wd-path-parameters-b" 
            type="number" value={b} style={{width: "535px"}} onChange={(e) => setB(e.target.value)}/>
            <a className="btn btn-primary me-2" id="wd-path-parameter-add"
            href={`${REMOTE_SERVER}/lab5/add/${a}/${b}`}>
                Add {a} + {b}
            </a>
            <a className="btn btn-danger me-2" id="wd-path-parameter-subtract"
            href={`${REMOTE_SERVER}/lab5/subtract/${a}/${b}`}>
                Subtract {a} - {b}
            </a>
            <a className="btn btn-success me-2" id="wd-path-parameter-multiply"
            href={`${REMOTE_SERVER}/lab5/multiply/${a}/${b}`}>
                Multiply {a} * {b}
            </a>
            <a className="btn btn-dark me-2" id="wd-path-parameter-divide"
            href={`${REMOTE_SERVER}/lab5/divide/${a}/${b}`}>
                Divide {a} / {b}
            </a>

        </div>
    )
}