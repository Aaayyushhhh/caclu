import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = ({ onButtonClick }) => {
  const buttonRows = [
    ["C", "⌫", "/"],
    ["7", "8", "9", "*"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ".", "="]
  ];

  const getButtonClass = (buttonName) => {
    if (buttonName === "=") return `${styles.button} ${styles.equalsButton}`;
    if (["+", "-", "*", "/"].includes(buttonName)) return `${styles.button} ${styles.operatorButton}`;
    if (["C", "⌫"].includes(buttonName)) return `${styles.button} ${styles.clearButton}`;
    if (buttonName === "0") return `${styles.button} ${styles.zeroButton}`;
    return styles.button;
  };

  return (
    <div className={styles.buttonContainer}>
      {buttonRows.map((row, rowIndex) => (
        <div key={rowIndex} className={styles.buttonRow}>
          {row.map((buttonName) => (
            <button
              key={buttonName}
              className={getButtonClass(buttonName)}
              onClick={() => onButtonClick(buttonName)}
            >
              {buttonName}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ButtonsContainer;