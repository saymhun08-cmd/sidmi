'use client'

import styles from '../page.module.css'
import CTA from '@/components/CTA'
import { MdRocket, MdTrendingUp, MdFastForward } from 'react-icons/md'

export default function StartupSolutions() {
  const benefits = [
    {
      title: 'Fast Go-To-Market',
      description: 'Rapid development and deployment strategies for startups',
      icon: MdFastForward
    },
    {
      title: 'Growth Hacking',
      description: 'Innovative strategies to achieve rapid user acquisition',
      icon: MdRocket
    },
    {
      title: 'Lean & Agile',
      description: 'Flexible approaches that adapt to market demands',
      icon: MdTrendingUp
    }
  ]

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1>Startup Solutions</h1>
        <p>Accelerate your startup growth with expert guidance</p>
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
