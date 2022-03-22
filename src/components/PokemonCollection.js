import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pList}) {
  const thisPList = pList.map(pok => <PokemonCard pokemon={pok} key={pok.id}/>)

  return (
    <Card.Group 
    itemsPerRow={6}

    >
      <h1>Hello From Pokemon Collection</h1>
      {thisPList}
    </Card.Group>
  );
}

export default PokemonCollection;
