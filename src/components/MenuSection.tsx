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
            <div className="flex items-center justify-center mb-12">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent to-brown-300"></div>
                <div className="flex items-center gap-3 px-6">
                    {icon && (
                        <span className="text-2xl">{icon}</span>
                    )}
                    <h2 className="font-accent text-3xl font-bold text-brown-900 whitespace-nowrap">
                        {title}
                    </h2>
                </div>
                <div className="flex-1 h-px bg-gradient-to-l from-transparent to-brown-300"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                {items.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="border-b border-brown-200 pb-4 last:border-b-0"
                    >
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="font-heading font-semibold text-lg text-brown-900 flex items-center gap-2">
                                {item.name}
                                {item.isSignature && (
                                    <span className="text-primary-500 text-sm">★</span>
                                )}
                            </h3>
                            <span className="font-heading font-bold text-primary-600 text-lg ml-4 flex-shrink-0">
                                {item.price}
                            </span>
                        </div>
                        <p className="text-brown-700 text-sm leading-relaxed pr-8">
                            {item.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}; 