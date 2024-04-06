import axios from 'axios';
import { useEffect,useState } from 'react';
import styles from "./Images.module.css"

function Images() {

  const [imagePaths,setImagePaths] = useState([])

  useEffect(()=>{
    const getImagePaths = async()=>{
      let data = await axios.get("http://127.0.0.1:5550/Predictions")
      setImagePaths(data.data)
    }
    getImagePaths()

    setInterval(()=>{
      getImagePaths()
    },[10000])
  },[])

  return (
    <div className={styles.container}>
    <div className={styles.flexContainer}>
      {imagePaths.map((path)=><div key={path} className={styles.imgWrapper}>
            <img src={`http://127.0.0.1:5550/Predictions/${path}`}/>
            <p>{path.split('.')[0]}</p>
        </div>)}
    </div>
    </div>
  );
}

export default Images;