'use client'

import styles from '../page.module.css'
import CTA from '@/components/CTA'
import FAQ from '@/components/FAQ'
import { MdCheckCircle, MdTrendingUp, MdShoppingCart } from 'react-icons/md'

export default function AmazonTraining() {
  const features = [
    {
      title: 'Account Setup & Optimization',
      description: 'Complete Amazon seller account setup with brand registry and enhanced content',
      icon: MdCheckCircle
    },
    {
      title: 'Product Listing Optimization',
      description: 'A+ content, keyword research, and listing optimization for maximum visibility',
      icon: MdTrendingUp
    },
    {
      title: 'Advertising Strategy',
      description: 'PPC campaigns, sponsored brands, and strategic advertising management',
      icon: MdShoppingCart
    }
  ]

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1>Amazon Training & Seller Growth</h1>
        <p>Master Amazon marketplace and scale your e-commerce business to 6-figures</p>
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
