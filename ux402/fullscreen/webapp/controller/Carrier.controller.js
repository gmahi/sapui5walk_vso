sap.ui.define(
  ["sap/ui/core/mvc/Controller"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller) {
    "use strict";

    return Controller.extend("com.fullscreen.fullscreen.controller.Carrier", {
      onInit: function () {},

      toFlights: function (oEvent) {
        var oItem = oEvent.getSource();
        var oCtx = oItem.getBindingContext();
        var sCarrierid = oCtx.getProperty("AirLineID");
        this.getRouter().navTo("flights", {carrierId: sCarrierid }, false);
      },

      getRouter: function () {
        return sap.ui.core.UIComponent.getRouterFor(this);
      },
    });
  }
);
