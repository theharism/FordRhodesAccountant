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
      src="https://res.cloudinary.com/dmtqk6d1r/video/upload/v1746969868/tcqctw83ul6h9qis2kna.mov"
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
      Strategic Payrolls for a Stronger Financial Future
    </h1>

    {/* Subheading */}
    <p
      style={{
        fontSize: "1.2rem",
        marginBottom: "20px",
      }}
    >
     Payrolls Services based in London
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
                        Streamline Your Payroll: Simplify Your Business
                    </h2>

                    {/* Subheading */}
                    <p style={{
                        fontSize: '1rem',
                        color: '#666',
                        marginBottom: '30px',
                    }}>
                        Ford Rhodes Accountants provides comprehensive payroll services to businesses in the UK. Our team of experienced payroll professionals understands the complexities of managing payroll and is committed to providing accurate, timely, and cost-effective payroll solutions. Our payroll services are tailored to meet the needs of businesses of all sizes, from small start-ups to large corporations.
                        <br/>
<br/>
                        We use the latest technology and software to streamline the payroll process, ensuring that our clients receive accurate and timely payrolls every time. Our payroll services include payroll processing, compliance management, employee benefits management, and reporting. At Ford Rhodes Accountants, we are committed to providing our clients with personalized and reliable payroll services that enable them to focus on their core business activities.

</p>

                   


                </div>
            </section>
            <section style={{
    position: 'relative',
    width: '100%',
    minHeight: '500px',
    backgroundImage: 'url(https://res.cloudinary.com/dmtqk6d1r/image/upload/v1746980007/image_fekgu3.png)',
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
            Our Payroll Services
        </h2>

        <div style={{ maxWidth: '600px' }}>
    <p style={paraStyle}>
    The role of the payroll officer within any business is becoming more burdensome with changes to pensions just the tip of the iceberg. We provide a tailor-made payroll service that will ensure you meet the dates and expectations of your staff and Inland Revenue.
    </p>
    <p style={paraStyle}>• Annual accounts</p>
<p style={paraStyle}>• Management accounts</p>
<p style={paraStyle}>• Business consultancy</p>
<p style={paraStyle}>• Book-keeping</p>
<p style={paraStyle}>• PAYE and VAT records and returns</p>
<p style={paraStyle}>• Accounting reviews</p>
<p style={paraStyle}>• Online Inland Revenue filing</p>
<p style={paraStyle}>• Payments via BACs of Bank Auto Pay</p>
<p style={paraStyle}>• Records of your payroll, liabilities and deductions</p>
<p style={paraStyle}>• Advice on redundancies, holiday pay, maternity pay, sick pay and notice periods</p>
<p style={paraStyle}>• Provision of all necessary forms and returns</p>
<p style={paraStyle}>• Assistance with audits</p>

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
                    src="https://res.cloudinary.com/dmtqk6d1r/video/upload/v1746969761/bpajkgxetzndnmcqh0m7.mov"
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
Numbers That Add Up: Payroll Services that Ensure Accuracy and Precision</h1>

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