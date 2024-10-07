import React from 'react';
import { Container } from 'react-bootstrap';

const Contact = () => {
    return (
        <Container style={{ marginTop: '50px', textAlign: 'center' }}>
            <h2>Contact Us</h2>
            <p>If you need to reach out to us, you can contact us via the following:</p>

            <div style={{ marginTop: '30px' }}>
                <h4>Phone Numbers</h4>
                <p>
                    <strong>Main Office:</strong> +123 456 7890<br />
                    <strong>Appointments:</strong> +123 456 7891<br />
                    <strong>Emergency:</strong> +123 456 7892
                </p>

                <h4>Email Addresses</h4>
                <p>
                    <strong>General Inquiries:</strong> info@hospital.com<br />
                    <strong>Support:</strong> support@hospital.com
                </p>
            </div>
        </Container>
    );
};

export default Contact;
