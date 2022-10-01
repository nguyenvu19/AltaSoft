// tsdrpfc
import "./App.css";
import { Footer, Header } from "./components/common";
import Student from "./features/student/Student";
import { StudentModel } from "./models";

function App() {
  const john: StudentModel = {
    name: "John",
    age: 34,
    isHero: false,
  };

  function handleStudentClick(student: StudentModel) {
    console.log("student click");
  }
  return (
    <div className="App">
      <Header />
      <Student student={john} onClick={handleStudentClick} />
      <Footer />
    </div>
  );
}

export default App;

// tsrpfc
// import * as React from 'react';

// export interface IAppProps {
// }

// export function App (props: IAppProps) {
//   return (
//     <div>

//     </div>
//   );
// }
