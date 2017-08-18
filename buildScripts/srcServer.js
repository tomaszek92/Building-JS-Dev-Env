var express = require("express");
var path = require("path");
var open = require("open");

const port = 3000;
var app = express();

app.get("/", function(request, response) {
   response.sendFile(path.join(__dirname, "../src/index.html"));
})

app.listen(port, function(error) {
   if (error) {
      console.log(error);
   } else {
      open("http://localhost:" + port);
   }
});
