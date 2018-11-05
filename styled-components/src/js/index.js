import React from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components';

const RedDiv = styled.div`
  background-color: red;
`

const Index = () => {
  return <RedDiv>Hello React!</RedDiv>;
};

ReactDOM.render(<Index />, document.getElementById("index"));