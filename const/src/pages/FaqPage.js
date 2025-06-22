import React from 'react';
import HeaderThree from "../common/header/HeaderThree";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import FaqTwo from '../components/faq/FaqTwo';
import BrandOne from '../components/brand/BrandOne';
import FooterOne from '../common/footer/FooterOne';

const FaqPage = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb
                heading="SSS Sayfası"
                currentPage="SSS" 
            />
            <FaqTwo />
            <BrandOne />
            <FooterOne />
        </>
    )
}

export default FaqPage;
