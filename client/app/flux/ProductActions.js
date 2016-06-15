import {Dispatcher} from './ProductDispatcher';
import {ProductConstants} from './ProductConstants';

var SurveyActions = {
    record: function (results) {
        Dispatcher.dispatch({
            actionType: ProductConstants.RECORD_PRODUCT,
            results: results
        });
    }
};

module.exports = SurveyActions;
