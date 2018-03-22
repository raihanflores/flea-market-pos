import React from "react";
import webreq from "../helpers/webrequest";

const gqlrequest = {
  post: () => {
    let result = webreq({
      query:
        "{ staffs { staffuserid username staffname addr1 addr2 city zip state active country usergroup } }"
    });

    return result;
  }
};

const Staff = () => (
  <div>
    {gqlrequest.post()}
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Staff;
