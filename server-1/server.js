var http = require("http");

const host = "localhost";
const port = 3000;

const requestListener = function (req, res) {
  res.setHeader("Content-Type", "text/html");
  res.writeHead(200);
  res.end(
    `<html>
        <body>
            <h1>Hello World, this is my first server!</h1>
        </body>
    </html>`
  );
};

var server = http.createServer(requestListener);

server.listen(port, host, function () {
  console.log(`Server is running on http://${host}:${port}/`);
});
