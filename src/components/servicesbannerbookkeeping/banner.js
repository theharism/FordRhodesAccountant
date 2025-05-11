import React from 'react';
import './styles.css';

const Bannerservices = () => {
    return (
        <section className="hero-section">
            {/* Background Video */}
            <div className="hero-background">
                <video
                    className="hero-video"
                    src="https://res.cloudinary.com/dmtqk6d1r/video/upload/v1746969868/tcqctw83ul6h9qis2kna.mov"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            </div>

            {/* Content Overlay */}
            <div className="hero-content">
                {/* Headline */}
                <h1>Bookkeeping Solutions for a Balanced Bottom Line
                </h1>

                {/* Subheading */}
                <p>Bookkeeping Services based in London</p>

                {/* Button */}
                <button className="cta-button">GET IN TOUCH</button>
            </div>
        </section>
    );
};

export default Bannerservices;