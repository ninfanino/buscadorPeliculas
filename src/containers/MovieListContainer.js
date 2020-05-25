import { connect } from 'react-redux';
import { selectedMovie } from '../redux/actions';
import MoviesList from '../components/MoviesList';

const mapStateToProps = state => ({
    movies: state.getMovies.movies
})

const mapDispatchToProps = dispatch => ({
    selectedMovie: (id) => dispatch(selectedMovie(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);