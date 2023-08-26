import "../../App.css";
import { IonIcon } from "@ionic/react";
import {
  logoFacebook,
  logoTwitter,
  logoInstagram,
  logoPinterest,
} from "ionicons/icons";

const SocialList = () => {
  return (
    <>
      <li>
        <a href="#" class="social-link">
          <IonIcon icon={logoFacebook}></IonIcon>
        </a>
      </li>

      <li>
        <a href="#" class="social-link">
          <IonIcon icon={logoTwitter}></IonIcon>
        </a>
      </li>

      <li>
        <a href="#" class="social-link">
          <IonIcon icon={logoInstagram}></IonIcon>
        </a>
      </li>

      <li>
        <a href="#" class="social-link">
          <IonIcon icon={logoPinterest}></IonIcon>
        </a>
      </li>
    </>
  );
};

export default SocialList;
