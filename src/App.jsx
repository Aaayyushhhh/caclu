import DISPLAY from "./component/DISPLAY";
import styles from "./App.module.css";
import ButtonsContainer from "./component/ButtonsContainer";
import { useState } from "react";
import { calculateExpression } from "./utils/calculator";

function App() {
  const [calVal, setCalVal] = useState("");
  const [lastResult, setLastResult] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
      setLastResult("");
    } else if (buttonText === "=") {
      if (calVal) {
        const result = calculateExpression(calVal);
        setLastResult(calVal + " = " + result);
        setCalVal(result.toString());
      }
    } else if (buttonText === "⌫") {
      setCalVal(calVal.slice(0, -1));
    } else {
      // Prevent multiple operators in a row
      const lastChar = calVal.slice(-1);
      const operators = ['+', '-', '*', '/'];
      
      if (operators.includes(buttonText) && operators.includes(lastChar)) {
        // Replace the last operator with the new one
        setCalVal(calVal.slice(0, -1) + buttonText);
      } else {
        setCalVal(calVal + buttonText);
      }
    }
  };

  return (
    <div className={styles.calculator}>
      <div className={styles.header}>
        <h2>Calculator</h2>
        {lastResult && <div className={styles.lastResult}>{lastResult}</div>}
      </div>
      <DISPLAY displayValue={calVal || "0"}></DISPLAY>
      <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
    </div>
  );
}

export default App;