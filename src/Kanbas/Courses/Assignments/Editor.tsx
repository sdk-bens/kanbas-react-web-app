export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label><br/>
        <input id="wd-name" value="A1 - ENV + HTML" />
        <br /><br />
        <textarea id="wd-description" style={{ width: "400px" }}>
          The assignment is available online
          Submit a link to the landing page of your 
          Web application running on Netlify. the landing 
          page should include the following: your full name and section Links
          to each of the lab assignments Link to the Kanbas application Links to all relevant source coee repositories
          the Kanbas application should include a link to navigate  back to the landing page.
        </textarea>
        <br />
        <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
                <select id="wd-group">
                    <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
                    <option value="QUIZZES">QUIZZES</option>
                    <option value="EXAMS">EXAMS</option>
                    <option value="PROJECT">PROJECT</option>
                </select>
            </td>
        </tr>
        <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-display-grade-as">Displayed Grade as</label>
            </td>
            <td>
            <select id="wd-display-grade-as">
                    <option selected value="Percentage">Percentage</option>
                    <option value="Point">Point</option>
                    <option value="Letter">Letter</option>
                </select>
            </td>
        </tr>
        <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-submission-type">Displayed Grade as</label>
            </td>
            <td>
            <select id="wd-submission-type">
                    <option selected value="Online">Online</option>
                    <option value="Offline">Offline</option>
                </select>
            </td>
        </tr>
        <tr> 
        <br /><br />
            <td>
                <label>Online Entry Options</label>
                    <br/>
                    <input type="checkbox" name="online-entry-option" id="wd-text-entry"/>
                    <label htmlFor="wd-text-entry">Text Entry</label><br/>
                    <input type="checkbox" name="online-entry-option" id="wd-website-url"/>
                    <label htmlFor="wd-website-url">Website UR</label><br/>
                    <input type="checkbox" name="online-entry-option" id="wd-media-recordings"/>
                    <label htmlFor="wd-media-recordings">Media Recordings</label><br/>
                    <input type="checkbox" name="online-entry-option" id="wd-student-annotation"/>
                    <label htmlFor="wd-student-annotation">Student Annotation</label><br/>
                    <input type="checkbox" name="online-entry-option" id="wd-file-upload"/>
                    <label htmlFor="wd-file-upload">File Uploads</label>
                    
            </td>
        </tr>
        <tr>
            <td></td>
            <td align="left" valign="top">
                <label htmlFor="wd-assign-to">Assign to</label><br/>
                <input id="wd-assign-to" value={"everyone"} />
            </td>
     
        </tr>
        <tr>
        <td></td>
            <td align="left" valign="top">
                <label htmlFor="wd-due-date">Due</label>
                <br/>
                <input type="date" id="wd-due-date" value="2024-05-13"/><br/>
            </td>      
        </tr>
        <tr>
        <td></td>
            <td align="left" valign="top">
                <label htmlFor="wd-available-from">Available from</label><br/>
                <input type="date" id="wd-available-from" value="2024-05-13"/>
            </td> 
            <td align="left" valign="top">
            <label htmlFor="wd-available-until">Until</label><br/>
            <input type="date" id="wd-available-until" value="2024-05-13"/>
            </td>     
        </tr>
        <tr>
          <td colSpan={3}>
            <hr style={{ border: "none", borderBottom: "1px solid black" }} />
          </td>
        </tr>
      
        <tr>
        <td></td>
        <td></td>
        <td align="left">
            <button id="wd-all-good"  type="button">Cancel</button>
            <button id="wd-all-good"  type="button">Save</button>
        </td>
      </tr>

      </table>
      
    </div>
);}

  