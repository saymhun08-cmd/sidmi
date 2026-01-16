import { MdShoppingCart, MdCardGiftcard, MdInsertChart, MdPrecisionManufacturing, MdCloud, MdAccountBalance, MdPublic, MdPhone, MdOutlineAttachMoney } from 'react-icons/md'
import styles from './page.module.css'
import Industries from '@/components/Industries'
import CTA from '@/components/CTA'
import FAQ from '@/components/FAQ'

export const metadata = {
  title: 'Projects & Case Studies - SIDMI',
  description: 'Explore successful projects and case studies showcasing our expertise and client results.',
}

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform Launch',
      category: 'Website Building',
      description: 'Developed a fully functional e-commerce platform for a leading retail brand.',
      results: ['300% increase in online sales', '50,000+ monthly visitors', '95% customer satisfaction'],
      icon: MdShoppingCart,
      roi: '320%'
    },
    {
      title: 'Amazon Seller Growth',
      category: 'Amazon Training',
      description: 'Helped a new seller scale from zero to 6-figure revenue on Amazon.',
      results: ['From $0 to $100k/month', '500+ daily orders', 'Best seller badge achieved'],
      icon: MdCardGiftcard,
      roi: '1200%'
    },
    {
      title: 'Digital Marketing Campaign',
      category: 'SEO & Digital Marketing',
      description: 'Executed comprehensive digital marketing strategy for B2B technology company.',
      results: ['250% ROI on ad spend', '1000+ qualified leads', '40+ enterprise clients acquired'],
      icon: MdInsertChart,
      roi: '250%'
    },
    {
      title: 'CRM Implementation',
      category: 'CRM Solutions',
      description: 'Implemented and customized CRM system for a growing SaaS company.',
      results: ['80% improvement in sales productivity', '30% faster deal closure', 'Saved $200k annually'],
      icon: MdPrecisionManufacturing,
      roi: '400%'
    },
    {
      title: 'Enterprise Cloud Migration',
      category: 'Website Building',
      description: 'Migrated on-premise infrastructure to cloud with zero downtime.',
      results: ['40% reduction in IT costs', '99.99% uptime achieved', 'Automated 60% of operations'],
      icon: MdCloud,
      roi: '275%'
    },
    {
      title: 'AI-Powered Analytics Platform',
      category: 'Digital Marketing & SEO',
      description: 'Developed custom AI analytics solution for real-time business intelligence.',
      results: ['Real-time data insights', '50% faster decision making', '$500k revenue impact'],
      icon: MdAccountBalance,
      roi: '350%'
    },
    {
      title: 'Global Supply Chain Optimization',
      category: 'Amazon Training',
      description: 'Optimized supply chain for multinational corporation resulting in massive efficiency gains.',
      results: ['$5M in annual savings', '45% faster delivery times', 'Reduced inventory by 30%'],
      icon: MdPublic,
      roi: '850%'
    },
    {
      title: 'Mobile App Development',
      category: 'Website Building',
      description: 'Built cross-platform mobile app for retail chain with 1M+ users.',
      results: ['1M+ downloads', '4.8-star rating', '$3M revenue generated'],
      icon: MdPhone,
      roi: '600%'
    },
    {
      title: 'Tax Optimization Strategy',
      category: 'Accounting Services',
      description: 'Developed comprehensive tax strategy for multi-entity business.',
      results: ['$150k in tax savings', 'Streamlined accounting processes', 'Zero compliance issues'],
      icon: MdOutlineAttachMoney,
      roi: '180%'
    }
  ]

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1>Our Projects</h1>
        <p>Success stories from businesses we've transformed</p>
      </section>

      <section className={styles.projects}>
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => {
            const IconComponent = project.icon
            return (
              <div key={index} className={styles.projectCard}>
                <div className={styles.roiBadge}>{project.roi} ROI</div>
                <div className={styles.projectImage}><IconComponent size={50} /></div>
                <div className={styles.projectContent}>
                  <span className={styles.category}>{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className={styles.results}>
                    <h4>Results:</h4>
                    <ul>
                      {project.results.map((result, idx) => (
                        <li key={idx}>✓ {result}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className={styles.statistics}>
        <h2>By The Numbers</h2>
        <div className={styles.statsGrid}>
          <div className={styles.statItem}>
            <h3>$500M+</h3>
            <p>Total Revenue Generated for Clients</p>
          </div>
          <div className={styles.statItem}>
            <h3>1000+</h3>
            <p>Successfully Completed Projects</p>
          </div>
          <div className={styles.statItem}>
            <h3>98%</h3>
            <p>Client Retention Rate</p>
          </div>
          <div className={styles.statItem}>
            <h3>380%</h3>
            <p>Average Project ROI</p>
          </div>
        </div>
      </section>

      <Industries />
      <FAQ />
      <CTA />
    </div>
  )
}
