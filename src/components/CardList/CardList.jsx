import Card from "../Card/Card"
import "./CardList.css"

const CardList = (props) => {
  
  return (
    <div className="containerHolder">
      <div className="cardListContainer">
        {props.cardList.map((object) => {
          return <Card object={ object} />
        })}
        </div>
      </div>
  )
}

export default CardList
