import React from "react";
import styled from "styled-components";

const CounterStyle = styled.div`
  width: 1rem;
  background: ${(props) => props.theme.secondary};
  color: red;
  height: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 100px;
`;

const Counter = ({ inc, dec }) => {
  if (inc) {
    return <CounterStyle onClick={inc}>+</CounterStyle>;
  } else {
    return <CounterStyle onClick={dec}>-</CounterStyle>;
  }
};

export default Counter;
