const chapterToRemove = (state = 0, action) => {
    switch (action.type) {
        case 'REMOVE_IMAGE_URL':
            return action.index
        default:
            return state
    }
}

export default chapterToRemove