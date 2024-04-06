import styles from "./App.module.css";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import About from "./Pages/About/About";
import Images from "./Pages/Images/Images";

import { useState } from "react";

function App() {
  const [showAboutUs,setShowAboutUs] = useState(true)
  const [showImages,setShowImages] = useState(false)

  return (
    <div className={styles.App}>
      <NavigationBar setShowAboutUs={setShowAboutUs} setShowImages={setShowImages}/>
      {showAboutUs && <About />}
      {showImages && <Images />}
    </div>
  );
}

export default App;
