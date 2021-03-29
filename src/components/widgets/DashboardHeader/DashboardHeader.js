import React from "react";
import styles from "./DashboardHeader.module.scss";
import Layout from "../../layouts/Layout/Layout";
import Button from '@material-ui/core/Button';
import YoutubeVideo from '../YoutubeVideo/YoutubeVideo';
import { useCustomState } from "../../../state/state";


export default (props) => {

    const state = useCustomState()[0];

    return (
        <>
            <Layout
                style={{
                    background: "url('https://images.pexels.com/photos/887843/pexels-photo-887843.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940') center/cover"
                }}
                col="1"
                mode="dark"
            >
                <div className={styles.btndiv}>
                    <Button
                        variant="contained"

                        style={{
                            fontSize: "25px",
                            fontWeight: "bold",
                            paddingTop: "10px",
                            paddingBottom: "10px",
                            paddingRight: "20px",
                            paddingLeft: "20px",
                            background: "#FF4B2B",
                            color: "White"
                        }}
                        onClick={props.handleLogout}
                    >
                        Logout
                    </Button>
                </div>
                <div className={styles.header}>
                    <h1>Dashboard</h1>

                </div>
            </Layout>
            {/* <p style={{ fontSize: "30px", marginTop: "200px", textAlign: "center", marginBottom: "200px", fontWeight: "bolder" }}>
                <YoutubeVideo data={state.data.youtubelink} />
        </p>  */}

        </>
    );
};
