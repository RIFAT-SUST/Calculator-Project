import { useState } from "react";
import styles from "./App.module.css";
import ButtonContainer from "./component/ButtonsContainer";
import Display from "./component/Display";

function App() {
  const [calVal, setcalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setcalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setcalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setcalVal(newDisplayValue);
    }
  };

  return (
    <>
      <center>
        <div className={styles.calculator}>
          <Display displayVal={calVal}></Display>
          <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
        </div>
      </center>
    </>
  );
}

export default App;
