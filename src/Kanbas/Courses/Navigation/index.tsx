import "./index.css";

import { Link, useParams, useLocation } from "react-router-dom";

export default function CoursesNavigation() {
  const { cid } = useParams();
  const { pathname } = useLocation();

  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades"];
  const basePath = `/Kanbas/Courses/${cid}`;

  return (
    <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
      {links.map((link) => {
        const linkPath = `${basePath}/${link}`;
        const isActive = pathname.includes(link);
        return (
          <Link
            key={link}
            to={linkPath}
            className={`list-group-item border-0 ${isActive ? 'active' : 'text-danger'}`}
          >
            {link}
          </Link>
        );
      })}
    </div>
  );
}

     