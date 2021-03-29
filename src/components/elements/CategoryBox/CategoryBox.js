import React from "react";
import styles from "./CategoryBox.module.scss";
import useHover from "../../../utilities/useHover";
import THEME from "../../../state/theme";
import { Link } from "react-router-dom";

export default ({ icon, title, to }) => {
    const [ref, isHover] = useHover();
    return (
        <Link to={to} style={{ textDecoration: "none" }}>
            <div
                ref={ref}
                className={styles.address_box}
                style={{ background: isHover && THEME.orange, textDecoration: "none" }}
            >
                <i className={icon} />
                <div>
                    <h3>{title}</h3>
                </div>
            </div>
        </Link>
    );
};