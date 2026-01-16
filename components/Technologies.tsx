import styles from './Technologies.module.css';

export default function Technologies() {
  const techs = [
    'AWS Cloud', 'Microsoft Azure', 'Google Cloud', 'Salesforce CRM', 'SAP ERP',
    'Oracle Database', 'Kubernetes', 'Docker', 'AI/ML', 'Blockchain',
    'React & Node.js', 'Python & Django', 'Java & Spring', 'Apache Kafka', 'ElasticSearch'
  ];

  return (
    <section className={styles.technologies}>
      <div className={styles.container}>
        <h2>Technology Stack</h2>
        <p className={styles.subtitle}>Enterprise-grade technologies we master</p>
        <div className={styles.techGrid}>
          {techs.map((tech, idx) => (
            <div key={idx} className={styles.techBadge}>
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
