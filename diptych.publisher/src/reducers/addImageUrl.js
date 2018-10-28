const addImageUrl = (state = 0, action) => {
    switch (action.type) {
        case 'REMOVE_IMAGE_URL':
            return {
                ...state,
                chapters: state.arr.concat(action.url)
            }
        default:
            return state
    }
}

export default addImageUrl