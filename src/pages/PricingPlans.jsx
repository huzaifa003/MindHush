import React from "react";
import {
	Box,
	Container,
	Flex,
	Heading,
	Text,
	VStack,
	HStack,
	Separator,
	Image,
	SimpleGrid,
} from "@chakra-ui/react";
import AuthButtons from "@/components/AuthButtons";
import PriceCard from "@/components/ui/PriceCard";
import PricingFeature from "@/components/PricingFeature";

const PricingPlans = () => {
	const pricingPlans = [
		{
			title: "Freemium",
			price: "0.00",
			description:
				"Get a taste of free membership and enjoy tokens limited to 1000 per day",
		},
		{
			title: "Preemium",
			price: "999",
			originalPrice: "1000",
			description: "Enjoy access to pro member features and unlimited chats",
			isPopular: true,
		},
	];

	const features = [
		{
			text: "Multiple Chats",
			description: "Access to unlimited chats",
		},
		{
			text: "Unlimited Chat Windows",
			description: "Rest assured, you will get unlimited chat windows",
		},
		{
			text: "No Cool Down Period",
			description: "There will be no cool down period",
		},
		{
			text: "24/7 Priority Support",
			description:
				"Always here for you, day or night, to ensure your peace of mind",
		},
		{
			text: "Unlimited Token Usage",
			description: "Unlock the power unlimited chats with unlimited tokens",
		},
	];

	return (
		<Box height='100vh' overflowY='auto' bg='gray.900'>
			<HStack justifyContent='space-between' px={8} py={2}>
				<Image src='/logo.png' alt='Company Logo' w={100} />
				<AuthButtons />
			</HStack>
			<Container maxW='breakpoint-xl' pt={8}>
				<VStack spaceY={8} mb={16}>
					<VStack>
						<Heading
							fontSize={{ base: "3xl", sm: "4xl", lg: "5xl" }}
							fontWeight='bold'
							color='white'
							textAlign='center'
							mb={3}>
							Pricing Plans
						</Heading>
						<Text
							fontSize={{ base: "sm", md: "md" }}
							color='gray.400'
							textAlign='center'
							maxW={450}>
							Want to get more out of Mind Hush? Subscribe to one of our
							professional plans.
						</Text>
					</VStack>

					<Flex gap={8} wrap='wrap' justify='center' maxWidth='100%'>
						{pricingPlans.map((plan, index) => (
							<PriceCard key={index} {...plan} />
						))}
					</Flex>

					<Box width='100%' mt={16}>
						<HStack mb={8}>
							<Text
								color='white'
								fontSize={{ base: "md", lg: "lg" }}
								fontWeight='bold'
								textWrap='nowrap'
								mr={6}>
								WHAT'S INCLUDED
							</Text>
							<Separator />
						</HStack>
						<SimpleGrid
							columns={{ base: 1, sm: 2, lg: 3 }}
							width='100%'
							gap={8}>
							{features.map((feature, index) => (
								<PricingFeature key={index} {...feature} />
							))}
						</SimpleGrid>
					</Box>
				</VStack>
			</Container>
		</Box>
	);
};

export default PricingPlans;
