import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faVideo, faStethoscope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import doctorImage from '../assets/imgs/doctor.png'; // Path to your doctor image
import './stylesheets/Home.css'; // Path to your stylesheet

const Home = () => {
    return (
        <header>
            <div className="container">
                <div className="row align-items-center">
                    {/* Left Side: Text Section */}
                    <div className="col-md-6">
                        <h1 className="health-heading">
                            <span className="highlight-text">We care</span> <br />
                            about your health
                        </h1>
                        <p className="sub-text">
                            Good health is the state of mental, physical, and social well-being, and it does not just mean the absence of diseases.
                        </p>
                        <div className="action-buttons">
                            {/* Book an appointment button */}
                            <button className="btn btn-book-appointment">
                                Book an appointment
                                <span className="arrow"> →</span>
                            </button>

                            {/* Watch videos button */}
                            <button className="btn btn-watch-videos">
                                <div className="icon-circle">
                                    <FontAwesomeIcon icon={faVideo} />
                                </div>
                                Watch videos
                            </button>
                        </div>
                        <p className="mt-4">
                            Become a member of our hospital community?
                            <a href="/signup" className="ml-1 text-primary font-weight-bold">Sign up</a>
                        </p>
                    </div>

                    {/* Right Side: Doctor Image and Info */}
                    <div className="col-md-6">
                        <div className="header-box position-relative">
                            <img src={doctorImage} alt="Doctor" className="img-fluid" />
                            {/* Floating Info Cards */}
                            <div className="floating-card top-card">
                                <FontAwesomeIcon icon={faStethoscope} className="mr-2" />
                                Well Qualified doctors
                            </div>
                            <div className="floating-card mid-card">
                                <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
                                Book an appointment
                            </div>
                            <div className="floating-card bottom-card">
                                <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
                                Contact no +971523871325
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Home;
