import { motion } from 'framer-motion';
import { MenuCard } from './MenuCard';

interface MenuItem {
    id: string;
    name: string;
    description: string;
    price: string;
    image?: string;
    isSignature?: boolean;
}

interface MenuSectionProps {
    title: string;
    items: MenuItem[];
    category: string;
    icon?: string;
}

export const MenuSection = ({ title, items, category, icon }: MenuSectionProps) => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
        >
            <div className="flex items-center gap-3 mb-8">
                {icon && (
                    <span className="text-2xl">{icon}</span>
                )}
                <h2 className="font-accent text-3xl font-bold text-brown-900">
                    {title}
                </h2>
                <div className="flex-1 h-px bg-gradient-to-r from-primary-300 to-transparent ml-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <MenuCard
                            name={item.name}
                            description={item.description}
                            price={item.price}
                            image={item.image}
                            category={category}
                            isSignature={item.isSignature}
                        />
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}; 