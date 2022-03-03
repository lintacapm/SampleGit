function initModel() {
	var sUrl = "/HANAXS/com/merckgroup/mars/services/odata/mars.xsodata/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}