import React from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
	CTAContainer,
	CTAContent,
	CTATitle,
	CTADescription,
	CTAButtons,
	StoreBadge
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
						<StoreBadge
							as={motion.a}
							href="https://apps.apple.com/us/app/met-maestro/id6748158233"
							target="_blank"
							rel="noopener noreferrer"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							transition={{ duration: 0.2 }}
						>
							                     <img 
                       src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83"
                       alt="Download on the App Store"
                       style={{ height: '68px' }}
                     />
						</StoreBadge>
						<StoreBadge
							as={motion.a}
							onClick={(e) => {
								e.preventDefault();
								toast("Android version coming very soon!", {
									position: "top-center",
									autoClose: 3000,
									hideProgressBar: false,
									closeOnClick: true,
									pauseOnHover: true,
									draggable: true,
									progress: undefined,
									theme: "dark",
									style: {
										background: '#1E1E1E',
										color: '#FFFFFF',
										fontSize: '1rem',
										fontWeight: '500',
										borderLeft: '6px solid #BB86FC'
									},
									progressStyle: {
										background: '#BB86FC'
									}
								});
							}}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							transition={{ duration: 0.2 }}
						>
							                     <img 
                       src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                       alt="Get it on Google Play"
                       style={{ height: '103px' }}
                     />
						</StoreBadge>
					</CTAButtons>
				</motion.div>
			</CTAContent>
			<ToastContainer />
		</CTAContainer>
	);
};

export default CTA;
