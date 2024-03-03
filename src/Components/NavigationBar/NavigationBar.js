import styles from "./NavigationBar.module.css";
function NavigationBar() {
  return (
    <div className={styles.navigation__wrapper}>
      <div className={styles.navigation__logo__wrapper}>
        <img src="/Assets/logo.png" />
        <h1>
          <span>Rescue</span> Edge
        </h1>
      </div>
      <div className={styles.navigation__buttons__wrapper}>
        <button>About Us</button>
        <button>Images</button>
        <button>Settings</button>
      </div>
    </div>
  );
}

export default NavigationBar;
