import React from 'react';
import Link from 'next/link';

const ServicesSection = () => {
    const services = [
        { id: 1, title: 'Year-End Accounts', imageUrl: '/64a0b05c40584.png', href: '/yearend' },
        { id: 2, title: 'Tax Returns', imageUrl: '/360_F_56710032_HM18W4DqNYH3pHTzQrzE0LIKCswvS1Va.jpg', href: '/taxreturns' },
        { id: 3, title: 'Bookkeeping', imageUrl: '/360_F_331184281_ACLqDSCXRMlKkUsTefORVXepAOwbgrcg.jpg', href: '/bookeeping' },
        { id: 4, title: 'VAT Returns', imageUrl: '/audit-4190944_640.jpg', href: '/vatreturns' },
        { id: 5, title: 'Payroll Services', imageUrl: '/business-information-accounting-application.jpg', href: '/payroll' },
        { id: 6, title: 'Tax Planning & Savings', imageUrl: 'https://res.cloudinary.com/dmtqk6d1r/image/upload/v1746980105/Excel-spreadsheets-financial-analysis-accounting-software_AndreyPopov_BDC-3_ssfjq7.png', href: '/taxsaving' },
        { id: 7, title: 'Corporation Tax', imageUrl: '/premium_photo-1678567671952-4028b2ec6c71.jpeg', href: '/corporationtax' },
    ];

    return (
        <section className="services-section">
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '5px',
                marginTop: '100px',
            }}>
                {services.map((service) => (
                    <Link key={service.id} href={service.href}>
                        <div className="service-card" style={{ cursor: 'pointer' }}>
                            <div
                                style={{
                                    position: 'relative',
                                    overflow: 'hidden',
                                    borderRadius: '8px',
                                    width: '100%',
                                    height: '250px',
                                }}
                            >
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
                                    <h3 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '10px' }}>
                                        {service.title}
                                    </h3>
                                    <span style={{ color: 'white', fontSize: '1.2rem' }}>→</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default ServicesSection;
