import React, { useRef } from "react";
import Slider from "react-slick";
import styles from "./Slider.module.scss";
import Layout from "../../layouts/Layout/Layout";
import { Button } from "../../elements";

export default ({ data = [] }) => {
  let sliderRef = useRef(null);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slideList = data.map((item, index) => (
    <article key={index}>
      <Layout
        style={{
          background: "url(" + item.image + ") center/cover",
        }}
        col="1"
      // mode="dark"
      >
        <div className={styles.slide}>
          <div className={styles.intro}>
            <img src={item.logo} alt="logo" />
            <h1>{item.title}</h1>
            <Button to={"/signin"} hoverType="solid-white-tb"
              className={styles.Button}
            >
              Let's Start
            </Button>
          </div>
        </div>
      </Layout>
    </article>
  ));

  return (
    <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
      {slideList}
    </Slider>
  );
};
