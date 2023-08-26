import "../App.css";
import { IonIcon } from "@ionic/react";
import { star } from "ionicons/icons";

const TestimonialCard = (props) => {
  return (
    <>
      <li className="testi-item">
        <div className="testi-card">
          <div className="profile-wrapper">
            <figure className="avatar">
              <img
                src={`./images/avatar-${props.img}.jpg`}
                width="80"
                height="80"
                loading="lazy"
                alt="Robert William"
              />
            </figure>

            <div>
              <h3 className="h4 testi-name">{props.name}</h3>

              <p className="testi-title">{props.title}</p>
            </div>
          </div>

          <blockquote className="testi-text">{props.quote}</blockquote>

          <div className="rating-wrapper">
            <IonIcon icon={star}></IonIcon>
            <IonIcon icon={star}></IonIcon>
            <IonIcon icon={star}></IonIcon>
            <IonIcon icon={star}></IonIcon>
            <IonIcon icon={star}></IonIcon>
          </div>
        </div>
      </li>
    </>
  );
};

export default TestimonialCard;
