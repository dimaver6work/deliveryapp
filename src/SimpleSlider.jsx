import React, { Component } from "react";
import Slider from "react-slick";
import "./App.scss";
import one from "./assets/1.png";
import two from "./assets/2.png";
import three from "./assets/3.png";
import prev from "./assets/arrow-left.png";
import next from "./assets/arrow-right.png";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="next" onClick={onClick}>
      <img src={next} alt="next" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="prev" onClick={onClick}>
      <img src={prev} alt="prev" />
    </div>
  );
}

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      pauseOnHover: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <div className="slider">
        <Slider {...settings}>
          <div className="slide">
            <div className="text">
              <h2>Неделя летних овощей</h2>

              <p>
                Специальная овощная корзина. Новые продукты, специальные цены,
                скидки!
              </p>
              <button>Заказать со скидкой</button>
            </div>

            <img src={one} alt={one} />
          </div>
          <div className="slide">
            <div className="text">
              <h2>Неделя осенних овощей</h2>

              <p>
                Специальная овощная корзина. Новые продукты, специальные цены,
                скидки!
              </p>
              <button>Заказать со скидкой</button>
            </div>

            <img src={two} alt={two} />
          </div>
          <div className="slide">
            <div className="text">
              <h2>Витаминная неделя</h2>

              <p>
                Специальная овощная корзина. Новые продукты, специальные цены,
                скидки!
              </p>

              <button>Заказать со скидкой</button>
            </div>

            <img src={three} alt={three} />
          </div>
        </Slider>
      </div>
    );
  }
}
