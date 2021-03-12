import React, { Fragment } from "react";
import { Header, Contacts } from "../../widgets";
import { useCustomState } from "../../../state/state";
import HeaderData from '../../layouts/Header/Header';

export default () => {
  const state = useCustomState()[0];

  return (
    <Fragment>
      <HeaderData data={state.data.menu} />
      <Header img={state.data.header_bgs.contacts}></Header>
      <Contacts />
    </Fragment>
  );
};
