"use strict";

require("./src/app")({
	webServer: {
		port: 3000,
		folder: "www"
	},
	mongoServer: {
    host: "172.17.0.2",
    port: 27017,
    dbName: "t4dclass"
  }
});
