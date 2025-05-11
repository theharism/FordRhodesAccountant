import React from 'react';
import './styles.css';

const CallToActionSection = () => {
    return (
        <section className="cta-section">
            {/* Title */}
            <div className="cta-title">
                <h1>We Are Ford Rhodes Accountants...</h1>
            </div>

            {/* Video Background Section */}
            <div className="cta-video-container" >
                <video
                    className="cta-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="/https://res.cloudinary.com/dmtqk6d1r/video/upload/v1746975543/nature4_lzgl6d.mov" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Content Overlay */}
                <div className="cta-overlay">
                    <h2>Providing Financial Clarity & Peace of Mind</h2>
                    <a href="#" className="cta-button">GET IN TOUCH</a>
                </div>
            </div>
        </section>
    );
};

export default CallToActionSection;
