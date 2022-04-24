import React, { Component } from 'react';
import { fetchMovie } from "../actions/movieActions";
import {connect} from 'react-redux';
import {Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { BsStarFill } from 'react-icons/bs'
import { Image } from 'react-bootstrap';

class MovieDetail extends Component {

    componentDidMount() {
        const {dispatch} = this.props;
        if (this.props.selectedMovie == null) {
            dispatch(fetchMovie(this.props.movieId));
        }
    }

    render() {
        const DetailInfo = () => {
            if (!this.props.selectedMovie) {
                return <div>Loading....</div>
            }

            return (
                <Card>
                    <Card.Body>
                        <Image className="image" src="https://images.moviesanywhere.com/143cdb987186a1c8f94d4f18de211216/fdea56fa-2703-47c1-8da8-70fc5382e1ea.jpg" thumbnail />
                    </Card.Body>
                    <ListGroup>
                        <ListGroupItem>Harry Potter</ListGroupItem>
                        <ListGroupItem>
                            <p>
                                <b>Daniel Radcliffe</b> Harry Potter
                            </p>
                            <p>
                                <b>Rupert Grint</b> Ron Weasley
                            </p>
                            <p>
                                <b>Emma Watson</b> Hermione Granger
                            </p>
                        </ListGroupItem>
                        <ListGroupItem><h4><BsStarFill/> 5</h4></ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        <p>
                            <b>JanineR</b>&nbsp; Fun and magical.
                            &nbsp;  <BsStarFill /> 5
                        </p>
                    </Card.Body>

                    <Card.Body>
                        <Image className="image" src="https://static.wikia.nocookie.net/marvelmovies/images/6/62/Spider-Man%282002%29dvd.jpg/revision/latest?cb=20120523154526" thumbnail />
                    </Card.Body>
                    <ListGroup>
                        <ListGroupItem>Spider-Man</ListGroupItem>
                        <ListGroupItem>
                            <p>
                                <b>Tobey Maguire</b> Peter Parker
                            </p>
                            <p>
                                <b>Kirsten Dunst</b> Mary Jane Watson
                            </p>
                        </ListGroupItem>
                        <ListGroupItem><h4><BsStarFill/> 4.5</h4></ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        <p>
                            <b>JanineR</b>&nbsp; Classic and good movie.
                            &nbsp;  <BsStarFill /> 4
                        </p>
                        <p>
                            <b>RomeroJ</b>&nbsp; Best superhero movie.
                            &nbsp;  <BsStarFill /> 5
                        </p>
                    </Card.Body>

                    <Card.Body>
                        <Image className="image" src="https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_.jpg" thumbnail />
                    </Card.Body>
                    <ListGroup>
                        <ListGroupItem>The Conjuring</ListGroupItem>
                        <ListGroupItem>
                            <p>
                                <b>Patrick Wilson</b> Ed Warren
                            </p>
                            <p>
                                <b>Vera Farmiga</b> Lorraine Warren
                            </p>
                        </ListGroupItem>
                        <ListGroupItem><h4><BsStarFill/> 4.3</h4></ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        <p>
                            <b>JanineR</b>&nbsp; Very scary.
                            &nbsp;  <BsStarFill /> 4
                        </p>
                        <p>
                            <b>RomeroJ</b>&nbsp; Great storyline.
                            &nbsp;  <BsStarFill /> 5
                        </p>
                        <p>
                            <b>janine</b>&nbsp; Thrilling experience.
                            &nbsp;  <BsStarFill /> 4
                        </p>
                    </Card.Body>

                    <Card.Body>
                        <Image className="image" src="https://cdn.shopify.com/s/files/1/1057/4964/products/titanic-vintage-movie-poster-original-1-sheet-27x41_800x.progressive.jpg?v=1622869492" thumbnail />
                    </Card.Body>
                    <ListGroup>
                        <ListGroupItem>Titanic</ListGroupItem>
                        <ListGroupItem>
                            <p>
                                <b>Leonardo DiCaprio</b> Jack Dawson
                            </p>
                            <p>
                                <b>Kate Winslet</b> Rose DeWitt
                            </p>
                        </ListGroupItem>
                        <ListGroupItem><h4><BsStarFill/> 4.3</h4></ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        <p>
                            <b>JanineR</b>&nbsp; Romantic story.
                            &nbsp;  <BsStarFill /> 5
                        </p>
                        <p>
                            <b>RomeroJ</b>&nbsp; Too long.
                            &nbsp;  <BsStarFill /> 4
                        </p>
                        <p>
                            <b>janine</b>&nbsp; Very well directed.
                            &nbsp;  <BsStarFill /> 4
                        </p>
                    </Card.Body>

                    <Card.Body>
                        <Image className="image" src="https://lumiere-a.akamaihd.net/v1/images/image_c09a58e5.jpeg" thumbnail />
                    </Card.Body>
                    <ListGroup>
                        <ListGroupItem>The Maze Runner</ListGroupItem>
                        <ListGroupItem>
                            <p>
                                <b>Dylan O'Brien</b> Thomas
                            </p>
                        </ListGroupItem>
                        <ListGroupItem><h4><BsStarFill/> 4</h4></ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        <p>
                            <b>JanineR</b>&nbsp; Very intense and engaging.
                            &nbsp;  <BsStarFill /> 4
                        </p>
                        <p>
                            <b>RomeroJ</b>&nbsp; Good watch.
                            &nbsp;  <BsStarFill /> 4
                        </p>
                    </Card.Body>
                </Card>


                /*
                <Card>
                    <Card.Header>Movie Detail</Card.Header>
                    <Card.Body>
                        <Image className="image" src={this.props.selectedMovie.imageUrl} thumbnail />
                    </Card.Body>
                    <ListGroup>
                        <ListGroupItem>{this.props.selectedMovie.title}</ListGroupItem>
                        <ListGroupItem>
                            {this.props.selectedMovie.actors.map((actor, i) =>
                                <p key={i}>
                                    <b>{actor.actorName}</b> {actor.characterName}
                                </p>)}
                        </ListGroupItem>
                        <ListGroupItem><h4><BsStarFill/> {this.props.selectedMovie.avgRating}</h4></ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        {this.props.selectedMovie.reviews.map((review, i) =>
                            <p key={i}>
                                <b>{review.username}</b>&nbsp; {review.review}
                                &nbsp;  <BsStarFill /> {review.rating}
                            </p>
                        )}
                    </Card.Body>
                </Card>
                */
            )
        }

        return (
            <DetailInfo />
        )
    }
}

const mapStateToProps = state => {
    return {
        selectedMovie: state.movie.selectedMovie
    }
}

export default connect(mapStateToProps)(MovieDetail);