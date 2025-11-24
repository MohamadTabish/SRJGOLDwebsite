import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './page.module.css';

const products = [
    {
        id: 1,
        name: 'Premium Coriander Powder',
        image: '/images/product_coriander.png',
        description: 'Experience the fresh, citrusy aroma of our hand-picked coriander seeds. Ground to perfection, our coriander powder adds a subtle yet distinct flavor to your curries and gravies.',
        essence: 'The Essence of Freshness',
        origin: 'Sourced from the finest farms in Rajasthan and Gujarat',
        features: 'Rich in antioxidants, aids digestion, 100% natural',
        uses: 'Perfect for curries, marinades, and spice blends',
    },
    {
        id: 2,
        name: 'Golden Turmeric Powder',
        image: '/images/product_turmeric.png',
        description: 'Sourced from the finest turmeric roots, our Haldi powder is rich in curcumin and vibrant in color. It not only enhances the taste but also brings the goodness of health to your daily meals.',
        essence: 'The Golden Healer',
        origin: 'Premium quality turmeric from Sangli, Maharashtra',
        features: 'High curcumin content, anti-inflammatory, vibrant color',
        uses: 'Essential for curries, golden milk, and traditional remedies',
    },
    {
        id: 3,
        name: 'Fiery Red Chilli Powder',
        image: '/images/product_chilli.png',
        description: 'Add the perfect kick of spice with our Red Chilli Powder. Made from sun-dried chillies, it offers a balanced blend of heat and color, making your dishes irresistibly appetizing.',
        essence: 'The Spark of Flavor',
        origin: 'Authentic Byadgi chillies from Karnataka',
        features: 'Deep red color, moderate heat, rich aroma',
        uses: 'Ideal for gravies, tandoori dishes, and spice mixes',
    },
    {
        id: 4,
        name: 'Premium Black Pepper',
        image: '/images/product_pepper.png',
        description: 'Our premium black pepper is hand-harvested to ensure the boldest flavor and aroma. Perfect for seasoning or adding a spicy depth to any dish.',
        essence: 'The King of Spices',
        origin: 'Hand-picked from the plantations of Kerala',
        features: 'Bold flavor, strong aroma, premium grade',
        uses: 'Versatile seasoning for all cuisines and dishes',
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
                                style={{ objectFit: 'cover' }}
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
