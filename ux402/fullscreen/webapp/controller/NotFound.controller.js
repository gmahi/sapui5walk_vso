sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("com.fullscreen.fullscreen.controller.NotFound", {
			onInit: function () {

			},

            onNavBack: function () {
                var oHistory, sPreviousHash, oRouter;
                oHistory = sap.ui.core.routing.History.getInstance();
                sPreviousHash = oHistory.getPreviousHash();
                if (sPreviousHash !== undefined) {
                  window.history.go(-1);
                } else {
                  oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                  oRouter.navTo("overview", true);
                }
              },

            getRouter: function () {
                return sap.ui.core.UIComponent.getRouterFor(this);
              },



		});
	});
