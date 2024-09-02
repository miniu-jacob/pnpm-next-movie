'use client';
import { usePopularMoviesQuery } from '@/hooks/usePopularMovies';
import React from 'react';
import ErrorAlert from '../ErrorAlert';
import './TopRatesMovieSlide.css';
import MovieSlider from '@/common/MovieSlider/MovieSlider';
import { responsive } from '@/constants/responsive';
import { useTopRatedMoviesQuery } from '@/hooks/useTopRatedMovies';
import LoadingSpinner from '@/common/Spinner/LoadingSpinner';

const TopRatesMovieSlide = () => {
    const { data, isLoading, isError, error } = useTopRatedMoviesQuery();
    if (isLoading) return <LoadingSpinner />;
    if (isError) return <ErrorAlert message={error.message} />;

    console.log('topratedData: ', data);

    return (
        <div className=''>
            <MovieSlider
                title='Top Rated Movies'
                movies={data.results}
                responsive={responsive}
            ></MovieSlider>
        </div>
    );
};

export default TopRatesMovieSlide;
