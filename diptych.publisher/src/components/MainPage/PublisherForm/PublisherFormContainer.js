import { connect } from 'react-redux'
import ChapterCreator from './ChapterCreator'


const getChapterToRemove = (index) => {
    return index;
}


const mapStateToProps = state => ({
    chapterToRemove: getChapterToRemove(state.chapterToRemove)
})

export default connect(
    mapStateToProps
)(ChapterCreator)