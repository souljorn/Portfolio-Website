
import React from "react";
import ReactDOM from "react-dom";
import PhotoGrid from "./components/PhotoGrid";
import  Header from "./components/Header";
import Home from "./components/Home";
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
         <Home/>
         <Footer/>
      </PhotoContainer>
    );
  }
};

ReactDOM.render(<Index />, document.getElementById("index"));
