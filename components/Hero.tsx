'use client'

import React from 'react'
import styles from './Hero.module.css'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>Enterprise Digital Transformation Solutions</h1>
          <p>Partnering with forward-thinking enterprises to drive digital innovation, operational excellence, and sustainable growth through strategic technology implementation.</p>
          <div className={styles.ctaGroup}>
            <Link href="/contact" className={styles.cta}>
              Schedule Strategy Session
            </Link>
            <Link href="/projects" className={styles.ctaSecondary}>
              View Case Studies
            </Link>
          </div>
        </div>
        <div className={styles.highlight}>
          <div className={styles.stat}>
            <h3>$500M+</h3>
            <p>Enterprise Revenue Impacted</p>
          </div>
          <div className={styles.stat}>
            <h3>1200+</h3>
            <p>Enterprise Solutions Delivered</p>
          </div>
          <div className={styles.stat}>
            <h3>99.8%</h3>
            <p>Client Retention Rate</p>
          </div>
        </div>
      </div>
    </section>
  )
}
