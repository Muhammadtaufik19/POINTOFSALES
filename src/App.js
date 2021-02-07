import React from "react";
import Header from "./component/Header";
import styled, { ThemeProvider } from "styled-components";
import * as theme from "./styled/theme";
import ProductCard from "./component/ProductCard";
import { useSelector } from "react-redux";
import CardItem from "./component/CardItem";
import ListMenu from "./component/ListMenu";
import Button from "./component/Button";
import CalculateBox from "./component/CalculateBox";

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 92vh;
`;
const MenuContainer = styled.div`
  width: 15%;
  padding: 0.5rem 0;
  padding-right: 0.5rem;
`;
const ProductContainer = styled.div`
  width: 60%;
  height: 100%;
  backgrond: ${(props) => props.theme.light};
  border-left: 1px solid #000;
  border-right: 1px solid #000;
  padding: 0.5rem 0.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const CardContainer = styled.div`
  width: 25%;
  padding: 0.5rem 0.5rem;
`;

const App = () => {
  const product = useSelector((state) => state.product.product);
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container>
        <MenuContainer>
          <ListMenu />
        </MenuContainer>
        <ProductContainer>
          {product.map((product) => (
            <ProductCard key={product.id} item={product} />
          ))}
        </ProductContainer>
        <CardContainer>
          <CardItem />
          <CalculateBox />
        </CardContainer>
      </Container>
    </ThemeProvider>
  );
};

export default App;
