import React from 'react';
import styled from 'styled-components';

export const CardContainer = styled.div`
border: 1px solid black;
border-bottom-width: 0px;
display: flex;
padding-top: 1.5%;
flex-direction: column;
margin-right: 2%;
margin-left: 2%;
margin-top: 10px;
width: 20%;
height: 25%;
animation: 1s fadeIn;
box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.4);
background-color: white;
`

export const CardSection = styled.div`
display: flex;
flex-direction: row;
height: 100%;
width: 100%;
padding-bottom: 3%;
`

export const CardListContainer = styled.div`
  display: flex;
  flex-wrap:wrap;
  overflow:auto;
  height: 100vh;
  width: 100%;
`