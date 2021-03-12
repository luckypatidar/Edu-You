import React, { Fragment } from "react";
import { useCustomState } from "../../../state/state";
import { DashboardHeader } from '../../widgets';
import HeaderDashboard from '../../widgets/HeaderDashboard/HeaderDashboard';

export default (props) => {
    const state = useCustomState()[0];
    return (
        <Fragment>
            <HeaderDashboard data={state.data.menu} />
            <DashboardHeader handleLogout={props.handleLogout}>Dashboard</DashboardHeader>
        </Fragment>
    );
};