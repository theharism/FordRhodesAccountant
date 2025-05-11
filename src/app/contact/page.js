"use client"
import Footer from '@/components/footer/footer';
import Navbar from '@/components/navbar/navbar';
import { useEffect, useState } from 'react';
import './styles.css'
import ContactCards from '@/components/contactPage/contactMeans';
import ContactForms from '@/components/form/contact';
import Link from 'next/link';

const Page = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true); // After the component is mounted, set the client-side state
    }, []);

    return (
        <>
            <Navbar />
            <section
  style={{
    position: 'relative',
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
    marginBottom: '50px',
  }}
>
  {/* Background Image */}
  <img
    src="/getintouch.jpg"
    alt="Get in Touch"
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: 'brightness(60%)',
      zIndex: 0,
    }}
  />

  {/* Overlay Content */}
  <div
    style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      textAlign: 'center',
      color: 'white',
      zIndex: 1,
      padding: '0 20px',
      width: '90%',
      maxWidth: '800px',
    }}
  >
    <h1
      style={{
        fontSize: '3rem',
        fontWeight: 'bold',
        marginBottom: '10px',
      }}
    >
      Get In Touch
    </h1>
    <p
      style={{
        fontSize: '1.2rem',
        marginBottom: '20px',
      }}
    >
      Ford Rhodes supports families and companies with trusted financial expertise.
    </p>
    
  </div>
            </section>


            <ContactCards />
            <ContactForms />
            <div
              style={{
                  width: '100%',
                  maxWidth: '1200px',
                  height: '600px',
                  margin: '60px auto',
              }}
          >
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2472.478440635826!2d-0.0274715232400997!3d51.705988871859034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487620403e55fe1b%3A0x84cf1bf490f5c1c7!2sRowan%20House!5e0!3m2!1sen!2s!4v1746821244875!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Rowan House Location"
              ></iframe>
</div>

        
               <Footer />
        </>
    );
}

export default Page;
