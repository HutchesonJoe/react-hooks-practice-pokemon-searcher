import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [pList, setPList] = useState([])

  useEffect(()=>{
  fetch("http://localhost:3001/pokemon")
    .then (r=>r.json())
   .then (data=>setPList(data))
  },[])
  
  return (
    <Container >
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm pList={pList} setPList={setPList}/>
      <br />
      <Search pList={pList} setPList={setPList}/>
      <br />
      <PokemonCollection pList={pList} setPList={setPList}/>
    </Container>
  );
}

export default PokemonPage;
