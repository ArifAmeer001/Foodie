import "../App.css";
import { IonIcon } from "@ionic/react";
import { chevronUp } from "ionicons/icons";
const Top = () => {
  return (
    <>
      <a
        href="#top"
        class="back-top-btn"
        aria-label="Back to top"
        data-back-top-btn
      >
        <IonIcon icon={chevronUp}></IonIcon>
      </a>
    </>
  );
};

export default Top;
