import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
	HeaderContainer,
	Nav,
	Logo,
	NavList,
	NavItem,
	NavLink,
	CTAButton,
} from "./Header.styles";

const Header = () => {
	return (
		<HeaderContainer
			as={motion.header}
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.4 }}
		>
			<Nav>
				<Logo>
					<Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
						<motion.h2
							whileHover={{ scale: 1.05 }}
							transition={{ duration: 0.2 }}
						>
							Met Maestro
						</motion.h2>
					</Link>
				</Logo>
				<NavList>
					<NavItem>
						<NavLink href="#features">Features</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="#modes">Modes</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="#testimonials">Reviews</NavLink>
					</NavItem>
					<NavItem>
						<NavLink as={Link} to="/feedback">
							Feedback
						</NavLink>
					</NavItem>
					<NavItem>
						<CTAButton
							as={motion.a}
							href="https://apps.apple.com/us/app/met-maestro/id6748158233"
							target="_blank"
							rel="noopener noreferrer"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							Download
						</CTAButton>
					</NavItem>
				</NavList>
			</Nav>
		</HeaderContainer>
	);
};

export default Header;
