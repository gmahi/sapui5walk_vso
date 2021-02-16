sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/ColumnListItem",
    "sap/m/Label",
    "sap/m/Token",
  ],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller) {
    "use strict";

    return Controller.extend("com.route.project1.controller.Main", {
      onInit: function () {
        this._oInput = this.getView().byId("input");
        this._oInput.setSelectedKey("HT-1001");
        this.oColModel = new JSONModel(
          sap.ui.require.toUrl("com/route/project1/model") + "/columnModel.json"
        );
        this.oModel = this.getView().getModel();
      },

      onValueHelpRequested: function () {
        var aCols = this.oColModel.getData().cols;
        this._oValueHelpDialog = sap.ui.xmlfragment(
          "com.route.project1.view.ValueHelpDialog",
          this
        );
        this.getView().addDependent(this._oValueHelpDialog);
        this._oValueHelpDialog.getTableAsync().then(function (oTable) {
          oTable.setModel(this.oModel);
          oTable.setModel(this.oColModel, "columns");
          if (oTable.bindRows) {
			  oTable.bindAggregration("rows", "/ZDEMO_C_SalesOrder_TX")
		  }
		  if (oTable.bindRows) {
			oTable.bindAggregation("items", "/ZDEMO_C_SalesOrder_TX", function () {
				return new ColumnListItem({
					cells: aCols.map(function (column) {
						return new Label({ text: "{" + column.template + "}" });
					})
				});
			});
		}
		  


        });
      },

      onChange: function (oEvent) {
        var oItem = oEvent.getSource();
      },
    });
  }
);
