module.exports = function(config) {

	"use strict";

	const
		mongoose = require("mongoose"),
		express = require('express'),
		path = require("path"),

		widgetSchema = mongoose.Schema({
			name: String,
			description: String,
			color: String,
			size: String,
			quantity: Number
		}),

		WidgetModel = mongoose.model("widget", widgetSchema);

	let
		app = express(),
		widgets = [
			{ name: "Small Red Widget", description: "A small, red widget.", color: "red", size: "small", quantity: 100 },
			{ name: "Medium Green Widget", description: "A medium, greene widget.", color: "green", size: "medium", quantity: 200 },
			{ name: "Large Blue Widget", description: "A large, blue widget.", color: "blue", size: "large", quantity: 50 }
		];

	mongoose.connect(`mongodb://${config.mongoServer.host}:${config.mongoServer.port}/${config.mongoServer.dbName}`);		

	widgets.forEach(function(widget) {

		let widgetModel = new WidgetModel(widget);

		widgetModel.save(function(err, result) {
			if (err) {
				console.log(err);
				return;
			}
		});

	});

	app.use(express.static(path.join(__dirname, config.webServer.folder)));
	app.listen(config.webServer.port, function() {
		console.log('Running a web server on port ' + config.webServer.port);
	});

};
