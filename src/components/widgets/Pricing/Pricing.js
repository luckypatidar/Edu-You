import React from "react";
import styles from "./Pricing.module.scss";
import Layout from "../../layouts/Layout/Layout";
import { CardButton } from "../../ui";
import THEME from "../../../state/theme";
import { useCustomState } from "../../../state/state";

import stockImg from './image/stockMarket.jpg'
import Card from './Card'
import CardData from './CardData'

export default ({ data = [] }) => {
  const actions = useCustomState()[1];

  return (


    <Layout col="4" padding>




      <Card img={CardData.Card1.img} title={CardData.Card1.title} text={CardData.Card1.text} link={CardData.Card1.link} button={CardData.Card1.button} />
      <Card img={CardData.Card2.img} title={CardData.Card2.title} text={CardData.Card2.text} link={CardData.Card2.link} button={CardData.Card2.button} />
      <Card img={CardData.Card3.img} title={CardData.Card3.title} text={CardData.Card3.text} link={CardData.Card3.link} button={CardData.Card3.button} />
      <Card img={CardData.Card4.img} title={CardData.Card4.title} text={CardData.Card4.text} link={CardData.Card4.link} button={CardData.Card4.button} />




    </Layout>
  );
};
