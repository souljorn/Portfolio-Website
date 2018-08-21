import React from "react";
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import logo from '../images/Merkaba.svg';
import Button from '@material-ui/core/Button';


//Stlyed Components
const Container = styled.div`
display: grid;
grid-template-columns: 1fr 6fr;
font-family: "verdana";
font-size: 24px;
background-color: rgb(120, 136, 138);
height: 120px;
margin-left: auto;
margin-right: auto;


@media all and (max-width: 600px){
display: grid;
grid-template-columns: 1fr;
grid-template-rows: auto auto;
height: auto;
padding:10px;
}
`;

const Image = styled.img`
max-width: 114px;
max-height: 114px;
`;

const Logo = styled.div`
display: flex;
align-items: center;
justify-content: center;
@media all and (max-width: 600px){
display: block;
padding:10px;
}
`;

const HeaderRight = styled.div`
display: flex;
align-items: flex-end;
justify-self: flex-end;
padding-right: 25px;
@media all and (max-width: 600px){
display: grid;
justify-self: center;
align-self: center;
padding-right: 0px;
margin-bottom: 10px
}
`;

const Links = styled.a`
color: black;
text-align: center;
padding: 10px;
text-decoration: none;
font-size: 20px;
border-radius: 4px;
`;

const buttonStyle = {
  borderRadius: 3,
  border: 0,
  padding: '5px 10px',
  fontSize: '18px',
};

class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
         () => this.tick(),
         1000
       );
  }

  tick() {
   this.setState({
     date: new Date()
   });
 }

componentWillUnmount() {
  clearInterval(this.timerID);
}

  render(){
    return (
        <Container>
          <Logo>
          <Image src={logo} ></Image>
          </Logo>
          <HeaderRight>
            <Button style={buttonStyle} to="/open-collective"> Home </Button>
            <Button style={buttonStyle} to="/open-collective"> Portfolio </Button>
            <Button style={buttonStyle} to="/open-collective"> Resources </Button>
            <Button style={buttonStyle} to="/open-collective"> About </Button>
            <Button style={buttonStyle} to="/open-collective"> Contact </Button>
          </HeaderRight>
        </Container>
    );
  }
};

export default Header;
