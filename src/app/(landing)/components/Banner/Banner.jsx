'use client';
import { usePopularMoviesQuery } from '@/hooks/usePopularMovies';
import React from 'react';

const Banner = () => {
    const { data } = usePopularMoviesQuery();
    console.log('qqq', data);

    return <div>배너</div>;
};

export default Banner;
