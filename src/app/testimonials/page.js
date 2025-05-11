'use client'
import Banner from '@/components/banner/banner'
import Footer from '@/components/footer/footer'
import Navbar from '@/components/navbar/navbar'
import React, { useEffect, useRef, useState } from 'react';
import './styles.css';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const page = () => {


    const [activeIndex, setActiveIndex] = useState(0);
    const intervalRef = useRef(null);

    // Updated testimonials data with Babar
    const testimonials = [
        {
            id: 1,
            text: "We had no clue about taxes when we started our business. Babar explained everything in a really easy way and helped us a lot. Super thankful!",
            name: "S. Chandran",
        },
        {
            id: 2,
            text: "Babar has been really helpful with our accounts, payroll, and VAT stuff. He’s always quick to get things done and answers our questions fast.",
            name: "London Construction Group",
        },
        {
            id: 3,
            text: "Honestly, we didn’t know much about tax planning, but Babar and his team walked us through it all and even helped us save a lot of money.",
            name: "A. Johnson",
        },
        {
            id: 4,
            text: "They’re easy to talk to and always reply quickly. Managing our accounts is way less stressful now thanks to Babar’s team.",
            name: "L. Thompson",
        },
        {
            id: 5,
            text: "Great service, friendly people, and always on time. Babar and the team have been a huge help for our small business.",
            name: "T. Hussain",
        },
        {
            id: 6,
            text: "Working with Ford Rhodes has been a game-changer. Babar’s knowledge and approachable nature make even complex tax matters easier to understand.",
            name: "S. Chandran",
        },
        {
            id: 7,
            text: "Babar and his team have shown incredible attention to detail. From payroll to annual accounts, everything is handled efficiently and with care.",
            name: "London Construction Group",
        },
        {
            id: 8,
            text: "We received strategic tax planning advice from Babar that significantly improved our bottom line. Their expertise and professionalism are genuinely impressive.",
            name: "A. Johnson",
        },
        {
            id: 9,
            text: "Ford Rhodes made the financial side of our business feel less daunting. Babar’s advice is clear, and his team’s support is consistent.",
            name: "L. Thompson",
        },
        {
            id: 10,
            text: "Reliable, efficient, and easy to work with. Babar and his team have taken a lot off our plate and given us peace of mind when it comes to finances.",
            name: "A. Farooq",
        },
    ];


    useEffect(() => {
        // Auto-rotate testimonials every 4 seconds
        intervalRef.current = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, 4000);

        return () => clearInterval(intervalRef.current);
    }, [testimonials.length]);



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
                    src="https://res.cloudinary.com/dmtqk6d1r/video/upload/v1746969898/okhivwvi3nz6fag5evfk.mov"
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
Our Client Reviews           </h1>
                <p style={{
                    fontSize: '1.2rem',
                    marginBottom: '20px',
                }}>
                    The Ford Rhodes Accountants Testimonials
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

{/* header */}
        <section className="cta-section">
            {/* Title */}
            <div className="cta-title">
                <h1>Some Words From Our Clients</h1>
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
                    <source src="https://res.cloudinary.com/dmtqk6d1r/video/upload/v1746976208/testimonials_thrzp3.mov" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Content Overlay */}
                <div className="cta-overlay">
  
                <section className="testimonials-section" style={{ padding: '150px 0' }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '0 20px',
                display: 'flex',
                gap: '40px',
                position: 'relative',
            }}>
                {/* Left Column: Title */}
                <div style={{
                    flex: 1,
                    textAlign: 'right',
                    paddingRight: '40px',
                    position: 'relative',
                }}>
                    <h2 style={{
                        fontSize: '2rem',
                        color: '#fff',
                        marginBottom: '20px',
                        
                    }}>
                        {/* SEE OUR GOOGLE REVIEWS */}
                    </h2>
                </div>

                {/* Vertical Separator */}
                {/* <div style={{
                    position: 'absolute',
                    left: '50%',
                    top: '0',
                    bottom: '0',
                    width: '2px',
                    backgroundColor: '#002b5c',
                    transform: 'translateX(-50%)',
                }}></div> */}

                {/* Right Column: Testimonials */}
                <div style={{
                    flex: 1,
                    paddingLeft: '40px',
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '300px', // Fixed height for smooth transitions
                }}>
                    {/* <AnimatePresence mode='wait'>
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            style={{
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                            }}
                        >
                            <div style={{
                                padding: '20px 0',
                                fontSize: '1rem',
                                color: '#333',
                                lineHeight: '1.6',
                            }}>
                                <p style={{ marginBottom: '10px' }}>
                                    "{testimonials[activeIndex].text}"
                                </p>
                                <p style={{
                                    fontSize: '0.9rem',
                                    color: '#666',
                                    fontWeight: 'bold',
                                    marginTop: '10px'
                                }}>
                                    {testimonials[activeIndex].name}
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence> */}

                    {/* Button Container */}
                    {/* <div style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '20px',
                    }}>
                        <a href="https://www.google.com/search?q=ford+rhodes+accountants+&sca_esv=8ffc4cc3ad7d481a&sxsrf=AHTn8zoL7TrDk-D1OuTgAEBxLMfdWXmTug%3A1745431193969&ei=mSoJaOH6OtPL1e8P_JnGgAI&ved=0ahUKEwihq6_y3e6MAxXTZfUHHfyMESAQ4dUDCBA&uact=5&oq=ford+rhodes+accountants+&gs_lp=Egxnd3Mtd2l6LXNlcnAiGGZvcmQgcmhvZGVzIGFjY291bnRhbnRzIDILEAAYgAQYsAMYogQyCxAAGIAEGLADGKIEMgsQABiwAxiiBBiJBTILEAAYgAQYsAMYogQyCBAAGLADGO8FSIQEUP0BWP0BcAF4AJABAJgBAKABAKoBALgBA8gBAPgBAZgCAaACCZgDAIgGAZAGBZIHATGgBwCyBwC4BwA&sclient=gws-wiz-serp#lrd=0x487620403ed5a27b:0x3c258e1a9d7110f9,1,,,," style={{
                            display: 'inline-block',
                            padding: '10px 20px',
                            background: '#002b5c',
                            color: 'white',
                            textDecoration: 'none',
                            borderRadius: '5px',
                            transition: 'background-color 0.3s ease',
                        }}>
                            VIEW MORE REVIEWS
                        </a>
                    </div> */}
                </div>
            </div>
        </section>
                </div>
            </div>
        </section>


        {/* <!-- Elfsight Google Reviews | Untitled Google Reviews --> */}

        <div
  style={{
    paddingTop: '80px',
    paddingBottom: '80px',
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'center',
  }}
>
  <script src="https://static.elfsight.com/platform/platform.js" async></script>
  <div
    className="elfsight-app-dbb12fd7-dfca-4a64-99a5-2562df45f134"
    data-elfsight-app-lazy
  ></div>
</div>


        {/* testimonials */}

            <Footer />
        </>
    )
}

export default page