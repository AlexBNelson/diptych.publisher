const imageUrl = (state = 0, action) => {
    switch (action.type) {
        case 'ADD_IMAGE_URL':
            return {
                ...state,
                chapters: state.arr.concat(action.url)
            }
        case 'REMOVE_IMAGE_URL':
            return {
                ...state,
                chapters: state.arr.splice(action.index, 1)
            }
        default:
            return state
    }
}

export default imageUrl