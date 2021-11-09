import React, { Component } from "react";
import RangeSlider from "react-bootstrap-range-slider";
import { ErrorAlert } from "./Alert";

class NumberOfEvents extends Component {
  render() {
    return (
      <div className="NumberOfEvents mt-40">
         <h3>Select The Number Of Events</h3>
         <RangeSlider
           min={1}
           max={12}
          className="num-events"
          value={this.props.numberOfEvents}
          onChange={(e) => this.props.updateEventCount(e)}
        />
        <ErrorAlert text={this.props.errorText} />
      </div>
    );
  }
}

export default NumberOfEvents;