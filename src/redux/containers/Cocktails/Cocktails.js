import { connect } from 'react-redux';

import { 
    loadCocktailCategory,
    loadCocktailDetail,
    loadCocktailFilter 
} from "../../actions/Cocktails/Cocktails";

import Cocktails from '../../../components/Cocktails';

export default connect(
    state => {
        return {
            ...state.cocktails,
            ...state.cocktailDetail,
            ...state.cocktailFilter
        };
    },
    {
        loadCocktailCategory,
        loadCocktailDetail,
        loadCocktailFilter
    }
)(Cocktails);