import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  max-width: 400px;
  margin: 40px auto;
  grid-template-columns: repeat(4, 100px);
  grid-template-rows: minmax(150px, auto) repeat(5, 90px);
  box-shadow: 2px 2px 10px #333;
  border-radius: 10px;
`;

export const Screen = styled.div`
  grid-column: 1/-1;
  // grid-row: 1/3;
  background-color: rgba(60, 64, 67, 0.75);
  display: flex;
  max-height: 150px;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px;
  word-wrap: break-word;
  word-break: break-all;
  text-align: right;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  overflow: auto;
`;

export const Previous = styled.div`
  color: rgba(255, 255, 255, 0.75);
  font-size: 1.5rem;
`;

export const Current = styled.div`
  color: white;
  font-size: 2.5rem;
`;

export const Button = styled.button`
  cursor: pointer;
  font-size: 2rem;
  // outline: none;
  border: 1px outset lightgray;
  background-color: rgba(255, 255, 255, 0.75);
  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
  }
  ${function ({ gridSpan }) {
    if (gridSpan) {
      return `grid-column: span ${gridSpan}`;
    }
  }};
  ${({ operation }) => operation && `background-color: gray;`};
  ${({ control }) => control && `background-color: skyBlue;`};
  ${({ equals }) =>
    equals && `background-color: gray; border-bottom-right-radius: 10px;`};
  ${({ decimal }) =>
    decimal && `background-color: skyBlue; border-bottom-left-radius: 10px;`};
`;
