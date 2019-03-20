import React, { Component } from 'react';
import {getMovies, deleteMovie} from '../services/fakeMovieService';

class Movies extends Component {
 state = {
  movies: getMovies()
 };
 deleteMovie(movie) {
  deleteMovie(movie);
  this.setState({
    movies: getMovies()
  });
 }
 handleMovies() {
  const moviesList = this.state.movies.map(movie => {
    return <div className="row p-3 border border-right-0 border-left-0 p-3" key={movie._id}>
        <div className="col-3"> {movie.title}</div>
        <div className="col-2">{movie.genre.name}</div>
        <div className="col-2">{movie.numberInStock}</div>
        <div className="col-2">{movie.dailyRentalRate}</div>
        <div className="col-3">
         <button onClick={()=> {this.deleteMovie(movie._id)}} className="btn btn-danger">Delete</button>
        </div>
       </div>;
      });

  return moviesList;
 };
 tableHeadHandler() {
  if (this.state.movies.length) {
   return  <React.Fragment>
    <h1>Movies lists are below</h1>
    <div className="row border border-right-0 border-left-0 p-3">
     <div className="col-3 font-weight-bold"> Title</div>
     <div className="col-2 font-weight-bold">Genre</div>
     <div className="col-2 font-weight-bold">Stock</div>
     <div className="col-2 font-weight-bold">Rate</div>
    </div>
   </React.Fragment>;
  }
  return <h1>No movies available at the moment!</h1>;
 }
  render() {
    return (
      <main className="container">
        {this.tableHeadHandler()}
        {this.handleMovies()}
      </main>
    );
  }
}

export default Movies;
