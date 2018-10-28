const removeImageUrl = (state = 0, action) => {
    switch (action.type) {
        case 'REMOVE_IMAGE_URL':
            return {
                ...state,
                chapters: state.arr.splice(action.index, 1)
            }
        default:
            return state
    }
}

export default removeImageUrl