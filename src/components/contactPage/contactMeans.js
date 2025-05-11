import { Phone, Mail } from 'lucide-react';

export default function ContactCards() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '30px',
            maxWidth: '1000px',
            margin: '40px auto',
            flexWrap: 'wrap', // To handle responsiveness
            marginTop:'150px',
            marginBottom:'150px',
        }}>
            {/* Call Us Card */}
            <div style={{
                backgroundColor: 'white',
                padding: '30px',
                borderRadius: '8px',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
                fontFamily: 'Arial, sans-serif',
                color: '#333',
                flex: '1 1 300px',
                minWidth: '300px', // Ensures proper responsiveness
            }}>
                <h2 style={{
                    fontSize: '26px',
                    fontWeight: 'bold',
                    marginBottom: '12px',
                    borderBottom: '2px solid #eee',
                    paddingBottom: '10px',
                    color: '#002b5c'
                }}>
                    <Phone style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                    Call Us
                </h2>
                <p style={{
                    fontSize: '16px',
                    lineHeight: '1.7',
                    marginBottom: '8px',
                    color: '#666'
                }}>
                    Phone support is available from 10 AM to 5 PM.
                </p>
                <p style={{
                    fontSize: '16px',
                    lineHeight: '1.7',
                    marginBottom: '20px',
                    color: '#666'
                }}>
                    Feel free to give us a call during these hours.
                </p>
                <p style={{
                    fontSize: '20px',
                    fontWeight: 'bold',
                    marginBottom: '0',
                    color: '#333'
                }}>
                    +44 1992 642386
                </p>
            </div>

            {/* Email Us Card */}
            <div style={{
                backgroundColor: 'white',
                padding: '30px',
                borderRadius: '8px',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
                fontFamily: 'Arial, sans-serif',
                color: '#333',
                flex: '1 1 300px',
                minWidth: '300px', // Ensures proper responsiveness
            }}>
                <h2 style={{
                    fontSize: '26px',
                    fontWeight: 'bold',
                    marginBottom: '12px',
                    borderBottom: '2px solid #eee',
                    paddingBottom: '10px',
                    color: '#002b5c'
                }}>
                    <Mail style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                    Email Us
                </h2>
                <p style={{
                    fontSize: '16px',
                    lineHeight: '1.7',
                    marginBottom: '8px',
                    color: '#666'
                }}>
                    For any general inquiries or questions,
                </p>
                <p style={{
                    fontSize: '16px',
                    lineHeight: '1.7',
                    marginBottom: '20px',
                    color: '#666'
                }}>
                    feel free to reach out via email.
                </p>
                <p style={{
                    fontSize: '20px',
                    fontWeight: 'bold',
                    marginBottom: '0',
                    color: '#333'
                }}>
                    babar@fordrhodesaccountants.co.uk
                </p>
            </div>
        </div>
    );
}
