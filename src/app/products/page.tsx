import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './page.module.css';

const products = [
    {
        id: 1,
        name: 'Fiery Red Chilli Powder',
        image: '/images/SRJ_RedChilliPowder.jpeg',
        description: 'We provide Annagiri lal mirch, known for its unique flavour and colour, making the recipe more descriptive and potentially a higher-quality ingredient choice for recipes. Annagiri chilli is a key ingredient in traditional South Indian cuisine. It is extensively used in India for preparing sambar, bisi bele bath, and in various chutneys and pickles in an authentic way.',
        essence: 'The Spark of Flavor',
        origin: 'Authentic Byadgi chillies from Karnataka',
        features: 'Deep red color, moderate heat, rich aroma',
        uses: 'Ideal for gravies, tandoori dishes, and spice mixes',
    },
    {
        id: 2,
        name: 'Golden Turmeric Powder',
        image: '/images/SRJ_TurmericPowder.jpeg',
        description: 'Turmeric is often called the "Indian Saffron" due to its vibrant yellow-orange colour. It has been a cornerstone of Indian culture for over 4,000 years, and it is used in everything—from curries and dals to rice and Sweets, vegetables preparations, to meat dishes and even in snacks and beverages like golden milk or haldi doodh.',
        essence: 'The Golden Healer',
        origin: 'Premium quality turmeric from Sangli, Maharashtra',
        features: 'High curcumin content, anti-inflammatory, vibrant color',
        uses: 'Essential for curries, golden milk, and traditional remedies',
    },
    {
        id: 3,
        name: 'Premium Coriander Powder',
        image: '/images/SRJ_CoriandarPowder.jpeg',
        description: 'Dhania, the soul of "Indian Cuisine". It is a key ingredient in all kinds of sabzis (vegetables), marinades, foundation for the masala base. It gives restaurant quality taste in all kinds of spicy Indian gravies. It can be used as a base for spice blends like garam masala or sprinkled as a garnish for a finished touch, which gives authenticity in traditional recipes.',
        essence: 'The Essence of Freshness',
        origin: 'Sourced from the finest farms in Rajasthan and Gujarat',
        features: 'Rich in antioxidants, aids digestion, 100% natural',
        uses: 'Perfect for curries, marinades, and spice blends',
    },
];

export default function Products() {
    return (
        <main className={styles.main}>
            <Navbar />

            <div className={styles.header}>
                <h1>Our Premium Collection</h1>
                <p>Discover the secret to authentic flavors</p>
            </div>

            <div className={styles.grid}>
                {products.map((product) => (
                    <div key={product.id} className={styles.card}>
                        <div className={styles.imageContainer}>
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                        <div className={styles.content}>
                            <span className={styles.essence}>{product.essence}</span>
                            <h2>{product.name}</h2>
                            <p className={styles.description}>{product.description}</p>
                            <div className={styles.infoSection}>
                                <div className={styles.infoItem}>
                                    <strong>Origin:</strong> {product.origin}
                                </div>
                                <div className={styles.infoItem}>
                                    <strong>Key Features:</strong> {product.features}
                                </div>
                                <div className={styles.infoItem}>
                                    <strong>Best Uses:</strong> {product.uses}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Footer />
        </main>
    );
}
