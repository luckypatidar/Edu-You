import React, { Fragment } from "react";
import { SignIn, Header } from "../../widgets";
import { useCustomState } from "../../../state/state";

export default () => {
    const state = useCustomState()[0];

    return (
        <Fragment>
            <SignIn />
        </Fragment>
    );
};