'use client';
import React, { useState } from 'react';

const ContactForms = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('https://ford-rhodes-accountant-backend-4sek.vercel.app/contact', {  // ✅ Correct endpoint
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                alert('Message sent successfully!');
                setFormData({ name: '', phone: '', email: '', service: '', message: '' });
            } else {
                alert('Something went wrong. Please try again.');
            }
        } catch (err) {
            console.error(err);
            alert('Error sending message.');
        }
    };

    return (
        <div style={{
            position: 'relative',
            minHeight: '100vh',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#000'
        }}>
            <video src="https://res.cloudinary.com/dmtqk6d1r/video/upload/v1746969886/xhbjlp44p2h1tbpzvzvs.mov" autoPlay loop muted playsInline style={{
                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                objectFit: 'cover', zIndex: 0
            }} />
            <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 1
            }}></div>

            <form onSubmit={handleSubmit} style={{
                position: 'relative', zIndex: 2, backgroundColor: 'white',
                padding: '40px', borderRadius: '8px', maxWidth: '800px',
                width: '100%', boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
            }}>
                <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '20px', color: '#333' }}>Contact Us</h1>
                <p style={{ fontSize: '16px', marginBottom: '30px', color: '#555' }}>
                    Have a question? We are here to help.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', marginBottom: '15px' }}>
                    <div>
                        <label style={{ color: '#000' }} >Name</label>
                        <input name="name" value={formData.name} onChange={handleChange} type="text" style={inputStyle} />
                    </div>
                    <div>
                        <label style={{ color: '#000' }}>Phone</label>
                        <input name="phone" value={formData.phone} onChange={handleChange} type="tel" style={inputStyle} />
                    </div>
                    <div>
                        <label style={{ color: '#000' }}>Email</label>
                        <input name="email" value={formData.email} onChange={handleChange} type="email" style={inputStyle} />
                    </div>
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label style={{ color: '#000' }}>Service</label>
                    <input name="service" value={formData.service} onChange={handleChange} type="text" style={inputStyle} />
                </div>

                <div style={{ marginBottom: '30px' }}>
                    <label style={{ color: '#000' }}>Message</label>
                    <textarea
    name="message"
    value={formData.message}
    onChange={handleChange}
    style={{ 
        ...inputStyle, 
        minHeight: '120px',
        color: '#000000', // White text for contrast
    }}
/>
                </div>

                <hr style={{ borderTop: '1px solid #eee', marginBottom: '20px' }} />
                <p style={{ fontSize: '14px', color: '#666' }}>
                    By submitting this form, you agree to our Privacy Policy.
                </p>

                <button type="submit" style={{
                    backgroundColor: '#0066cc', color: 'white', border: 'none',
                    padding: '12px 24px', borderRadius: '4px',
                    fontSize: '16px', fontWeight: 'bold', cursor: 'pointer'
                }}>
                    Submit
                </button>
            </form>
        </div>
    );
};

const inputStyle = {
    width: '100%',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    color: '#000000', 
    fontSize: '16px',
};

export default ContactForms;
