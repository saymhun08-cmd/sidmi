'use client'

import React from 'react'
import styles from './WhyChooseUs.module.css'

export default function WhyChooseUs() {
  const reasons = [
    {
      title: 'Industry-Proven Expertise',
      description: 'Two decades of enterprise experience delivering complex digital transformations across multiple industries and markets.'
    },
    {
      title: 'Measurable ROI Focus',
      description: 'Every project starts with clear KPIs and ends with documented business impact and performance metrics.'
    },
    {
      title: 'Strategic Partnership',
      description: 'We operate as an extension of your team, aligning our goals with your business objectives and long-term vision.'
    },
    {
      title: 'Advanced Technology Stack',
      description: 'Leveraging cutting-edge tools and methodologies while maintaining enterprise-grade security and compliance.'
    },
    {
      title: 'Dedicated Support',
      description: 'Assigned account teams provide ongoing strategic guidance, implementation support, and continuous optimization.'
    },
    {
      title: 'Scalable Solutions',
      description: 'Built for growth. Our solutions scale with your business from current state to ambitious future vision.'
    }
  ]

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2>Why Leading Enterprises Choose SIDMI</h2>
        <p className={styles.subtitle}>Proven track record delivering enterprise-grade solutions with measurable business impact</p>
        
        <div className={styles.grid}>
          {reasons.map((reason, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.number}>{String(index + 1).padStart(2, '0')}</div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
