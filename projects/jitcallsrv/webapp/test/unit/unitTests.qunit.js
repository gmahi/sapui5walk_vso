/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"jitcallsrv/jitcallsrv/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});