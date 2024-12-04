import React from "react";
import { Heading, Image, Stack, Text } from "@chakra-ui/react";

const StepCard = ({ title, description, image }) => {
	return (
		<Stack
			borderRadius='xl'
			_hover={{ transform: "scale(1.05)" }}
			transition='transform 0.3s'>
			<Image
				src={image}
				alt={title}
				borderRadius='xl'
				objectFit='cover'
				h='300px'
			/>
			<Heading as='h3' size='2xl'>
				{title}
			</Heading>
			<Text color='gray.400' fontSize='sm'>
				{description}
			</Text>
		</Stack>
	);
};

export default StepCard;
