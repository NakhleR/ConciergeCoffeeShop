import { motion } from 'framer-motion';

interface MenuCardProps {
    name: string;
    description: string;
    price: string;
    image?: string;
    category: string;
    isSignature?: boolean;
}

export const MenuCard = ({
    name,
    description,
    price,
    image,
    category,
    isSignature = false
}: MenuCardProps) => {
    return (
        <motion.div
            whileHover={{ y: -2, scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="bg-cream-50 rounded-card p-6 shadow-card hover:shadow-hover transition-all duration-300 border border-cream-200"
        >
            {image && (
                <div className="mb-4 overflow-hidden rounded-image">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                    />
                </div>
            )}

            <div className="flex justify-between items-start mb-2">
                <h3 className="font-heading font-semibold text-lg text-brown-900 flex items-center gap-2">
                    {name}
                    {isSignature && (
                        <span className="text-primary-500 text-sm">★</span>
                    )}
                </h3>
                <span className="font-heading font-bold text-primary-600 text-lg">
                    {price}
                </span>
            </div>

            <p className="text-brown-700 text-sm leading-relaxed mb-3">
                {description}
            </p>

            {/* <div className="flex justify-between items-center">
                <span className="text-xs uppercase tracking-wide text-brown-500 font-medium">
                    {category}
                </span>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-button text-sm font-medium transition-colors duration-200"
                >
                    Add to Order
                </motion.button>
            </div> */}
        </motion.div>
    );
}; 