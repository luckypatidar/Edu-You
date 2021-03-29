import React from 'react'
import Card from './Card'
import Data from './Data'
import { Header } from "../../widgets";
import HeaderData from '../../layouts/Header/Header';
import { useCustomState } from "../../../state/state";
var count = 0;
const obj = {
    // minHeight: "100vh",
    // miWidth: "100vw"
    padding: "100px 0 100px 0"
}
// based on division for now sake it is for division 3 consisting of 11 12
export default (props) => {
    const state = useCustomState()[0];
    return (
        <>
            <HeaderData data={state.data.menu} />
            <Header img={state.data.header_bgs.contacts}></Header>
            <div className="d-flex justify-content-center align-items-center flex-wrap flex-column subject" style={obj}>
                <h1 style={{ color: "#1e7088", fontWeight: "700" }}>Category Page</h1>
                <div className="container d-flex justify-content-around align-items-center flex-wrap">
                    {
                        Data[2].map((value, index) => {
                            return (
                                <>
                                    <Card key={index} index={index} class={index + 11} />
                                    {/* <Card key={index} index={index} class={index + 11} /> */}

                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}