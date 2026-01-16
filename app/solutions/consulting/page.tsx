'use client'

import styles from '../page.module.css'
import CTA from '@/components/CTA'
import { MdPsychology, MdTrendingUp, MdLightbulb } from 'react-icons/md'

export default function ConsultingSolutions() {
  const benefits = [
    {
      title: 'Strategic Planning',
      description: 'Data-driven strategies for sustainable business growth',
      icon: MdPsychology
    },
    {
      title: 'Market Analysis',
      description: 'Deep insights into market dynamics and opportunities',
      icon: MdTrendingUp
    },
    {
      title: 'Innovation Workshops',
      description: 'Collaborative sessions to drive organizational innovation',
      icon: MdLightbulb
    }
  ]

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1>Strategic Consulting</h1>
        <p>Expert guidance for business transformation and growth</p>
      </section>

      <section className={styles.content}>
        <div className={styles.grid}>
          {benefits.map((benefit, idx) => {
            const IconComponent = benefit.icon
            return (
              <div key={idx} className={styles.card}>
                <div className={styles.cardIcon}><IconComponent size={40} /></div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      <CTA />
    </div>
  )
}
