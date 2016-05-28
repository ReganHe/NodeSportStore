var Dispatcher = require("./ProductDispatcher");
var ProductConstants = require("./ProductConstants");

var SurveyActions = {
    selectCategory: function (categoryId) {
        Dispatcher.dispatch({
            actionType: ProductConstants.SELECT_CATEGORY,
            categoryId: categoryId
        });
    }
};

module.exports = SurveyActions;
