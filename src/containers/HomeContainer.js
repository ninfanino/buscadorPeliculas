import { connect } from 'react-redux';
import { getAllMovies, selectedMovie } from '../redux/actions';
import Home from '../pages/Home';

const mapStateToProps = state => ({
    results: state.getMovies.movies,
    isLoading: state.getMovies.isLoading,
    error: state.getMovies.error,
    search: state.getMovies.search
})

const mapDispatchToProps = dispatch => ({
    getAllMovies: (search) => dispatch(getAllMovies(search)),                                                                      
    selectedMovie: (id) => dispatch(selectedMovie(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);