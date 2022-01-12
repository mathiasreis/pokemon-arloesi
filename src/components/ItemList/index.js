import { useState } from "react";
import { Container } from "./styles";

function ItemList(props) {
  console.log(props.url);

  const [type, setType] = useState();
  const [level, setLevel] = useState();

  fetch(props.url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setType(data.types[0].type.name);
      setLevel(data.base_experience);
    });

  return (
    <Container className="boxPokemon">
      <div>
        <img
          className="imagemPokemon"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`}
          alt="pokemon-pic"
        />
      </div>
      <div className="status">
        <p>{props.name}</p>
        <p>{type}</p>
        <p>{level}</p>
      </div>
      <div className="buttons">
        <button className="detalhes" type="button">
          Detalhes
        </button>
        <button className="selecionar" type="button">
          Selecionar
        </button>
      </div>
      {/* <div>
        <img className="imagemPokemon" src={props.imagem} alt={props.pokemon} />
      </div>

      <div className="status">
        <p>
          <b>
            Nome: <i> {props.pokemon} </i>
          </b>
        </p>
        <p>
          <b>
            Tipo: <i> {props.type} </i>{" "}
          </b>
        </p>
        <p>
          <b>
            Nível: <i> {props.nvl} </i>{" "}
          </b>
        </p>
      </div>

      <div className="buttons">
        <button className="detalhes" type="button">
          Detalhes
        </button>
        <button className="selecionar" type="button">
          Selecionar
        </button>
      </div> */}
    </Container>
  );
}

export default ItemList;
