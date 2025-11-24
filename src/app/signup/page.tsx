import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export default function Signup() {
    return (
        <main className={styles.main}>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.card}>
                    <h1>Create Account</h1>
                    <p>Join the SRJ GOLD family</p>

                    <form className={styles.form}>
                        <div className={styles.inputGroup}>
                            <label htmlFor="name">Full Name</label>
                            <input type="text" id="name" placeholder="Enter your full name" />
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Enter your email" />
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" placeholder="Create a password" />
                        </div>

                        <button type="submit" className={styles.button}>Sign Up</button>
                    </form>

                    <p className={styles.footer}>
                        Already have an account? <Link href="/login">Login</Link>
                    </p>
                </div>
            </div>
            <Footer />
        </main>
    );
}
