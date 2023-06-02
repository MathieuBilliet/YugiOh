import "./Card.css"


const Card = () => {
    return <div className="card">
  <div className="card-image"></div>
  <div className="card-title">Yûgi Muto</div>
  <div className="detail">
  <div className="card-description">Jeune lycéen timide et expert en jeux.  </div>
  <div className="card-attribute">Objet : Puzzle du Millenium</div>
  <div className="card-level">Niveau</div>
  <div className="card-stats">
    <span>ATK: 2500</span>
    <span>DEF: 2100</span>
  </div>
  <div className="card-rarity">© 1996 KAZUKI TAKAHASHI</div>
</div></div>
;

};
export default Card;