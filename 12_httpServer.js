const http = require("http");

//createing http server
//callback function there are 2 parameter and both are big objects with lot of info
//req - request is incoming request and res - response is what we are sending back
const server = http.createServer((req, res) => {
  //This is output for home page
  if (req.url === "/") {
    res.end("welcome to our home page");
  }
  //This is output for /about page
  if (req.url === "/about") {
    res.end("Here is the about page");
  }
  //if the respones does not exist
  res.write("oops we cant find the page");
  res.end();
  console.log(req);
});

//what port to listen
server.listen(5000);
