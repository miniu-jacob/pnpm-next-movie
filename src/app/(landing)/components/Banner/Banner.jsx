'use client';
import { usePopularMoviesQuery } from '@/hooks/usePopularMovies';
import './Banner.style.css';
import React from 'react';
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from '@chakra-ui/react';

const Banner = () => {
    const { data, isLoading, isError, error } = usePopularMoviesQuery();
    console.log('불러온 데이터: ', data);
    if (isLoading) {
        <h1>Loading...</h1>;
    }

    if (isError) {
        return (
            <>
                <h1>{error.message}</h1>;
                <Alert status='error'>
                    <AlertIcon />
                    <AlertTitle>에러 발생!</AlertTitle>
                    <AlertDescription>{error.message}</AlertDescription>
                </Alert>
                ;
            </>
        );
    }

    const posterPath = data?.results?.[0].poster_path;
    const bannerTitle = data?.results?.[0].title;
    const bannerOverview = data?.results?.[0].overview;
    // console.log('PosterPath: ', posterPath);
    // tmdb address
    // https://www.themoviedb.org/t/p/w1066_and_h600_bestv2

    return (
        <div
            style={{
                backgroundImage:
                    'url(' +
                    `https://www.themoviedb.org/t/p/w1066_and_h600_bestv2${posterPath}` +
                    ')',
            }}
            className='h-[56vh] bg-left- banner w-full bg-no-repeat bg-cover object-cover '
        >
            <div
                className='text-white  banner-text-area w-[90%] md:w-[45%]
                flex flex-col justify-end md:justify-center h-[100%] p-[3rem] gap-4
                pb-[10%] md:pb-0
            '
            >
                <h1 className='text-3xl z-10 font-semibold'>{bannerTitle}</h1>
                <p className='z-10'>{bannerOverview}</p>
            </div>
        </div>
    );
};

export default Banner;
