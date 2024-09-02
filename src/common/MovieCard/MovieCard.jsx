import React from 'react';
import { Badge } from '@chakra-ui/react';
import propTypes from 'prop-types';
import './MovieCard.style.css';
import Image from 'next/image';
import { useMovieGenreQuery } from '@/hooks/useMovieGenre';

const MovieCard = ({ movie, title }) => {
    const lowerCaseTitle = title?.toLowerCase();

    const { data: genreData } = useMovieGenreQuery();
    // console.log('Genre Data: ', genreData);

    const showGenre = (genreIdList) => {
        if (!genreData) return [];
        const genreNameList = genreIdList.map((id) => {
            const genreObj = genreData.find((genre) => genre.id === id);
            return genreObj.name;
        });
        return genreNameList;
    };

    return (
        <div
            style={{
                backgroundImage:
                    'url(' +
                    `https://www.themoviedb.org/t/p/w1066_and_h600_bestv2${movie.poster_path}` +
                    ')',
            }}
            className='movie-card'
        >
            <div className='overlay'>
                <div className='box-grow'>
                    <h1 className='title-font'>{movie.title}</h1>
                </div>
                <div className='genre-container'>
                    {showGenre(movie.genre_ids).map((id, index) => (
                        <Badge
                            key={index}
                            colorScheme='pink'
                            marginRight={'2'}
                            marginY={1}
                            fontSize={'.8rem'}
                            paddingX={2}
                        >
                            {id}
                        </Badge>
                    ))}
                </div>
                <div className='star-box'>
                    <div className='star-image'>
                        <Image
                            src={'/star.png'}
                            alt={'star-icon'}
                            width={18}
                            height={18}
                            style={{ objectFit: 'contain', marginRight: '8px' }}
                        ></Image>
                    </div>
                    <div className=''>{movie.vote_average.toFixed(1)}</div>
                </div>
                <div className='flex items-center justify-between'>
                    <div className='flex gap-2'>
                        <Image
                            src={'/popularity.png'}
                            alt={'star-icon'}
                            width={18}
                            height={18}
                            style={{ objectFit: 'contain', marginRight: '8px' }}
                        ></Image>
                        <div className='text-lg'>{movie.popularity}</div>
                    </div>
                    <div className=''>
                        {movie.adult ? (
                            <div className='mark-adult'>+18</div>
                        ) : (
                            <div className='mark-not-adult'>All</div>
                        )}
                    </div>
                </div>
            </div>
            {/* 우측 상단 top 10 이미지 고정 */}
            {lowerCaseTitle === 'top rated movies' && (
                <div className='top10-logo'>
                    <div className='top-rated'>Top Rank</div>
                </div>
            )}
        </div>
    );
};
MovieCard.propTypes = {
    movie: propTypes.shape({
        title: propTypes.string.isRequired,
        poster_path: propTypes.string.isRequired,
        overview: propTypes.string.isRequired,
        genre_ids: propTypes.arrayOf(propTypes.number).isRequired,
        vote_average: propTypes.number.isRequired,
        popularity: propTypes.number.isRequired,
        adult: propTypes.bool.isRequired,
        // 필요한 경우 다른 필드도 추가
    }).isRequired,
    title: propTypes.string,
};

export default MovieCard;
