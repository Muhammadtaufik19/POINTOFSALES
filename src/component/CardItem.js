import React, { useState } from "react";
import styled from "styled-components";
import Counter from "./Counter";

const Card = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  padding: 0 0.5rem;
  margin: 0.5rem auto;
  background: #fff;
  box-shadow: 1px 1px 10px 1px #ccc;
`;
const CounterContainer = styled.div`
  display: flex;
  width: 20%;
  text-align: center;
`;
const CounterTotal = styled.div`
  margin: 0 0.5rem;
`;
const ItemName = styled.div`
  width: 30%;
  padding-left: 0.5rem;
`;
const Price = styled.div`
  width: 30%;
  text-align: center;
`;

const CardItem = () => {
  const [count, setCount] = useState(1);
  return (
    <Card>
      <ItemName>Nama</ItemName>
      <CounterContainer>
        <Counter inc />
        <CounterTotal>{count}</CounterTotal>
        <Counter />
      </CounterContainer>
      <Price>50.000</Price>
    </Card>
  );
};

export default CardItem;
