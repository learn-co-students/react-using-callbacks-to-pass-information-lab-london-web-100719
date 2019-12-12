import React, { Component } from "react";
import learnSymbol from "./data.js";
import Cell from "./Cell.js";
import ColorSelector from "./ColorSelector.js";

export default class Matrix extends Component {
  state = {
    selectedColor: "#FFF"
  };
  
  setSelectedColor = (newColor) => {
    this.setState({
      selectedColor: newColor
    });
  };

  //from each array of rows it returns each cell
  genRow = vals =>
    vals.map((val, idx) => {
      //console.log("genRow", val, idx);
      return (
        <Cell key={idx} color={val} selectedColor={this.state.selectedColor} />
      );
    });

  //maps the general array and passes each array to the genRow function.
  //the genRow function maps each cell of each array
  //and then in the end of genMatrix we call the genRow function to return
  // each cell in each array(everything)
  genMatrix = () =>
    this.props.values.map((rowVals, idx) => {
      //console.log("genMatrix", rowVals, idx);
      console.log('genrow', this.genRow(rowVals))
      return (
        <div key={idx} className="row">
          {this.genRow(rowVals)}
        </div>
      );
    });

  render() {
    return (
      <div id="app">
        <ColorSelector setSelectedColor={this.setSelectedColor} />
        <div id="matrix">{this.genMatrix()}</div>
      </div>
    );
  }
}

Matrix.defaultProps = {
  values: learnSymbol
};
