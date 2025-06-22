import React from 'react';
import HeaderThree from "../common/header/HeaderThree";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import SingleTeamContent from '../components/single-team/SingleTeamContent';
import TeamThree from '../components/team/TeamThree';
import BrandOne from '../components/brand/BrandOne';
import FooterOne from '../common/footer/FooterOne';

const TeamDetails = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb
                heading="Takım Detayları"
                currentPage="Takım Detayları" 
            />
            <SingleTeamContent />
            <TeamThree />
            <BrandOne />
            <FooterOne />
        </>
    )
}

export default TeamDetails;
