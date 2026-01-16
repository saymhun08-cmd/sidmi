'use client'

import { MdBusiness, MdLocalHospital, MdShoppingCart, MdFactory, MdSchool, MdElectricBolt } from 'react-icons/md'
import styles from './Industries.module.css';

export default function Industries() {
  const industries = [
    { icon: MdBusiness, name: 'Financial Services', description: 'Banking, Insurance, Investment Management' },
    { icon: MdLocalHospital, name: 'Healthcare', description: 'Medical Providers, Pharmaceutical, Wellness' },
    { icon: MdShoppingCart, name: 'Retail & E-Commerce', description: 'Multi-channel Commerce, Omnichannel Retail' },
    { icon: MdFactory, name: 'Manufacturing', description: 'Industrial, Supply Chain, Logistics' },
    { icon: MdSchool, name: 'Education', description: 'Universities, EdTech, Online Learning' },
    { icon: MdElectricBolt, name: 'Energy & Utilities', description: 'Power, Renewables, Infrastructure' },
  ];

  return (
    <section className={styles.industries}>
      <div className={styles.container}>
        <h2>Industries We Serve</h2>
        <p className={styles.subtitle}>Sector-specific expertise across major industries</p>
        <div className={styles.grid}>
          {industries.map((industry, idx) => {
            const IconComponent = industry.icon
            return (
              <div key={idx} className={styles.card}>
                <div className={styles.icon}><IconComponent size={40} /></div>
                <h3>{industry.name}</h3>
                <p>{industry.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
