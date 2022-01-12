import styled from "styled-components";

export const Container = styled.main`
  background-color: #0075be;
  color: #fff;
  margin: 25px 10px 0;
  padding: 5px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid #000;
  width: 15.4rem;
  height: 20rem;
  .imagemPokemon {
    /* width: 14rem;
    height: 8.43rem; */
    width: 30vh;
    border-radius: 5px;
    object-fit: contain;
    box-sizing: border-box;
    flex: 1;
  }
  .status {
    filter: drop-shadow(0px 2px);
    width: 14rem;
    height: 5.43rem;
    font-size: 0.75rem;
    line-height: 20px;
    padding: 0.87rem;
    border-radius: 10px;
    background-color: #fff;
    color: #000;
    p {
      border-bottom: 1px solid #e5e0e0;
    }
    p:last-child {
      border-bottom: none;
    }
  }
  .buttons {
    filter: drop-shadow(0px 2px black);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 40px;
    gap: 1rem;
    .detalhes {
      width: 6.75rem;
      height: 1.76rem;
      background-color: #f68b2a;
      border: 0px;
      border-radius: 5px;
      font-size: 0.75rem;
      padding: 0px 5px;
      color: #fff;
    }
    .selecionar {
      width: 6.75rem;
      height: 1.76rem;
      background-color: #43b526;
      border: 0px;
      border-radius: 5px;
      font-size: 0.75rem;
      padding: 0px 5px;
      color: #fff;
    }
  }
`;
