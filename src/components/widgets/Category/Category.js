import React, { Fragment } from "react";
import styles from "./Category.module.scss";
import Layout from "../../layouts/Layout/Layout";
import { CategoryBox, Button } from "../../elements";
import THEME from "../../../state/theme";
import { useCustomState } from "../../../state/state";

export default () => {
    const actions = useCustomState()[1];

    return (
        <Fragment>
            <div className={styles.header}>
                <span className="subtitle" style={{ color: THEME.primary }}>
                    Choose your Category
        </span>
                <h2 style={{ textTransform: "uppercase" }}>Feel free to choose any Category</h2>

            </div>
            <Layout col="4">
                <CategoryBox
                    to={"/category1"}
                    icon="las la-phone"
                    title="Primary"
                />
                <CategoryBox
                    to={"/category2"}
                    icon="la la-envelope-open"
                    title="Secondary"
                />
                <CategoryBox
                    to={"/category3"}
                    icon="la la-home"
                    title="College"
                />
                <CategoryBox
                    to={"/category4"}
                    icon="las la-comment"
                    title="Other"
                />
                <span className={styles.divider} style={{ borderColor: THEME.color }} />
            </Layout>

        </Fragment>
    );
};
