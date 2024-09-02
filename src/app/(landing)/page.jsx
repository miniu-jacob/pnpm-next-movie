import React from 'react';
import Banner from './components/Banner/Banner';
import PopularMovieSlide from './components/PopularMovieSlide/PopularMovieSlide';
import TopRatesMovieSlide from './components/TopRateMovieSlide/TopRatesMovieSlide';
import UpComingMovieSlide from './components/UpComingMovieSlide/UpComingMovieSlide';

const LandingPage = () => {
    return (
        <div className='text-white bg-black w-full'>
            <Banner></Banner>
            <PopularMovieSlide />
            <TopRatesMovieSlide />
            <UpComingMovieSlide />
        </div>
    );
};

export default LandingPage;
