'use client'

import React from 'react'
import styles from './Services.module.css'
import Link from 'next/link'

const services = [
  {
    id: 1,
    title: 'Amazon Enterprise Solutions',
    description: 'Comprehensive Amazon ecosystem optimization for enterprises. From marketplace strategy to logistics optimization, we drive sustainable revenue growth.',
    link: '/amazon-training'
  },
  {
    id: 2,
    title: 'Talent & Resource Enablement',
    description: 'Build high-performing teams with our specialized training programs. Empower your workforce with skills for digital transformation.',
    link: '/freelancer-resources'
  },
  {
    id: 3,
    title: 'Digital Marketing & SEO',
    description: 'Enterprise-scale digital marketing strategies that generate qualified leads and establish market leadership through data-driven campaigns.',
    link: '/seo-digital-marketing'
  },
  {
    id: 4,
    title: 'Web & Application Development',
    description: 'Scalable, secure web platforms built on enterprise standards. Custom solutions designed for performance, reliability, and growth.',
    link: '/website-building'
  },
  {
    id: 5,
    title: 'Customer Relationship Management',
    description: 'Sophisticated CRM implementations that streamline operations, improve customer lifetime value, and accelerate sales cycles.',
    link: '/crm'
  },
  {
    id: 6,
    title: 'Financial & Accounting Services',
    description: 'Enterprise accounting solutions ensuring compliance, optimization, and strategic financial planning for sustainable business growth.',
    link: '/accounting'
  }
]

export default function Services() {
  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Core Competencies</h2>
          <p>Strategic enterprise solutions delivering measurable business impact across all critical functions</p>
        </div>
        
        <div className={styles.grid}>
          {services.map((service) => (
            <Link href={service.link} key={service.id} className={styles.card}>
              <div className={styles.icon}></div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className={styles.arrow}>→</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
