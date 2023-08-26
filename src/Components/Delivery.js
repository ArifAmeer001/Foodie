import React, { useEffect } from "react";
import "../App.css";

const Delivery = () => {
  useEffect(() => {
    const deliveryBoy = document.querySelector(".delivery-img");
    let deliveryBoyMove = -80;
    let lastScrollPos = 0;

    window.addEventListener("scroll", function () {
      let deliveryBoyTopPos = deliveryBoy.getBoundingClientRect().top;

      if (deliveryBoyTopPos < 500 && deliveryBoyTopPos > -250) {
        let activeScrollPos = window.scrollY;

        if (lastScrollPos < activeScrollPos) {
          deliveryBoyMove += 1;
        } else {
          deliveryBoyMove -= 1;
        }

        lastScrollPos = activeScrollPos;
        deliveryBoy.style.transform = `translateX(${deliveryBoyMove}px)`;
      }
    });

    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  return (
    <>
      <section className="section section-divider gray delivery">
        <div className="container">
          <div className="delivery-content">
            <h2 className="h2 section-title">
              A Moments Of Delivered On <span className="span">Right Time</span>{" "}
              & Place
            </h2>

            <p className="section-text">
              The restaurants in Hangzhou also catered to many northern Chinese
              who had fled south from Kaifeng during the Jurchen invasion of the
              1120s, while it is also known that many restaurants were run by
              families.
            </p>

            <button className="btn btn-hover">Order Now</button>
          </div>

          <figure className="delivery-banner">
            <img
              src="./images/delivery-banner-bg.png"
              width="700"
              height="602"
              loading="lazy"
              alt="clouds"
              className="w-100"
            />

            <img
              src="./images/delivery-boy.svg"
              width="1000"
              height="880"
              loading="lazy"
              alt="delivery boy"
              className="w-100 delivery-img"
              data-delivery-boy
            />
          </figure>
        </div>
      </section>
    </>
  );
};
export default Delivery;
