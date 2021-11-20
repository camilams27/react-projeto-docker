import React,{ useState, useEffect } from 'react';
import api from '../../services/api';
import './Style.css'

function Personagens() {
    const [nome, setNome] = useState([]);

    useEffect(() => {
        api.get()
        .then((response) => {
            setNome(response.data.results)
            console.log(nome)
        })
        .catch((error) => {
            console.log(error);
        })
    },[])

  return (
      <div id="container">
        {nome.map(resp =>{
            return <div id="personagens">
                <img src={resp.image} />
                <h4> {resp.name} </h4>
                <h5> <span> Status: </span> {resp.status} </h5>
                <h5> <span> Specie: </span> {resp.species} </h5>
                <h5> <span> Gender: </span> {resp.gender} </h5>
                <h5> <span> Location: </span> {resp.location.name} </h5>
            </div>
        })}
      </div>
  );
}

export default Personagens;