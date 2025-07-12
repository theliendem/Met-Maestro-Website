import React from "react";
import { motion } from "framer-motion";
import {
	CTAContainer,
	CTAContent,
	CTATitle,
	CTADescription,
	CTAButtons,
	PrimaryButton,
	SecondaryButton,
} from "./CTA.styles";

const CTA = () => {
	return (
		<CTAContainer id="download">
			<CTAContent>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true, amount: 0.5 }}
				>
					<CTATitle>Ready to Master Your Music?</CTATitle>
					<CTADescription>
						Join musicians who are elevating their practice with Met Maestro.
						Download now and start your journey to musical excellence.
					</CTADescription>

					<CTAButtons>
						<PrimaryButton
							as={motion.a}
							href="https://apps.apple.com/us/app/met-maestro/id6748158233"
							target="_blank"
							rel="noopener noreferrer"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							transition={{ duration: 0.2 }}
						>
							Download Free
						</PrimaryButton>
						<SecondaryButton
							as={motion.a}
							href="#features"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							transition={{ duration: 0.2 }}
						>
							View Features
						</SecondaryButton>
					</CTAButtons>
				</motion.div>
			</CTAContent>
		</CTAContainer>
	);
};

export default CTA;
