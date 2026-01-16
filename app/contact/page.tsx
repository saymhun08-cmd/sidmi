'use client'

import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { MdEmail, MdPhone, MdLocationOn, MdAccessTime, MdPublic } from 'react-icons/md'
import { MdElectricBolt, MdPrecisionManufacturing, MdInsertChart } from 'react-icons/md'
import styles from './page.module.css'
import ProcessFlow from '@/components/ProcessFlow'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('template_9fn36gh')
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const response = await emailjs.send(
        'service_ehev0fb',
        'template_9fn36gh',
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
        },
        'template_9fn36gh'
      )

      if (response.status === 200) {
        setSubmitStatus('success')
        alert('Thank you for your message! We will get back to you soon.')
        setFormData({ name: '', email: '', phone: '', service: '', message: '' })
      }
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage('Failed to send message. Please try again.')
      console.error('EmailJS error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1>Get In Touch</h1>
        <p>Let's discuss how we can help your business grow</p>
      </section>

      <section className={styles.content}>
        <div className={styles.grid}>
          <div className={styles.infoSection}>
            <h3>Contact Information</h3>
            
            <div className={styles.infoBox}>
              <div className={styles.infoIcon}><MdEmail size={32} /></div>
              <div>
                <h4>Email</h4>
                <p>info@sidmi.com</p>
                <p>support@sidmi.com</p>
              </div>
            </div>

            <div className={styles.infoBox}>
              <div className={styles.infoIcon}><MdPhone size={32} /></div>
              <div>
                <h4>Phone</h4>
                <p>+971522391904</p>
              </div>
            </div>

            <div className={styles.infoBox}>
              <div className={styles.infoIcon}><MdLocationOn size={32} /></div>
              <div>
                <h4>Office Address</h4>
                <p>Remote Work Through World</p>
                <p>Global Operations</p>
              </div>
            </div>

            <div className={styles.infoBox}>
              <div className={styles.infoIcon}><MdAccessTime size={32} /></div>
              <div>
                <h4>Business Hours</h4>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            <div className={styles.infoBox}>
              <div className={styles.infoIcon}><MdPublic size={32} /></div>
              <div>
                <h4>Global Presence</h4>
                <p>Available in 50+ countries</p>
                <p>24/7 multilingual support</p>
              </div>
            </div>
          </div>

          <div className={styles.formSection}>
            <h3>Send us a Message</h3>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Full Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="service">Service Interested In *</label>
                <select 
                  id="service" 
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a service</option>
                  <option value="amazon">Amazon Training</option>
                  <option value="freelancer">Freelancer Resources</option>
                  <option value="seo">SEO & Digital Marketing</option>
                  <option value="website">Website Building</option>
                  <option value="crm">CRM Solutions</option>
                  <option value="accounting">Accounting Services</option>
                  <option value="consulting">Strategic Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Message *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              {errorMessage && (
                <div style={{ color: 'red', marginBottom: '1rem' }}>
                  {errorMessage}
                </div>
              )}

              <button 
                type="submit" 
                className={styles.button}
                disabled={isLoading}
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>

      <ProcessFlow />

      <section className={styles.responseTime}>
        <h2>Our Response Commitment</h2>
        <div className={styles.responseGrid}>
          <div className={styles.responseCard}>
            <div className={styles.icon}><MdElectricBolt size={40} /></div>
            <h3>24-Hour Response</h3>
            <p>We respond to all inquiries within 24 hours</p>
          </div>
          <div className={styles.responseCard}>
            <div className={styles.icon}><MdPrecisionManufacturing size={40} /></div>
            <h3>Expert Consultation</h3>
            <p>Free strategy session with industry experts</p>
          </div>
          <div className={styles.responseCard}>
            <div className={styles.icon}><MdInsertChart size={40} /></div>
            <h3>Detailed Proposal</h3>
            <p>Comprehensive proposal with clear deliverables</p>
          </div>
        </div>
      </section>

      <section className={styles.faq}>
        <h2>Frequently Asked Questions</h2>
        <div className={styles.faqGrid}>
          <div className={styles.faqItem}>
            <h4>What services do you offer?</h4>
            <p>We offer Amazon training, freelancer resources, SEO & digital marketing, website building, CRM solutions, accounting services, and strategic consulting.</p>
          </div>
          <div className={styles.faqItem}>
            <h4>How long does a typical project take?</h4>
            <p>Project timelines vary from 3-12 months based on scope and complexity. Contact us for a detailed timeline for your specific needs.</p>
          </div>
          <div className={styles.faqItem}>
            <h4>Do you offer ongoing support?</h4>
            <p>Yes, we provide comprehensive 24/7 ongoing support and maintenance packages for all our services.</p>
          </div>
          <div className={styles.faqItem}>
            <h4>What are your pricing options?</h4>
            <p>We offer flexible pricing models including project-based, retainer, managed services, and hourly consulting rates.</p>
          </div>
          <div className={styles.faqItem}>
            <h4>Can you work with businesses of any size?</h4>
            <p>Absolutely! We work with startups, SMBs, mid-market, and enterprise-level organizations across all industries.</p>
          </div>
          <div className={styles.faqItem}>
            <h4>How do I get started?</h4>
            <p>Simply fill out the contact form above or call us directly to schedule a free consultation with our team.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
