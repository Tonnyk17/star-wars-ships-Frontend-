import React from 'react';
import { Header } from '../molecules/Header';

export const Layout = ({ children }) => {
    return <>
        <Header />
        {children}
    </>
}