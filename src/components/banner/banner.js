import React from 'react';
import './styles.css';

const Banner = () => {
    return (
        <section className="hero-section">
            {/* Background Video */}
            <div className="hero-background">
                <video
                    className="hero-video"
                    src="https://res.cloudinary.com/dmtqk6d1r/video/upload/v1746982343/banner_wzydwy.mov"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            </div>

            {/* Content Overlay */}
            <div className="hero-content">
                {/* Headline */}
                <h1>Specialist Tax Advice Tailored To You</h1>

                {/* Subheading */}
                <p>Accounting, Bookkeeping & Tax Advisory Services based in London</p>

                {/* Button */}
                <button className="cta-button">GET IN TOUCH</button>
            </div>
        </section>
    );
};

export default Banner;
