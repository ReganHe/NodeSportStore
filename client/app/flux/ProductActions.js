var Dispatcher = require("./Dispatcher");
var ProductConstants = require("./ProductConstants");

var SurveyActions = {

  record: function(results) {
    Dispatcher.dispatch({
      actionType: ProductConstants.RECORD_PRODUCT,
      results: results
    });
  }
}

module.exports = SurveyActions;
