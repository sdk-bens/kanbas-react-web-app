import { FaCheckCircle } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";

export default function GreenCheckmark() {
    return (
        <span className="me-1 position-relative">
            <FaCheckCircle style={{ top: "0.5px" }}
            className="text-success me-1  position-absolute fs-4" />
            <FaCircle className="text-white me-1 m-1 fs-6" />
        </span>
    );
}
