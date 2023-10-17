import React, { Component } from "react";
import Polar from "./Polar";
import Cartesian from "./Cartesian";

export class Content extends Component {
  render() {
    return (
      <div id="content" className="w3-orange content">
        <div className="w3-row">
          <div
            className="w3-col w3-margin-left w3-margin-right"
            style={{ width: "calc(50% - 2*16px)" }}
          >
            <Polar orient={"hor"} array={this.props.diagram.horArray}></Polar>
          </div>
          <div
            className="w3-col w3-margin-right"
            style={{ width: "calc(50% - 1*16px)" }}
          >
            <Polar orient={"ver"} array={this.props.diagram.verArray}></Polar>
          </div>
        </div>
        <div className="w3-row">
          <div
            className="w3-col w3-margin-left w3-margin-right"
            style={{ width: "calc(50% - 2*16px)" }}
          >
            <Cartesian
              orient={"hor"}
              array={this.props.diagram.horArray}
            ></Cartesian>
          </div>
          <div
            className="w3-col w3-margin-right"
            style={{ width: "calc(50% - 1*16px)" }}
          >
            <Cartesian
              orient={"ver"}
              array={this.props.diagram.verArray}
            ></Cartesian>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
