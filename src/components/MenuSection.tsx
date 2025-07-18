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
    subtitle?: string;
}

export const MenuSection = ({ title, items, category, icon, subtitle }: MenuSectionProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 relative"
        >
            {/* Section Title Tab */}
            <div className="bg-white rounded-t-lg py-4 px-8 relative z-10 w-fit mx-auto">
                <h2 className="font-pphatton text-2xl md:text-3xl font-bold text-black whitespace-nowrap">
                    {title}
                </h2>
                {subtitle && (
                    <div className="text-center mt-1">
                        <span className="text-xs font-avenir text-black tracking-wider uppercase">
                            {subtitle}
                        </span>
                    </div>
                )}
            </div>

            {/* Menu Items Section */}
            <section className="bg-white rounded-lg rounded-tl-none rounded-tr-none p-8 shadow-lg">
                {/* Menu Items Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
                    {items.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.3 + (index * 0.05) }}
                            viewport={{ once: true }}
                            className="pb-6"
                        >
                            <div className="flex justify-between items-start mb-3">
                                <h3 className="font-avenir font-bold text-lg text-black flex items-center gap-2">
                                    {item.name}
                                </h3>
                                <span className="font-avenir font-bold text-lg text-black ml-4 flex-shrink-0">
                                    {item.price}
                                </span>
                            </div>
                            <p className="text-black/70 text-sm leading-relaxed font-avenir font-normal mb-4">
                                {item.description}
                            </p>
                            {/* Horizontal line after each item */}
                            <div className="w-full h-px bg-black/20"></div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </motion.div>
    );
}; 