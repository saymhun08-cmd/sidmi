import styles from './page.module.css'
import CTA from '@/components/CTA'
import FAQ from '@/components/FAQ'
import { MdCheckCircle, MdStar, MdTrendingUp, MdPeople, MdLock, MdSpeed, MdInsertChart, MdRocket, MdGroup, MdLightbulb } from 'react-icons/md'

export const metadata = {
  title: 'About SIDMI - Digital Solutions Agency',
  description: 'Learn about SIDMI Agency, our mission, values, and expert team dedicated to digital transformation.',
}

export default function About() {
  const values = [
    {
      icon: MdCheckCircle,
      title: 'Strategic Excellence',
      description: 'We deliver transformational solutions grounded in deep industry expertise and proven methodologies'
    },
    {
      icon: MdRocket,
      title: 'Innovation & Agility',
      description: 'Embracing emerging technologies and adapting strategies to maintain competitive advantage'
    },
    {
      icon: MdLock,
      title: 'Integrity & Transparency',
      description: 'Building enduring partnerships through honest communication and ethical business practices'
    },
    {
      icon: MdTrendingUp,
      title: 'Measurable Impact',
      description: 'Every engagement is results-driven, with clear KPIs and continuous optimization'
    }
  ]

  const achievements = [
    { icon: MdStar, title: 'ISO 27001 Certified', description: 'Enterprise-grade security and compliance' },
    { icon: MdLock, title: 'SOC 2 Type II', description: 'Audited security and availability' },
    { icon: MdGroup, title: '50+ Countries', description: 'Global delivery and support' },
    { icon: MdPeople, title: '500+ Team Members', description: 'Distributed expert workforce' },
  ]

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1>About SIDMI</h1>
        <p>Your Trusted Partner for Digital Transformation</p>
      </section>

      <section className={styles.mission}>
        <div className={styles.missionContent}>
          <h2>Our Mission</h2>
          <p>
            At SIDMI, we partner with enterprise leaders to architect and implement digital transformation strategies that drive sustainable competitive advantage. 
          </p>
          <p>
            With over two decades of collective expertise across digital commerce, marketing technology, and enterprise systems, we've delivered measurable results for 1200+ enterprise clients, impacting over $500M in revenue generation.
          </p>
          <p>
            Our client-centric approach combines strategic consulting with hands-on implementation, ensuring every solution aligns with your business objectives and delivers quantifiable ROI.
          </p>
        </div>
      </section>

      <section className={styles.values}>
        <h2>Our Core Values</h2>
        <div className={styles.grid}>
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <div key={index} className={styles.card}>
                <div className={styles.icon}><IconComponent size={45} color="#e94560" /></div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section className={styles.achievements}>
        <h2>Why Enterprise Leaders Choose SIDMI</h2>
        <div className={styles.achievementsGrid}>
          {achievements.map((ach, index) => {
            const IconComponent = ach.icon
            return (
              <div key={index} className={styles.achievementCard}>
                <div className={styles.iconBox}><IconComponent size={45} color="#e94560" /></div>
                <h3>{ach.title}</h3>
                <p>{ach.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section className={styles.ceoSection}>
        <div className={styles.ceoContent}>
          <h2>Leadership</h2>
          <div className={styles.ceoCard}>
            <div className={styles.ceoAvatar}></div>
            <h3>Sami Uddin</h3>
            <p className={styles.ceoTitle}>CEO & Founder</p>
            <p className={styles.ceoBio}>Leading SIDMI with a vision to transform businesses through innovative digital solutions. With extensive experience in digital commerce, strategy, and technology, Sami drives our mission to deliver measurable impact for enterprise clients worldwide.</p>
          </div>
        </div>
      </section>

      <CTA />
      <FAQ />
    </div>
  )
}
