// tsdrpfc
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import "./App.css";
import { Footer, Header } from "./components/common";
import Student from "./features/student/Student";
import FirebaseApp from "./firebase/FirebaseApp";
import { StudentModel } from "./models";
import { actionCreators, State } from "./redux";

function App() {
  const dispatch = useDispatch();

  const { depositMoney, withDrawMoney, bankRuptMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const amount = useSelector((state: State) => state.bank);

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

      <h1>{amount}</h1>
      <button onClick={() => depositMoney(1000)}>depositMoney</button>
      <button onClick={() => withDrawMoney(500)}>withDrawMoney</button>
      <button onClick={() => bankRuptMoney()}>bankRuptMoney</button>

      <FirebaseApp />
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
