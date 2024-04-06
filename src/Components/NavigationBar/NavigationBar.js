import styles from "./NavigationBar.module.css";
import logo from "../../images/logo.png";

function NavigationBar({setShowAboutUs,setShowImages}) {
  return (
    <div className={styles.navigation__wrapper}>
      <div className={styles.navigation__logo__wrapper}>
        <img src={logo} />
        <h1>
          <span>Rescue</span> Edge
        </h1>
      </div>
      <div className={styles.navigation__buttons__wrapper}>
        <button onClick={()=>{
          setShowAboutUs(true)
          setShowImages(false)
          }}
          >About Us</button>

        <button onClick={()=>{
          setShowAboutUs(false)
          setShowImages(true)
          }}
          >Images</button>

        <button>Settings</button>
      </div>
    </div>
  );
}

export default NavigationBar;
