import React from "react";
import "./Movies.css";
import movies from "./moviesDb";

function Movies() {
    // Create duplicated list for infinite seamless scrolling
    const infiniteMovies = [...movies, ...movies, ...movies, ...movies];

    return (
        <section className="movies">
            <div className="movies-container">
                <h2>My Movies</h2>
                <p className="movies-desc">
                    A selection of films that align with my taste. Scrolling through these frames of inspiration.
                </p>
            </div>

                <div className="movies-scroll-wrapper">
                    <div className="movies-track">
                        {infiniteMovies.map((movie, index) => (
                            <div className="movie-card" key={`${movie.id}-${index}`}>
                                {/* Colored Dots Motif */}
                                <div className="card-dots">
                                    <div className="dot orange"></div>
                                    <div className="dot green"></div>
                                    <div className="dot blue"></div>
                                </div>

                                <img src={movie.poster} alt={movie.title} className="movie-poster" />

                                <h3 className="movie-title">{movie.title}</h3>

                                <div className="movie-director-label">A Film By</div>
                                <div className="movie-director">{movie.director}</div>

                                <div className="movie-staring-label">Staring</div>
                                <div className="movie-staring">{movie.starring}</div>
                            </div>
                        ))}
                    </div>

                <p className="letterboxd-link">These are just a few of my favorite movies. There are many more that I love
                    <br />
                    To see them please click
                    <a href="https://boxd.it/fF5QJ" target="_blank" rel="noopener noreferrer">
                        <img src="/letterboxed.png" alt="Letterboxd" />
                    </a>
                </p>
            </div>
        </section>
    );
}

export default Movies;
