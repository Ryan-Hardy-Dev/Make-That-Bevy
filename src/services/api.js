// Hooking into the API to return live data in the UI

const HOST = "https://www.thecocktaildb.com/api/json/v1/1";

const api = {
    drinkCategory: async (category) => {
        const url = `${HOST}/filter.php?c=${category}`;
        const response = await fetch(url);
        const jsonResponse = await response.json();
        return jsonResponse;
    },
    cocktailDetail: async (id) => {
        const url = `${HOST}/lookup.php?i=${id}`;
        const response = await fetch(url);
        const jsonResponse = await response.json();
        return jsonResponse;
    },
    cocktailFilter: async (filter) => {
        const url = `${HOST}/filter.php?i=${filter}`;
        const response = await fetch(url);
        const jsonResponse = await response.json();
        return jsonResponse;
    },
    searchCocktail: async (search) => {
        const url = `${HOST}/search.php?s=${search}`;
        const response = await fetch(url);
        const jsonResponse = await response.json();
        return jsonResponse;
    }
}

export default api;