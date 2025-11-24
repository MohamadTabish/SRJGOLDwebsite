import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export default function Login() {
    return (
        <main className={styles.main}>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.card}>
                    <h1>Welcome Back</h1>
                    <p>Login to your SRJ GOLD account</p>

                    <form className={styles.form}>
                        <div className={styles.inputGroup}>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Enter your email" />
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" placeholder="Enter your password" />
                        </div>

                        <button type="submit" className={styles.button}>Login</button>
                    </form>

                    <p className={styles.footer}>
                        Don't have an account? <Link href="/signup">Sign up</Link>
                    </p>
                </div>
            </div>
            <Footer />
        </main>
    );
}
