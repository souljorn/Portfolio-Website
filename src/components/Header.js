import React from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components';


//Stlyed Components
const Container = styled.div`
font-family: "verdana";
font-weight: bold;
font-size: 24px;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
background-color: rgb(120, 136, 138);
height: 60px;
`;

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
          Tim Botelho {this.state.date.toLocaleTimeString()}
        </Container>
    );
  }
};

export default Header;
