'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className={styles.navbar}>
            <div className={styles.logoContainer}>
                <Link href="/">
                    <Image
                        src="/images/Logo.jpeg"
                        alt="SRJ GOLD Logo"
                        width={60}
                        height={60}
                        className={styles.logo}
                    />
                </Link>
                <Link href="/" className={styles.brandName}>
                    SRJ GOLD
                </Link>
            </div>
            <div className={styles.navLinks}>
                <Link href="/" className={`${styles.link} ${pathname === '/' ? styles.active : ''}`}>Home</Link>
                <Link href="/products" className={`${styles.link} ${pathname === '/products' ? styles.active : ''}`}>Products</Link>
                <Link href="/login" className={`${styles.link} ${pathname === '/login' ? styles.active : ''}`}>Login</Link>
                <Link href="/signup" className={styles.button}>Sign Up</Link>
            </div>
        </nav>
    );
}
