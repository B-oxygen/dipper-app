import styles from "../CustomPage.module.css";

const Skin = ({ setSkinSort }) => {
  return (
    <div>
      <img
        src="https://iili.io/HT56dbI.png"
        alt=""
        className={styles.background1}
        onClick={() => setSkinSort("https://iili.io/HT56dbI.png")}
      />

      <img
        src="https://iili.io/HT563xt.png"
        alt=""
        className={styles.background2}
        onClick={() => setSkinSort("https://iili.io/HT563xt.png")}
      />

      <img
        src="https://iili.io/HT56FWX.png"
        alt=""
        className={styles.background3}
        onClick={() => setSkinSort("https://iili.io/HT56FWX.png")}
      />
    </div>
  );
};

export default Skin;
