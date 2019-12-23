import postes from '../data/posts'
import {combineReducers} from 'redux'


function comments(state=[], action){
    return state
}


function posts(state = postes, action) {
    console.log(action.index)

    switch(action.type){
        case 'REMOVE_POST': return [...state.slice(0, action.index), ...state.slice(action.index+1)]
        case 'ADD_POST': return [...state, action.post]
        default: return state
    }
}

const rootReducer = combineReducers({posts, comments})

export default rootReducer 