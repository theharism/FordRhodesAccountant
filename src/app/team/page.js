"use client";
import Banner from '@/components/banner/banner'
import Navbar from '@/components/navbar/navbar'
import TeamSection from '@/components/teamMembers/team'
import React from 'react'
import './styles.css'
import TestimonialsSection from '@/components/testimonials/testimonials'
import Footer from '@/components/footer/footer'
import Link from 'next/link';

const page = () => {
    return (
        <>
            <Navbar />

        <section style={{
            position: 'relative',
            overflow: 'hidden',
            height: '600px',
            width: '100%',
            margin: 0,
            fontFamily: 'Arial, sans-serif',
        }}>
            {/* Background Video */}
            <div style={{
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                position: 'relative',
            }}>
                <video
                    src="https://res.cloudinary.com/dmtqk6d1r/video/upload/v1746969690/tjhtdb7x3tv4frvxv0wf.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'brightness(0.5)',
                    }}
                />
            </div>

            {/* Content Overlay */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
                color: 'white',
                zIndex: 1,
            }}>
                <h1 style={{
                    fontSize: '3rem',
                    fontWeight: 'bold',
                    marginBottom: '10px',
                }}>
Keep Moving Forward                </h1>
                <p style={{
                    fontSize: '1.2rem',
                    marginBottom: '20px',
                }}>
                    The Ford Rhodes Accountants Team
                </p>
<Link href="/contact">
                        <button
                            style={{
                                display: 'inline-block',
                                padding: '10px 20px',
                                backgroundColor: 'transparent',
                                color: 'white',
                                border: '2px solid white',
                                borderRadius: '5px',
                                fontSize: '1rem',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 0 0 transparent',
                            }}
                            onMouseOver={(e) => {
                                e.target.style.background = 'linear-gradient(to right, #00a3e0, #0071bc)';
                                e.target.style.borderColor = '#00a3e0';
                                e.target.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.3)';
                            }}
                            onMouseOut={(e) => {
                                e.target.style.background = 'transparent';
                                e.target.style.borderColor = 'white';
                                e.target.style.boxShadow = '0 0 0 transparent';
                            }}
                        >
                            GET IN TOUCH
                        </button>
                    </Link>
            </div>
        </section>

            <section className="cta-section">
                {/* Title */}
                <div className="cta-title">
                    <h1>A Specialist Team with a Passion for Excellence
                    </h1>
                </div>

            </section>
            <TeamSection />
            <TestimonialsSection />
            <Footer />
        </>
    )
}

export default page