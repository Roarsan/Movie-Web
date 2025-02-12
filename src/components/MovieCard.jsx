import '../css/MovieCard.css';
import { useMovieContext } from '../contexts/MovieContext';

function MovieCard({ movie }) {
const {isFavorite,addToFavorites,removeFromFavorites} = useMovieContext()

const Favorite = isFavorite(movie.id)

   
        function handleFavoriteClick() {
            if (Favorite) {
                removeFromFavorites(movie.id);
                alert(`${movie.title} removed from favorites!`);
            } else {
                addToFavorites(movie);
                alert(`${movie.title} added to favorites!`);
            }
        }
        
    

    return (
        <div className="movie-card">
            <img className="movie-poster" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div className="movie-overlay">
                <button 
                    className={`favorite-btn ${Favorite ? "active" : ""}`} 
                    onClick={handleFavoriteClick}
                >
                    ❤️
                </button>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date?.split("-")[0]}</p>
            </div>
        </div>
    );
}

export default MovieCard;
