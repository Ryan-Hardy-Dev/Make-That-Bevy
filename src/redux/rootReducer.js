import { combineReducers } from 'redux';
import dashboard from './reducers/Dashboard/Dashboard';
import { 
    cocktails,
    cocktailDetail,
    cocktailFilter
} from './reducers/Cocktails/Cocktails';

const rootReducer = combineReducers({
    dashboard,
    cocktails,
    cocktailDetail,
    cocktailFilter
});

export default rootReducer;