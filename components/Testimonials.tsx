'use client'

import React from 'react'
import styles from './Testimonials.module.css'

export default function Testimonials() {
  const testimonials = [
    {
      quote: 'SIDMI transformed our entire e-commerce operation. Their strategic approach increased our annual revenue by $15M in just 18 months.',
      author: 'Sarah Mitchell',
      role: 'CEO, GlobalTech Commerce',
      company: 'Fortune 500 Company'
    },
    {
      quote: 'Working with SIDMI is like gaining an entire consulting firm. Their expertise in Amazon marketplace optimization is unmatched.',
      author: 'David Chen',
      role: 'VP of Operations, DigitalFirst Inc.',
      company: 'Leading E-commerce Player'
    },
    {
      quote: 'Their CRM implementation reduced our sales cycle by 40% and improved customer retention by 35%. Exceptional results.',
      author: 'Jennifer Rodriguez',
      role: 'Chief Commercial Officer, EnterpriseX',
      company: 'B2B Enterprise Leader'
    },
    {
      quote: 'The digital marketing strategy SIDMI developed generated 2500+ qualified leads in Q1 alone. Incredibly impressive ROI.',
      author: 'Michael Thompson',
      role: 'Marketing Director, InnovateTech',
      company: 'SaaS Technology Company'
    }
  ]

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Enterprise Client Testimonials</h2>
          <p>Trusted by leading companies worldwide for delivering transformational results</p>
        </div>

        <div className={styles.grid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.stars}>★★★★★</div>
              <p className={styles.quote}>"{testimonial.quote}"</p>
              <div className={styles.author}>
                <div>
                  <p className={styles.name}>{testimonial.author}</p>
                  <p className={styles.role}>{testimonial.role}</p>
                  <p className={styles.company}>{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
