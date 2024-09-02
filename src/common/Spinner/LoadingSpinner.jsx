import React from 'react';
import { Spinner } from '@chakra-ui/react';

const LoadingSpinner = () => {
    return (
        <div className='flex justify-center bg-black gap-10 items-center'>
            <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='red.500'
                size='xl'
            />
        </div>
    );
};

export default LoadingSpinner;
