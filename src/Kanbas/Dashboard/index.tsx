export default function Dashboard() {
    return (
      
      <div id="wd-dashboard" className="container col-12">
        <h1 id="wd-dashboard-title">Dashboard</h1> 
        <hr />
        <div className="container ms-3">

          <h2 id="wd-dashboard-published">Published Courses (12)</h2> 
          <hr />
      
          <div id="wd-dashboard-courses" className="row">
            <div className="row row-cols-1 row-cols-md-5 g-4">

              <div className="wd-dashboard-course col" style={{ width: "270px" }}>
                <div className="card">
                  <img src="/images/react.jpg" style={{ height: "150px"}}/>
                  <div className="card-body">
                    <a className="wd-dashboard-course-link"
                      href="#/Kanbas/Courses/1234/Home"
                      style={{ textDecoration: "none", color: "navy", fontWeight: "bold"}}>
                      CS1234 React JS
                    </a>
                    <p className="wd-dashboard-course-title card-text">
                      Full Stack software developer
                    </p>
                    <a href="#/Kanbas/Courses/1234/Home"  className="btn btn-primary"> Go </a>
                  </div>  
                </div>
              </div>



              <div className="wd-dashboard-course col" style={{ width: "270px"}}>
                <div className="card">
                  <img src="/images/ml.jpg" style={{ height: "150px"}} />
                  <div className="card-body">
                    <a className="wd-dashboard-course-link"
                      href="#/Kanbas/Courses/6140/Home"
                      style={{ textDecoration: "none", color: "navy", fontWeight: "bold"}}>
                      CS6140 ML
                    </a>
                    <p className="wd-dashboard-course-title card-text">
                      Machine Learning
                    </p>
                    <a href="#/Kanbas/Courses/6140/Home"  className="btn btn-primary"> Go </a>
                  </div>        
                </div>
              </div>

              <div className="wd-dashboard-course col" style={{ width: "270px"}}>
                <div className="card">
                  <img src="/images/webdev.jpg" style={{ height: "150px"}} />
                  <div className="card-body">
                    <a className="wd-dashboard-course-link"
                      href="#/Kanbas/Courses/5610/Home"
                      style={{ textDecoration: "none", color: "navy", fontWeight: "bold"}}>
                      CS5610 WebDev
                    </a>
                    <p className="wd-dashboard-course-title card-text">
                      Web Development
                    </p>
                    <a href="#/Kanbas/Courses/5610/Home"  className="btn btn-primary"> Go </a>
                  </div>
                </div>
              </div>

              <div className="wd-dashboard-course col" style={{ width: "270px"}}>
                <div className="card">
                  <img src="/images/sql.jpg" style={{ height: "150px"}}/>
                  <div className="card-body">
                    <a className="wd-dashboard-course-link"
                      href="#/Kanbas/Courses/5200/Home"
                      style={{ textDecoration: "none", color: "navy", fontWeight: "bold"}}>

                      CS5200 SQL
                    </a>
                    <p className="wd-dashboard-course-title card-text">
                      Databases
                    </p>
                    <a href="#/Kanbas/Courses/5200/Home"  className="btn btn-primary"> Go </a>
                  </div>
                </div>
              </div>
              
              <div className="wd-dashboard-course col" style={{ width: "270px"}}>
                <div className="card">
                  <img src="/images/nlp.jpg" style={{ height: "150px"}}/>
                  <div className="card-body">
                    <a className="wd-dashboard-course-link"
                      href="#/Kanbas/Courses/6120/Home"
                      style={{ textDecoration: "none", color: "navy", fontWeight: "bold"}}>
                      CS6120 NLP
                    </a>
                    <p className="wd-dashboard-course-title card-text">
                      NLP
                    </p>
                    <a href="#/Kanbas/Courses/6120/Home"  className="btn btn-primary"> Go </a>
                  </div>
                </div>
              </div>

              <div className="wd-dashboard-course col" style={{ width: "270px"}}>
                <div className="card">
                  <img src="/images/rs.jpg" style={{ height: "150px"}}/>
                  <div className="card-body">
                    <a className="wd-dashboard-course-link"
                      href="#/Kanbas/Courses/7980/Home"
                      style={{ textDecoration: "none", color: "navy", fontWeight: "bold"}}>
                      CS7980 Research 
                    </a>
                    <p className="wd-dashboard-course-title card-text">
                      Research
                    </p>
                    <a href="#/Kanbas/Courses/7980/Home"  className="btn btn-primary"> Go </a>
                  </div>
                </div>
              </div>

            

              

              <div className="wd-dashboard-course col" style={{ width: "270px"}}>
                <div className="card">
                  <img src="/images/ai.jpg" style={{ height: "150px"}}/>
                  <div className="card-body">
                    <a className="wd-dashboard-course-link"
                      href="#/Kanbas/Courses/5100/Home"
                      style={{ textDecoration: "none", color: "navy", fontWeight: "bold"}}>
                      CS5100 AI
                    </a>
                    <p className="wd-dashboard-course-title card-text">
                      AI
                    </p>
                    <a href="#/Kanbas/Courses/5100/Home" className="btn btn-primary"> Go </a>
                  </div>
                </div>
              </div>
              
              <div className="wd-dashboard-course col" style={{width: "270px"}}>
                <div className="card">
                <img src="/images/java.jpg" style={{ height: "150px"}}/>
                <div className="card-body">
                  <a className="wd-dashboard-course-link"
                    href="#/Kanbas/Courses/1300/Home"
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold"}}>
                    CS1300 Java
                  </a>
                  <p className="wd-dashboard-course-title card-text">
                    OOP
                  </p>
                  <a href="#/Kanbas/Courses/1300/Home" className="btn btn-primary"> Go </a>
                </div>

                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    );
  }
  
  