'use client'

import styles from '../page.module.css'
import CTA from '@/components/CTA'
import FAQ from '@/components/FAQ'
import { MdSearch, MdOutlineAutoAwesome, MdAnalytics } from 'react-icons/md'

export default function DigitalMarketing() {
  const features = [
    {
      title: 'SEO & Search Strategy',
      description: 'Comprehensive SEO audits, keyword strategies, and organic growth',
      icon: MdSearch
    },
    {
      title: 'Social Media Marketing',
      description: 'Strategic content creation and targeted social campaigns',
      icon: MdOutlineAutoAwesome
    },
    {
      title: 'Analytics & Reporting',
      description: 'Real-time performance tracking and detailed ROI analytics',
      icon: MdAnalytics
    }
  ]

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1>Digital Marketing & SEO</h1>
        <p>Drive qualified traffic and transform leads into customers</p>
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
