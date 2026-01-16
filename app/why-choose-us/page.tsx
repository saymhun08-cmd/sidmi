import styles from './page.module.css'
import CTA from '@/components/CTA'
import FAQ from '@/components/FAQ'
import { MdCheckCircle, MdStar, MdTrendingUp, MdPeople, MdLock, MdSpeed } from 'react-icons/md'

export const metadata = {
  title: 'Why Choose SIDMI - Enterprise Digital Solutions',
  description: 'Discover why industry leaders trust SIDMI for digital transformation and growth.',
}

export default function WhyChooseUsPage() {
  const reasons = [
    {
      icon: MdCheckCircle,
      title: '10+ Years Experience',
      description: 'Proven track record of delivering enterprise-grade solutions across 50+ countries'
    },
    {
      icon: MdStar,
      title: '500+ Happy Clients',
      description: 'From startups to Fortune 500 companies trust us with their growth'
    },
    {
      icon: MdTrendingUp,
      title: 'Average 320% ROI',
      description: 'Our clients see consistent 300%+ return on investment within 12 months'
    },
    {
      icon: MdPeople,
      title: 'Expert Teams',
      description: 'Industry-leading specialists in every technology and domain'
    },
    {
      icon: MdLock,
      title: 'Enterprise Security',
      description: 'Bank-grade security, ISO certifications, and compliance compliance'
    },
    {
      icon: MdSpeed,
      title: '24/7 Support',
      description: 'Dedicated support teams available round the clock for your peace of mind'
    }
  ]

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1>Why Choose SIDMI?</h1>
        <p>The trusted partner for digital transformation and sustainable growth</p>
      </section>

      <section className={styles.reasons}>
        <div className={styles.grid}>
          {reasons.map((reason, idx) => {
            const IconComponent = reason.icon
            return (
              <div key={idx} className={styles.card}>
                <div className={styles.icon}><IconComponent size={45} color="#e94560" /></div>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section className={styles.comparison}>
        <h2>Our Competitive Edge</h2>
        <div className={styles.comparisonGrid}>
          <div className={styles.comparisonCard}>
            <h3>Quality Focus</h3>
            <ul>
              <li>✓ Custom solutions only</li>
              <li>✓ 99.99% uptime guarantee</li>
              <li>✓ Dedicated project managers</li>
              <li>✓ Free strategy sessions</li>
            </ul>
          </div>
          <div className={styles.comparisonCard}>
            <h3>Real Results</h3>
            <ul>
              <li>✓ Measurable KPIs</li>
              <li>✓ Monthly performance reports</li>
              <li>✓ ROI guaranteed</li>
              <li>✓ Transparent pricing</li>
            </ul>
          </div>
          <div className={styles.comparisonCard}>
            <h3>Expert Support</h3>
            <ul>
              <li>✓ 24/7 support team</li>
              <li>✓ Average response: 15 minutes</li>
              <li>✓ 95%+ client retention</li>
              <li>✓ Industry certifications</li>
            </ul>
          </div>
        </div>
      </section>

      <CTA />
      <FAQ />
    </div>
  )
}
