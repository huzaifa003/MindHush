import React from "react";
import {
	Box,
	Grid,
	Heading,
	Text,
	VStack,
	Image,
	Highlight,
} from "@chakra-ui/react";

const FeatureCard = ({ icon, title, description }) => {
	return (
		<VStack gap={6} mb={8} _last={{ mb: 0 }} alignItems='flex-start'>
			<Image src={icon} alt={title} w={{ base: 12, md: 16, lg: 20 }} />
			<VStack alignItems='flex-start' maxW='sm'>
				<Heading size={{ base: "md", md: "lg", lg: "xl" }} color='white' mb={2}>
					{title}
				</Heading>
				<Text color='gray.400' fontSize={{ base: "sm", md: "md", lg: "lg" }}>
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
			title: "Mental Health Support",
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
				"Help you find balance and strategies to manage digital habits for a healthier, more mindful lifestyle",
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
		<Box bg='#09090C' id='our-mission' position='relative' zIndex={3}>
			<Grid
				templateColumns={{ base: "1fr", md: "1fr 1fr" }}
				templateRows={{ base: "auto auto", md: "1fr" }}
				minH={{ base: "100vh", md: "auto" }}
				justifyItems='center'
				gap={8}>
				{/* Left Side - Static Content */}
				<VStack
					p={{ base: 4, md: 12 }}
					position={{ base: "static", md: "sticky" }}
					top={0}
					align='flex-start'
					w='full'
					h='auto'>
					<Image
						src='/stars_bg.svg'
						alt='Background Stars'
						position='absolute'
						top={-10}
						left={0}
						zIndex={0}
						w={{ base: "100%", md: "50%" }}
						opacity={0.4}
					/>
					<Box>
						<Heading
							color='white'
							size={{ base: "xl", md: "2xl", lg: "4xl" }}
							mb={4}>
							Our Mission
						</Heading>
						<Text
							color='gray.400'
							fontSize={{ base: "sm", md: "md", lg: "lg" }}
							lineHeight='tall'>
							We believe that mental well-being is a right, not a privilege. Our
							mission is to provide accessible, compassionate, and effective
							mental health support to anyone who needs it. In a world where
							stress, anxiety, and depression have become part of everyday life,
							our AI-powered chatbot is here to guide you towards inner peace
							and resilience. Whether you're looking for a listening ear,
							practical coping strategies, or just a safe space to express your
							feelings, we're here for you—24/7.
						</Text>
						<Text
							fontSize='xx-small'
							color='gray.500'
							fontStyle='italic'
							mt={2}>
							<Highlight
								query='MindHush.ai is not a licensed professional. For urgent or serious concerns, please seek assistance from a qualified expert.'
								styles={{
									px: "0.5",
									bg: "#9e3c90",
									color: "white",
									textWrap: "wrap",
								}}>
								MindHush.ai is not a licensed professional. For urgent or
								serious concerns, please seek assistance from a qualified
								expert.
							</Highlight>
						</Text>
					</Box>
				</VStack>

				{/* Right Side - Scrollable Content */}
				<Box
					position='relative'
					w='full'
					h={{ base: "80vh", md: "auto" }}
					p={{ base: 4, md: 12 }}
					overflow='hidden'>
					<VStack
						align='stretch'
						gap={8}
						position='absolute'
						w='full'
						animation={`scrollAnimation 60s linear infinite`}>
						{features.concat(features).map((feature, index) => (
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
