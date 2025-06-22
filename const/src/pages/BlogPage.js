import React from 'react';
import HeaderThree from "../common/header/HeaderThree";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import BlogFour from '../components/blog/BlogFour';
import BrandOne from '../components/brand/BrandOne';
import FooterOne from '../common/footer/FooterOne';

const BlogPage = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb
                heading="Son Haberler"
                currentPage="Blog Izgara" 
            />
            <BlogFour />
            <BrandOne />
            <FooterOne />
        </>
    )
}

export default BlogPage;
