import React from 'react';
import './styles.css';

const Banner = () => {
    return (
        <section className="hero-section">
            {/* Background Video */}
            <div className="hero-background">
                <video
                    className="hero-video"
                    src="/banner.mp4"
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
