import styles from './ProcessFlow.module.css';

export default function ProcessFlow() {
  const steps = [
    {
      step: '01',
      title: 'Discovery & Assessment',
      description: 'We conduct a comprehensive audit of your current systems, processes, and business objectives.',
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'Our expert team develops a customized digital transformation roadmap aligned with your goals.',
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'We execute the plan with precision, ensuring minimal disruption to your business operations.',
    },
    {
      step: '04',
      title: 'Optimization & Support',
      description: 'Continuous monitoring, optimization, and 24/7 support to ensure maximum ROI and success.',
    },
  ];

  return (
    <section className={styles.process}>
      <div className={styles.container}>
        <h2>Our Proven Process</h2>
        <p className={styles.subtitle}>A structured approach to digital transformation that delivers results</p>
        <div className={styles.stepsGrid}>
          {steps.map((item, idx) => (
            <div key={idx} className={styles.step}>
              <div className={styles.stepNumber}>{item.step}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
