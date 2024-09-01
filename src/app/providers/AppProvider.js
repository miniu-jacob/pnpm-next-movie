'use client';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import propTypes from 'prop-types';
import {
    useQuery,
    QueryClient,
    useQueryClient,
    QueryClientProvider,
} from '@tanstack/react-query';
import { ChakraProvider } from '@chakra-ui/react';

const queryClient = new QueryClient();

const AppProvider = ({ children }) => {
    return (
        <QueryClientProvider client={queryClient}>
            <ChakraProvider>{children}</ChakraProvider>
        </QueryClientProvider>
    );
};

AppProvider.propTypes = {
    children: propTypes.node,
};

export default AppProvider;
