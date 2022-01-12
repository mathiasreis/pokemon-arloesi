import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 4px solid #f68b2a;
  margin: 73px 84px 0;
  padding-bottom: 35px;
  cursor: pointer;
  > img {
    width: 111px;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 40px;
    gap: 20px;
    background-color: #fff;
    border: 1px solid #000;
    border-radius: 4rem;
  }
`;
