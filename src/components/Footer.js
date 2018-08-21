import React from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components';
import logo from '../images/Merkaba.svg';
import appCss from '../../src/app.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons'
library.add(faGithub, faLinkedinIn, faInstagram)

//Stlyed Components
const Container = styled.div`
display: block;
align-items: center;
background-color:#DEDBDB;
height: 100px;

margin-left: auto;
margin-right: auto;
@media all and (max-width: 600px){
  display:block;
  float:bottom;
}
`;

const icon = {
  padding:'20px',
  color:'#333',
  // radium provides hover states and vendor prefixes
  ':hover': {
    transform: 'rotateY(180deg) scale(1.5)'
  },
};

class Footer extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <Container>
        <a  href='https://github.com/souljorn'>
          <FontAwesomeIcon
            className="icons"
            icon={['fab', 'github']}
            size="2x"
            style={ {padding:'20px', color:'#333'}}/>
        </a>
        <a href='https://www.instagram.com/souljorn/'>
          <FontAwesomeIcon
            className="icons"
            icon={['fab', 'instagram']}
            size="2x"
            style={ {padding:'20px', color:'#333'}}/>
        </a>
        <a  href='https://www.linkedin.com/in/timbotelho/'>
          <FontAwesomeIcon
            className="icons"
            icon={['fab', 'linkedin-in']}
            size="2x"
            style={icon}/>
        </a>
      </Container>
    );
  }
};

export default Footer;
