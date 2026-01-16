'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo} onClick={closeMobileMenu}>
          SIDMI
        </Link>

        <nav className={`${styles.nav} ${mobileMenuOpen ? styles.navActive : ''}`}>
          <Link href="/" onClick={closeMobileMenu}>Home</Link>
          <Link href="/services" onClick={closeMobileMenu}>Services</Link>
          <Link href="/about" onClick={closeMobileMenu}>About</Link>
          <Link href="/projects" onClick={closeMobileMenu}>Case Studies</Link>
          <Link href="/why-choose-us" onClick={closeMobileMenu}>Why Choose Us</Link>
          <Link href="/contact" onClick={closeMobileMenu}>Contact Us</Link>
          <Link href="/contact" className={styles.inquiryBtnMobile} onClick={closeMobileMenu}>
            Get Started
          </Link>
        </nav>

        <Link href="/contact" className={styles.inquiryBtn}>
          Get Started
        </Link>

        <button 
          className={`${styles.hamburger} ${mobileMenuOpen ? styles.active : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}
