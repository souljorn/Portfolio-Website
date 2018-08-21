import React from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components';
import splash from '../../src/images/PortfolioBanner.jpg';
import appCss from '../../src/app.css'



const Splash = styled.img`
text-align:center;
margin-left: auto;
margin-right: auto;

width: 100%;
@media all and (max-width: 600px){
  width: 100%;

}
`;


class Home extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (

           <Splash src={splash} ></Splash>

        
    );
  }
};

export default Home;
