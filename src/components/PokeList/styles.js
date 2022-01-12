import styled from "styled-components";

export const Li = styled.li`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 1024px;
  margin: 0 auto;
  box-sizing: border-box;
  margin-bottom: 5rem;

  .footer {
    height: 4.4rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    left: 50;
    bottom: 0;
    width: 37.5rem;
    background-color: rgba(204, 94, 40, 0.85);
    box-shadow: 0 0.5rem 1rem #0e1111;

    .btn {
      height: 2rem;
      width: 2rem;
      border-radius: 50%;
      overflow: hidden;
      position: relative;
      background-color: #ff4747;
      color: #0e1111;

      .text {
        font-size: 2rem;
        @include absCenter;
      }
    }
  }
`;
