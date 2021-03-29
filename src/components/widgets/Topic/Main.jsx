import React from 'react'
import Card from './Card'
import './Card.css'
import { useParams } from 'react-router-dom'
import { Header } from "../../widgets";
import HeaderData from '../../layouts/Header/Header';
import { useCustomState } from "../../../state/state";
var count = 0;
export default (props) => {
    const state = useCustomState()[0];
    const { id } = useParams();
    console.log(id);
    return (
        <>
            <HeaderData data={state.data.menu} />
            <Header img={state.data.header_bgs.contacts}></Header>
            <div className="d-flex justify-content-center align-items-center flex-column topic">
                <h1 style={{ textAlign: "center", margin: "50px", fontWeight: "900", color: "#1e7088" }}>Topics Covered</h1>
                <div className="courses-container">

                    <Card />
                    {/* <Card /> */}
                    {/*<Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card /> */}
                </div>
            </div>
        </>
    )
}
