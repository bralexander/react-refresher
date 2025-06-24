import "./App.css";
import { useState } from "react";

function EnrolmentForm(props) {
    const [firtsName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("");
    const [welcomeMessage, setWelcomeMessage] = useState("");

    const handleSubmit = (event) => {
        setWelcomeMessage(`Welcome ${firtsName} ${lastName}`)
        if (props.chosenProgram === "UG") {
        props.setUpdatedSeats(props.currentUgSeats - 1, props.currentPgSeats)
        } else {
          props.setUpdatedSeats(props.currentUgSeats, props.currentPgSeats - 1)
        }
        event.preventDefault();
    }

  return (
    <div>
    <form className="enrolForm" onSubmit={handleSubmit}>
      <h1>{props.chosenProgram} Student Details</h1>
      <label>First name:</label>
      <input type="text" name="fname" onBlur={(event) => setFirstName(event.target.value)} />
      <br />
      <label>Last name:</label>
      <input type="text" name="lname" onBlur={(event) => setLastName(event.target.value)} />
      <br />
      <br />
      <input type="submit" value="Submit" />
      <br />
      <label id="studentMsg" className="message">{welcomeMessage}</label>
    </form>
  </div>
  );
}
export default EnrolmentForm;