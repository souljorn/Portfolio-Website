
import React from "react";
import ReactDOM from "react-dom";
import PhotoGrid from "./components/PhotoGrid";

class Index extends React.Component {

  render(){
    return (
       <div>
         <PhotoGrid/>
      </div>
    );
  }
};

ReactDOM.render(<Index />, document.getElementById("index"));
