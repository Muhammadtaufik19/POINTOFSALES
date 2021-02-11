import React, { useState } from "react";
import styled from "styled-components";
import Counter from "./Counter";
import { inc, dec, removeFromCart } from "../store/action/product";
import { useDispatch } from "react-redux";

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

const CardItem = ({ item }) => {
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();

  const increment = (id) => {
    setCount(count + 1);
    dispatch(inc(id));
  };

  const decrement = (id) => {
    setCount(count - 1);
    if (count > 1) {
      dispatch(dec(id));
    } else {
      if (count === 1) {
        dispatch(removeFromCart(id));
      }
    }
  };

  return (
    <Card>
      <ItemName>{item.name}</ItemName>
      <CounterContainer>
        <Counter inc={() => increment(item.id)} />
        <CounterTotal>{count}</CounterTotal>
        <Counter dec={() => decrement(item.id)} />
      </CounterContainer>
      <Price>{item.price}</Price>
    </Card>
  );
};

export default CardItem;
