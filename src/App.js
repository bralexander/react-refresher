import "./App.css";
import EnrolmentForm from "./EnrolmentForm";
import EnrollList from "./EnrollList";
import { useState } from "react";

const App = () => {
  const [program, setProgram] = useState("UG");
  const [ugSeats, setUgSeats] = useState(60);
  const [pgSeats, setPgSeats] = useState(40);
  const [studentData, setStudentData] = useState({}) 

  const [action, setAction] = useState();
  const [selItemId, setSelItemId] = useState();
  
  const handleItemSelection = (action, id) => {
    setAction(action);
    setSelItemId(id);
  }

   const restoreSeats = (pgm) =>{
    program === "UG" ?setUgSeats(ugSeats+1) : setPgSeats(pgSeats+1);
    setAction("");
  }

  const handleChange = (event) => {
    setProgram(event.target.value);
    setPgSeats(pgSeats);
    setUgSeats(ugSeats);
  };
const setUpdatedSeats = (updatedSeats) => {
    if (program === "UG") {
      setUgSeats(updatedSeats);
    } else {
      setPgSeats(updatedSeats);
    }
  };

  return (
    <div className="App">
      <div className="programs">
      <h3 className="title">Student Enrolment Form</h3>
        <ul className="ulEnrol">

  <li className="parentLabels" onChange={handleChange}>
            <input
              type="radio"
              value="UG"
              name="programGroup"
              defaultChecked
            />
            Undergraduate
            <input
              type="radio"
              className="radioSel"
              value="PG"
              name="programGroup"
            />
            Postgraduate
          </li>
          <li>
            <label className="parentLabels">
              Remaining {program} Seats - {program === "UG" ? ugSeats : pgSeats}
            </label>
          </li>
        </ul>
      </div>
      <EnrolmentForm
        chosenProgram={program}
        setUpdatedSeats={setUpdatedSeats}
        setStudentData={setStudentData}
        currentSeats={program === "UG" ? ugSeats : pgSeats}
        handleItemSelection={handleItemSelection}
      />
      <EnrollList 
      studentData={studentData} 
      setStudentData={setStudentData}
      selectedItemId={selItemId}
      action={action}
      restoreSeats ={restoreSeats}
      />
    </div>
  );
}

export default App;