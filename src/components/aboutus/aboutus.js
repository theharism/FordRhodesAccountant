'use client';

import React from 'react';

const AboutSection = () => {
    return (
        <section className="about-section">
            {/* Container */}
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '50px 20px',
                textAlign: 'center',
            }}>
                {/* Headline */}
                <h2 style={{
                    fontSize: '2rem',
                    color: '#002b5c', // Dark blue
                    marginBottom: '20px',
                }}>
                    The Right Financial Advice To Help You Grow
                </h2>

                {/* Subheading */}
                <p style={{
                    fontSize: '1rem',
                    color: '#666',
                    marginBottom: '30px',
                }}>
                    The right kind of financial advice can help your organisation grow and achieve its goals.
                </p>

                {/* Paragraphs */}
                <p style={{
                    fontSize: '1rem',
                    color: '#333',
                    marginBottom: '20px',
                }}>
                    Ford Rhodes Accountants provides a range of services to small and medium-sized businesses so they can fulfil their potential and move forward in a positive way.
                </p>
                <p style={{
                    fontSize: '1rem',
                    color: '#333',
                    marginBottom: '20px',
                }}>
                    Based in London, we work with companies all over the United Kingdom, responding to their individual needs and helping them achieve the success they deserve.
                </p>
                <p style={{
                    fontSize: '1rem',
                    color: '#333',
                    marginBottom: '30px',
                }}>
                    Our expert team of professionals provide specialist business support and bespoke solutions which are perfect for your company. Our services will help you make more efficient use of your resources, so you can spend your time doing what you do best – running your business.
                </p>

                {/* Review Card */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#fff',
                    borderRadius: '10px',
                    // boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    padding: '20px',
                    marginTop: '30px',
                }}>
                    {/* Google Logo */}
                    <img src="https://via.placeholder.com/50x50?text=Google+Logo" alt="" style={{
                        height: '50px',
                        marginRight: '20px',
                    }} />
                    {/* Review Card with Real Google Reviews (via Elfsight iframe) */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#fff',
                        borderRadius: '10px',
                        padding: '20px',
                        marginTop: '30px',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        flexDirection: 'column'
                    }}>
                        {/* Header */}
                        <div style={{ marginBottom: '10px' }}>
                            <h3 style={{ fontSize: '1.5rem', color: '#002b5c', margin: 0 }}>What Our Clients Say</h3>
                            <p style={{ fontSize: '0.9rem', color: '#777' }}>Real reviews from Google</p>
                        </div>

                        {/* Real Review Widget */}
                        <div style={{ width: '100%', maxWidth: '800px' }}> {/* Increase maxWidth */}
                            <iframe
                                onLoad={() => window.iFrameResize && window.iFrameResize()}
                                src="https://c6c4959507104b2885c3503d22eccfa7.elf.site"
                                style={{
                                    border: 'none',
                                    width: '100%',
                                    minHeight: '300px',
                                    overflow: 'hidden',
                                    marginLeft: 60,
                                    backgroundColor: "none"
                                }}
                            />
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;