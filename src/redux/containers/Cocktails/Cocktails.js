import { connect } from 'react-redux';

import { 
    loadCocktailCategory,
    loadCocktailDetail,
    loadCocktailFilter,
    loadCocktailSearch
} from "../../actions/Cocktails/Cocktails";

import Cocktails from '../../../components/Cocktails';

export default connect(
    state => {
        return {
            ...state.cocktails,
            ...state.cocktailDetail,
            ...state.cocktailFilter,
            ...state.cocktailSearch
        };
    },
    {
        loadCocktailCategory,
        loadCocktailDetail,
        loadCocktailFilter,
        loadCocktailSearch
    }
)(Cocktails);