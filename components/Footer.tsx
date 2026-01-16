'use client'

import React from 'react'
import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h4>About SIDMI</h4>
          <p>Your trusted partner for digital transformation and business growth through innovative solutions.</p>
        </div>
        
        <div className={styles.section}>
          <h4>Services</h4>
          <ul>
            <li><Link href="/amazon-training">Amazon Training</Link></li>
            <li><Link href="/seo-digital-marketing">SEO & Marketing</Link></li>
            <li><Link href="/website-building">Website Building</Link></li>
            <li><Link href="/crm">CRM Solutions</Link></li>
          </ul>
        </div>
        
        <div className={styles.section}>
          <h4>Contact</h4>
          <p>Email: info@sidmi.com</p>
          <p>Phone: +971522391904</p>
          <p>Location: Remote Work Through World</p>
        </div>
      </div>
      
      <div className={styles.bottom}>
        <p>&copy; 2024 SIDMI Agency. All rights reserved.</p>
      </div>
    </footer>
  )
}
