import { connect } from 'react-redux';
import { getMovieInfo, selectedMovie } from '../redux/actions'
import Detail from '../pages/Detail';

const mapStateToProps = state => ({
    info: state.movieInfo.info,
    isLoading: state.movieInfo.isLoading,
    error: state.movieInfo.error,
    selectedMovie: state.movieInfo.selectedMovie
});

const mapDispatchToProps = dispatch => ({
    dispatchSelectedMovie: (id) => dispatch(selectedMovie(id)),
    getMovieInfo: (id) => dispatch(getMovieInfo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Detail);