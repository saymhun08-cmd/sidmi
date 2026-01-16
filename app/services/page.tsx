import styles from './page.module.css'
import ProcessFlow from '@/components/ProcessFlow'
import Technologies from '@/components/Technologies'
import CTA from '@/components/CTA'
import FAQ from '@/components/FAQ'

export const metadata = {
  title: 'Services - SIDMI',
  description: 'Explore our comprehensive range of business services and solutions.',
}

export default function Services() {
  const services = [
    {
      title: 'Amazon Training',
      description: 'Master Amazon marketplace operations with expert-led training programs covering product listings, PPC advertising, and account optimization.',
      features: ['Product Optimization', 'PPC Strategies', 'Account Management', 'Inventory Control']
    },
    {
      title: 'Freelancer Resources',
      description: 'Comprehensive tools, templates, and mentorship programs designed to help freelancers build and scale their independent businesses.',
      features: ['Business Templates', 'Skill Development', 'Client Management', 'Financial Tools']
    },
    {
      title: 'SEO & Digital Marketing',
      description: 'Boost your online visibility with proven SEO strategies and comprehensive digital marketing campaigns that drive real results.',
      features: ['SEO Optimization', 'Content Marketing', 'Social Media', 'Paid Advertising']
    },
    {
      title: 'Website Building',
      description: 'Professional, responsive websites built with the latest technology to drive conversions and maximize customer engagement.',
      features: ['Custom Design', 'E-Commerce', 'Responsive Dev', 'Performance Optimization']
    },
    {
      title: 'CRM Solutions',
      description: 'Streamline customer relationships with our powerful CRM systems designed specifically for enterprise growth and success.',
      features: ['Customer Database', 'Sales Pipeline', 'Automation', 'Advanced Analytics']
    },
    {
      title: 'Accounting Services',
      description: 'Complete accounting solutions including bookkeeping, tax planning, and comprehensive financial management.',
      features: ['Bookkeeping', 'Tax Planning', 'Financial Analysis', 'Payroll Management']
    }
  ]

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1>Our Services</h1>
        <p>Comprehensive business solutions tailored to drive your success</p>
      </section>

      <section className={styles.services}>
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className={styles.features}>
                {service.features.map((feature, idx) => (
                  <span key={idx} className={styles.badge}>{feature}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <ProcessFlow />
      <Technologies />
      <FAQ />
      <CTA />
    </div>
  )
}
