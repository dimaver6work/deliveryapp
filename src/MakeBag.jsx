import React from "react";
import bagL from "./assets/bagL.png";
import bagR from "./assets/bagR.png";

const MakeBag = () => {
  return (
    <div className="makeBag">
      <div className="bag">
        <div className="bag_text">
          <h3>Сладкая корзина</h3>
          <p className="first">
            Произвольный выбор десертов по Вашему желанию.
          </p>
          <h2>ОТ 1 300 ₽</h2>
          <p className="second">стоимость доставки до 200 ₽</p>
          <button>Собрать корзину</button>
        </div>

        <img src={bagL} alt={bagL} />
      </div>
      <div className="bag">
        <div className="bag_text">
          <h3>Минимум усилий</h3>
          <p className="first">
            Произвольный выбор продуктов по Вашему желанию.
          </p>
          <h2>ОТ 700 ₽</h2>
          <p className="second">стоимость доставки до 200 ₽</p>
          <button>Собрать корзину</button>
        </div>

        <img src={bagR} alt={bagR} />
      </div>
    </div>
  );
};

export default MakeBag;
