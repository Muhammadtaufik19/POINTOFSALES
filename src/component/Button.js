import React from "react";
import styled from "styled-components";

const MyButton = styled.button`
  height: 1.7rem;
  width: 6rem;
  border: none;
  padding: 0.2rem 0.5rem;
  color: #fff;
  text-align: center;
  cursor: pointer;
  &:fokus {
    outline: none;
  }
`;

const PrimaryButon = styled(MyButton)`
  background: ${(props) => props.theme.primary};
`;

const WarningButton = styled(MyButton)`
  background: ${(props) => props.theme.warning};
`;

const Button = ({ primary, action, text }) => {
  if (primary) {
    return <PrimaryButon onClick={action}>{text}</PrimaryButon>;
  } else {
    return <WarningButton onClick={action}>{text}</WarningButton>;
  }
};

export default Button;
