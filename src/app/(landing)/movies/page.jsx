'use client';
import { useSearchMovieQuery } from '@/hooks/useSearchMovie';
import React from 'react';
import { useSearchParams } from 'next/navigation';
import ErrorAlert from '../components/ErrorAlert';
import LoadingSpinner from '@/common/Spinner/LoadingSpinner';
import MovieCard from '@/common/MovieCard/MovieCard';
import { Suspense } from 'react';

// 경로 2가지
// navbar 에서 클릭해서 온 경우 >> popularMovie 보여주기
// keyword를 입력해서 온 경우 >> keyword와 관련된 영화들을 보여줌

// 페이지네이션 설치
// page state 만들기
// pagination 클릭할 때마다 페이지 바꿔주기
// page 값이 바뀔때마다 useSearchMovie 에 page 까지 넣어서 fetch

const MoviesPage = () => {
    const searchParams = useSearchParams();
    const keyword = searchParams.get('q');
    const { data, isLoading, isError, error } = useSearchMovieQuery({
        keyword,
    });
    console.log('search data:', data);
    // LOADING SPINNER and
    if (isLoading) return <LoadingSpinner />;
    if (isError) return <ErrorAlert message={error.message} />;

    return (
        <div className='bg-black text-white flex p-10 flex-col md:flex-row justify-center'>
            {/* LEFT - FILTER */}
            <div className='w-full md:w-1/3 border border-red-400  '>L</div>

            {/* RIGHT - MOVIE */}
            <div
                className='w-full md:w-2/3 justify-items-center justify-center
                grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4
             '
            >
                {data?.results.map((movie, index) => (
                    <MovieCard movie={movie} key={index}></MovieCard>
                ))}
            </div>
        </div>
    );
};

const MoviesPageWrapper = () => (
    <Suspense fallback={<LoadingSpinner />}>
        <MoviesPage />
    </Suspense>
);

export default MoviesPageWrapper;
