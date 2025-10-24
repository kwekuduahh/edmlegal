import { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { cn } from '../../lib/utils';
import { Scale } from 'lucide-react';

export const Header = () => {
    const scrollPosition = useScrollPosition();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const isScrolled = scrollPosition > 50;

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Practice Areas', path: '/practice-areas' },
        { name: 'Our Attorneys', path: '/attorneys' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <motion.header
            initial={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}
            animate={{
                backgroundColor: isScrolled
                    ? 'rgba(255, 255, 255, 1)'
                    : 'rgba(255, 255, 255, 0)',
                boxShadow: isScrolled ? '0 2px 4px rgba(0,0,0,0.1)' : 'none',
            }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 z-50"
        >
            {/* Top Bar */}
            <div
                className={cn(
                    'border-b transition-colors',
                    isScrolled ? 'border-gray-200 bg-white' : 'border-white/20 bg-black/30'
                )}
            >
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between py-2">
                        <div className="flex items-center gap-2 text-sm">
                            <span
                                className={cn(
                                    'transition-colors',
                                    isScrolled ? 'text-gray-700' : 'text-white'
                                )}
                            >
                                📞
                            </span>
                            <a
                                href="tel:+18324297638"
                                className={cn(
                                    'text-sm transition-colors hover:text-[#eaa636]',
                                    isScrolled ? 'text-gray-700' : 'text-white'
                                )}
                            >
                                +18324297638
                            </a>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <span
                                className={cn(
                                    'transition-colors',
                                    isScrolled ? 'text-gray-700' : 'text-white'
                                )}
                            >
                                Need Help?
                            </span>
                            <a
                                href="tel:+13324000265"
                                className={cn(
                                    'font-semibold transition-colors hover:text-[#eaa636]',
                                    isScrolled ? 'text-gray-900' : 'text-white'
                                )}
                            >
                                +13324000265
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between py-4">
                    {/* Logo */}
                    <Link
                        to="/"
                        className={cn(
                            'text-xl font-bold transition-colors',
                            isScrolled ? 'text-gray-900' : 'text-white'
                        )}
                    >
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 flex items-center justify-center">
                                <span className="text-white font-bold text-sm"><Scale size={20} /></span>
                            </div>
                            <span className="hidden lg:inline">Flints Legal Solutions</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={cn(
                                    'text-sm font-medium transition-colors hover:text-[#eaa636]',
                                    isScrolled ? 'text-gray-900' : 'text-white'
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <div className="w-6 h-5 flex flex-col justify-between">
                            <span
                                className={cn(
                                    'w-full h-0.5 transition-all',
                                    isScrolled ? 'bg-gray-900' : 'bg-white',
                                    isMobileMenuOpen && 'rotate-45 translate-y-2'
                                )}
                            />
                            <span
                                className={cn(
                                    'w-full h-0.5 transition-all',
                                    isScrolled ? 'bg-gray-900' : 'bg-white',
                                    isMobileMenuOpen && 'opacity-0'
                                )}
                            />
                            <span
                                className={cn(
                                    'w-full h-0.5 transition-all',
                                    isScrolled ? 'bg-gray-900' : 'bg-white',
                                    isMobileMenuOpen && '-rotate-45 -translate-y-2'
                                )}
                            />
                        </div>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <motion.nav
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden pb-4 bg-white rounded-lg shadow-lg"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className="block py-2 px-4 text-gray-900 hover:text-[#eaa636] hover:bg-gray-50"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </motion.nav>
                )}
            </div>
        </motion.header>
    );
};

