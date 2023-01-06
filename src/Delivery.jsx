import React from "react";
import food1 from "./assets/food1.png";
import food2 from "./assets/food2.png";
import food3 from "./assets/food3.png";
import food4 from "./assets/food4.png";
import food5 from "./assets/food5.png";
import food6 from "./assets/food6.png";
import food7 from "./assets/food7.png";
import food8 from "./assets/food8.png";

const Delivery = () => {
  return (
    <div className="delivery">
      <h2>Доставка готовой еды на неделю</h2>
      <div className="eight">
        <div className="food">
          <div className="food_text">
            <p>ЗОЖ</p>
          </div>
          <img src={food1} alt={food1} />
        </div>
        <div className="food">
          <div className="food_text">
            <p>Овощное</p>
          </div>
          <img src={food2} alt={food2} />
        </div>
        <div className="food">
          <div className="food_text">
            <p>Мясное</p>
          </div>
          <img src={food3} alt={food3} />
        </div>
        <div className="food">
          <div className="food_text">
            <p>Птица</p>
          </div>
          <img src={food4} alt={food4} />
        </div>
        <div className="food">
          <div className="food_text">
            <p>Рыбное</p>
          </div>
          <img src={food5} alt={food5} />
        </div>
        <div className="food">
          <div className="food_text">
            <p>Детское</p>
          </div>
          <img src={food6} alt={food6} />
        </div>
        <div className="food">
          <div className="food_text">
            <p>Родителям</p>
          </div>
          <img src={food7} alt={food7} />
        </div>
        <div className="food">
          <div className="food_text">
            <p>Праздничное</p>
          </div>
          <img src={food8} alt={food8} />
        </div>
      </div>
    </div>
  );
};

export default Delivery;
