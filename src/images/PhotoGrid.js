import React from "react";
import {Component} from "react";
import ReactDOM from "react-dom";
//import style from './styles.css';
class PhotoGrid extends React.Component {
   render() {
      return (
         <div className = "PhotoGrid">
           <img src="src\images\alone_lake.jpg"></img>
           <img src="src\images\blue_buildings.jpg" ></img>
           <img src="src\images\bridge_golden.jpg"></img>

         </div>
      );
   }
}

export default PhotoGrid;
