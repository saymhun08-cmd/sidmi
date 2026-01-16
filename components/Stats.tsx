import styles from './Stats.module.css';

export default function Stats() {
  const stats = [
    { number: '500+', label: 'Enterprise Clients' },
    { number: '20+', label: 'Years Experience' },
    { number: '1000+', label: 'Projects Delivered' },
    { number: '98%', label: 'Satisfaction Rate' },
  ];

  return (
    <section className={styles.stats}>
      <div className={styles.container}>
        <h2>Our Impact</h2>
        <div className={styles.statsGrid}>
          {stats.map((stat, idx) => (
            <div key={idx} className={styles.statCard}>
              <div className={styles.number}>{stat.number}</div>
              <div className={styles.label}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
