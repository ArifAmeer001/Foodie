import "../App.css";
import { IonIcon } from "@ionic/react";
import { star } from "ionicons/icons";

const FoodMenuCard = (props) => {
  return (
    <>
      <li>
        <div className="food-menu-card">
          <div className="card-banner">
            <img
              src={`./images/food-menu-${props.img}.png`}
              width="300"
              height="300"
              loading="lazy"
              alt="Fried Chicken Unlimited"
              className="w-100"
            />

            <div className="badge">-{props.percentDiscount}%</div>

            <button className="btn food-menu-btn">Order Now</button>
          </div>

          <div className="wrapper">
            <p className="category">{props.category}</p>

            <div className="rating-wrapper">
              <IonIcon icon={star}></IonIcon>
              <IonIcon icon={star}></IonIcon>
              <IonIcon icon={star}></IonIcon>
              <IonIcon icon={star}></IonIcon>
              <IonIcon icon={star}></IonIcon>
            </div>
          </div>

          <h3 className="h3 card-title">{props.cardTitle}</h3>

          <div className="price-wrapper">
            <p className="price-text">Price:</p>

            <data className="price">${props.cutPrice}.00</data>

            <del className="del" value="69.00">
              ${props.price}.00
            </del>
          </div>
        </div>
      </li>
    </>
  );
};

export default FoodMenuCard;
