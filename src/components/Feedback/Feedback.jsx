import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
	FeedbackContainer,
	FeedbackTitle,
	FeedbackDescription,
	FeedbackForm,
	FormGroup,
	Label,
	Input,
	TextArea,
	SubmitButton,
	AlternativeContact,
	ContactInfo,
	ContactEmail,
} from "./Feedback.styles";

const Feedback = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		feedback: "",
	});
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!formData.feedback.trim()) {
			alert("Please provide your feedback.");
			return;
		}

		setIsSubmitting(true);

		try {
			// EmailJS configuration
			const templateParams = {
				from_name: formData.name || "Anonymous",
				from_email: formData.email || "No email provided",
				message: formData.feedback,
				time: new Date().toLocaleString(),
			};

			// Send email using EmailJS
			await emailjs.send(
				import.meta.env.VITE_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
				templateParams,
				import.meta.env.VITE_EMAILJS_PUBLIC_KEY
			);

			setIsSubmitted(true);
			setFormData({ name: "", email: "", feedback: "" });
		} catch (error) {
			console.error("EmailJS error:", error);
			alert(
				"There was an error submitting your feedback. Please try again or email us directly."
			);
		} finally {
			setIsSubmitting(false);
		}
	};

	if (isSubmitted) {
		return (
			<FeedbackContainer>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<FeedbackTitle>Thank You!</FeedbackTitle>
					<FeedbackDescription>
						Your feedback has been submitted successfully. We appreciate you
						taking the time to share your thoughts with us.
					</FeedbackDescription>
					<SubmitButton onClick={() => setIsSubmitted(false)}>
						Submit Another Feedback
					</SubmitButton>
				</motion.div>
			</FeedbackContainer>
		);
	}

	return (
		<FeedbackContainer>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<FeedbackTitle>We'd Love Your Feedback</FeedbackTitle>
				<FeedbackDescription>
					Help us improve Met Maestro by sharing your thoughts, suggestions, or
					reporting any issues you've encountered.
				</FeedbackDescription>

				<FeedbackForm onSubmit={handleSubmit}>
					<FormGroup>
						<Label htmlFor="name">Name (Optional)</Label>
						<Input
							type="text"
							id="name"
							name="name"
							value={formData.name}
							onChange={handleInputChange}
							placeholder="Your name"
						/>
					</FormGroup>

					<FormGroup>
						<Label htmlFor="email">Email (Optional)</Label>
						<Input
							type="email"
							id="email"
							name="email"
							value={formData.email}
							onChange={handleInputChange}
							placeholder="your.email@example.com"
						/>
					</FormGroup>

					<FormGroup>
						<Label htmlFor="feedback">Feedback *</Label>
						<TextArea
							id="feedback"
							name="feedback"
							value={formData.feedback}
							onChange={handleInputChange}
							placeholder="Tell us what you think about Met Maestro..."
							required
							rows={6}
						/>
					</FormGroup>

					<SubmitButton type="submit" disabled={isSubmitting}>
						{isSubmitting ? "Submitting..." : "Submit Feedback"}
					</SubmitButton>
				</FeedbackForm>

				<AlternativeContact>
					<ContactInfo>
						<p>Prefer to email us directly?</p>
						<ContactEmail href="mailto:contact@metmaestro.com">
							contact@metmaestro.com
						</ContactEmail>
					</ContactInfo>
				</AlternativeContact>
			</motion.div>
		</FeedbackContainer>
	);
};

export default Feedback;
