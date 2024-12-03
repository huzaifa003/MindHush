import React from "react";
import { Box, Grid, Heading, Text, VStack, Image } from "@chakra-ui/react";

const FeatureCard = ({ icon, title, description }) => {
	return (
		<VStack gap={6} mb={8} _last={{ mb: 0 }} alignItems='flex-start'>
			<Image src={icon} alt={title} w={{ base: 16, md: 20 }} />
			<VStack alignItems='flex-start' maxW='sm'>
				<Heading size={{ base: "lg", md: "xl" }} color='white' mb={2}>
					{title}
				</Heading>
				<Text color='gray.400' fontSize={{ base: "sm", md: "md" }}>
					{description}
				</Text>
			</VStack>
		</VStack>
	);
};

const AboutUsSection = () => {
	const features = [
		{
			icon: "/icons/health_disorder_icon.svg",
			title: "Mental Health Disorders",
			description:
				"Gain personalized guidance and resources to help navigate stress, anxiety, depression, and other mental health challenges with care and understanding",
		},
		{
			icon: "/icons/transition_issues_icon.svg",
			title: "Identity Transition Issues",
			description:
				"Navigate life's changes and challenges with support tailored to self-discovery, growth, and embracing your true self",
		},
		{
			icon: "/icons/book_icon.svg",
			title: "Technology and Screen Time",
			description:
				"Help you Find balance and strategies to manage digital habits for a healthier, more mindful lifestyle",
		},
		{
			icon: "/icons/people_icon.svg",
			title: "Parenting and Relationship Issues",
			description:
				"Receive guidance to nurture stronger bonds, improve communication, and navigate family or relationship challenges with care",
		},
		{
			icon: "/icons/coins_icon.svg",
			title: "Workplace and Financial Issues",
			description:
				"Get support to manage career challenges, workplace stress, and financial pressures with confidence and clarity",
		},
		{
			icon: "/icons/hearthand_icon.svg",
			title: "Dealing with Grief, Trauma and Loss",
			description:
				"Find compassionate support to heal, cope, and rebuild after life's most challenging moments",
		},
	];

	return (
		<Box
			bg='#09090C'
			h={{ base: "auto", md: "100vh" }}
			overflow='hidden'
			id='about-us'
			position='relative'
			zIndex={3}>
			<Grid
				templateColumns={{ base: "1fr", md: "1fr 1fr" }}
				h='full'
				justifyItems='center'
				p={{ base: 4, md: 12 }}>
				{/* Left Side - Fixed Content */}
				<VStack p={4}>
					<Image
						src='/stars_bg.svg'
						alt='Background Stars'
						position='absolute'
						top={0}
						left={0}
						zIndex={0}
						w={{ base: "100%", md: "50%" }}
						opacity={0.4}
					/>
					<Box>
						<Heading color='white' size={{ base: "2xl", md: "4xl" }} mb={4}>
							About Us?
						</Heading>
						<Text
							color='gray.400'
							fontSize={{ base: "md", lg: "lg" }}
							lineHeight='tall'>
							We believe that mental well-being is a right, not a privilege. Our
							mission is to provide accessible, compassionate, and effective
							mental health support to anyone who needs it. In a world where
							stress, anxiety, and depression have become part of everyday life,
							our AI-powered chatbot is here to guide you towards inner peace
							and resilience. Whether you're looking for a listening ear,
							practical coping strategies, or just a safe space to express your
							feelings, we're here for you—24/7
						</Text>
					</Box>
				</VStack>

				{/* Right Side - Scrollable Content */}
				<Box
					overflowY='auto'
					w='full'
					p={{ base: 4, md: 12 }}
					css={{
						"&::-webkit-scrollbar": {
							width: "4px",
						},
						"&::-webkit-scrollbar-track": {
							background: "transparent",
						},
						"&::-webkit-scrollbar-thumb": {
							background: "transparent",
						},
					}}>
					<VStack align='stretch'>
						{features.map((feature, index) => (
							<FeatureCard
								key={index}
								icon={feature.icon}
								title={feature.title}
								description={feature.description}
							/>
						))}
					</VStack>
				</Box>
			</Grid>
		</Box>
	);
};

export default AboutUsSection;
