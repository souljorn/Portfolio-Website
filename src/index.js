
import React from "react";
import ReactDOM from "react-dom";
import PhotoGrid from "./components/PhotoGrid";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styled from 'styled-components';
import './components/fonts.js'
import splash from '../src/images/splash.jpg';
import appCss from '../src/app.css'

const PhotoContainer = styled.div`
text-align:center;
margin-left: auto;
margin-right: auto;
@media all and (max-width: 600px){
  display: block;
}
`;

const SplashContainer = styled.div`
position: relative;
margin-left: auto;
margin-right: auto;
padding: 0px;
width:1000px;
@media all and (max-width: 600px){
  width: 100%;

}
 `;

const Splash = styled.img`
text-align:center;
margin-left: auto;
margin-right: auto;
@media all and (max-width: 600px){
  width: 100%;

}
`;

const SplashOverlay = styled.div`
  position: absolute;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.5); /* Black see-through */
  color: #f1f1f1;
  width: 500px;
  opacity:100;
  color: white;
  font-size: 18px;
  font-family:'Roboto';
  font-weight: 100;
  padding: 20px;
  text-align: center;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  bottom:300px;
  right: 200px;
  @media all and (max-width: 600px){
      bottom: 70px
      width: 150px;
      right: 80px;
  }
`;

class Index extends React.Component {
  constructor(props){
    super(props);
    this.state = {clicks: 0};
    //define callback function to lift state back up
    this.clickHandler = this.clickHandler.bind(this);
  }

  //callback function to lift state
  clickHandler(e){
    //setting the state without mutating the state
    this.setState({
      clicks: this.state.clicks + 1
    });
  }

  //Pass the callback function to the component as a prop
  render(){
    return (
       <PhotoContainer>
         <Header/>
         <SplashContainer>
           <Splash src={splash} width= '1000px'></Splash>
           <SplashOverlay>Softare Developer and Webdesigner</SplashOverlay>
         </SplashContainer>
         <Footer/>
      </PhotoContainer>
    );
  }
};

ReactDOM.render(<Index />, document.getElementById("index"));
