import React from "react";
import { Box, Heading, Image, Text, Stack } from "@chakra-ui/react";

const FeatureCard = ({ icon, title, description }) => {
	return (
		<Box
			p={{ base: 4, md: 6 }}
			bg='#09090C'
			borderRadius='lg'
			boxShadow='0 4px 6px #602376'
			_hover={{
				transform: "scale(1.05)",
			}}
			transition='all 0.3s'>
			<Stack spacing={4} alignItems='flex-start'>
				<Image
					src={icon}
					alt={title}
					w={{ base: 6, md: 8 }}
					h={{ base: 6, md: 8 }}
					mb={4}
				/>
				<Heading
					size={{ base: "sm", md: "md" }}
					color='white'
					fontWeight='semibold'>
					{title}
				</Heading>
				<Text color='gray.400' fontSize={{ base: "xs", md: "sm" }}>
					{description}
				</Text>
			</Stack>
		</Box>
	);
};

export default FeatureCard;
