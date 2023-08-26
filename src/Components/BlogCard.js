import "../App.css";
import { IonIcon } from "@ionic/react";
import { calendarOutline, personOutline, arrowForward } from "ionicons/icons";

const BlogCard = (props) => {
  return (
    <>
      <li>
        <div className="blog-card">
          <div className="card-banner">
            <img
              src={`./images/blog-${props.img}.jpg`}
              width="600"
              height="390"
              loading="lazy"
              alt="What Do You Think About Cheese Pizza Recipes?"
              className="w-100"
            />

            <div className="badge">{props.badge}</div>
          </div>

          <div className="card-content">
            <div className="card-meta-wrapper">
              <a href="#" className="card-meta-link">
                <IonIcon icon={calendarOutline}></IonIcon>

                <time className="meta-info" datetime="2022-01-01">
                  {props.date}
                </time>
              </a>

              <a href="#" className="card-meta-link">
                <IonIcon icon={personOutline}></IonIcon>

                <p className="meta-info">{props.name}</p>
              </a>
            </div>

            <h3 className="h3">
              <a href="#" className="card-title">
                {props.title}
              </a>
            </h3>

            <p className="card-text">{props.description}</p>

            <a href="#" className="btn-link">
              <span>Read More</span>

              <IonIcon icon={arrowForward} aria-hidden="true"></IonIcon>
            </a>
          </div>
        </div>
      </li>
    </>
  );
};

export default BlogCard;
