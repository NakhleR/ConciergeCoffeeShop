import { Hero } from '../components/Hero';
import { MenuSection } from '../components/MenuSection';
import { Phone, Instagram } from 'lucide-react';

// Menu data from Concierge Coffee Shop
const menuData = {
    hotCoffee: [
        {
            id: '1',
            name: 'Espresso',
            description: 'Rich, concentrated coffee shot',
            price: '225,000 LBP'
        },
        {
            id: '2',
            name: 'Double Espresso',
            description: 'Double shot of our premium espresso',
            price: '290,000 LBP'
        },
        {
            id: '3',
            name: 'Long Black',
            description: 'Espresso with hot water, preserving the crema',
            price: '300,000 LBP'
        },
        {
            id: '4',
            name: 'Cortado',
            description: 'Equal parts espresso and warm steamed milk',
            price: '330,000 LBP'
        },
        {
            id: '5',
            name: 'Macchiato',
            description: 'Espresso "marked" with a dollop of foamed milk',
            price: '300,000 LBP'
        },
        {
            id: '6',
            name: 'Cappuccino',
            description: 'Espresso with steamed milk and thick foam layer',
            price: '350,000 LBP'
        },
        {
            id: '7',
            name: 'Latte',
            description: 'Espresso with steamed milk and light foam',
            price: '360,000 LBP'
        },
        {
            id: '8',
            name: 'Flat White',
            description: 'Double shot espresso with microfoam milk',
            price: '360,000 LBP'
        },
        {
            id: '9',
            name: 'Raw Hot Chocolate',
            description: 'Rich, organic hot chocolate made from raw cacao',
            price: '400,000 LBP'
        },
        {
            id: '10',
            name: 'Mocha',
            description: 'Espresso with steamed milk and chocolate',
            price: '400,000 LBP'
        },
        {
            id: '11',
            name: 'White Mocha',
            description: 'Espresso with steamed milk and white chocolate',
            price: '400,000 LBP'
        },
        {
            id: '12',
            name: 'Caramel Macchiato',
            description: 'Vanilla latte with caramel drizzle',
            price: '400,000 LBP'
        },
        {
            id: '13',
            name: 'Spanish Latte',
            description: 'Latte with condensed milk and cinnamon',
            price: '390,000 LBP'
        },
        {
            id: '14',
            name: 'Matcha Vanilla',
            description: 'Premium matcha with vanilla and steamed milk',
            price: '410,000 LBP'
        }
    ],
    coldDrinks: [
        {
            id: '15',
            name: 'Iced Latte',
            description: 'Chilled espresso with cold milk over ice',
            price: '390,000 LBP'
        },
        {
            id: '16',
            name: 'Iced Spanish Latte',
            description: 'Cold version of our Spanish latte',
            price: '430,000 LBP'
        },
        {
            id: '17',
            name: 'Iced Caramel Macchiato',
            description: 'Cold caramel macchiato over ice',
            price: '400,000 LBP'
        },
        {
            id: '18',
            name: 'Double Shot Ice Shaken',
            description: 'Shaken espresso over ice for maximum flavor',
            price: '420,000 LBP'
        },
        {
            id: '19',
            name: 'Cold Brew',
            description: 'Smooth, cold-brewed coffee served over ice',
            price: '420,000 LBP'
        },
        {
            id: '20',
            name: 'Affogato',
            description: 'Vanilla ice cream "drowned" in hot espresso',
            price: '400,000 LBP'
        },
        {
            id: '21',
            name: 'Mixed Berries Smoothie',
            description: 'Blend of fresh mixed berries and yogurt',
            price: '410,000 LBP'
        },
        {
            id: '22',
            name: 'Mango-Passionfruit',
            description: 'Tropical smoothie with mango and passionfruit',
            price: '480,000 LBP'
        },
        {
            id: '23',
            name: 'Strawberry Smoothie',
            description: 'Fresh strawberry smoothie with yogurt',
            price: '410,000 LBP'
        },
        {
            id: '24',
            name: 'Ice Tea (Peach/Raspberry)',
            description: 'Refreshing iced tea in peach or raspberry flavor',
            price: '280,000 LBP'
        },
        {
            id: '25',
            name: 'Fizzy Ice Tea',
            description: 'Sparkling iced tea for extra refreshment',
            price: '320,000 LBP'
        },
        {
            id: '26',
            name: 'Iced Matcha Vanilla',
            description: 'Chilled matcha latte with vanilla',
            price: '410,000 LBP'
        }
    ],
    filteredCoffee: [
        {
            id: '27',
            name: 'V60 Ethiopian',
            description: 'Single origin Ethiopian beans, pour-over method',
            price: '360,000 LBP'
        },
        {
            id: '28',
            name: 'V60 Colombian',
            description: 'Colombian single origin, V60 pour-over',
            price: '360,000 LBP'
        },
        {
            id: '29',
            name: 'V60 Uganda',
            description: 'Ugandan single origin coffee',
            price: '360,000 LBP'
        },
        {
            id: '30',
            name: 'V60 Organic',
            description: 'Certified organic coffee beans',
            price: '400,000 LBP'
        },
        {
            id: '31',
            name: 'V60 Tanzanian',
            description: 'Tanzanian single origin pour-over',
            price: '360,000 LBP'
        },
        {
            id: '32',
            name: 'V60 Sumatra',
            description: 'Indonesian Sumatra beans',
            price: '360,000 LBP'
        },
        {
            id: '33',
            name: 'V60 Decaf',
            description: 'Decaffeinated coffee, full flavor',
            price: '360,000 LBP'
        }
    ],
    retailCoffee: [
        {
            id: '34',
            name: 'Concierge Blend',
            description: 'Our signature house blend, perfect for home brewing',
            price: '850,000 LBP',
            isSignature: true
        },
        {
            id: '35',
            name: 'Tanzanian Blend',
            description: 'Premium Tanzanian coffee beans',
            price: '850,000 LBP'
        },
        {
            id: '36',
            name: 'Ethiopian Blend',
            description: 'Single origin Ethiopian coffee beans',
            price: '850,000 LBP'
        },
        {
            id: '37',
            name: 'Colombian Blend',
            description: 'Colombian coffee beans for home brewing',
            price: '850,000 LBP'
        },
        {
            id: '38',
            name: 'Organic Blend',
            description: 'Certified organic coffee beans',
            price: '900,000 LBP'
        },
        {
            id: '39',
            name: 'Uganda Blend',
            description: 'Ugandan single origin beans',
            price: '850,000 LBP'
        },
        {
            id: '40',
            name: 'Sumatra Blend',
            description: 'Indonesian Sumatra coffee beans',
            price: '850,000 LBP'
        }
    ],
    teaAndOthers: [
        {
            id: '41',
            name: 'Black Tea',
            description: 'Classic black tea blend',
            price: '250,000 LBP'
        },
        {
            id: '42',
            name: 'Chamomile Tea',
            description: 'Soothing chamomile herbal tea',
            price: '250,000 LBP'
        },
        {
            id: '43',
            name: 'Fresh Ginger Tea',
            description: 'Warming fresh ginger tea',
            price: '250,000 LBP'
        },
        {
            id: '44',
            name: 'Zhurat',
            description: 'Traditional Lebanese herbal tea blend',
            price: '250,000 LBP'
        },
        {
            id: '45',
            name: 'Green Tea',
            description: 'Premium green tea',
            price: '250,000 LBP'
        },
        {
            id: '46',
            name: 'Matte',
            description: 'South American yerba mate',
            price: '350,000 LBP'
        }
    ],
    refreshments: [
        {
            id: '47',
            name: 'Orange Juice',
            description: 'Fresh squeezed orange juice',
            price: '300,000 LBP'
        },
        {
            id: '48',
            name: 'Lemonade',
            description: 'Fresh lemonade',
            price: '300,000 LBP'
        },
        {
            id: '49',
            name: 'Water',
            description: 'Still water',
            price: '50,000 LBP'
        },
        {
            id: '50',
            name: 'Sparkling Water',
            description: 'Sparkling mineral water',
            price: '140,000 LBP'
        }
    ],
    addOns: [
        {
            id: '51',
            name: 'Shot Espresso',
            description: 'Add an extra shot to any drink',
            price: '90,000 LBP'
        },
        {
            id: '52',
            name: 'Syrups',
            description: 'Vanilla, caramel, hazelnut, or other flavors',
            price: '70,000 LBP'
        },
        {
            id: '53',
            name: 'Sauce',
            description: 'Chocolate or caramel sauce',
            price: '70,000 LBP'
        },
        {
            id: '54',
            name: 'Honey',
            description: 'Natural honey sweetener',
            price: '70,000 LBP'
        },
        {
            id: '55',
            name: 'Condensed Milk',
            description: 'Sweet condensed milk',
            price: '70,000 LBP'
        }
    ],
    dessert: [
        {
            id: '56',
            name: 'Cookies',
            description: 'Freshly baked cookies',
            price: '240,000 LBP'
        },
        {
            id: '57',
            name: 'Brownies',
            description: 'Rich chocolate brownies',
            price: '300,000 LBP'
        },
        {
            id: '58',
            name: 'Chocolate Bar',
            description: 'Premium chocolate bar',
            price: '220,000 LBP'
        }
    ],
    alcohol: [
        {
            id: '59',
            name: 'Beer',
            description: 'Local or imported beer',
            price: '250,000 LBP'
        },
        {
            id: '60',
            name: 'Red Wine',
            description: 'Selection of red wines',
            price: '360,000 LBP'
        },
        {
            id: '61',
            name: 'Rosé Wine',
            description: 'Refreshing rosé wine',
            price: '360,000 LBP'
        }
    ]
};

export const MenuPage = () => {
    return (
        <div className="min-h-screen bg-cream">
            <Hero />

            <div className="w-full bg-cream relative">
                <div className="absolute inset-0 bg-cream"></div>
                <main className="container mx-auto px-6 py-16 relative z-10">
                    <MenuSection
                        title="Hot Coffee"
                        items={menuData.hotCoffee}
                        category="Hot Coffee"
                    />

                    <MenuSection
                        title="Cold Drinks"
                        items={menuData.coldDrinks}
                        category="Cold Drinks"
                    />

                    <MenuSection
                        title="Filtered Coffee"
                        items={menuData.filteredCoffee}
                        category="Filtered Coffee"
                    />

                    <MenuSection
                        title="Tea Selection"
                        items={menuData.teaAndOthers}
                        category="Tea & Others"
                    />

                    <MenuSection
                        title="Refreshments"
                        items={menuData.refreshments}
                        category="Refreshments"
                    />

                    <MenuSection
                        title="Retail Coffee"
                        items={menuData.retailCoffee}
                        category="Retail Coffee"
                        subtitle="250 G"
                    />

                    <MenuSection
                        title="Add-ons"
                        items={menuData.addOns}
                        category="Add-ons"
                    />

                    <MenuSection
                        title="Dessert"
                        items={menuData.dessert}
                        category="Dessert"
                    />

                    <MenuSection
                        title="Alcohol"
                        items={menuData.alcohol}
                        category="Alcohol"
                    />
                </main>
            </div>
        </div >
    );
}; 