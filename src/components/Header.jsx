import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Toast } from "primereact/toast";

export class Header extends Component {
  state = {
    time: "",
  };

  componentDidMount() {
    setInterval(() => {
      this.getTime();
    }, 1000);
  }

  getTime = () => {
    let d = new Date();
    let time =
      this.pad(d.getHours(), 2) +
      ":" +
      this.pad(d.getMinutes(), 2) +
      ":" +
      this.pad(d.getSeconds(), 2);
    this.setState({ time });
  };

  pad = (num, size) => {
    var s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
  };

  onChange = (e) => {
    var file = e.target.files[0];
    if (!file) {
      return;
    }
    var self = this;
    var reader = new FileReader();
    reader.onload = function (e) {
      var contents = e.target.result;
      var array = contents.split("\n");
      self.readAntennaFile(array);
    };
    reader.readAsText(file);
  };

  readAntennaFile = (array) => {
    let horIdx = 0;
    let verIdx = 0;

    try {
      for (let i = 0; i < array.length; i++) {
        if (array[i].toUpperCase().startsWith("HORIZONTAL")) {
          horIdx = i;
        }
        if (array[i].toUpperCase().startsWith("VERTICAL")) {
          verIdx = i;
        }
      }

      let header = [];
      for (let i = 0; i < horIdx; i++) {
        header[i] = array[i].trim();
      }

      let horArray = [];
      let verArray = [];

      for (let i = 0; i < 360; i++) {
        horArray[i] = array[i + horIdx + 1].split(/\s/)[1].trim();
        verArray[i] = array[i + verIdx + 1].split(/\s/)[1].trim();

        if (horArray[i] > 40) {
          horArray[i] = 40;
        }

        if (verArray[i] > 40) {
          verArray[i] = 40;
        }
      }

      this.props.setDiagram(horArray, verArray);
    } catch (e) {
      this.toast.show({
        severity: "error",
        summary: "Error Message",
        detail: "Wrong File-Format",
      });
    }
  };

  render() {
    return (
      <header id="header">
        <div className="w3-container w3-padding w3-indigo">
          <Toast ref={(el) => (this.toast = el)} />
          <div className="w3-right w3-tiny">
            <FontAwesomeIcon
              icon="wifi"
              style={{ marginRight: "10px" }}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              icon="battery-half"
              style={{ marginRight: "10px" }}
            ></FontAwesomeIcon>
            <label>{this.state.time} CET</label>
          </div>
        </div>
        <div className="w3-bar w3-blue w3-xlarge">
          <div className="w3-bar-item" style={{ fontFamily: "arial" }}>
            Antenna 2D{" "}
            <FontAwesomeIcon icon={["fab", "react"]}></FontAwesomeIcon> React
            <div style={{ fontSize: "11px" }} className="w3-wide">
              Polar and Cartesian coordinate system
            </div>
          </div>
        </div>
        <div className="w3-blue w3-margin">
          <FontAwesomeIcon
            icon="fa-solid fa-tower-cell"
            className="w3-container"
          />
          <input type="file" onChange={this.onChange} />
        </div>
      </header>
    );
  }
}

export default Header;
