'use client';
import { usePopularMoviesQuery } from '@/hooks/usePopularMovies';
import React from 'react';
import ErrorAlert from '../ErrorAlert';
import './UpComingMovieSlide.css';
import MovieSlider from '@/common/MovieSlider/MovieSlider';
import { responsive } from '@/constants/responsive';

const UpComingMovieSlide = () => {
    const { data, isLoading, isError, error } = usePopularMoviesQuery();
    if (isLoading) return <h1>Loading...</h1>;
    if (isError) return <ErrorAlert message={error.message} />;

    return (
        <div className=''>
            <MovieSlider
                title='Upcoming Movies'
                movies={data.results}
                responsive={responsive}
            ></MovieSlider>
        </div>
    );
};

export default UpComingMovieSlide;
