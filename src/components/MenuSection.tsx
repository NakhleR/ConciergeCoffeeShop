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
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 relative"
        >
            {/* Vintage Border Pattern */}
            <div className="absolute inset-0 border-4 border-brown-400 rounded-lg opacity-20"></div>
            <div className="absolute inset-2 border-2 border-brown-300 rounded-md opacity-30"></div>

            {/* Corner Decorations */}
            <div className="absolute top-0 left-0 w-8 h-8 border-l-4 border-t-4 border-brown-500 opacity-40"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-r-4 border-t-4 border-brown-500 opacity-40"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-l-4 border-b-4 border-brown-500 opacity-40"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-r-4 border-b-4 border-brown-500 opacity-40"></div>

            {/* Background Pattern */}
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23715442' fill-opacity='0.3'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundRepeat: 'repeat'
                }}
            ></div>

            <div className="relative z-10 p-8 bg-cream-50/80 backdrop-blur-sm rounded-lg border border-brown-200/50 shadow-xl">
                <div className="flex items-center justify-center mb-12 relative">
                    {/* Ornate decorative elements */}
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-16 h-px bg-gradient-to-r from-transparent via-brown-400 to-brown-600"></div>
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-16 h-px bg-gradient-to-l from-transparent via-brown-400 to-brown-600"></div>

                    {/* Decorative corner flourishes */}
                    <div className="absolute left-12 top-1/2 transform -translate-y-1/2 text-brown-500 text-xs">❦</div>
                    <div className="absolute right-12 top-1/2 transform -translate-y-1/2 text-brown-500 text-xs">❦</div>

                    <div className="flex-1 h-px bg-gradient-to-r from-transparent to-brown-400"></div>
                    <div className="flex items-center gap-3 px-8 bg-cream-100 border-2 border-brown-400 rounded-full shadow-md">
                        {icon && (
                            <span className="text-2xl filter drop-shadow-sm">{icon}</span>
                        )}
                        <div className="flex flex-col items-center">
                            <h2 className="font-accent text-3xl font-bold text-brown-900 whitespace-nowrap tracking-wide">
                                {title}
                            </h2>
                            {subtitle && (
                                <span className="text-xs font-body text-brown-600 mt-1 tracking-wider uppercase">
                                    {subtitle}
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="flex-1 h-px bg-gradient-to-l from-transparent to-brown-400"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                    {items.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="border-b border-brown-300/50 pb-4 last:border-b-0 relative group"
                        >
                            {/* Subtle item decoration */}
                            <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary-400 to-brown-400 opacity-30 group-hover:opacity-60 transition-opacity"></div>

                            <div className="flex justify-between items-start mb-2 pl-4">
                                <h3 className="font-heading font-semibold text-lg text-brown-900 flex items-center gap-2">
                                    {item.name}
                                    {item.isSignature && (
                                        <span className="text-primary-500 text-sm filter drop-shadow-sm">★</span>
                                    )}
                                </h3>
                                <span className="font-heading font-bold text-primary-600 text-lg ml-4 flex-shrink-0 bg-primary-100/50 px-2 py-1 rounded border border-primary-300/30">
                                    {item.price}
                                </span>
                            </div>
                            <p className="text-brown-700 text-sm leading-relaxed pr-8 pl-4 font-body font-normal">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}; 