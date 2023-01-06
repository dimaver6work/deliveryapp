import React from "react";
import food10 from "./assets/food10.png";

const Categories = () => {
  return (
    <div className="categories">
      <h2>Категории блюд</h2>
      <div className="list">
        <div>
          <p>Популярные блюда</p>
        </div>
        <div>
          <p>Овощное</p>
        </div>
        <div>
          <p>Мясное</p>
        </div>
      </div>
      <div className="four">
        <div className="food">
          <img src={food10} alt={food10} />
          <h2>Куриные крылья под соусом Терияки</h2>
          <p>
            Соус Терияки придумали повора из Японии. По традиции его используют
            в качестве маринада для...
          </p>
          <div className="foodBot">
            <div className="botLeft">
              <h3>260 ₽</h3>
              <p>500 гр</p>
            </div>
            <button>В корзину</button>
          </div>
        </div>
        <div className="food">
          <img src={food10} alt={food10} />
          <h2>Куриные крылья под соусом Терияки</h2>
          <p>
            Соус Терияки придумали повора из Японии. По традиции его используют
            в качестве маринада для...
          </p>
          <div className="foodBot">
            <div className="botLeft">
              <h3>260 ₽</h3>
              <p>500 гр</p>
            </div>
            <button>В корзину</button>
          </div>
        </div>
        <div className="food">
          <img src={food10} alt={food10} />
          <h2>Куриные крылья под соусом Терияки</h2>
          <p>
            Соус Терияки придумали повора из Японии. По традиции его используют
            в качестве маринада для...
          </p>
          <div className="foodBot">
            <div className="botLeft">
              <h3>260 ₽</h3>
              <p>500 гр</p>
            </div>
            <button>В корзину</button>
          </div>
        </div>
        <div className="food">
          <img src={food10} alt={food10} />
          <h2>Куриные крылья под соусом Терияки</h2>
          <p>
            Соус Терияки придумали повора из Японии. По традиции его используют
            в качестве маринада для...
          </p>
          <div className="foodBot">
            <div className="botLeft">
              <h3>260 ₽</h3>
              <p>500 гр</p>
            </div>
            <button>В корзину</button>
          </div>
        </div>
      </div>
      <button className="botButton">Больше блюд</button>
    </div>
  );
};

export default Categories;
