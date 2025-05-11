
"use client"
import React from 'react';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import './styles.css'

const Footer = () => {
    return (
        <footer style={{
            backgroundColor: '#002b5c',
            color: 'white',
            padding: '60px 40px 30px',
            fontFamily: 'Arial, sans-serif',
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '40px',
                marginBottom: '40px',
            }}>
                {/* Contact Information */}
                <div>
                    <h3 style={{
                        fontSize: '1.2rem',
                        fontWeight: '600',
                        marginBottom: '20px',
                        color: '#4da6ff',
                    }}>Contact Us</h3>
                    <p style={{ marginBottom: '10px' }}>+44 1992 642386</p>
                    <address style={{ fontStyle: 'normal', marginBottom: '20px' }}>
                        Ford Rhodes Accountants<br />
                        Rowan House<br />
                        Delamare Road<br />
                        Cheshunt, EN8 9SP<br />
                        United Kingdom<br />
                    </address>


                    <p>babar@fordrhodesaccountants.co.uk</p>
                </div>

                {/* Logo and Rating */}
                <div style={{ textAlign: 'center' }}>
                    <div style={{
                        fontSize: '2.5rem',
                        fontWeight: 'bold',
                        marginBottom: '20px',
                        lineHeight: '1',
                    }}>
                        <div>Ford Rhodes</div>
                        <div>ACCOUNTANTS</div>
                    </div>
                    {/* Real Review Widget */}
                    <div style={{ width: '100%', maxWidth: '300px' }}>
                        <iframe
                            onLoad={() => window.iFrameResize && window.iFrameResize()}
                            src="https://c6c4959507104b2885c3503d22eccfa7.elf.site?bg=white"
                            style={{
                                border: 'none',
                                width: '100%',
                                minHeight: '300px',
                                overflow: 'hidden',
                                marginLeft: 30
                            }}
                        />
                    </div>
                    {/* <div style={{ fontSize: '0.8rem' }}>by Huzaifa Iftikhar - Senior Software Engineer</div> */}
                </div>

                {/* Quick Links and Affiliates */}
                <div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                        <div>
                            <h3 style={{
                                fontSize: '1.2rem',
                                fontWeight: '600',
                                marginBottom: '20px',
                                color: '#4da6ff',
                            }}>Quick Links</h3>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ marginBottom: '10px' }}><a href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</a></li>
                                <li style={{ marginBottom: '10px' }}><a href="/taxreturns" style={{ color: 'white', textDecoration: 'none' }}>Services</a></li>
                                <li style={{ marginBottom: '10px' }}><a href="/about" style={{ color: 'white', textDecoration: 'none' }}>About Us</a></li>
                                <li style={{ marginBottom: '10px' }}><a href="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 style={{
                                fontSize: '1.2rem',
                                fontWeight: '600',
                                marginBottom: '20px',
                                color: '#4da6ff',
                            }}>Affiliations</h3>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ marginBottom: '10px' }}>
                                    <a href="https://www.acca.co.uk" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
                                        ACCA
                                    </a>
                                </li>
                                <li style={{ marginBottom: '10px' }}>
                                    <a href="https://www.icaew.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
                                        ICAEW
                                    </a>
                                </li>
                                <li style={{ marginBottom: '10px' }}>
                                    <a href="https://www.aicpa-cima.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
                                        CIMA
                                    </a>
                                </li>
                                <li style={{ marginBottom: '10px' }}>
                                    <a href="https://www.ifs.org.uk" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
                                        IFA
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div style={{ marginTop: '30px' }}>
                        <h3 style={{
                            fontSize: '1.2rem',
                            fontWeight: '600',
                            marginBottom: '15px',
                            color: '#4da6ff',
                        }}>Follow Us</h3>
                        <div style={{ display: 'flex', gap: '15px' }}>
                            <a href="#" style={{ color: 'white', fontSize: '1.5rem' }}>
                                <FaLinkedin />
                            </a>
                            <a href="#" style={{ color: 'white', fontSize: '1.5rem' }}>
                                <FaTwitter />
                            </a>
                            <a href="#" style={{ color: 'white', fontSize: '1.5rem' }}>
                                <FaFacebook />
                            </a>
                            <a href="#" style={{ color: 'white', fontSize: '1.5rem' }}>
                                <FaInstagram />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                paddingTop: '30px',
                borderTop: '1px solid rgba(255,255,255,0.1)',
                fontSize: '0.8rem',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                gap: '20px',
            }}>
                <div>
                    Ford Rhodes Accountants<br />
                    Registered in England and Wales; Co. living for BR1006<br />
                    Registered Office: Rowan House, Delamare Road, Cheshunt, EN8 9SP, United Kingdom
                </div>

                <div>
                    Website Design by Huzaifa Iftikhar<br />
                    © 2025 All Rights Reserved | Ford Rhodes Accountants
                </div>
            </div>
        </footer>
    );
};

export default Footer;