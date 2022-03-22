import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {
  const [cardSide, setCardSide] = useState(true)
 
  return (
    <Card
    >
      <div>
        <div className="image">
          <img alt="oh no!" onClick = {()=> setCardSide(!cardSide)} src={cardSide ? pokemon.sprites.front : pokemon.sprites.back}/>
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
