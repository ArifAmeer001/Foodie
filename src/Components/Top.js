import "../App.css";
import { IonIcon } from "@ionic/react";
import { chevronUp } from "ionicons/icons";
import { useState, useEffect } from "react";
const Top = () => {
  const [topActive, setTopActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setTopActive(true);
      } else {
        setTopActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <a
        href="#top"
        className={`back-top-btn ${topActive ? "active" : ""}`}
        aria-label="Back to top"
        data-back-top-btn
      >
        <IonIcon icon={chevronUp}></IonIcon>
      </a>
    </>
  );
};

export default Top;
