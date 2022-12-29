import {
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
  useSyncExternalStore,
} from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CustomPage.module.css";
import BackgroundColor from "./custompages/1.BackgroundColor";
import Skin from "./custompages/2.Skin";
import Hair from "./custompages/3.Hair";
import Eyes from "./custompages/4.Eyes";
import Eyebrow from "./custompages/5.Eyebrow";
import Clothes from "./custompages/6.Clothes";

const CustomPage: FunctionComponent = () => {
  const [backgroundColor, setBackgroundColor] = useState(
    "https://iili.io/HT54pUv.png"
  );
  const [skinSort, setSkinSort] = useState("https://iili.io/HT56dbI.png");
  const [hairSort, setHairSort] = useState("https://iili.io/HT56Ksn.png");
  const [eyesSort, setEyesSort] = useState("https://iili.io/HT56oJ4.png");
  const [eyebrowSort, setEyebrowSort] = useState("https://iili.io/HT56AX9.png");
  const [clothesSort, setClothesSort] = useState("https://iili.io/HT56agj.png");

  const [isOpenBGC, setIsOpenBGC] = useState(true);
  const [isOpenSkin, setIsOpenSkin] = useState(false);
  const [isOpenHair, setIsOpenHair] = useState(false);
  const [isOpenEyes, setIsOpenEyes] = useState(false);
  const [isOpenEyebrow, setIsOpenEyebrow] = useState(false);
  const [isOpenClothes, setIsOpenClothes] = useState(false);

  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/my-page");
  }, [navigate]);

  const onRectangleButtonClick = useCallback(() => {
    navigate("/route-page");
  }, [navigate]);

  const onStartGameClick = useCallback(() => {
    navigate("/route-page");
  }, [navigate]);

  const onShopButtonClick = useCallback(() => {
    navigate("/custom-page");
  }, [navigate]);

  const onRectangleButton2Click = useCallback(() => {
    navigate("/my-page");
  }, [navigate]);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className={styles.customPageBackground}>
      <div className={styles.wrapper} />
      <button className={styles.button} autoFocus onClick={onButtonClick}>
        <img className={styles.logoExIcon} alt="" src="../logo-ex1@2x.png" />
        <div className={styles.logoText}>Dipper</div>
      </button>
      <button className={styles.startGame} autoFocus onClick={onStartGameClick}>
        <button
          className={styles.startGameChild}
          autoFocus
          onClick={onRectangleButtonClick}
        />
        <div className={styles.startGame1}>START GAME</div>
      </button>
      <div className={styles.icon}>
        <button
          className={styles.shopButton}
          autoFocus
          onClick={onShopButtonClick}
        >
          <button className={styles.shopButtonChild} autoFocus />
          <div className={styles.shop}>SHOP</div>
        </button>
        <button
          className={styles.rectangleParent}
          autoFocus
          onClick={onRectangleButton2Click}
        >
          <button
            className={styles.instanceChild}
            autoFocus
            data-animate-on-scroll
          />
          <div className={styles.myPage}>MY PAGE</div>
        </button>
      </div>

      <div>
        <img
          className={styles.backgroundColor}
          data-animate-on-scroll
          src={backgroundColor}
          alt="backgroundColor"
        />
        <img
          className={styles.skin}
          data-animate-on-scroll
          src={skinSort}
          alt="skin"
        />
        <img
          className={styles.outline}
          data-animate-on-scroll
          src="https://iili.io/HT569JR.png"
          alt="skin"
        />
        <img
          className={styles.hair}
          data-animate-on-scroll
          src={hairSort}
          alt="hair"
        />
        <img
          className={styles.eyes}
          data-animate-on-scroll
          src={eyesSort}
          alt="eyes"
        />{" "}
        <img
          className={styles.eyebrow}
          data-animate-on-scroll
          src={eyebrowSort}
          alt="eyebrow"
        />
        <img
          className={styles.clothes}
          data-animate-on-scroll
          src={clothesSort}
          alt="clothes"
        />
      </div>

      <button
        className={styles.navBackground}
        autoFocus
        data-animate-on-scroll
        onClick={() => {
          setIsOpenBGC(true);
          setIsOpenSkin(false);
          setIsOpenHair(false);
          setIsOpenEyes(false);
          setIsOpenEyebrow(false);
          setIsOpenClothes(false);
        }}
      >
        background Color
      </button>
      <button
        className={styles.navSkin}
        autoFocus
        data-animate-on-scroll
        onClick={() => {
          setIsOpenBGC(false);
          setIsOpenSkin(true);
          setIsOpenHair(false);
          setIsOpenEyes(false);
          setIsOpenEyebrow(false);
          setIsOpenClothes(false);
        }}
      >
        Skin
      </button>
      <button
        className={styles.navHair}
        autoFocus
        data-animate-on-scroll
        onClick={() => {
          setIsOpenBGC(false);
          setIsOpenSkin(false);
          setIsOpenHair(true);
          setIsOpenEyes(false);
          setIsOpenEyebrow(false);
          setIsOpenClothes(false);
        }}
      >
        Hair
      </button>
      <button
        className={styles.navEyes}
        autoFocus
        data-animate-on-scroll
        onClick={() => {
          setIsOpenBGC(false);
          setIsOpenSkin(false);
          setIsOpenHair(false);
          setIsOpenEyes(true);
          setIsOpenEyebrow(false);
          setIsOpenClothes(false);
        }}
      >
        Eyes
      </button>
      <button
        className={styles.navEyebrow}
        autoFocus
        data-animate-on-scroll
        onClick={() => {
          setIsOpenBGC(false);
          setIsOpenSkin(false);
          setIsOpenHair(false);
          setIsOpenEyes(false);
          setIsOpenEyebrow(true);
          setIsOpenClothes(false);
        }}
      >
        Eyebrow
      </button>
      <button
        className={styles.navClothes}
        autoFocus
        data-animate-on-scroll
        onClick={() => {
          setIsOpenBGC(false);
          setIsOpenSkin(false);
          setIsOpenHair(false);
          setIsOpenEyes(false);
          setIsOpenEyebrow(false);
          setIsOpenClothes(true);
        }}
      >
        Clothes
      </button>

      <div className={styles.container}>
        {isOpenBGC && (
          <BackgroundColor setBackgroundColor={setBackgroundColor} />
        )}
        {isOpenSkin && <Skin setSkinSort={setSkinSort} />}
        {isOpenHair && <Hair setHairSort={setHairSort} />}
        {isOpenEyes && <Eyes setEyesSort={setEyesSort} />}
        {isOpenEyebrow && <Eyebrow setEyebrowSort={setEyebrowSort} />}
        {isOpenClothes && <Clothes setClothesSort={setClothesSort} />}
      </div>
    </div>
  );
};

export default CustomPage;
