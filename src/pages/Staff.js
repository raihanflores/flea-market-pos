import React, { Component } from "react";
import axios from "axios";

class Staff extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    var self = this;
    axios
      .post("https://us-west-2.api.scaphold.io/graphql/flea", {
        query: `query GetAllStaff {
          viewer {
            allStaff {
              edges {
                node {
                  id
                  code
                  username
                  password
                  fname
                  lname
                  address
                  landline
                  mobile
                  permission
                }
              }
            }
          }
        }`
      }, {
          headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MjU0NDQwOTQsImlhdCI6MTUyNDE0ODA5NCwiYXVkIjoiMTE4ZjNlMWItZDUyYS00MGE3LTkwNzktM2U0Nzk0NDM5OGZhIiwiaXNzIjoiaHR0cHM6Ly9zY2FwaG9sZC5pbyIsInN1YiI6IjIifQ.GZ-DYA8uQPneIyRL-fYdXo0y-R6_TW74ZkjbmWhrb-g"
          }
        })
      .then(function (response) {
        self.setState({
          staffs: response.data.data.viewer.allStaff.edges
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Code</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Username</th>
              <th scope="col">Landline</th>
              <th scope="col">Mobile</th>
              <th scope="col">Permission</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.staffs ? (
              this.state.staffs.map(data => {
                return (
                  <tr key={data.node.id}>
                    <th scope="row">{data.node.code}</th>
                    <td>{data.node.fname.toUpperCase()}</td>
                    <td>{data.node.lname.toUpperCase()}</td>
                    <td>{data.node.username}</td>
                    <td>{data.node.landline}</td>
                    <td>{data.node.mobile}</td>
                    <td>{data.node.permission}</td>
                    <td>
                      <button className="btn btn-primary btn-sm">Edit</button>
                      <button className="btn btn-danger btn-sm">Delete</button>
                    </td>
                  </tr>
                );
              })
            ) : (
                <tr>
                  <td colSpan="9">
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
