import styles from "../CustomPage.module.css";

const Hair = ({ setHairSort }) => {
  return (
    <div>
      <img
        src="https://iili.io/HT56Ksn.png"
        alt=""
        className={styles.background1}
        onClick={() => setHairSort("https://iili.io/HT56Ksn.png")}
      />

      <img
        src="https://iili.io/HT56B0G.png"
        alt=""
        className={styles.background2}
        onClick={() => setHairSort("https://iili.io/HT56B0G.png")}
      />

      <img
        src="https://iili.io/HT56Cgf.png"
        alt=""
        className={styles.background3}
        onClick={() => setHairSort("https://iili.io/HT56Cgf.png")}
      />

      <img
        src="https://iili.io/HT56x5l.png"
        alt=""
        className={styles.background4}
        onClick={() => setHairSort("https://iili.io/HT56x5l.png")}
      />
    </div>
  );
};

export default Hair;
