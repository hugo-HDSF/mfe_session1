import React from 'react';
import './ProductSheet.css';


const ProductSheet = ({movie, onBack}) => {
  //to delete
  movie = {
    'id': 3,
    'title': 'Interstellar',
    'year': 2014,
    'genres': ['Adventure', 'Drama', 'Sci-Fi'],
    'description': 'Un groupe d\'explorateurs voyage à travers un trou de ver à la recherche d\'un nouvel habitat pour l\'humanité.',
    'posterUrl': 'https://example.com/posters/interstellar.jpg',
    'trailerUrl': 'https://www.youtube.com/embed/zSWdZVtXT7E',
    'rating': 4,
  };
  console.log('Movie data:', movie);
  return (
    <div className="product-sheet-page">
      <div className="product-sheet-container">
        <img src={movie.posterUrl || 'https://via.placeholder.com/250x375'}
             alt={movie.title}/>
        <div className="product-sheet-content">
          <h1>{movie.isSeries ? 'Série' : 'Film'}</h1>
          <h2>{movie.title}</h2>
          
          <div className="product-sheet-meta">
            <span>{movie.year}</span>
            <span>•</span>
            <span>{Array.isArray(movie.genres) ? movie.genres.join(', ') : movie.genre}</span>
            {movie.isSeries && (
              <>
                <span>•</span>
                <span>{movie.seasons} saison{movie.seasons > 1 ? 's' : ''}</span>
              </>
            )}
          </div>
          
          <div className="product-sheet-rating">
            ★ {movie.rating}/5
          </div>
          
          <p className="product-sheet-description">{movie.description}</p>
          
          {movie.trailerUrl && (
            <div className="product-sheet-trailer">
              <h3>Bande Annonce</h3>
              <iframe
                width="100%"
                height="250"
                src={movie.trailerUrl}
                title={`${movie.title} trailer`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
          
          <button className="product-sheet-button" onClick={onBack}>
            Retour au Catalogue
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductSheet;
