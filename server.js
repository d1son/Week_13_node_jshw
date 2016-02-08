var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }))

app.get("/login", function(req, res) {
	res.sendFile(process.cwd() + "views/portfolio-new-main.html");
});

app.get("/help", function(req, res) {
	res.sendFile(process.cwd() + "views/rps-main.html");
});

app.get("/help", function(req, res) {
	res.sendFile(process.cwd() + "views/clickyGame-home.html");;
});

app.listen(PORT, function() {
	console.log("App is listening on port %s", PORT);
});