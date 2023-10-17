import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

let offsetX = 40;
let offsetY = 30;
let linesHor = 360;
let stepping = 5;
let textOffset = 5;

export class Cartesian extends Component {
  componentDidMount() {
    this.setup();
  }

  componentDidUpdate() {
    this.setup();
  }

  setup = () => {
    var orient = this.props.orient;

    let draw = document.getElementById("drawCart" + orient);

    //document.getElementById("canvas").width = 0;
    //document.getElementById("canvas").height = 0;

    let rectDraw = draw.getBoundingClientRect();

    let width = rectDraw.width;
    let height = rectDraw.height;

    document.getElementById("canvasCart" + orient).width = width;
    document.getElementById("canvasCart" + orient).height = height;

    let ctx = document.getElementById("canvasCart" + orient).getContext("2d");
    this.reset(ctx, width, height);
    this.drawCoordSys(ctx, width, height);
    this.drawAntenna(ctx, this.props.array, width, height);
  };

  reset = (ctx, width, height) => {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, width, height);
  };

  drawLineVer = (ctx, sf, width, height) => {
    //width = width - 2.0 * offsetX;
    //height = height - 2.0 * offsetY;

    let startX = offsetX;
    let startY = offsetY + sf * height;
    let endX = offsetX + width;
    let endY = startY;

    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
  };

  drawLineHor = (ctx, sf, width, height) => {
    //width = width - 2.0 * offsetX;
    //height = height - 2.0 * offsetY;

    let startX = offsetX + sf * width;
    let startY = offsetY;
    let endX = startX;
    let endY = offsetY + height;

    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
  };

  drawCoordSys = (ctx, width, height) => {
    width = width - 2.0 * offsetX;
    height = height - 2.0 * offsetY;

    ctx.font = "8px";
    ctx.fillStyle = "black";

    for (let i = 0; i <= 40 / stepping; i++) {
      let sf = (stepping * i) / 40;

      //Text
      let db = stepping * i;
      let bounds = ctx.measureText(db + " dB");
      let startX = offsetX - bounds.width - textOffset;
      let startY = offsetY + sf * height;
      ctx.textAlign = "left";
      ctx.fillText(db + " dB", startX, startY);

      this.drawLineVer(ctx, sf, width, height);
    }

    for (let i = 0; i <= linesHor; i += 15) {
      let sf = i / linesHor;

      //Text
      let angle = -180 + i;
      //let bounds = ctx.measureText(angle);
      //console.log(bounds);
      let startX = offsetX + sf * width;
      let startY = offsetY + height + textOffset;
      ctx.textBaseline = "top";
      ctx.textAlign = "center";
      ctx.fillText(angle + "°", startX, startY);

      this.drawLineHor(ctx, sf, width, height);
    }
  };

  drawAntenna = (ctx, array, width, height) => {
    width = width - 2.0 * offsetX;
    height = height - 2.0 * offsetY;

    ctx.strokeStyle = "red";
    ctx.lineWidth = 2;

    ctx.beginPath();
    for (let angle = 0; angle < 180; angle++) {
      let loss = array[angle + 180];

      let sfHor = angle / linesHor;
      let sfVer = loss / 40.0;

      let startX = offsetX + sfHor * width;
      let startY = offsetY + sfVer * height;

      if (angle === 0) {
        ctx.moveTo(startX, startY);
      }

      ctx.lineTo(startX, startY);
    }

    for (let angle = 180; angle <= 360; angle++) {
      let loss = array[angle - 180];

      let sfHor = angle / linesHor;
      let sfVer = loss / 40.0;

      let startX = offsetX + sfHor * width;
      let startY = offsetY + sfVer * height;

      ctx.lineTo(startX, startY);
    }
    ctx.stroke();
  };

  render() {
    window.addEventListener("resize", this.setup);
    return (
      <div>
        <div className="w3-container w3-blue w3-margin-top w3-margin-bottom w3-padding">
          <FontAwesomeIcon icon="fa-solid fa-chart-line" className="w3-margin-right"/>
          Cartesian {this.props.orient === "hor" ? "horizontal" : "vertical"}
        </div>
        <div
          id={"drawCart" + this.props.orient}
          className="w3-white"
          style={{ height: "calc(50vh - 2*35.89px  - 68.5px - 2*16px)" }}
        >
          <canvas
            id={"canvasCart" + this.props.orient}
            className="w3-blue"
          ></canvas>
        </div>
      </div>
    );
  }
}

export default Cartesian;
