import React, { Fragment } from "react";
import { Header } from '../../layouts';
import {
  Chooseus,
  Slider,
} from "../../widgets";

import { useCustomState } from "../../../state/state";

export default () => {
  const state = useCustomState()[0];

  return (
    <Fragment>
      <Header data={state.data.menu} />
      <Slider data={state.data.posts} />
      <Chooseus data={state.data.features2} />
    </Fragment>
  );
};
