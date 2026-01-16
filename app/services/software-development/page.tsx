'use client'

import styles from '../page.module.css'
import CTA from '@/components/CTA'
import FAQ from '@/components/FAQ'
import { MdCode, MdStorage, MdSecurity } from 'react-icons/md'

export default function SoftwareDevelopment() {
  const features = [
    {
      title: 'Full Stack Development',
      description: 'Custom web and mobile apps built with modern technology stacks',
      icon: MdCode
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions with AWS, Google Cloud, and Azure',
      icon: MdStorage
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-grade security, compliance certifications, and data protection',
      icon: MdSecurity
    }
  ]

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1>Software Development & Cloud Solutions</h1>
        <p>Enterprise-grade technology solutions for digital transformation</p>
      </section>

      <section className={styles.content}>
        <div className={styles.grid}>
          {features.map((feature, idx) => {
            const IconComponent = feature.icon
            return (
              <div key={idx} className={styles.card}>
                <div className={styles.cardIcon}><IconComponent size={40} /></div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      <CTA />
      <FAQ />
    </div>
  )
}
