import React from 'react';

const ExpertiseSection = () => {
    return (
        <section style={{
            position: 'relative',
            width: '100%',
            minHeight: '500px',
            backgroundImage: 'url(https://res.cloudinary.com/dmtqk6d1r/image/upload/v1746980116/expertise_g7eqb9.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            alignItems: 'center',
        }}>
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
            }}>
                <h2 style={{
                    fontSize: '2.5rem',
                    marginBottom: '25px',
                    fontWeight: '600',
                }}>
                    Our Expertise
                </h2>

                <div style={{
                    maxWidth: '600px',
                }}>
                    <p style={{
                        fontSize: '1.1rem',
                        lineHeight: '1.6',
                        marginBottom: '20px',
                    }}>
                        At Ford Rhodes Accountants, we have a proven track record of working with businesses in a wide variety of industry sectors. Our experienced accountants are friendly, approachable and proactive and will work in close partnership with you to help you reach your goals.
                    </p>

                    <p style={{
                        fontSize: '1.1rem',
                        lineHeight: '1.6',
                        marginBottom: '20px',
                    }}>
                        Whether you need assistance with business planning or help keeping your books, preparing accounts or managing staff wages, we can help. We can also give you specialist advice in a number of areas including tax and mergers and acquisitions.
                    </p>

                    <p style={{
                        fontSize: '1.1rem',
                        lineHeight: '1.6',
                    }}>
                        To find out more about how we can help you, contact us today on <strong style={{ color: '#4da6ff' }}>01992 642386</strong> or email <strong style={{ color: '#4da6ff' }}>babar@fordrhodesaccountants.co.uk</strong>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ExpertiseSection;
