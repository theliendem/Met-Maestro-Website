import React from "react";
import { Link } from "react-router-dom";
import {
	FooterContainer,
	FooterContent,
	FooterSection,
	FooterTitle,
	FooterLink,
	Copyright,
} from "./Footer.styles";

const Footer = () => {
	return (
		<FooterContainer>
			<FooterContent>
				<FooterSection>
					<FooterTitle>Met Maestro</FooterTitle>
					<p>The ultimate metronome for musicians of all levels.</p>
				</FooterSection>

				<FooterSection>
					<FooterTitle>Product</FooterTitle>
					<FooterLink href="#features">Features</FooterLink>
					<FooterLink href="#modes">Modes</FooterLink>
					<FooterLink href="#download">Download</FooterLink>
				</FooterSection>

				<FooterSection>
					<FooterTitle>Support</FooterTitle>
					<FooterLink href="https://neildembla.com/contact">
						Contact Us
					</FooterLink>
					<FooterLink as={Link} to="/feedback">
						Feedback
					</FooterLink>
				</FooterSection>

				<FooterSection>
					<FooterTitle>Company</FooterTitle>
					<FooterLink href="#about">About</FooterLink>
					<FooterLink href="https://www.privacypolicies.com/live/29f52fb5-1491-41ea-80fe-9af201007fa9">
						Privacy Policy
					</FooterLink>
					<FooterLink href="https://neildembla.com/">
						Developer's Website
					</FooterLink>
				</FooterSection>
			</FooterContent>

			<Copyright>
				<p>
					&copy; 2025{" "}
					<a
						href="https://neildembla.com/"
						target="_blank"
						rel="noopener noreferrer"
						style={{ color: "inherit", textDecoration: "underline" }}
					>
						Neil Dembla
					</a>
					. All rights reserved.
				</p>
			</Copyright>
		</FooterContainer>
	);
};

export default Footer;
