import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { appointmentFormSchema, contactFormSchema, type AppointmentFormData, type ContactFormData } from "../lib/schemas";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Select } from "../components/ui/select";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { Card, CardContent, CardDescription, CardTitle } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { useEffect } from "react";

export default function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const {
        register: registerAppointment,
        handleSubmit: handleAppointmentSubmit,
        formState: { errors: appointmentErrors, isSubmitting: isAppointmentSubmitting },
        reset: resetAppointment,
    } = useForm<AppointmentFormData>({
        resolver: zodResolver(appointmentFormSchema),
    });

    const {
        register: registerContact,
        handleSubmit: handleContactSubmit,
        formState: { errors: contactErrors, isSubmitting: isContactSubmitting },
        reset: resetContact,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
    });

    const onAppointmentSubmit = async (data: AppointmentFormData) => {
        // Mock submission with loading state
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log("Appointment data:", data);
        alert("Your appointment request has been submitted successfully! We will contact you soon.");
        resetAppointment();
    };

    const onContactSubmit = async (data: ContactFormData) => {
        // Mock submission with loading state
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log("Contact data:", data);
        alert("Your message has been sent successfully! We will get back to you soon.");
        resetContact();
    };

    return (
        <div>
            {/* Hero Section */}
            <section className="relative py-32 overflow-hidden text-white bg-center bg-no-repeat bg-cover" style={{ backgroundImage: 'url(/pexels-august-de-richelieu-4427627.jpg)' }}>
                <div className="absolute inset-0 z-10 bg-orange-500/20"></div>
                <div className="container relative z-20 px-4 mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h1 className="mb-6 text-4xl font-bold md:text-5xl">Contact Us</h1>                        <hr className="w-40 mx-auto border-t-2 border-[#eaa636] mb-4" />
                        <p className="text-xl text-blue-100">
                            Get in touch with our legal experts today
                        </p>
                    </motion.div>
                </div>
            </section>


            {/* Contact Information */}
            <section className="py-12 bg-gray-50">
                <div className="container px-4 mx-auto">
                    <div className="grid max-w-5xl grid-cols-1 gap-6 mx-auto md:grid-cols-3">
                        <Card>
                            <CardContent className="p-6 text-center">
                                <div className="mb-3 text-3xl">📍</div>
                                <CardTitle className="mb-2 text-lg">Address</CardTitle>
                                <CardDescription>
                                    1440 New York Ave NW<br />
                                    Washington, DC 20005<br />
                                    United States
                                </CardDescription>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6 text-center">
                                <div className="mb-3 text-3xl">📞</div>
                                <CardTitle className="mb-2 text-lg">Phone</CardTitle>
                                <CardDescription>
                                    <a href="tel:+16785610052" className="hover:text-primary">
                                        (678) 561-0052
                                    </a>
                                </CardDescription>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6 text-center">
                                <div className="mb-3 text-3xl">✉️</div>
                                <CardTitle className="mb-2 text-lg">Email</CardTitle>
                                <CardDescription>
                                    <a href="mailto:stancillegal@gmail.com" className="hover:text-primary">
                                        stancillegal@gmail.com
                                    </a>
                                </CardDescription>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Forms Section */}
            <section className="py-20 bg-white">
                <div className="container px-4 mx-auto">
                    <div className="max-w-3xl mx-auto">
                        <Tabs defaultValue="appointment" className="w-full">
                            <TabsList className="grid w-full grid-cols-2 mb-8 h-fit">
                                <TabsTrigger value="appointment">Book Appointment</TabsTrigger>
                                <TabsTrigger value="contact">Send Message</TabsTrigger>
                            </TabsList>

                            <TabsContent value="appointment">
                                <Card>
                                    <CardContent className="p-6">
                                        <h3 className="mb-6 text-2xl font-bold">Schedule a Consultation</h3>
                                        <form onSubmit={handleAppointmentSubmit(onAppointmentSubmit)} className="space-y-4">
                                            <div>
                                                <Label htmlFor="fullName">Full Name *</Label>
                                                <Input
                                                    id="fullName"
                                                    {...registerAppointment("fullName")}
                                                    placeholder="John Doe"
                                                />
                                                {appointmentErrors.fullName && (
                                                    <p className="mt-1 text-sm text-red-500">{appointmentErrors.fullName.message}</p>
                                                )}
                                            </div>

                                            <div>
                                                <Label htmlFor="email">Email *</Label>
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    {...registerAppointment("email")}
                                                    placeholder="john@example.com"
                                                />
                                                {appointmentErrors.email && (
                                                    <p className="mt-1 text-sm text-red-500">{appointmentErrors.email.message}</p>
                                                )}
                                            </div>

                                            <div>
                                                <Label htmlFor="phone">Phone *</Label>
                                                <Input
                                                    id="phone"
                                                    type="tel"
                                                    {...registerAppointment("phone")}
                                                    placeholder="+1234567890"
                                                />
                                                {appointmentErrors.phone && (
                                                    <p className="mt-1 text-sm text-red-500">{appointmentErrors.phone.message}</p>
                                                )}
                                            </div>

                                            <div>
                                                <Label htmlFor="caseType">Case Type *</Label>
                                                <Select id="caseType" {...registerAppointment("caseType")}>
                                                    <option value="">Select a case type</option>
                                                    <option value="labor">Labor</option>
                                                    <option value="medical">Medical & Health Care</option>
                                                    <option value="mining">Mining</option>
                                                    <option value="civil">Civil & Criminal</option>
                                                    <option value="family">Family & Marriage</option>
                                                    <option value="corporate">Corporate & Investment</option>
                                                </Select>
                                                {appointmentErrors.caseType && (
                                                    <p className="mt-1 text-sm text-red-500">{appointmentErrors.caseType.message}</p>
                                                )}
                                            </div>

                                            <div>
                                                <Label htmlFor="preferredDate">Preferred Date *</Label>
                                                <Input
                                                    id="preferredDate"
                                                    type="date"
                                                    {...registerAppointment("preferredDate")}
                                                />
                                                {appointmentErrors.preferredDate && (
                                                    <p className="mt-1 text-sm text-red-500">{appointmentErrors.preferredDate.message}</p>
                                                )}
                                            </div>

                                            <div>
                                                <Label htmlFor="details">Case Details *</Label>
                                                <Textarea
                                                    id="details"
                                                    {...registerAppointment("details")}
                                                    placeholder="Please provide details about your case..."
                                                    rows={5}
                                                />
                                                {appointmentErrors.details && (
                                                    <p className="mt-1 text-sm text-red-500">{appointmentErrors.details.message}</p>
                                                )}
                                            </div>

                                            <Button type="submit" disabled={isAppointmentSubmitting} className="w-full">
                                                {isAppointmentSubmitting ? "Submitting..." : "Schedule Appointment"}
                                            </Button>
                                        </form>
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            <TabsContent value="contact">
                                <Card>
                                    <CardContent className="p-6">
                                        <h3 className="mb-6 text-2xl font-bold">Get in Touch</h3>
                                        <form onSubmit={handleContactSubmit(onContactSubmit)} className="space-y-4">
                                            <div>
                                                <Label htmlFor="contact-name">Name *</Label>
                                                <Input
                                                    id="contact-name"
                                                    {...registerContact("name")}
                                                    placeholder="John Doe"
                                                />
                                                {contactErrors.name && (
                                                    <p className="mt-1 text-sm text-red-500">{contactErrors.name.message}</p>
                                                )}
                                            </div>

                                            <div>
                                                <Label htmlFor="contact-email">Email *</Label>
                                                <Input
                                                    id="contact-email"
                                                    type="email"
                                                    {...registerContact("email")}
                                                    placeholder="john@example.com"
                                                />
                                                {contactErrors.email && (
                                                    <p className="mt-1 text-sm text-red-500">{contactErrors.email.message}</p>
                                                )}
                                            </div>

                                            <div>
                                                <Label htmlFor="contact-phone">Phone *</Label>
                                                <Input
                                                    id="contact-phone"
                                                    type="tel"
                                                    {...registerContact("phone")}
                                                    placeholder="+1234567890"
                                                />
                                                {contactErrors.phone && (
                                                    <p className="mt-1 text-sm text-red-500">{contactErrors.phone.message}</p>
                                                )}
                                            </div>

                                            <div>
                                                <Label htmlFor="subject">Subject</Label>
                                                <Input
                                                    id="subject"
                                                    {...registerContact("subject")}
                                                    placeholder="How can we help you?"
                                                />
                                                {contactErrors.subject && (
                                                    <p className="mt-1 text-sm text-red-500">{contactErrors.subject.message}</p>
                                                )}
                                            </div>

                                            <div>
                                                <Label htmlFor="message">Message *</Label>
                                                <Textarea
                                                    id="message"
                                                    {...registerContact("message")}
                                                    placeholder="Your message here..."
                                                    rows={5}
                                                />
                                                {contactErrors.message && (
                                                    <p className="mt-1 text-sm text-red-500">{contactErrors.message.message}</p>
                                                )}
                                            </div>

                                            <Button type="submit" disabled={isContactSubmitting} className="w-full">
                                                {isContactSubmitting ? "Sending..." : "Send Message"}
                                            </Button>
                                        </form>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </section>
        </div>
    );
}

