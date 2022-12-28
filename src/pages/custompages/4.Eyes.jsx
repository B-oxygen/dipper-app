import styles from "../CustomPage.module.css";

const Eyes = ({ setEyesSort }) => {
  return (
    <div>
      <img
        src="https://iili.io/HT56oJ4.png"
        alt=""
        className={styles.background1}
        onClick={() => setEyesSort("https://iili.io/HT56oJ4.png")}
      />

      <img
        src="https://iili.io/HT56ze2.png"
        alt=""
        className={styles.background2}
        onClick={() => setEyesSort("https://iili.io/HT56ze2.png")}
      />

      <img
        src="https://iili.io/HT56IbS.png"
        alt=""
        className={styles.background3}
        onClick={() => setEyesSort("https://iili.io/HT56IbS.png")}
      />

      <img
        src="https://iili.io/HT56uz7.png"
        alt=""
        className={styles.background4}
        onClick={() => setEyesSort("https://iili.io/HT56uz7.png")}
      />
    </div>
  );
};

export default Eyes;
