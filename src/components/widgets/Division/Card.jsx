import React from 'react';
import './Card.scss';
import { NavLink } from 'react-router-dom';
import child from '../../../assets/placeholders/child.jpg';
const App = (props) => {

  var url = `/class/${props.id}`;


  return (
    <>
      <div className="maindiv">
        <NavLink exact to={url} style={{ textDecoration: "none" }}>
          <li >

            {/* <span className="fa fa-code">
            <img src={child} alt="Children" />
          </span> */}

            <h3 style={{ color: "black" }}>{props.title}</h3>
            <p className="text-center">{props.description} </p>

          </li>
        </NavLink>
      </div>
    </>
  )
}
export default App;