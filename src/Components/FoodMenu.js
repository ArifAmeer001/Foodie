import "../App.css";
import FoodMenuCard from "./FoodMenuCard";
import FoodMenuDb from "../DataBase/FoodMenuDB";

const FoodMenu = () => {
  const FoodCards = FoodMenuDb.map((data) => {
    return (
      <FoodMenuCard
        img={data.img}
        percentDiscount={data.percentDiscount}
        category={data.category}
        cardTitle={data.cardTitle}
        cutPrice={data.cutPric}
        price={data.price}
      ></FoodMenuCard>
    );
  });

  return (
    <>
      <section className="section food-menu" id="food-menu">
        <div className="container">
          <p className="section-subtitle">Popular Dishes</p>

          <h2 className="h2 section-title">
            Our Delicious <span className="span">Foods</span>
          </h2>

          <p className="section-text">
            Food is any substance consumed to provide nutritional support for an
            organism.
          </p>

          <ul className="fiter-list">
            <li>
              <button className="filter-btn  active">All</button>
            </li>

            <li>
              <button className="filter-btn">Pizza</button>
            </li>

            <li>
              <button className="filter-btn">Burger</button>
            </li>

            <li>
              <button className="filter-btn">Drinks</button>
            </li>

            <li>
              <button className="filter-btn">Sandwich</button>
            </li>
          </ul>

          <ul className="food-menu-list">{FoodCards}</ul>
        </div>
      </section>
    </>
  );
};

export default FoodMenu;
