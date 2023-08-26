import "../App.css";
import TestimonialCard from "./TestimonialCard";
import TestimonialDB from "../DataBase/TestimonialDB";

const Testimonial = () => {
  const TestimonialCards = TestimonialDB.map((data) => {
    return (
      <TestimonialCard
        img={data.img}
        name={data.name}
        title={data.title}
        quote={data.quote}
      ></TestimonialCard>
    );
  });

  return (
    <>
      <section className="section section-divider white testi">
        <div className="container">
          <p className="section-subtitle">Testimonials</p>

          <h2 className="h2 section-title">
            Our Customers <span className="span">Reviews</span>
          </h2>

          <p className="section-text">
            Food is any substance consumed to provide nutritional support for an
            organism.
          </p>

          <ul className="testi-list has-scrollbar">{TestimonialCards}</ul>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
