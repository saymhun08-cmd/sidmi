'use client'

import styles from '../page.module.css'
import CTA from '@/components/CTA'
import FAQ from '@/components/FAQ'
import { MdGroupWork, MdAssignment, MdTimeline } from 'react-icons/md'

export default function DedicatedResources() {
  const features = [
    {
      title: 'Expert Teams',
      description: 'Hand-picked teams of specialized professionals for your needs',
      icon: MdGroupWork
    },
    {
      title: 'Flexible Engagement',
      description: 'Scale resources up or down based on project requirements',
      icon: MdAssignment
    },
    {
      title: 'Long-term Partnership',
      description: 'Dedicated support and continuous optimization over time',
      icon: MdTimeline
    }
  ]

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1>Dedicated Resources</h1>
        <p>Expert teams focused exclusively on your business growth</p>
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
