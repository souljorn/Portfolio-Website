
import React from "react";
import ReactDOM from "react-dom";
import PhotoGrid from "./components/PhotoGrid";
import Header from "./components/Header";
import styled from 'styled-components';
import './components/fonts.js'

const PhotoContainer = styled.div`
margin-left: auto;
margin-right: auto;
background-color:rgb(120, 136, 138) ;
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
         <PhotoGrid onChange ={this.clickHandler} />
         <p>{this.state.clicks}</p>
      </PhotoContainer>
    );
  }
};

ReactDOM.render(<Index />, document.getElementById("index"));
