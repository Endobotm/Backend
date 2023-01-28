const path = require("path");
const fs = require("fs");
const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  ` Please enter your text(press enter when done) : `,
  function (content) {
    rl.question(` Please enter the filename : `, function (fileName) {
      fs.writeFile(
        path.join(__dirname, `/${fileName}.txt`),
        content,
        function (err) {
          if (err) {
            console.log(err);
            return;
          }
        }
      );
      rl.close();
    });
  }
);
