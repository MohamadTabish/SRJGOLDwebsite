import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export default function Home() {
    return (
        <main className={styles.main}>
            <Navbar />

            <section className={styles.hero}>
                <h1 className={styles.title}>SRJ GOLD MASALA</h1>
                <p className={styles.subtitle}>
                    Experience the authentic taste of tradition with our premium collection of hand-picked spices.
                    Elevate your culinary journey with the finest ingredients.
                </p>
                <Link href="/products" className={styles.ctaButton}>
                    Explore Our Collection
                </Link>
            </section>

            <section className={styles.about}>
                <div className={styles.aboutContent}>
                    <h2>About the Business</h2>
                    <p>
                        Established in 1981 in Byadgi, our spice business began with a humble vision—to deliver pure, authentic flavours rooted in tradition. What started as a small-scale operation focused solely on dry ginger has today grown into one of the region's most respected names in the spice industry.
                    </p>
                    <p>
                        Over the decades, we expanded our expertise from dry ginger to becoming a trusted leader in Byadgi red chilli and other premium spices. Our growth has been powered by unwavering commitment to quality, ethical sourcing, and a passion for preserving the rich spice heritage of India.
                    </p>
                    <p>
                        From farms to kitchens across the country, we continue to uphold the same values we were built on—purity, consistency, and trust. Today, our brand stands as a symbol of excellence, delivering spices that bring authentic aroma, colour, and taste to every dish.
                    </p>
                </div>
                <div className={styles.aboutImage}>
                    <Image
                        src="/images/product_turmeric.png"
                        alt="Premium Turmeric"
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </div>
            </section>

            <div className={styles.founderSection}>
                <section className={styles.about} style={{ flexDirection: 'row-reverse' }}>
                    <div className={styles.aboutImage}>
                        <Image
                            src="/images/product_chilli.png"
                            alt="Premium Red Chilli"
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <div className={styles.aboutContent}>
                        <h2>About the Founder</h2>
                        <p>
                            Our journey began with the vision of Mr. B. Ghous Muhiddin, a dedicated entrepreneur who laid the foundation of the business in 1981. Starting with limited resources, he focused solely on processing and supplying high-quality dry ginger, driven by a passion to bring the finest spices to the market.
                        </p>
                        <p>
                            Through relentless hard work, honesty, and a deep understanding of the spice trade, Mr. Muhiddin steadily expanded the business beyond its humble beginnings. Under his leadership, the company evolved into a major industry player—recognized not only for premium dry ginger but also for its expertise in Byadgi red chilli, now one of our flagship products.
                        </p>
                        <p>
                            His vision transformed a small local venture into a trusted name in the spice industry, inspiring the next generation to carry forward the legacy of quality, purity, and excellence.
                        </p>
                    </div>
                </section>
            </div>

            <section className={styles.features}>
                <h2>Why Choose SRJ GOLD?</h2>
                <div className={styles.featuresGrid}>
                    <div className={styles.featureCard}>
                        <div className={styles.featureImageContainer}>
                            <Image
                                src="/images/feature_natural.png"
                                alt="100% Natural Spices"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.featureContent}>
                            <h3>100% Natural</h3>
                            <p>No artificial colors or preservatives. Just pure, natural goodness.</p>
                        </div>
                    </div>
                    <div className={styles.featureCard}>
                        <div className={styles.featureImageContainer}>
                            <Image
                                src="/images/feature_farm.png"
                                alt="Farm Fresh Spices"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.featureContent}>
                            <h3>Farm Fresh</h3>
                            <p>Sourced directly from farmers to ensure maximum freshness and potency.</p>
                        </div>
                    </div>
                    <div className={styles.featureCard}>
                        <div className={styles.featureImageContainer}>
                            <Image
                                src="/images/product_turmeric.png"
                                alt="Premium Quality Spices"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.featureContent}>
                            <h3>Premium Quality</h3>
                            <p>Rigorous quality checks to meet international safety and taste standards.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
