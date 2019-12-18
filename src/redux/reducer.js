import postes from '../data/posts'

const postReducer = function posts(state = postes, action) {
    console.log(action.index)
    return state
}

export default postReducer