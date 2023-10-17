import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

let offsetX = 20;
let offsetY = 30;
let countCircles = 10;
let steppingOuter = 30;
let steppingInner = 15;
let numberCircleOuter = 3;
let numberCircleInner = 2;

export class Polar extends Component {
  componentDidMount() {
    this.setup();
  }

  componentDidUpdate() {
    this.setup();
  }

  setup = () => {
    var orient = this.props.orient;

    let draw = document.getElementById("draw" + orient);

    //document.getElementById("canvas").width = 0;
    //document.getElementById("canvas").height = 0;

    let rectDraw = draw.getBoundingClientRect();

    let width = rectDraw.width;
    let height = rectDraw.height;

    document.getElementById("canvas" + orient).width = width;
    document.getElementById("canvas" + orient).height = height;

    let ctx = document.getElementById("canvas" + orient).getContext("2d");
    this.reset(ctx, width, height);
    let radius = this.calcRadius(width, height);
    this.drawPolar(ctx, radius, width, height);
    this.drawAntenna(ctx, this.props.array, width, height, radius);
  };

  reset = (ctx, width, height) => {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, width, height);
  };

  calcRadius = (width, height) => {
    let radius = height / 2 - offsetY;
    if (width < height) {
      radius = width / 2 - offsetX;
    }
    return radius;
  };

  drawPolar = (ctx, radius, width, height) => {
    for (let i = 0; i <= countCircles; i++) {
      let sf = i / countCircles;
      this.drawCircle(ctx, sf * radius, width, height);
    }

    for (let angle = 0; angle < 360; angle += steppingOuter) {
      this.drawLine(ctx, numberCircleOuter, angle, width, height, radius);
    }

    for (let angle = 0; angle < 360; angle += steppingInner) {
      if (angle % steppingOuter !== 0) {
        this.drawLine(ctx, numberCircleInner, angle, width, height, radius);
      }

      //Text
      let rot = 0;
      if (this.props.orient === "hor") {
        rot = 90;
      }
      let offset = 11;
      let startX =
        width/2.0  + (radius + offset) * Math.cos(this.degToRad(angle - rot));
      let startY =
        height/2.0  + (radius + offset) * Math.sin(this.degToRad(angle - rot));
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "black";
      ctx.fillText(angle + "°", startX, startY);
    }
  };

  drawCircle = (ctx, radius, width, height) => {
    ctx.beginPath();
    ctx.arc(width / 2, height / 2, radius, 0, 2 * Math.PI);
    ctx.stroke();
  };

  lineStart = (numberCircle) => {
    return numberCircle / countCircles;
  };

  degToRad = (degrees) => {
    return degrees * (Math.PI / 180);
  };

  drawLine = (ctx, lineStartVar, angle, width, height, radius) => {
    let sf = this.lineStart(lineStartVar);

    //console.log(sf);

    let startX = width / 2.0 + sf * radius * Math.cos(this.degToRad(angle));
    let startY = height / 2.0 + sf * radius * Math.sin(this.degToRad(angle));

    let endX = width / 2.0 + radius * Math.cos(this.degToRad(angle));
    let endY = height / 2.0 + radius * Math.sin(this.degToRad(angle));

    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
  };

  drawAntenna = (ctx, array, width, height, radius) => {
    ctx.strokeStyle = "red";
    ctx.lineWidth = 2;

    let rot = 0;
    if (this.props.orient === "hor") {
      rot = 90;
    }

    ctx.beginPath();
    for (let angle = 0; angle < 360; angle++) {
      let loss = array[angle];

      let sf = 1.0 - loss / 40.0;

      let startX =
        width / 2.0 + sf * radius * Math.cos(this.degToRad(angle - rot));
      let startY =
        height / 2.0 + sf * radius * Math.sin(this.degToRad(angle - rot));

      if (angle === 0) {
        ctx.moveTo(startX, startY);
      }

      ctx.lineTo(startX, startY);
    }
    ctx.closePath();
    ctx.stroke();
  };

  render() {
    window.addEventListener("resize", this.setup);

    return (
      <div>
        <div className="w3-container w3-blue w3-margin-top w3-margin-bottom w3-padding">
          <FontAwesomeIcon icon="fa-solid fa-circle-half-stroke" className="w3-margin-right"/>
          Polar {this.props.orient === "hor" ? "horizontal" : "vertical"}
        </div>
        <div
          id={"draw" + this.props.orient}
          className="w3-white"
          style={{ height: "calc(50vh - 2*35.89px  - 68.5px - 2*16px)" }}
        >
          <canvas
            id={"canvas" + this.props.orient}
            className="w3-blue"
          ></canvas>
        </div>
      </div>
    );
  }
}

export default Polar;
