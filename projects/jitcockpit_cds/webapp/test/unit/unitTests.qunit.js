/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"nttdata/jitcockpitcds/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});