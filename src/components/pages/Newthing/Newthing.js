import React, { Fragment } from "react";
import { Header, Pricing } from "../../widgets";
import { useCustomState } from "../../../state/state";
import HeaderData from '../../layouts/Header/Header';

export default () => {
  const state = useCustomState()[0];

  return (
    <Fragment>
      <HeaderData data={state.data.menu} />
      <Header img={state.data.header_bgs.services}></Header>
      <Pricing data={state.data.pricing} />
    </Fragment>
  );
};
