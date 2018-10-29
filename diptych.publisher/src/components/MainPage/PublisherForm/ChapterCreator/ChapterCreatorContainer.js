import { connect } from 'react-redux'
import ChapterCreator from './ChapterCreator'


const getImageUrls = (value) => {
    return value;
}


const mapStateToProps = state => ({
    imageUrls: getImageUrls(state.chapters)
})

export default connect(
    mapStateToProps
)(ChapterCreator)