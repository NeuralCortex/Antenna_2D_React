import React, { Component } from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

library.add(fas, fab);

export class MainView extends Component {
  state = {
    horArray: [],
    verArray: [],
  };

  setDiagram = (horArray, verArray) => {
    this.setState({ horArray });
    this.setState({ verArray });
  };

  render() {
    return (
      <div
        style={{
          minHeight: "100vh",
          margin: 0,
          padding: 0,
          fontFamily: "Arial",
          fontSize: "10pt",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header setDiagram={this.setDiagram}></Header>
        <Content
          diagram={{
            horArray: this.state.horArray,
            verArray: this.state.verArray,
          }}
        ></Content>
        <Footer></Footer>
      </div>
    );
  }
}

export default MainView;
