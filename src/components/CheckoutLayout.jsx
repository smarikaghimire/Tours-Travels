import React from 'react';
import HeaderLogo from './HeaderLogo';
import Footer from './Footer';

const CheckoutLayout = ({ children }) => (
    <>
        <HeaderLogo />
        {children}
        <Footer />
    </>
);

export default CheckoutLayout;