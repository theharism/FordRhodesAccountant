'use client';

import React from 'react';

const AboutSection = () => {
    return (
<section className="about-section" style={{ paddingTop: '120px', paddingBottom: '0px' }}>
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
                    Our Expertise                </h2>

                {/* Subheading
                <p style={{
                    fontSize: '1rem',
                    color: '#666',
                    marginBottom: '30px',
                }}>
                    The right kind of financial advice can help your organisation grow and achieve its goals.
                </p> */}

                <p style={{
                    fontSize: '1rem',
                    color: '#333',
                    marginBottom: '20px',
                }}>
                    We pride ourselves on working exclusively with small and medium-sized businesses — because that’s who we are, too. We understand the unique challenges you face, and we’re here to offer the right advice to help move your business forward, develop your ideas, and maintain profitability.
                </p>
                <p style={{
                    fontSize: '1rem',
                    color: '#333',
                    marginBottom: '20px',
                }}>
                    Without the right knowledge, that journey can feel overwhelming. That’s why we provide a full range of tailored services including financial accounts, tax consulting, bookkeeping, VAT, payroll, and secretarial advice — all designed with your business in mind.
                </p>
                <p style={{
                    fontSize: '1rem',
                    color: '#333',
                    marginBottom: '30px',
                }}>
                    With our specialist expertise in corporate finance and personal financial management, we offer the best of all worlds. Whether your business is local or national, small or scaling up, every client receives the same care, attention, and fully customised support based on budget, size, and sector.
                </p>


                {/* Review Card */}
                {/* <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#fff',
                    borderRadius: '10px',
                    // boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    padding: '20px',
                    marginTop: '30px',
                }}> */}
                    {/* Google Logo */}
                    {/* <img src="https://via.placeholder.com/50x50?text=Google+Logo" alt="" style={{
                        height: '50px',
                        marginRight: '20px',
                    }} /> */}


                {/* </div> */}
            </div>
        </section>
    );
};

export default AboutSection;