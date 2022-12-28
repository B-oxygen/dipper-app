import styles from "../CustomPage.module.css";

const BackgroundColor = ({ setBackgroundColor }) => {
  return (
    <div>
      <img
        src="https://iili.io/HT54pUv.png"
        alt=""
        className={styles.background1}
        onClick={() => setBackgroundColor("https://iili.io/HT54pUv.png")}
      />

      <img
        src="https://iili.io/HT54m0J.png"
        alt=""
        className={styles.background2}
        onClick={() => setBackgroundColor("https://iili.io/HT54m0J.png")}
      />

      <img
        src="https://iili.io/HT56HRp.png"
        alt=""
        className={styles.background3}
        onClick={() => setBackgroundColor("https://iili.io/HT56HRp.png")}
      />

      <img
        src="https://iili.io/HT56JON.png"
        alt=""
        className={styles.background4}
        onClick={() => setBackgroundColor("https://iili.io/HT56JON.png")}
      />
    </div>
  );
};

export default BackgroundColor;
