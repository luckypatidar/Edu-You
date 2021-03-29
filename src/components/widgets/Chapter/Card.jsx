import React from 'react'
import './Card.scss'
import Data from './Data'
import { NavLink } from 'react-router-dom'
const obj = {
    width: "28rem",
    height: "24rem",
    fontSize: "2.5rem",
    border: "0px",
    margin: "20px",
    color: "black",
    alignItems: "center"
}
const cardSize = {
    fontSize: "3.5rem",
    color: "black",
    textAlign: "center",
    marginBottom: "25px"
}
const App = (props) => {
    return (
        <>
            <NavLink exact to="/topic/1" style={{ textDecoration: "none", listStyle: "none", textAlign: "center" }}>
                <div className="card text-white text-center d-flex justify-content-center align-items-center flex-wrap flex-column " style={obj}>
                    <h1 style={cardSize} >Chapter-{props.number + 1}</h1>
                    <h3 style={{ color: "black", textAlign: "center" }} >{props.name}</h3>

                </div>
            </NavLink>
        </>
    )
}
export default App;