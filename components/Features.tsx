'use client'

import { MdInsertChart, MdRocket, MdLock, MdGroup, MdLightbulb, MdTrendingUp } from 'react-icons/md'
import styles from './Features.module.css'

export default function Features() {
  const features = [
    {
      icon: MdInsertChart,
      title: 'Data-Driven Strategies',
      description: 'Every decision backed by advanced analytics, market research, and real-time performance metrics'
    },
    {
      icon: MdRocket,
      title: 'Rapid Implementation',
      description: 'Agile methodologies ensuring fast deployment without compromising quality or compliance'
    },
    {
      icon: MdLock,
      title: 'Enterprise Security',
      description: 'Bank-grade security protocols, compliance certifications, and 99.99% uptime guarantee'
    },
    {
      icon: MdGroup,
      title: 'Dedicated Teams',
      description: 'Expert teams assigned to your account providing 24/7 strategic support and optimization'
    },
    {
      icon: MdLightbulb,
      title: 'Innovation First',
      description: 'Cutting-edge technology stack with continuous integration of emerging solutions'
    },
    {
      icon: MdTrendingUp,
      title: 'Scalable Solutions',
      description: 'Built to grow with your business from startup to multi-billion dollar enterprise'
    }
  ]

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2>Platform Capabilities</h2>
        <p className={styles.subtitle}>Comprehensive tools and expertise to drive enterprise growth</p>

        <div className={styles.grid}>
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div key={index} className={styles.card}>
                <div className={styles.iconBox}><IconComponent size={40} /></div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
