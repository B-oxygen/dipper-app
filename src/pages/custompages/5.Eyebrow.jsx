import styles from "../CustomPage.module.css";

const Eyebrow = ({ setEyebrowSort }) => {
  return (
    <div>
      <img
        src="https://iili.io/HT56AX9.png"
        alt=""
        className={styles.background1}
        onClick={() => setEyebrowSort("https://iili.io/HT56AX9.png")}
      />

      <img
        src="https://iili.io/HT56Rse.png"
        alt=""
        className={styles.background2}
        onClick={() => setEyebrowSort("https://iili.io/HT56Rse.png")}
      />

      <img
        src="https://iili.io/HT56Y0b.png"
        alt=""
        className={styles.background3}
        onClick={() => setEyebrowSort("https://iili.io/HT56Y0b.png")}
      />
    </div>
  );
};

export default Eyebrow;
