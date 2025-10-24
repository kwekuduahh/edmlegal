import { z } from 'zod';

export const contactFormSchema = z.object({
	name: z.string().min(2, 'Name must be at least 2 characters'),
	email: z.string().email('Invalid email address'),
	phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number'),
	message: z.string().min(10, 'Message must be at least 10 characters'),
	subject: z.string().optional(),
});

export const appointmentFormSchema = z.object({
	fullName: z.string().min(2, 'Full name must be at least 2 characters'),
	email: z.string().email('Invalid email address'),
	phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number'),
	caseType: z.enum(
		['labor', 'medical', 'mining', 'civil', 'family', 'corporate'],
		{
			message: 'Please select a case type',
		}
	),
	preferredDate: z.string().min(1, 'Please select a preferred date'),
	details: z.string().min(20, 'Details must be at least 20 characters'),
});

export const newsletterFormSchema = z.object({
	email: z.string().email('Invalid email address'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type AppointmentFormData = z.infer<typeof appointmentFormSchema>;
export type NewsletterFormData = z.infer<typeof newsletterFormSchema>;
