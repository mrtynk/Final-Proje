import React from 'react';
import HeaderThree from "../common/header/HeaderThree";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import SingleArchitectureDesign from '../components/single-service/SingleArchitectureDesign';
import BrandOne from '../components/brand/BrandOne';
import FooterOne from '../common/footer/FooterOne';

const ArchitectureDesign = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb 
                heading="Mimari Tasarım"
                currentPage="Mimari Tasarım" 
            />
            <SingleArchitectureDesign />
            <BrandOne />
            <FooterOne />
        </>
    )
}

export default ArchitectureDesign;
