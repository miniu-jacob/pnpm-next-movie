'use client';
import api from '@/utils/api';
import { useQuery } from '@tanstack/react-query';

const fetchPopularMovies = () => {
    return api.get(`/movie/popular`);
};

export const usePopularMoviesQuery = () => {
    return useQuery({
        queryKey: ['movie-pupular'],
        queryFn: fetchPopularMovies,
    });
};
