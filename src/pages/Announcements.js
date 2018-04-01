import React from "react";

const datasource = {
  getList: () => {
    return [
      { filename: "attendance.pdf" },
      { filename: "leaves.pdf" },
      { filename: "conduct.pdf" },
      { filename: "holiday.pdf" }
    ];
  }
};

const Announcements = () => (
  <div>
    <center>
      <h2>Announcements</h2>
    </center>
    {datasource.getList().map(data => {
      return (
        <div>
          <a href={"/media/pdf/" + data.filename} target="_blank">{data.filename}</a>
        </div>
      );
    })}
  </div>
);

export default Announcements;
