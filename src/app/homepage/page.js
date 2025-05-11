import AboutSection from '@/components/aboutus/aboutus';
import Banner from '@/components/banner/banner';
import ExpertiseSection from '@/components/expertise/expertise';
import HeroSection from '@/components/CallToActionSection/CallToActionSection';
import Navbar from '@/components/navbar/navbar';
import ServicesSection from '@/components/services/services';
import TestimonialsSection from '@/components/testimonials/testimonials';
import Head from 'next/head';
import CallToActionSection from '@/components/CallToActionSection/CallToActionSection';
import Footer from '@/components/footer/footer';

export default function HomePage() {
    return (
        <>
            <Navbar />
            <Banner />
            
            {/* <AboutSection /> */}
            <ServicesSection />
            <TestimonialsSection />
            <ExpertiseSection />
            <CallToActionSection />
            <Footer />
        </>

    );
}