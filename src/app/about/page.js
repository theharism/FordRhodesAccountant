"use client"
import AboutSection from '@/components/AboutUsPageAboutUs/aboutus';
import Banner from '@/components/banner/banner';
import ExpertiseSection from '@/components/expertise/expertise';
import HeroSection from '@/components/CallToActionSection/CallToActionSection';
import Navbar from '@/components/navbar/navbar';
import ServicesSection from '@/components/services/services';
import TestimonialsSection from '@/components/testimonials/testimonials';
import Head from 'next/head';
import CallToActionSection from '@/components/CallToActionSection/CallToActionSection';
import Footer from '@/components/footer/footer';
import Link from 'next/link';

const services = [
    {
        id: 1,
        title: 'Year-End Accounts',
        imageUrl: '/64a0b05c40584.png',
    },
    {
        id: 2,
        title: 'Tax Returns',
        imageUrl: '/360_F_56710032_HM18W4DqNYH3pHTzQrzE0LIKCswvS1Va.jpg',
    },
    {
        id: 3,
        title: 'Bookkeeping',
        imageUrl: '/360_F_331184281_ACLqDSCXRMlKkUsTefORVXepAOwbgrcg.jpg',
    },
    {
        id: 4,
        title: 'VAT Returns',
        imageUrl: '/audit-4190944_640.jpg',
    },
    {
        id: 5,
        title: 'Payroll Services',
        imageUrl: '/business-information-accounting-application.jpg',
    },
    {
        id: 6,
        title: 'Tax Planning & Savings',
        imageUrl: 'https://res.cloudinary.com/dmtqk6d1r/image/upload/v1746980105/Excel-spreadsheets-financial-analysis-accounting-software_AndreyPopov_BDC-3_ssfjq7.png',
    },
    {
        id: 7,
        title: 'Corporation Tax',
        imageUrl: '/premium_photo-1678567671952-4028b2ec6c71.jpeg',
    },

];

export default function HomePage() {
    return (
        <>
        {/* team-group.jpeg */}
            <Navbar />

            <section
                style={{
                    position: 'relative',
                    overflow: 'hidden',
                    height: '600px',
                    width: '100%',
                    backgroundImage: 'url(/team-group.jpeg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'brightness(1)',
                }}
            >
                {/* Content Overlay */}
                <div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        textAlign: 'center',
                        color: 'white',
                        zIndex: 1,
                    }}
                >
                    {/* Headline */}
                    <h1
                        style={{
                            fontSize: '3rem',
                            fontWeight: 'bold',
                            marginBottom: '10px',
                        }}
                    >
                        Specialist Tax Advice Tailored To You
                    </h1>

                    {/* Subheading */}
                    <p
                        style={{
                            fontSize: '1.2rem',
                            marginBottom: '20px',
                        }}
                    >
                       About Ford Rhodes Accountants
                    </p>

                    {/* Button */}

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

        <section
            className="about-section"
            style={{
                paddingTop: '100px',
                paddingBottom: '100px',
            }}
        >
            {/* Container */}
            <div
                style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    padding: '50px 20px',
                    textAlign: 'center',
                }}
            >
                {/* Headline */}
                <h2
                    style={{
                        fontSize: '2rem',
                        color: '#002b5c', // Dark blue
                        marginBottom: '20px',
                    }}
                >
                    Our Expertise
                </h2>

                <p
                    style={{
                        fontSize: '1rem',
                        color: '#333',
                        marginBottom: '20px',
                    }}
                >
                    We pride ourselves on working exclusively with small and medium-sized businesses — because that’s who we are, too. We understand the unique challenges you face, and we’re here to offer the right advice to help move your business forward, develop your ideas, and maintain profitability.
                </p>
                <p
                    style={{
                        fontSize: '1rem',
                        color: '#333',
                        marginBottom: '20px',
                    }}
                >
                    Without the right knowledge, that journey can feel overwhelming. That’s why we provide a full range of tailored services including financial accounts, tax consulting, bookkeeping, VAT, payroll, and secretarial advice — all designed with your business in mind.
                </p>
                <p
                    style={{
                        fontSize: '1rem',
                        color: '#333',
                        marginBottom: '30px',
                    }}
                >
                    With our specialist expertise in corporate finance and personal financial management, we offer the best of all worlds. Whether your business is local or national, small or scaling up, every client receives the same care, attention, and fully customised support based on budget, size, and sector.
                </p>
            </div>
        </section>

{/* our why */}
<section style={{
    position: 'relative',
    width: '100%',
    minHeight: '500px',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
}}>
    {/* Background Video */}
    <video
        src="https://res.cloudinary.com/dmtqk6d1r/video/upload/v1746970948/gq6hcciixhtnojioaukn.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
        }}
    />

    {/* Dark overlay with content */}
    <div style={{
        backgroundColor: 'rgba(0, 20, 41, 0.85)', // Dark blue with transparency
        color: 'white',
        width: '50%',
        minHeight: '500px',
        padding: '60px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        zIndex: 1,
    }}>
        <h2 style={{
            fontSize: '2.5rem',
            marginBottom: '25px',
            fontWeight: '600',
        }}>
            Our Why
        </h2>

        <div style={{
            maxWidth: '600px',
        }}>
            <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.6',
                marginBottom: '20px',
            }}>
                For us, customer service is our number one focus. We recognise that our clients have come to us for our expertise, our attention to detail and because they need help.
            </p>
            <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.6',
                marginBottom: '20px',
            }}>
                It is simple really—we are there to provide more than a service, we are partners in your business and we feel invested. Your profit and your success are where we feel the most pride. Seeing your business thrive due to our advice is why we do what we do. It is where the buzz comes from.
            </p>

        </div>
    </div>
</section>
<TestimonialsSection/>

{/* services */}
            <section className="services-section">
                {/* Container */}
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '5px',
                    marginTop: '0px',
                    marginBottom: '170px',

                }}>
                    {services.map((service) => (
                        <div key={service.id} className="service-card">
                            {/* Service Card */}
                            <div
                                style={{
                                    position: 'relative',
                                    overflow: 'hidden',
                                    borderRadius: '8px',
                                    cursor: 'pointer',
                                    width: '100%',
                                    height: '250px', // Fixed height
                                }}
                            >
                                {/* Background Image */}
                                <img
                                    src={service.imageUrl}
                                    alt={service.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        filter: 'brightness(0.5)',
                                    }}
                                />
    
                                {/* Overlay */}
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'start',
                                        padding: '20px',
                                    }}
                                >
                                    {/* Title */}
                                    <h3
                                        style={{
                                            color: 'white',
                                            fontSize: '1.2rem',
                                            marginBottom: '10px',
                                        }}
                                    >
                                        {service.title}
                                    </h3>
    
                                    {/* Arrow Icon */}
                                    <span
                                        style={{
                                            color: 'white',
                                            fontSize: '1.2rem',
                                        }}
                                    >
                                        →
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            
            <Footer />
        </>

    );
}