import React from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components';
import logo from '../images/Merkaba.svg';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
library.add(faGithub)

//Stlyed Components
const Container = styled.div`
display: block;
align-items: center;
background-color:#DEDBDB;
height: 100px;
max-width: 1000px;
margin-left: auto;
margin-right: auto;
@media all and (max-width: 600px){
  display:block;
  float:bottom;
}
`;

class Footer extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
        <Container>
         <FontAwesomeIcon icon={['fab', 'github']}  size="3x" />
        </Container>
    );
  }
};

export default Footer;
