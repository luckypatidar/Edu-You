import React from 'react'
import Card from './Card'
import Data from './Data'
import './Main.css'
import { useHistory, useParams } from 'react-router-dom'
import { Header } from "../../widgets";
import HeaderData from '../../layouts/Header/Header';
import { useCustomState } from "../../../state/state";
var count = 0;
console.log(Data);
const obj = {
    minHeight: "100vh",
    minWidth: "100vw",
    marginTop: "100px",
    marginBottom: "100px"
}
export default (props) => {

    const state = useCustomState()[0];

    const { id } = useParams();
    var name = "";
    if (id % 10 == 1) {
        name = "Physics";
    }
    else if (id % 10 == 2) {
        name = "Chemistry";
    }
    else if (id % 10 == 3) {
        name = "Mathematics";
    }
    else if (id % 10 == 4) {
        name = "Biology";
    }
    else {
        name = "Information Pracitces"
    }
    var ind;
    if (id >= 120) {
        ind = 1;
    }
    else {
        ind = 0;
    }
    return (
        <>
            <HeaderData data={state.data.menu} />
            <Header img={state.data.header_bgs.contacts}></Header>
            <div className="d-flex justify-content-around align-items-center flex-column flex-wrap chapter" style={obj}>
                <h1 style={{ fontSize: "30px", marginBottom: "100px", color: "#1e7088", fontWeight: "900", backgroundColor: "#ffffff" }}>{name}</h1>
                <div className=" d-flex justify-content-around align-items-center flex-wrap" >
                    {
                        Data[ind][id % 10 - 1].map((value, index) => {
                            return (
                                <Card number={index} name={value.name} style={{ color: "black" }} />
                            )
                        })
                    }

                </div>
            </div>
        </>
    )
}
