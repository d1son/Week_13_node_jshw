// having a lot of troube understanding express and how to use node as a web server, and uploading it to heroku

var express = require("express");
// var bodyParser = require("body-parser");
var app = express();
var PORT = process.env.PORT || 8080;


app.use("/js", express.static("public/js"));
app.use("/images", express.static("public/images"));
app.use("/css", express.static("public/css"));

app.get("/", function(req, res) {
  res.sendFile(process.cwd() + "/views/portfolio-new-main.html");
});

// app.use(bodyParser.urlencoded({ extended: false }))

app.get("/rps", function(req, res) {
	res.sendFile(process.cwd() + "/views/rps-main.html");
});

app.get("/clickyGame", function(req, res) {
	res.sendFile(process.cwd() + "/views/clickyGame-home.html");;
});

app.listen(PORT, function() {
	console.log("App is listening on port %s", PORT);
});
