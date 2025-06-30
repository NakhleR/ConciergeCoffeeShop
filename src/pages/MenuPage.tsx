import { Hero } from '../components/Hero';
import { MenuSection } from '../components/MenuSection';

// Menu data - in a real app, this would come from an API
const menuData = {
    coffee: [
        {
            id: '1',
            name: 'Signature Espresso',
            description: 'Rich, full-bodied espresso shot made from our house blend of Ethiopian and Colombian beans',
            price: '$3.50',
            isSignature: true
        },
        {
            id: '2',
            name: 'Cappuccino',
            description: 'Classic cappuccino with velvety steamed milk and a perfect foam layer',
            price: '$4.50'
        },
        {
            id: '3',
            name: 'Flat White',
            description: 'Double shot espresso with microfoam milk, Australian style',
            price: '$5.00'
        },
        {
            id: '4',
            name: 'Cold Brew',
            description: 'Smooth, low-acid coffee brewed cold for 12 hours, served over ice',
            price: '$4.00'
        },
        {
            id: '5',
            name: 'Beirut Blend',
            description: 'Our special Middle Eastern inspired coffee with cardamom and rose water hints',
            price: '$5.50',
            isSignature: true
        },
        {
            id: '6',
            name: 'Mocha',
            description: 'Rich espresso with steamed milk and Belgian dark chocolate',
            price: '$5.25'
        }
    ],
    pastries: [
        {
            id: '7',
            name: 'Croissant',
            description: 'Buttery, flaky French croissant baked fresh daily',
            price: '$3.00'
        },
        {
            id: '8',
            name: 'Pain au Chocolat',
            description: 'Classic French pastry with rich dark chocolate filling',
            price: '$3.50'
        },
        {
            id: '9',
            name: 'Manakish Zaatar',
            description: 'Traditional Lebanese flatbread topped with zaatar and olive oil',
            price: '$4.00',
            isSignature: true
        },
        {
            id: '10',
            name: 'Baklava Cheesecake',
            description: 'Fusion dessert combining New York cheesecake with Middle Eastern baklava',
            price: '$6.50',
            isSignature: true
        },
        {
            id: '11',
            name: 'Almond Croissant',
            description: 'Croissant filled with almond cream and topped with sliced almonds',
            price: '$4.00'
        },
        {
            id: '12',
            name: 'Lebanese Ma\'amoul',
            description: 'Traditional shortbread cookies filled with dates or pistachios',
            price: '$2.50'
        }
    ],
    specialty: [
        {
            id: '13',
            name: 'Iced Cardamom Latte',
            description: 'Refreshing iced latte infused with aromatic cardamom spice',
            price: '$5.75',
            isSignature: true
        },
        {
            id: '14',
            name: 'Rose Water Macchiato',
            description: 'Elegant macchiato with a hint of rose water and pistachios',
            price: '$6.00',
            isSignature: true
        },
        {
            id: '15',
            name: 'Sahlab Latte',
            description: 'Traditional Middle Eastern drink reimagined as a warm, creamy latte',
            price: '$5.50'
        },
        {
            id: '16',
            name: 'Turkish Coffee',
            description: 'Authentic Turkish coffee served with Turkish delight',
            price: '$4.50'
        }
    ],
    breakfast: [
        {
            id: '17',
            name: 'Avocado Toast',
            description: 'Sourdough toast topped with smashed avocado, cherry tomatoes, and feta',
            price: '$8.50'
        },
        {
            id: '18',
            name: 'Lebanese Breakfast Plate',
            description: 'Hummus, labneh, olives, tomatoes, cucumbers, and fresh bread',
            price: '$12.00',
            isSignature: true
        },
        {
            id: '19',
            name: 'Shakshuka',
            description: 'Poached eggs in spiced tomato sauce, served with fresh bread',
            price: '$11.00'
        },
        {
            id: '20',
            name: 'Granola Bowl',
            description: 'House-made granola with Greek yogurt, fresh berries, and honey',
            price: '$9.00'
        }
    ]
};

export const MenuPage = () => {
    return (
        <div className="min-h-screen bg-cream-50">
            <Hero />

            <main className="container mx-auto px-6 py-16">
                <MenuSection
                    title="Coffee & Espresso"
                    items={menuData.coffee}
                    category="Coffee"
                    icon="☕"
                />

                <MenuSection
                    title="Specialty Drinks"
                    items={menuData.specialty}
                    category="Specialty"
                    icon="✨"
                />

                <MenuSection
                    title="Fresh Pastries"
                    items={menuData.pastries}
                    category="Pastry"
                    icon="🥐"
                />

                <MenuSection
                    title="All Day Breakfast"
                    items={menuData.breakfast}
                    category="Breakfast"
                    icon="🍳"
                />
            </main>

            {/* Footer */}
            <footer className="bg-brown-900 text-cream-100 py-12">
                <div className="container mx-auto px-6 text-center">
                    <h3 className="font-accent text-2xl font-bold mb-4">Visit Us</h3>
                    <p className="text-cream-300 mb-2">Badaro, Beirut, Lebanon</p>
                    <p className="text-cream-300 mb-4">Open Daily: 7:00 AM - 11:00 PM</p>
                    <div className="flex justify-center gap-6 text-primary-400">
                        <span>📞 +961 1 234 567</span>
                        <span>📧 hello@conciergecoffee.com</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}; 