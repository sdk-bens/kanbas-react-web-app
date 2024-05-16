export default function Assignments() {
    return (
      <div id="wd-assignments">
        <input id="wd-search-assignment"
               placeholder="Search for Assignments" />
        <button id="wd-add-assignment-group">+ Group</button>
        <button id="wd-add-assignment">+ Assignment</button>
        <h3 id="wd-assignments-title">
          ASSIGNMENTS 40% of Total <button>+</button>
        </h3>
        <ul id="wd-assignment-list">
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123">
              A1 - ENV + HTML
            </a>
            <p>Multiple Modules | <b>Not available until</b> May 6 at 12:00 am | </p>
            <p><b>Due</b> May 13 at 11:59 pm | 100 pts</p>
          </li>
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123">
              A2 - CSS + BOOTSTRAP
            </a>
            <p>Multiple Modules | <b>Not available until</b> May 13 at 12:00 am | </p>
            <p><b>Due</b> May 20 at 11:59 pm | 100 pts</p>
          </li>
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123">
              A3 - JAVASCRIPT + REACT
            </a>
            <p>Multiple Modules | <b>Not available until</b> May 20 at 12:00 am | </p>
            <p><b>Due</b> May 27 at 11:59 pm | 100 pts</p>
          </li>
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123">
              A4 
            </a>
            <p>Multiple Modules | <b>Not available until</b> Jun 19 at 12:00 am | </p>
            <p><b>Due</b> Jul 3 at 11:59 pm | 100 pts</p>
          </li>
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123">
              A5 
            </a>
            <p>Multiple Modules | <b>Not available until</b> Jul 3 at 12:00 am | </p>
            <p><b>Due</b> Jul 17 at 11:59 pm | 100 pts</p>
          </li>
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123">
              A6
            </a>
            <p>Multiple Modules | <b>Not available until</b> Jul 24 at 12:00 am | </p>
            <p><b>Due</b> May Jul 31 at 11:59 pm | 100 pts</p>
          </li>
        </ul>
      </div>
  );}
  