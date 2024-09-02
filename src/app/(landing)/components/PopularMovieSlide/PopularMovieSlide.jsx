'use client';
import { usePopularMoviesQuery } from '@/hooks/usePopularMovies';
import React from 'react';
import ErrorAlert from '../ErrorAlert';
import './PopularMovieSlide.style.css';
import MovieSlider from '@/common/MovieSlider/MovieSlider';
import { responsive } from '@/constants/responsive';

const PopularMovieSlide = () => {
    const { data, isLoading, isError, error } = usePopularMoviesQuery();
    if (isLoading) return <h1>Loading...</h1>;
    if (isError) return <ErrorAlert message={error.message} />;

    return (
        <div className=''>
            <MovieSlider
                title='Poplular Movies'
                movies={data.results}
                responsive={responsive}
            ></MovieSlider>
        </div>
    );
};

export default PopularMovieSlide;
