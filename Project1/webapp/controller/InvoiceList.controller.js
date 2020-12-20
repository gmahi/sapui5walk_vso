sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"],
  function (Controller, JSONModel) {
    "use strict";
    return Controller.extend(
      "sap.ui.demo.walkthrough.controller.InvoiceList",
      {

onIit:function(){

    var oViewModel = new JSONModel({
          Currency: 'EUR'

    });

    this.getView().setModel(oViewModel, "view");
}


      }
    );
  }
);
