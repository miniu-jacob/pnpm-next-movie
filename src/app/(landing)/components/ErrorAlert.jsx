import React from 'react';
import propTypes from 'prop-types';
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from '@chakra-ui/react';

const ErrorAlert = ({ message }) => {
    return (
        <Alert status='error'>
            <AlertIcon />
            <AlertTitle>에러 발생!</AlertTitle>
            <AlertDescription>{message}</AlertDescription>
        </Alert>
    );
};

ErrorAlert.propType = {
    message: propTypes.string.isRequired,
};

export default ErrorAlert;
