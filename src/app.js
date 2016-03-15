module.exports = function(config) {

	"use strict";

	const
		express = require('express'),
		path = require("path");

	let
		app = express();

	app.use(express.static(path.join(__dirname, config.webServer.folder)));
	app.listen(config.webServer.port, function() {
		console.log('Running a web server on port ' + config.webServer.port);
	});

};
