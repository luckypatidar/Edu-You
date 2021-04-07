import React from 'react';
import ReactDOM from 'react-dom';
import styles from "./Pricing.module.scss";
import MlImg from './image/ml.jpg'

const Card = (props) => {
  return (
    <div className={styles.card}  >
      <img class="card-img-top " src={props.img} alt="Card image cap" style={{ height: '200px' }} />
      <div class="card-body ">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">{props.text}</p>
        <a href={props.link} target="_blank" style={{ marginRight: "2px", textDecoration: "none" }} className={styles.buttonvisibilty}>{props.button}</a>
        {/* <a href={props.VLink} class="btn btn-secondary" target="_blank">Video</a> */}
      </div>
    </div>
  )
}
export default Card;