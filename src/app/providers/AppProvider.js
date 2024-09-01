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

const queryClient = new QueryClient();

const AppProvider = ({ children }) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};

AppProvider.propTypes = {
    children: propTypes.node,
};

export default AppProvider;
