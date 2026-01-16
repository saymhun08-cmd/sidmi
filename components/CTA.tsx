import styles from './CTA.module.css';

export default function CTA() {
  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        <h2>Ready to Transform Your Business?</h2>
        <p>Join 500+ enterprise clients who trust SIDMI for their digital transformation journey.</p>
        <div className={styles.buttons}>
          <button className={styles.primary}>Schedule Consultation</button>
          <button className={styles.secondary}>View Case Studies</button>
        </div>
      </div>
    </section>
  );
}
