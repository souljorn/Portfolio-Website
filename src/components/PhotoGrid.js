import React from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components';

//Stlyed Components
const Container = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
`;

const Image = styled.img`
  width: 80%;
  height: 80%;
  max-width: 400px;
  max-height: 400px;
  @media screen and (max-width: 500px) {

  }

  @media screen and (max-width: 800px) {

  }
`;

const ImageRow = styled.div`

`;

class PhotoGrid extends React.Component {
  constructor(props){
    super(props);
    //this local function prop that will wrap callback function passed down
    this.change = this.change.bind(this);
  }

  print(event){
    console.log("test");
    this.change();
  }

  //function that wraps the passed down callback function
  change(e){
    this.props.onChange(e);
  }

  render(){
    return (
        <Container>
            <Image src="src/images/alone_lake.jpg"onClick ={this.print.bind(this)}></Image>
            <Image src="src/images/blue_buildings.jpg"></Image>
            <Image src="src/images/bridge_golden.jpg"></Image>


            <Image src="src/images/cyber_punk.jpg"></Image>
            <Image src="src/images/mountain_scapes.jpg"></Image>
            <Image src="src/images/orange_shades.jpg"></Image>


            <Image src="src/images/paper_hand.jpg"></Image>
            <Image src="src/images/sunset_man.jpg"></Image>
            <Image src="src/images/water_drops.jpg"></Image>

        </Container>

    );
  }
};

export default PhotoGrid;
