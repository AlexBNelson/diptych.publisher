import { connect } from 'react-redux'
import BackgroundPane from './BackgroundPane';


const getImageUrls = (value) => {
    return value;
}

const removeImageUrl = (value) => {
    return value;
}



const mapStateToProps = state => ({
    imageUrls: getImageUrls(state.chapters)
})

export default connect(
    mapStateToProps
)(ChapterCreator)