import React from 'react';
import './Card.css';
import Data from './Data';
// import Card from '../Division/Main'
import { NavLink } from 'react-router-dom';
const App = (props) => {
  const obj = {
    width: "300px",
    height: "300px",
  }
  const otherObj = {
    padding: "23px"
  }
  const anObj = {
    position: "absolute",
    top: "15px"
  }
  const Deco = {
    listStyle: "none",
  }
  var count = 11;
  const Helper = () => {

  }
  return (
    <>
      <div class="flip-card" style={otherObj}>
        <div class="flip-card-inner">
          <div class=" d-flex justify-content-center align-items-center flip-card-front " >
            <h1>Class-{props.class}</h1>
          </div>
          <div class="flip-card-back d-flex justify-content-center align-items-center flex-column">
            <h1 className="text-center mt-0" style={anObj}>Subjects</h1>
            <div className="d-flex justify-content-center align-items-center">
              <ul onClick={Helper} >
                {
                  Data[2][props.index].map((value, index) => {
                    console.log(value);
                    return (
                      <>
                        <NavLink exact to={`/subject/${value.id}`} style={{ listStyle: "none", textDecoration: "none" }}>
                          <li style={Deco} style={{ color: "black", textDecoration: "none" }} >{value.name}</li>
                        </NavLink>
                      </>
                    )

                  })
                }

              </ul>
            </div>

          </div>
        </div>
      </div>

    </>
  )
}
export default App;