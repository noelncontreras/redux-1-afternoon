import {createStore} from "redux";

const initialState = {
    name: "",
    category: "",
    authorFirst: "",
    authorLast: "",
    ingredients: [],
    instructions: [],
    recipes: []
}

export const UPDATE_NAME = "RECIPE_NAME";
export const UPDATE_CATEGORY = "RECIPE_CATEGORY";
export const UPDATE_AUTHOR_FIRST = "UPDATE_AUTHOR_FIRST";
export const UPDATE_AUTHOR_LAST = "UPDATE_AUTHOR_LAST";
export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const ADD_INSTRUCTION = "ADD_INSTRUCTION";
export const ADD_RECIPE = "ADD_RECIPE";
export const DELETE_RECIPE = "DELETE_RECIPE";

function reducer(state=initialState, action) {
    const {type, payload} = action;
    switch(type) {
        case UPDATE_NAME:
            return {
                ...state,
                name: payload
            }
        case UPDATE_CATEGORY:
            return {
                ...state,
                category: payload
            }
        case UPDATE_AUTHOR_FIRST:
            return {
                ...state,
                authorFirst: payload
            }
        case UPDATE_AUTHOR_LAST:
            return {
                ...state,
                authorLast: payload
            }
        case ADD_INGREDIENT:
            const newIngredients = [...state.ingredients, payload];
            return {
                ...state,
                ingredients: newIngredients
            }
        case ADD_INSTRUCTION:
            const newInstructions = [...state.instructions, payload];
            return {
                ...state,
                instructions: newInstructions
            }
        case ADD_RECIPE:
            const {
                name,
                category,
                authorFirst,
                authorLast,
                ingredients,
                instructions
            } = state;
            const recipe = {
                name,
                category,
                authorFirst,
                authorLast,
                ingredients,
                instructions
            };
            const newRecipes = [...state.recipes, recipe];
            return {
                recipes: newRecipes,
//instead of returning copy of state(...state) before line 75, you are sending back 
//the state properties as empty values
                name: "",
                category: "",
                authorFirst: "",
                authorLast: "",
                ingredients: [],
                instructions: []
            }
        case DELETE_RECIPE:
            const updatedRecipes = state.recipes;
            updatedRecipes.splice(action.payload, 1)
            return {
                ...state,
                recipes: updatedRecipes
            }
        default: 
            return state;
    }
}

export default createStore(reducer);