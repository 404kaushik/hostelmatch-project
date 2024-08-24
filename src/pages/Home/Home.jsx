import MatchMaker from '../../components/MatchMaker';
import Header from '../../components/Header';
import LandingContent from '../../components/LandingContent';
import BlogTestimonials from '../../components/BlogTestimonials';
import Footer from '../../components/Footer';
import { useState } from 'react';
import SignupModal from '../../components/SignupModal';
import ReviewSection from '../../components/ReviewSection';

const Home = () => {
    return (
        <div>
            {/* <Header /> */}
            <MatchMaker />
            <LandingContent />
            <BlogTestimonials/>
            <ReviewSection />
        </div>
    )
}

export default Home;