import styles from './Footer.module.css';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.section}>
                    <h3>SRJ GOLD</h3>
                    <p>Premium Quality Spices for Every Kitchen.</p>
                </div>
                <div className={styles.section}>
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/products">Products</Link></li>
                        <li><Link href="/login">Login</Link></li>
                    </ul>
                </div>
                <div className={styles.section}>
                    <h4>Contact</h4>
                    <p>UNITED TRADING COMPANY</p>
                    <p>APMC YARD, BYADGI Karnataka INDIA</p>
                    <p>Email: info@srjgold.com</p>
                    <p>Phone: +91 123 456 7890</p>
                </div>
            </div>
            <div className={styles.bottom}>
                <p>&copy; {new Date().getFullYear()} SRJ GOLD. All rights reserved.</p>
            </div>
        </footer>
    );
}
