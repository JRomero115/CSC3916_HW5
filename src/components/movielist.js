import React, { Component } from 'react';
import { fetchMovies } from "../actions/movieActions";
import { setMovie } from "../actions/movieActions";
import {connect} from 'react-redux';
import {Image, Nav} from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import { BsStarFill} from 'react-icons/bs'
import {LinkContainer} from 'react-router-bootstrap';


class MovieList extends Component {
    constructor(props) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this);
    }

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(fetchMovies());
    }

    handleSelect(selectedIndex, e) {
        const {dispatch} = this.props;
        dispatch(setMovie(this.props.movies[selectedIndex]));
    }

    handleClick = (movie) => {
        const {dispatch} = this.props;
        dispatch(setMovie(movie));
    }

    render() {

        const MovieListCarousel = ({movieList}) => {
            if (!movieList) {
                return <div>Loading....</div>
            }

            return (
                /*
                <Carousel onSelect={this.handleSelect}>
                    {movieList.map((movie) =>
                        <Carousel.Item key={movie._id}>
                            <div>
                                <LinkContainer to={'/movie/'+movie._id} onClick={()=>this.handleClick(movie)}>
                                    <Nav.Link><Image className="image" src={movie.imageURL} thumbnail /></Nav.Link>
                                </LinkContainer>
                            </div>
                            <Carousel.Caption>
                                <h3>{movie.title}</h3>
                                <BsStarFill glyph={'star'} /> {movie.avgRating} &nbsp;&nbsp; {movie.releaseDate}
                            </Carousel.Caption>
                        </Carousel.Item>
                    )}
                </Carousel>
                 */
                <Carousel>
                    <Carousel.Item>
                        <div>
                            <Nav.Link><Image className="image" src="https://images.moviesanywhere.com/143cdb987186a1c8f94d4f18de211216/fdea56fa-2703-47c1-8da8-70fc5382e1ea.jpg" thumbnail /></Nav.Link>
                            <h3>Harry Potter</h3>
                            <BsStarFill glyph={'star'} /> 5 &nbsp;&nbsp; 2001
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div>
                            <Nav.Link><Image className="image" src="https://static.wikia.nocookie.net/marvelmovies/images/6/62/Spider-Man%282002%29dvd.jpg/revision/latest?cb=20120523154526" thumbnail /></Nav.Link>
                            <h3>Spider-Man</h3>
                            <BsStarFill glyph={'star'} /> 4.5 &nbsp;&nbsp; 2002
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div>
                            <Nav.Link><Image className="image" src="https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_.jpg" thumbnail /></Nav.Link>
                            <h3>The Conjuring</h3>
                            <BsStarFill glyph={'star'} /> 4.3 &nbsp;&nbsp; 2013
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div>
                            <Nav.Link><Image className="image" src="https://cdn.shopify.com/s/files/1/1057/4964/products/titanic-vintage-movie-poster-original-1-sheet-27x41_800x.progressive.jpg?v=1622869492" thumbnail /></Nav.Link>
                            <h3>Titanic</h3>
                            <BsStarFill glyph={'star'} /> 4.3 &nbsp;&nbsp; 1997
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div>
                            <Nav.Link><Image className="image" src="https://lumiere-a.akamaihd.net/v1/images/image_c09a58e5.jpeg" thumbnail /></Nav.Link>
                            <h3>The Maze Runner</h3>
                            <BsStarFill glyph={'star'} /> 4 &nbsp;&nbsp; 2014
                        </div>
                    </Carousel.Item>
                </Carousel>
            )
        }

        return (
            <MovieListCarousel movieList={this.props.movies} />
        )
    }
}

const mapStateToProps = state => {
    return {
        movies: state.movie.movies
    }
}

export default connect(mapStateToProps)(MovieList);