import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    newsletterFormSchema,
    type NewsletterFormData,
} from '../../lib/schemas';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Label } from '../ui/label';

export const Footer = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<NewsletterFormData>({
        resolver: zodResolver(newsletterFormSchema),
    });

    const onSubmit = async (data: NewsletterFormData) => {
        // Mock submission
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log('Newsletter signup:', data);
        alert('Thank you for subscribing to our newsletter!');
        reset();
    };

    return (
        <footer className="bg-[#111111] text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Logo and Contact Info */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-12 h-12 bg-[#eaa636] rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-lg">⚖️</span>
                            </div>
                        </div>
                        <div className="space-y-3 text-gray-300 text-sm">
                            <p className="flex items-start gap-2">
                                <span>📍</span>
                                <span>
                                    1440 New York Ave NW, Washington, DC 20005, United States
                                </span>
                            </p>
                            <p className="flex items-center gap-2">
                                <span>📞</span>
                                <a
                                    href="tel:+18324297638"
                                    className="hover:text-[#eaa636] transition-colors"
                                >
                                    +18324297638
                                </a>
                            </p>
                            <p className="flex items-center gap-2">
                                <span>✉️</span>
                                <a
                                    href="mailto:info@flintslegalsolutions.com"
                                    className="hover:text-[#eaa636] transition-colors"
                                >
                                    info@flintslegalsolutions.com
                                </a>
                            </p>
                            <p className="flex items-center gap-2">
                                <span>✉️</span>
                                <a
                                    href="mailto:brineyknightburg@gmail.com"
                                    className="hover:text-[#eaa636] transition-colors"
                                >
                                    brineyknightburg@gmail.com
                                </a>
                            </p>
                            <button className="text-[#eaa636] hover:text-[#eaa636]/80 transition-colors text-sm font-semibold">
                                📥 Download Brochure
                            </button>
                        </div>
                    </div>

                    {/* Practice Areas */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Practice Areas</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-300 hover:text-[#eaa636] transition-colors flex items-center gap-2"
                                >
                                    <span className="text-[#eaa636]">›</span>
                                    Corporate and M&A
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-300 hover:text-[#eaa636] transition-colors flex items-center gap-2"
                                >
                                    <span className="text-[#eaa636]">›</span>
                                    Construction and Real Estate
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-300 hover:text-[#eaa636] transition-colors flex items-center gap-2"
                                >
                                    <span className="text-[#eaa636]">›</span>
                                    Commercial Dispute Resolution
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-300 hover:text-[#eaa636] transition-colors flex items-center gap-2"
                                >
                                    <span className="text-[#eaa636]">›</span>
                                    Employment
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-300 hover:text-[#eaa636] transition-colors flex items-center gap-2"
                                >
                                    <span className="text-[#eaa636]">›</span>
                                    Banking and Finance
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Empty column for spacing */}
                    <div></div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
                        <p className="text-gray-300 mb-4 text-sm">
                            Signup for our newsletter to get the latest news, updates and
                            special offers in your inbox.
                        </p>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                            <div>
                                <Label htmlFor="newsletter-email" className="sr-only">
                                    Email
                                </Label>
                                <div className="flex gap-2">
                                    <Input
                                        id="newsletter-email"
                                        type="email"
                                        placeholder="Enter your email"
                                        {...register('email')}
                                        className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 text-sm"
                                    />
                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="bg-[#eaa636] hover:bg-[#eaa636]/80 text-white px-6"
                                    >
                                        →
                                    </Button>
                                </div>
                                {errors.email && (
                                    <p className="text-red-400 text-sm mt-1">
                                        {errors.email.message}
                                    </p>
                                )}
                            </div>
                        </form>
                        <p className="text-xs text-gray-400 mt-3">
                            Your email is safe with us. We don't spam.
                        </p>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-800 pt-6 text-center text-gray-400 text-sm">
                    <p>© Copyright 2025 - Flints Legal Solutions</p>
                </div>
            </div>
        </footer>
    );
};

