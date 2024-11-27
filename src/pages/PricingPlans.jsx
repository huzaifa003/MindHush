import React from "react";
import {
	Box,
	Button,
	Container,
	Flex,
	Heading,
	Text,
	Stack,
	VStack,
	HStack,
	Separator,
	Image,
	SimpleGrid,
} from "@chakra-ui/react";
import { LuCheck } from "react-icons/lu";
import AuthButtons from "@/components/AuthButtons";

const PriceCard = ({ title, price, description, isPopular, originalPrice }) => {
	return (
		<Box
			p={6}
			maxW={{ base: "full", sm: "sm" }}
			borderRadius='2xl'
			bg={isPopular ? "#7A50764D" : "secondary.40"}
			border={isPopular ? "1px solid #602376" : "none"}
			position='relative'
			width={{ base: "100%", sm: "300px" }}>
			{isPopular && (
				<Text
					position='absolute'
					top='-15px'
					left='50%'
					transform='translateX(-50%)'
					color='white'
					fontSize={{ base: "xs", sm: "sm" }}
					fontWeight='bold'
					bg='#5A3755'
					px={3}
					py={1}
					borderRadius='full'>
					POPULAR
				</Text>
			)}

			<VStack align='stretch'>
				<Text
					fontSize={{ base: "lg", md: "xl" }}
					fontWeight='semibold'
					color='white'>
					{title}
				</Text>
				<HStack alignItems='center' spaceX={3}>
					<Text
						fontSize={{ base: "4xl", md: "5xl" }}
						fontWeight='bold'
						color='white'>
						${price}
					</Text>
					{originalPrice && (
						<Text
							fontSize={{ base: "lg", md: "2xl" }}
							color='gray.400'
							textDecoration='line-through'>
							${originalPrice}
						</Text>
					)}
				</HStack>
				<Text fontSize={{ base: "sm", md: "md" }} color='gray.400'>
					per month, paid {price === "0.00" ? "nothing" : "monthly"}
				</Text>
				<Button
					bg={isPopular ? "#61395BD1" : "secondary.30"}
					color='white'
					size='lg'
					rounded='full'
					my={2}>
					Subscribe
				</Button>
				<Text fontSize={{ base: "xs", md: "sm" }} color='gray.400'>
					{description}
				</Text>
			</VStack>
		</Box>
	);
};

const Feature = ({ text, description }) => {
	return (
		<HStack spacing={4} align='start'>
			<LuCheck color='#008080' size='25px' style={{ marginTop: "5px" }} />
			<VStack align='start' spacing={1}>
				<Text
					fontSize={{ base: "md", lg: "lg" }}
					color='white'
					fontWeight='bold'>
					{text}
				</Text>
				<Text fontSize={{ base: "xs", sm: "sm" }} color='gray.400'>
					{description}
				</Text>
			</VStack>
		</HStack>
	);
};

const PricingPlans = () => {
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
						<PriceCard
							title='Freemium'
							price='0.00'
							description='Get a taste of free membership and enjoy tokens limited to 1000 per day'
						/>
						<PriceCard
							title='Preemium'
							price='999'
							originalPrice='1000'
							description='Enjoy access to pro member features and unlimited chats'
							isPopular={true}
						/>
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
							<Feature
								text='Multiple Chats'
								description='Access to unlimited chats'
							/>
							<Feature
								text='Unlimited Chat Windows'
								description='Rest assured, you will get unlimited chat windows'
							/>
							<Feature
								text='No Cool Down Period'
								description='There will be no cool down period'
							/>
							<Feature
								text='24/7 Priority Support'
								description='Always here for you, day or night, to ensure your peace of mind'
							/>
							<Feature
								text='Unlimited Token Usage'
								description='Unlock the power unlimited chats with unlimited tokens'
							/>
						</SimpleGrid>
					</Box>
				</VStack>
			</Container>
		</Box>
	);
};

export default PricingPlans;
