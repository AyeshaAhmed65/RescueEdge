import styles from "./About.module.css";
import { useRef, useEffect, useState } from "react";
import aboutMain from "../../images/aboutmain.png";
import t1 from "../../images/test1.png";
import t1detect from "../../images/test1detect.png";
import t2 from "../../images/test2.jpg";
import t2detect from "../../images/test2detect.jpg";

function About() {
  const subHeading = useRef(null);
  const [dotAnimation, setDotAnimation] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (subHeading.current) {
        const spanElement = subHeading.current.querySelector("span");
        if (spanElement) {
          let newTextWithSpan = `Revolutionizing search and <span>rescue</span> operations`;
          for (let i = 0; i < dotAnimation; i++) {
            newTextWithSpan += " .";
          }
          subHeading.current.innerHTML = newTextWithSpan;
          if (dotAnimation + 1 === 5) {
            setDotAnimation(0);
          } else {
            setDotAnimation(dotAnimation + 1);
          }
        }
      }
    }, 500);
    return () => clearInterval(intervalId);
  }, [dotAnimation]);
  return (
    <div className={styles.about__container}>
      <div className={styles.about__image__wrapper}>
        <img src={aboutMain} />
        <h1>
          <span>Rescue</span> Edge
        </h1>
        <h2 ref={subHeading}>
          Revolutionizing search and <span>rescue</span> operations
        </h2>
      </div>
      <div className={styles.about__content__wrapper}>
        <p>
          Welcome to an innovative solution revolutionizing search and rescue
          operations in<span> emergency </span>scenarios.Our mission is to
          provide a lifeline in times of crisis through cutting-edge technology.
        </p>
        <p>
          Imagine a world where every second counts in locating individuals
          trapped amidst rubble and debris. We harness the power of
          camera-equipped drones, powered by advanced object detection
          technology, to swiftly identify and locate humans in real-time.
        </p>
      </div>
      <div className={styles.detections__container}>
        <h1>Detections</h1>
        <div className={styles.detections__cards__wrapper}>
          <div className={styles.detections__card}>
            <div className={styles.detections__card__content}>
              <img src={t1} />
              <h2>Orignal Image</h2>
            </div>
            <div className={styles.detections__card__content}>
              <img src={t1detect} />
              <h2>Detected Image</h2>
            </div>
          </div>
          <div className={styles.detections__card}>
            <div className={styles.detections__card__content}>
              <img src={t2} />
              <h2>Orignal Image</h2>
            </div>
            <div className={styles.detections__card__content}>
              <img src={t2detect} />
              <h2>Detected Image</h2>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.working__container}>
        <h1>How It Works</h1>
        <p>
          Drones, equipped with Raspberry Pi and cameras, capture images every 5
          seconds. These images are then transmitted to a server, where a Python
          application analyzes the footage for human presence. If a person is
          detected, the corresponding image is saved, alongside geolocation data
          for added precision using a geolocation module hooked onto the
          raspberry pi.
        </p>
        <p>
          Our wensite grants access to this invaluable data. Users can
          seamlessly navigate through chronological images, each tagged with its
          respective location, offering crucial insights for search and rescue
          teams.
        </p>
        <button>View Images &rarr;</button>
      </div>
    </div>
  );
}

export default About;
