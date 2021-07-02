import React, { useState } from "react";
import "./timer.css";

export default class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      minutes: 25,
      seconds: 0,
    };
    this.countDownSeconds = this.countDownSeconds.bind(this);

    this.startTimer = this.startTimer.bind(this);
  }
  countDownSeconds(e) {
    if (this.state.seconds !== 0) {
      this.setState({ seconds: this.state.seconds - 1 });
    } else if (this.state.seconds === 0) {
      this.setState({ seconds: 59 });
      this.setState({ minutes: this.state.minutes - 1 });
    }
  }
  stopTimer() {
    clearInterval();
  }

  startTimer() {
    setInterval(this.countDownSeconds, 1000);

    console.log("timer Started");
  }
  render() {
    return (
      <div id="timerHolder">
        <div id="timeDisplay">
          <h1>
            {this.state.minutes}:{this.state.seconds}
          </h1>
          <button id="startButton" onClick={this.startTimer}>
            Start
          </button>
          <button id="stopButton" onClick={this.stopTimer}>
            Stop
          </button>
        </div>
        <div id="timeChanger"></div>
      </div>
    );
  }
}
