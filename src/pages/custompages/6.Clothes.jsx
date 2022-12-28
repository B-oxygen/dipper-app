import styles from "../CustomPage.module.css";

const Clothes = ({ setClothesSort }) => {
  return (
    <div>
      <img
        src="https://iili.io/HT56agj.png"
        alt=""
        className={styles.background1}
        onClick={() => setClothesSort("https://iili.io/HT56agj.png")}
      />

      <img
        src="https://iili.io/HT56ldx.png"
        alt=""
        className={styles.background2}
        onClick={() => setClothesSort("https://iili.io/HT56ldx.png")}
      />

      <img
        src="https://iili.io/HT5605Q.png"
        alt=""
        className={styles.background3}
        onClick={() => setClothesSort("https://iili.io/HT5605Q.png")}
      />

      <img
        src="https://iili.io/HT561eV.png"
        alt=""
        className={styles.background4}
        onClick={() => setClothesSort("https://iili.io/HT561eV.png")}
      />
    </div>
  );
};

export default Clothes;
