import React from 'react';
import { Container } from 'react-bootstrap';

const About = () => {
    return (
        <Container style={{ marginTop: '50px', textAlign: 'center' }}>
            <h1>About Us</h1>
            <p>
                At <strong>Hospital Name</strong>, we are dedicated to providing the best healthcare services to our patients.
                Our hospital is equipped with modern facilities and a team of highly qualified doctors, nurses, and healthcare professionals.
            </p>
            <p>
                We believe in holistic healthcare, which includes not only physical well-being but also mental and emotional support.
                Our mission is to promote wellness and provide excellent care for all.
            </p>
            <p>
                Our services include outpatient care, inpatient care, emergency services, and specialized care in various medical fields.
                We strive to ensure that every patient receives personalized and compassionate care.
            </p>
            <p>
                <strong>Our Vision:</strong> To be a leader in healthcare services, recognized for our commitment to excellence and innovation.
            </p>
            <p>
                <strong>Our Values:</strong> Compassion, Integrity, Excellence, and Respect.
            </p>
            <p>For more information, feel free to contact us or visit our hospital at any time.</p>
        </Container>
    );
};

export default About;
