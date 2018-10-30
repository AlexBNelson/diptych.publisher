import { combineReducers } from 'redux'
import imageUrl from './imageUrl'
import chapterToRemove from './chapterToRemove'

export default combineReducers({
    imageUrl,
    chapterToRemove
})