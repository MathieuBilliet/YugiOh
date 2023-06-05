import "./Card.css"

const Card = (props) => {
    return (
  <div className="card">
      <img src={props.object.imgSrc}
            className="card-image" >
      </img>
    <div className="card-title">{props.object.name}</div>
    <div className="detail">
      <div className="card-description"> {props.object.description} </div>
      <div className="card-attribute">{props.object.objet}</div>
      <div className="card-level">{props.object.niveau}</div>
      <div className="card-stats">{props.object.stats}</div>
      <div className="card-rarity">{props.object.rarity}</div>
    </div>
  </div>
    );

};
export default Card;