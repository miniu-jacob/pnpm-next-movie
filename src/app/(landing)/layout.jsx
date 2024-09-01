import React from 'react';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import AppProvider from '@/app/providers/AppProvider';
import propTypes from 'prop-types';

const inter = Inter({ subsets: ['latin'] });

export default function LandingLayout({ children }) {
    return (
        <AppProvider>
            <div className='w-full'>
                {/* NAVBAR */}
                <Navbar />

                {children}
            </div>
        </AppProvider>
    );
}

LandingLayout.propTypes = {
    children: propTypes.node,
};
