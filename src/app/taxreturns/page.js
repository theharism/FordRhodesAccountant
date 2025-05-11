"use client"
import Banner from '@/components/servicesbannerbookkeeping/banner'
import Footer from '@/components/footer/footer'
import Navbar from '@/components/navbar/navbar'
import Splitter from '@/components/splitter/page'
import TestimonialsSection from '@/components/testimonials/testimonials'
import React from 'react'
import Link from 'next/link';

const page = () => {
    const services = [
        {
            id: 1,
            title: 'Trusted',
            imageUrl: '/64a0b05c40584.png',
        },
        {
            id: 2,
            title: 'Tailored',
            imageUrl: '/360_F_56710032_HM18W4DqNYH3pHTzQrzE0LIKCswvS1Va.jpg',
        },
        {
            id: 3,
            title: 'Professional',
            imageUrl: '/360_F_331184281_ACLqDSCXRMlKkUsTefORVXepAOwbgrcg.jpg',
        }, {
            id: 4,
            title: 'Bespoke',
            imageUrl: '/business-information-accounting-application.jpg',
        },

    ];

    return (
        <>
            <Navbar />
{/* banner */}
<section
  style={{
    position: "relative",
    overflow: "hidden",
    height: "600px",
    fontFamily: "Arial, sans-serif",
    margin: 0,
  }}
>
  {/* Background Video */}
  <div
    style={{
      width: "100%",
      height: "100%",
      overflow: "hidden",
      position: "relative",
    }}
  >
    <video
      src="/https://res.cloudinary.com/dmtqk6d1r/video/upload/v1746969868/tcqctw83ul6h9qis2kna.mov"
      autoPlay
      loop
      muted
      playsInline
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        filter: "brightness(0.5)",
      }}
    />
  </div>

  {/* Content Overlay */}
  <div
    style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      textAlign: "center",
      color: "white",
      zIndex: 1,
    }}
  >
    {/* Headline */}
    <h1
      style={{
        fontSize: "3rem",
        fontWeight: "bold",
        marginBottom: "10px",
      }}
    >
      Strategic Tax Planning for a Stronger Financial Future
    </h1>

    {/* Subheading */}
    <p
      style={{
        fontSize: "1.2rem",
        marginBottom: "20px",
      }}
    >
     Taxation & Tax Services based in London
    </p>

    {/* Button */}
    <button
      style={{
        display: "inline-block",
        padding: "10px 20px",
        backgroundColor: "transparent",
        color: "white",
        border: "2px solid white",
        borderRadius: "5px",
        fontSize: "1rem",
        fontWeight: "bold",
        cursor: "pointer",
        transition: "all 0.3s ease",
        boxShadow: "0 0 0 transparent",
      }}
      onMouseEnter={(e) => {
        e.target.style.background =
          "linear-gradient(to right, #00a3e0, #0071bc)";
        e.target.style.borderColor = "#00a3e0";
        e.target.style.boxShadow = "0 0 20px rgba(255, 255, 255, 0.3)";
      }}
      onMouseLeave={(e) => {
        e.target.style.background = "transparent";
        e.target.style.borderColor = "white";
        e.target.style.boxShadow = "0 0 0 transparent";
      }}
    >
      GET IN TOUCH
    </button>
  </div>
</section>


            <section className="about-section" style={{ marginTop: '50px', marginBottom: '50px' }}>
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
                        Taxation Services that Work for You: Maximizing Your Returns, Minimizing Your Stress
                    </h2>

                    {/* Subheading */}
                    <p style={{
                        fontSize: '1rem',
                        color: '#666',
                        marginBottom: '30px',
                    }}>
                       Ford Rhodes Accountants provides a comprehensive range of taxation services to businesses in the UK. Our team of experienced tax professionals understands the complexities of the UK tax system and is committed to helping our clients navigate the ever-changing tax landscape. We provide tailored tax solutions to businesses of all sizes, from start-ups to established corporations, and ensure that they remain fully compliant with all relevant tax regulations.

                       <br/>
<br/>
                       Our taxation services include tax planning, tax compliance, tax advisory, and tax representation. We work closely with our clients to develop tax strategies that maximize their tax savings while minimizing their tax liabilities, helping them achieve their business objectives. At Ford Rhodes Accountants, we are committed to providing our clients with personalized and cost-effective taxation services that enable them to focus on what they do best – running their businesses.</p>

               

                </div>
            </section>
            <section style={{
    position: 'relative',
    width: '100%',
    minHeight: '500px',
    backgroundImage: 'url(/https://res.cloudinary.com/dmtqk6d1r/image/upload/v1746980007/image_fekgu3.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start', // aligns the overlay box to the left
    boxSizing: 'border-box',
}}>
    {/* Dark overlay with content */}
    <div style={{
        backgroundColor: 'rgba(0, 20, 41, 0.85)',
        color: 'white',
        width: '50%',
        minHeight: '500px',
        padding: '60px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    }}>
        <h2 style={{
            fontSize: '2.5rem',
            marginBottom: '25px',
            fontWeight: '600',
        }}>
            Our Tax Advisory Services
        </h2>

        <div style={{ maxWidth: '600px' }}>
    <p style={paraStyle}>
    The core services of taxation services provided by Ford Rhodes Accountants include:
    </p>
    <div style={{ maxWidth: '600px' }}>
    <p style={paraStyle}>
        • <strong>Tax planning:</strong> This involves developing a tax strategy that helps businesses minimize their tax liabilities and maximize their tax savings. Our team of tax professionals work closely with our clients to understand their business goals and develop a customized tax plan that meets their needs.
    </p>
    <p style={paraStyle}>
        • <strong>Tax compliance:</strong> This involves ensuring that businesses comply with all relevant tax regulations, including timely filing of tax returns and payment of taxes owed. Our team of tax experts stay up-to-date with the latest tax laws and regulations, ensuring that our clients remain fully compliant.
    </p>
    <p style={paraStyle}>
        • <strong>Tax advisory:</strong> This involves providing expert advice on tax matters such as VAT, payroll taxes, and international tax issues. Our tax advisors work closely with our clients to provide guidance on tax-related matters, helping them make informed decisions that are in line with their business objectives.
    </p>
</div>

</div>

    </div>
</section>

            <Splitter />
            <section className="services-section">
    {/* Container */}
    <div
        style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)', // 4 columns
            gap: '5px',
            marginTop: '30px',
        }}
    >
        {services.map((service) => (
            <div key={service.id} className="service-card" style={{ margin: 0, padding: 0 }}>
                {/* Service Card */}
                <div
                    style={{
                        position: 'relative',
                        overflow: 'hidden',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        width: '100%',
                        height: '250px', // Fixed height for consistency
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
                            justifyContent: 'flex-end', // Align text at the bottom
                            padding: '20px',
                        }}
                    >
                        <h3
                            style={{
                                color: 'white',
                                fontSize: '1.2rem',
                                marginBottom: '5px',
                            }}
                        >
                            {service.title}
                        </h3>
                        <span
                            style={{
                                color: 'white',
                                fontSize: '1.2rem',
                            }}
                        >
                        </span>
                    </div>
                </div>
            </div>
        ))}
    </div>
            </section>

            <TestimonialsSection />
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
                    src="/https://res.cloudinary.com/dmtqk6d1r/video/upload/v1746969761/bpajkgxetzndnmcqh0m7.mov"
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
Secure Your Financial Future: Tax Advisory Services that Protect Your Assets</h1>

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
            <Footer />

        </>
    )
}
const paraStyle = {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    marginBottom: '20px'
};

export default page