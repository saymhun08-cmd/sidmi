import styles from './FAQ.module.css';

export default function FAQ() {
  const faqs = [
    {
      q: 'What is your typical project timeline?',
      a: 'Most projects range from 3-12 months depending on scope and complexity. We provide detailed timelines after the discovery phase.'
    },
    {
      q: 'Do you offer ongoing support?',
      a: 'Yes, we provide 24/7 managed services, monitoring, and optimization support for all deployed solutions.'
    },
    {
      q: 'What is your pricing model?',
      a: 'We offer flexible engagement models: fixed-price projects, time & materials, or managed services retainers.'
    },
    {
      q: 'Can you work with our existing systems?',
      a: 'Absolutely. We specialize in integrating with legacy systems and third-party platforms.'
    },
    {
      q: 'Do you provide training?',
      a: 'Yes, comprehensive training and documentation are included in all projects.'
    },
    {
      q: 'How do you ensure security?',
      a: 'We follow industry best practices with ISO 27001, SOC 2 compliance, and enterprise-grade security protocols.'
    },
  ];

  return (
    <section className={styles.faq}>
      <div className={styles.container}>
        <h2>Frequently Asked Questions</h2>
        <div className={styles.faqGrid}>
          {faqs.map((item, idx) => (
            <div key={idx} className={styles.faqItem}>
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
