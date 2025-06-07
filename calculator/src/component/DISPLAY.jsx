import styles from "./DISPLAY.module.css";
const DISPLAY = ({ displayValue }) => {
  return (
    <input
      className={styles.display}
      type="text"
      value={displayValue}
      readOnly
    />
  );
};

export default DISPLAY;
