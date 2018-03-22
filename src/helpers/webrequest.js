var http = require("http");

var options = {
  host: "localhost",
  port: 3000,
  path: "/graphql",
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  }
};

let rawData = "";

const webreq = data => {
  const postData = JSON.stringify(data);
  options["Content-Length"] = Buffer.byteLength(postData);
  let req = http.request(options, res => {
    // console.log(`STATUS: ${res.statusCode}`);
    // console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
    res.setEncoding("utf8");
    res.on("data", chunk => {
      // console.log(`BODY: ${chunk}`);
      rawData += chunk;
    });
    res.on("end", () => {
      return rawData;
    });
  });

  req.on("error", e => {
    // console.error(`problem with request: ${e.message}`);
  });

  // write data to request body
  req.write(postData);
  req.end();
};

export default webreq;
