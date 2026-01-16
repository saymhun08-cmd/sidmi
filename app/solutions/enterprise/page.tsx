'use client'

import styles from '../page.module.css'
import CTA from '@/components/CTA'
import { MdBusiness, MdAutoAwesome, MdSync } from 'react-icons/md'

export default function EnterpriseSolutions() {
  const benefits = [
    {
      title: 'Digital Transformation',
      description: 'Modernize legacy systems and embrace digital-first strategies',
      icon: MdAutoAwesome
    },
    {
      title: 'Enterprise Integration',
      description: 'Seamless integration with existing enterprise systems',
      icon: MdSync
    },
    {
      title: 'Scalable Architecture',
      description: 'Build systems that grow with your enterprise',
      icon: MdBusiness
    }
  ]

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1>Enterprise Solutions</h1>
        <p>Comprehensive digital solutions for large-scale organizations</p>
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
