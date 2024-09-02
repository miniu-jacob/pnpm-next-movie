import React from 'react';
import './MovieSlider.style.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from '../MovieCard/MovieCard';
import propTypes from 'prop-types';

const MovieSlider = ({ title, movies, responsive }) => {
    return (
        <div className='movie-slider w-screen '>
            <h3 className='text-3xl font-bold'>{title}</h3>
            <Carousel
                infinite={true}
                centerMode={true}
                itemClass='movie-slider p-1'
                containerClass='carousel-container'
                // keyBoardControl={true}
                // customTransition='all .5'
                // transitionDuration={500}
                responsive={responsive}
            >
                {movies.map((movie, index) => (
                    <MovieCard movie={movie} key={index} title={title} />
                ))}
            </Carousel>
        </div>
    );
};

MovieSlider.propTypes = {
    title: propTypes.string.isRequired,
    movies: propTypes.arrayOf(
        propTypes.shape({
            title: propTypes.string.isRequired,
            poster_path: propTypes.string.isRequired,
            overview: propTypes.string.isRequired,
            genre_ids: propTypes.arrayOf(propTypes.number).isRequired,
            vote_average: propTypes.number.isRequired,
            popularity: propTypes.number.isRequired,
            adult: propTypes.bool.isRequired,
        }),
    ).isRequired,
    responsive: propTypes.objectOf(
        propTypes.shape({
            breakpoint: propTypes.shape({
                max: propTypes.number.isRequired,
                min: propTypes.number.isRequired,
            }).isRequired,
            items: propTypes.number.isRequired,
        }),
    ).isRequired,
};

export default MovieSlider;
