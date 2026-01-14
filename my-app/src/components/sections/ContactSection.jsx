import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { getContactInfo } from '../../data';
import Footer from '../layout/Footer';
import './ContactSection.css';

function ContactSection() {
  const contact = getContactInfo();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would integrate with email service
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="full-page-section contact-section">
      <div className="container-narrow">
        <motion.div
          className="contact-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title contact-title">GET IN TOUCH</h2>

          <div className="contact-info-grid">
            {contact.phone && (
              <div className="contact-info-item">
                <a href={`tel:${contact.phone}`} className="contact-link">
                  {contact.phone}
                </a>
              </div>
            )}
            {contact.email && (
              <div className="contact-info-item">
                <a href={`mailto:${contact.email}`} className="contact-link">
                  {contact.email}
                </a>
              </div>
            )}
          </div>

          <div className="contact-form-wrapper">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="contact-form">
                <h3 className="form-title">Leasing Inquiries</h3>
                <div className="form-row">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-input"
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="form-textarea"
                />
                <button type="submit" className="form-submit">
                  Send Message
                </button>
              </form>
            ) : (
              <div className="form-success">
                Thank you for your inquiry. We'll be in touch soon!
              </div>
            )}

            <div className="contact-mail-section">
              <h3 className="mail-title">Mail</h3>
              <address className="mail-address">
                <span className="mail-address-line">Shops at Landmark District</span>
                <span className="mail-address-line">Louisville Title Building</span>
                <span className="mail-address-line">223 S 5th Street, Suite 262</span>
                <span className="mail-address-line">Louisville, KY 40202</span>
              </address>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </section>
  );
}

export default ContactSection;
