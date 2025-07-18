import { Phone, Instagram } from 'lucide-react'
import React from 'react'

const Footer = () => {
    return (
        < div className="relative text-cream-100 py-12 w-full overflow-hidden" >
            < div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url("https://images.pexels.com/photos/585750/pexels-photo-585750.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")'
                }
                }
            ></div >

            {/* Black Overlay */}
            < div className="absolute inset-0 bg-black/70" ></div >

            <div className="container mx-auto px-6 text-center relative z-10">
                <h3 className="font-accent text-2xl font-bold mb-4">Visit Us</h3>
                <div className="text-cream-300 mb-4">
                    <p className="mb-2">Monday - Saturday: 7:00 AM - 11:00 PM</p>
                    <p>Sunday: 7:00 AM - 10:00 AM</p>
                </div>
                <div className="flex justify-center items-center gap-6 text-primary-400">
                    <div className="flex items-center gap-2">
                        <Phone size={18} />
                        <span>+961 81 309 123</span>
                    </div>
                    <a
                        href="https://instagram.com/concierge.coffee"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors duration-200 no-underline"
                    >
                        <Instagram size={18} />
                        <span>@concierge.coffee</span>
                    </a>
                </div>
            </div>
        </div >
    )
}

export default Footer