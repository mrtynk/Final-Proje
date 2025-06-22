import React from 'react';
import HeaderThree from "../common/header/HeaderThree";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import SingleGeneralContracting from '../components/single-service/SingleGeneralContracting';
import BrandOne from '../components/brand/BrandOne';
import FooterOne from '../common/footer/FooterOne';

const GeneralContracting = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb
                heading="Genel Müteahhitlik"
                currentPage="Genel Müteahhitlik" 
            />
            <SingleGeneralContracting />
            <BrandOne />
            <FooterOne />
        </>
    )
}

export default GeneralContracting;
