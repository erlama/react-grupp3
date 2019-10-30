import React from 'react';
import {Jumbotron as Jumbo, Container} from 'react-bootstrap';
import styled from 'styled-components';
import image1 from '../assets/image001.jpg';

const Styles = styled.div`
    .jumbo {
        background: url(${image1}) no-repeat bottom;
        background-size: cover;
        color: #efefef;
        height: 200px;
        position: relative;
        z-index: -3;
        margin-bottom: 0;
        -webkit-box-shadow: 0px 10px 5px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 10px 5px 0px rgba(0,0,0,0.75);
        box-shadow: 0px 10px 5px 0px rgba(0,0,0,0.75);
    }

    .overlay {
        background-color: #000;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }
`;

export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
          <div className="overlay"></div>
          <Container>
              <h1>Contact book</h1>
              <p>Find what you are looking for!</p>
          </Container>  
        </Jumbo>
    </Styles>
)