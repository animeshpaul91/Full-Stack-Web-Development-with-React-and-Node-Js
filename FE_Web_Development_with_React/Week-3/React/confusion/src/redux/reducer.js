import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';

export const initialState = {
    dishes: DISHES,
    selectedDish: null, //selectedDish is now an 
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
};

// Reducer is a pure function
export const Reducer = (state = initialState, action) => {
    return state; 
};