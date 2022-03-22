import React, {useState} from "react";

function Search({pList, setPList}) {

  function handleSearch(e){
    const thisPList = pList.filter((pok)=>{
      return pok.name.toLowerCase().includes(e.target.value.toLowerCase())
    })
    setPList(thisPList)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={handleSearch}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
