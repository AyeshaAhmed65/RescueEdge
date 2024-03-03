import styles from "./App.module.css";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import About from "./Pages/About/About";

function App() {
  return (
    <div className={styles.App}>
      <NavigationBar />
      <About />
    </div>
  );
}

export default App;
