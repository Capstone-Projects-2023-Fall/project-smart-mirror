import React, { Component } from "react";

interface ClockState {
  hours: string;
  minutes: string;
  seconds: string;
  ampm: string;
}

interface ClockProps {
    title: string;
}

class Clock extends Component<ClockProps, ClockState> {
  clockInterval: number | null = null;

  constructor(props: ClockProps) {
    super(props);
    this.state = {
      hours: "",
      minutes: "",
      seconds: "",
      ampm: "",
    };
  }

  componentDidMount() {
    this.updateTime(); // Call once to set initial time
    this.clockInterval = setInterval(this.updateTime, 1000);
  }

  componentWillUnmount() {
    if (this.clockInterval) {
      clearInterval(this.clockInterval);
    }
  }

  updateTime = () => {
    const currentDate = new Date();
    const hours24 = currentDate.getHours();
    const hours12 = hours24 % 12 || 12; // Convert to 12-hour format
    const minutes = this.formatTime(currentDate.getMinutes());
    const seconds = this.formatTime(currentDate.getSeconds());
    const ampm = hours24 >= 12 ? "PM" : "AM";

    this.setState({ hours: hours12.toString(), minutes, seconds, ampm });
  };

  formatTime(time: number): string {
    return time < 10 ? `0${time}` : time.toString();
  }

  render() {
    const { title } = this.props;
    const { hours, minutes, seconds, ampm } = this.state;

    return (
      <div className={"clock"}>
        <h3>{title}</h3>
        <div className={"analog-clock"}>
          <div
            className={"dial seconds"}
            style={{ transform: `rotate(${Number(seconds) * 6}deg)` }}
          />
          <div
            className={"dial minutes"}
            style={{ transform: `rotate(${Number(minutes) * 6}deg)` }}
          />
          <div
            className={"dial hours"}
            style={{ transform: `rotate(${Number(hours) * 30}deg)` }}
          />
        </div>
        <div className={"digital-clock"}>
          {hours}:{minutes}:{seconds} {ampm}
        </div>
      </div>
    );
  }
}

export default Clock;
