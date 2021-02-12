import { combineReducers } from 'redux';
import dashboard from './reducers/Dashboard/Dashboard';
import { 
    cocktails,
    cocktailDetail,
    cocktailFilter,
    cocktailSearch
} from './reducers/Cocktails/Cocktails';

const rootReducer = combineReducers({
    dashboard,
    cocktails,
    cocktailDetail,
    cocktailFilter,
    cocktailSearch
});

export default rootReducer;