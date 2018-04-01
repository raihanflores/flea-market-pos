import React from "react";
import DatePicker from "react-datepicker";
import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";

let divstyle = {
  display: "inline-block"
};

class Requests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  handleKeyDown(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <center>
          <h2>Requests</h2>
        </center>
        <div className="container">
          <form>
            <br />
            <br />
            <label>From:&nbsp;</label>
            <div style={divstyle}>
              <DatePicker
                id="dtpFrom"
                selected={this.state.startDate}
                onChange={this.handleChange}
                onKeyDown={this.handleKeyDown}
              />
            </div>
            &nbsp;
            <label>To:&nbsp;</label>
            <div style={divstyle}>
              <DatePicker
                id="dtpTo"
                selected={this.state.startDate}
                onChange={this.handleChange}
                onKeyDown={this.handleKeyDown}
              />
            </div>
            <div className="form-row">
              <textarea
                rows="16"
                className="form-control"
                id="inputReason"
                placeholder="Describe the reason of your request."
              />
            </div>
            <br />
            <center>
              <button
                onClick={() => alert("Data will be sent to DB.")}
                type="button"
                className="btn btn-primary"
              >
                Submit Leave Request
              </button>
            </center>
          </form>
        </div>
      </div>
    );
  }
}

export default Requests;
