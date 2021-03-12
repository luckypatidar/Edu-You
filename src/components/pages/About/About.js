import React, { Fragment } from "react";
import HeaderData from '../../layouts/Header/Header';
import {
  Header,
  TextBlock
} from "../../widgets";
import { useCustomState } from "../../../state/state";

export default () => {
  const state = useCustomState()[0];

  return (
    <Fragment>
      <HeaderData data={state.data.menu} />
      <Header img={state.data.header_bgs.about}></Header>
      <TextBlock />
    </Fragment>
  );
};
