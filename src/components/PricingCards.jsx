import React from "react";
import { Box, Button, HStack, Text, VStack, Flex } from "@chakra-ui/react";

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

export default function PricingCards({ pricingPlans }) {
	return (
		<Flex gap={8} wrap='wrap' justify='center' maxWidth='100%' p={4}>
			{pricingPlans.map((plan, index) => (
				<PriceCard key={index} {...plan} />
			))}
		</Flex>
	);
}
