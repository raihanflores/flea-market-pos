import React, { Component } from "react";
import axios from "axios";

const USERGROUP = {
  1: "Admin",
  2: "CWH_Admin",
  3: "Agent",
  4: "Dev",
  5: "Semi Admin"
};

class Staff extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    var self = this;
    axios
      .post("http://localhost:3000/graphql", {
        query:
          "{ staffs { staffuserid username staffname addr1 addr2 city zip state active country usergroup } }"
      })
      .then(function(response) {
        console.log(response.data.data.staffs);
        self.setState({
          staffs: response.data.data.staffs
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Group</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {this.state.staffs ? (
              this.state.staffs.map(data => {
                return (
                  <tr key={data.staffuserid}>
                    <th scope="row">{data.staffuserid}</th>
                    <td>{data.staffname.toUpperCase()}</td>
                    <td>{USERGROUP[data.usergroup].toUpperCase()}</td>
                    <td>{data.active === "Y" ? "ACTIVE" : "INACTIVE"}</td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="4">
                  <center>
                    <label>Fetching Data...</label>
                  </center>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Staff;
