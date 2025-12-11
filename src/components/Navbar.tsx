'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.logoContainer}>
                <Link href="/" onClick={closeMenu}>
                    <Image
                        src="/images/SRJ_Logo_TM.jpeg"
                        alt="SRJ GOLD Logo"
                        width={60}
                        height={60}
                        className={styles.logo}
                    />
                </Link>
                <Link href="/" className={styles.brandName} onClick={closeMenu}>
                    SRJ GOLD<sup style={{ fontSize: '0.5em', marginLeft: '2px' }}>TM</sup>
                </Link>
            </div>

            {/* Hamburger Menu Button */}
            <button
                className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerOpen : ''}`}
                onClick={toggleMenu}
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            {/* Navigation Links */}
            <div className={`${styles.navLinks} ${isMenuOpen ? styles.navLinksOpen : ''}`}>
                <Link
                    href="/"
                    className={`${styles.link} ${pathname === '/' ? styles.active : ''}`}
                    onClick={closeMenu}
                >
                    Home
                </Link>
                <Link
                    href="/products"
                    className={`${styles.link} ${pathname === '/products' ? styles.active : ''}`}
                    onClick={closeMenu}
                >
                    Products
                </Link>
                <Link
                    href="/login"
                    className={`${styles.link} ${pathname === '/login' ? styles.active : ''}`}
                    onClick={closeMenu}
                >
                    Login
                </Link>
                <Link
                    href="/signup"
                    className={styles.button}
                    onClick={closeMenu}
                >
                    Sign Up
                </Link>
            </div>

            {/* Overlay for mobile menu */}
            {isMenuOpen && (
                <div
                    className={styles.overlay}
                    onClick={closeMenu}
                    aria-hidden="true"
                />
            )}
        </nav>
    );
}
