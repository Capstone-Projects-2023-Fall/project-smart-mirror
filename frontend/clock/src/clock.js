import React, { Component } from "react";

class Clock extends Component {
  clockInterval = null;

  constructor(props) {
    super(props);
    this.state = {
      hours: "",
      minutes: "",
      seconds: ""
    };
  }

  componentDidMount() {
    this.updateTime(); // Call once to set initial time
    this.clockInterval = setInterval(this.updateTime, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockInterval);
  }

  updateTime = () => {
    const currentDate = new Date();
    const hours = this.formatTime(currentDate.getHours());
    const minutes = this.formatTime(currentDate.getMinutes());
    const seconds = this.formatTime(currentDate.getSeconds());

    this.setState({ hours, minutes, seconds });
  };

  formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }

  render() {
    const { title } = this.props;
    const { hours, minutes, seconds } = this.state;

    return (
      <div className={"clock"}>
        <h3>{title}</h3>
        <div className={"analog-clock"}>
          <div
            className={"dial seconds"}
            style={{ transform: `rotate(${seconds * 6}deg)` }}
          />
          <div
            className={"dial minutes"}
            style={{ transform: `rotate(${minutes * 6}deg)` }}
          />
          <div
            className={"dial hours"}
            style={{ transform: `rotate(${hours * 30}deg)` }}
          />
        </div>
        <div className={"digital-clock"}>
          {hours}:{minutes}:{seconds}
        </div>
      </div>
    );
  }
}

export default Clock;
